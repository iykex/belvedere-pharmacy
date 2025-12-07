"use client";
import { CheckCircle2, Send, Mail } from "lucide-react";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Controller } from "react-hook-form";
import useNewsletter from "@/hooks/use-newsletter";
import { Button } from "../ui/button";
import WidthConstraint from "../shared/width-constraint";
import { NEWSLETTER_FEATURES } from "@/lib/constants";
import { Spinner } from "../ui/spinner";

export default function NewsletterSection() {
  const { isSubscribed, control, formState, handleSubmit, onSubmit } =
    useNewsletter();

  return (
    <section>
      <WidthConstraint className="pb-2">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Features */}
            <div className="bg-[#002f4b] p-8 lg:p-12 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Newsletter
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Stay Healthy & Informed
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Join our wellness community and never miss important health
                  updates
                </p>
              </div>

              <div className="space-y-4">
                {NEWSLETTER_FEATURES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 bg-white/5 rounded-xl p-4"
                    >
                      <div className="shrink-0 p-2 bg-primary/20 rounded-lg">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Form */}
            {isSubscribed ? (
              <div className="flex items-center justify-center p-8 lg:p-12">
                <div className="text-center max-w-sm">
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Successfully Subscribed!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for joining our wellness community. Check your
                    inbox for a confirmation email.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-600 text-center mb-8">
                    Get the latest health tips and exclusive offers delivered
                    straight to your inbox.
                  </p>

                  <form id="email-form" onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup className="space-y-4">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                          <Field
                            data-invalid={fieldState.invalid}
                            className="gap-2"
                          >
                            <div className="flex">
                              <Input
                                {...field}
                                id="email"
                                type="email"
                                aria-invalid={fieldState.invalid}
                                autoComplete="off"
                                placeholder="your.email@example.com"
                                className="flex-1 px-4 py-3 rounded-l-xl border border-r-0 rounded-r-none border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                onKeyDown={(e) =>
                                  e.key === "Enter" && handleSubmit(onSubmit)
                                }
                              />
                              <Button
                                type="submit"
                                form="email-form"
                                disabled={
                                  formState.isLoading || formState.isSubmitting
                                }
                                className="px-6 rounded-r-xl rounded-l-none bg-primary hover:bg-primary/90 font-semibold"
                              >
                                {formState.isLoading ? (
                                  <>
                                    <Spinner />
                                  </>
                                ) : (
                                  <>
                                    Subscribe <Send className="size-4 ml-2" />
                                  </>
                                )}
                              </Button>
                            </div>
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </FieldGroup>
                  </form>

                  {/* Trust Badges */}
                  <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    {["No spam", "Unsubscribe anytime", "Weekly updates"].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    By subscribing, you agree to our Privacy Policy.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
