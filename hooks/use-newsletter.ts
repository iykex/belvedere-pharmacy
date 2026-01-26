"use client";
import { newsletterSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z4 from "zod/v4";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase-client";
import { toast } from "sonner";
import { FirebaseError } from "firebase/app";

export default function useNewsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { handleSubmit, control, formState, reset } = useForm<
    z4.infer<typeof newsletterSchema>
  >({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: z4.infer<typeof newsletterSchema>) {
    try {
      await addDoc(
        collection(db, "tenants", "belvedere", "newsletter_subscribers"),
        {
          email: data.email.toLowerCase().trim(),
          date: serverTimestamp(),
        },
      );
      toast.success("Successfully subscribed to newsletter");
      reset();
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "permission-denied") {
          toast.error("Unable to subscribe. Please check your email format.");
        } else if (error.code === "unavailable") {
          toast.error(
            "Service temporarily unavailable. Please try again later.",
          );
        } else {
          toast.error("Subscription failed. Please try again.");
        }
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
