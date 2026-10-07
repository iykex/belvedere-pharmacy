"use client";

import { newsletterSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z4 from "zod/v4";
import { toast } from "sonner";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase-client";
import { getTenantSlug } from "@/lib/config/tenant";

export default function useNewsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { handleSubmit, control, formState, reset } = useForm<
    z4.infer<typeof newsletterSchema>
  >(({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  }));

  async function onSubmit(data: z4.infer<typeof newsletterSchema>) {
    try {
      const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
      const unsubscribeToken =
        typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : Math.random().toString(36).substring(2, 15) + Date.now().toString(36);

      await addDoc(collection(db, "newsletters"), {
        tenantId: getTenantSlug(),
        email: data.email.toLowerCase().trim(),
        status: "active",
        durationMonths: 12, // Default 12-month consent duration under UK GDPR / PECR
        subscribedAt: serverTimestamp(),
        expiresAt: Timestamp.fromDate(oneYearFromNow),
        unsubscribeToken,
        source: "website",
      });
      setIsSubscribed(true);
      toast.success("Successfully subscribed to newsletter");
      reset();
    } catch (error) {
      const code =
        error && typeof error === "object" && "code" in error
          ? String((error as { code: unknown }).code)
          : "";
      if (code === "permission-denied") {
        toast.error("Unable to subscribe. Please check your email format.");
      } else if (code === "unavailable") {
        toast.error("Service temporarily unavailable. Please try again later.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return {
    isSubscribed,
    setIsSubscribed,
    handleSubmit,
    control,
    formState,
    onSubmit,
  };
}
