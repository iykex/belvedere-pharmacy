"use client";
import { newsletterSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z4 from "zod/v4";

export default function useNewsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { handleSubmit, control, formState } = useForm<
    z4.infer<typeof newsletterSchema>
  >({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  function onSubmit(data: z4.infer<typeof newsletterSchema>) {}
  return {
    isSubscribed,
    setIsSubscribed,
    handleSubmit,
    control,
    formState,
    onSubmit,
  };
}
