"use client";
import { CheckCircle2, Send } from "lucide-react";
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
    <WidthConstraint className="w-full md:rounded-2xl shadow-xl md:p-0 md:bg-card md:border border-border overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left Column - Features with accent background */}
        <div className="px-8 py-12 md:px-12 bg-accent rounded-4xl md:rounded-none">
          <div className="mb-8">
            <h2 className="text-section-header font-bold mb-3 text-foreground">
              Stay Healthy & Informed
            </h2>
            <p className="text-base text-foreground/80">
              Join our wellness community and never miss important health
              updates
            </p>
          </div>

          <div className="space-y-6">
            {NEWSLETTER_FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="shrink-0 size-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="size-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[18px] mb-0.5 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Form with card background */}
        {isSubscribed ? (
          <div className="text-center py-12 px-8 max-w-md mx-auto bg-card">
            <div className="inline-block p-4 bg-accent rounded-full mb-4">
              <CheckCircle2 className="w-16 h-16 text-chart-3" />
            </div>
            <h3 className="text-card-title font-semibold mb-2 text-foreground">
              Successfully Subscribed!
            </h3>
            <p className="text-muted-foreground">
              Thank you for joining our wellness community. Check your inbox for
              a confirmation email.
            </p>
          </div>
        ) : (
          <div className="py-12 px-8 bg-card">
            <h3 className="text-section-header font-bold text-center text-foreground mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6 text-center max-w-md mx-auto text-muted-foreground">
              Get the latest health tips and exclusive offers delivered straight
              to your inbox.
            </p>

            <form id="email-form" onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup className="gap-2 max-w-md mx-auto">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="gap-1.5"
                    >
                      <div className="flex">
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          aria-invalid={fieldState.invalid}
                          autoComplete="off"
                          placeholder="your.email@example.com"
                          className="px-4 max-w-xs rounded-4xl outline-none transition-all rounded-r-none border-r-0 bg-background border-input focus:ring-2 focus:ring-ring"
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
                          className="font-semibold rounded-4xl rounded-l-none bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          {formState.isLoading ? (
                            <>
                              Subscribing <Spinner />
                            </>
                          ) : (
                            <>
                              Subscribe <Send />
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
                <p className="text-xs px-2 text-muted-foreground leading-6 text-center italic">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our pharmacy.
                </p>
              </FieldGroup>
            </form>
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap md:justify-center items-center gap-6 text-sm text-muted-foreground">
              {[
                "No spam, ever",
                "Unsubscribe anytime",
                "Weekly health updates",
              ].map((item) => {
                return (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-3" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </WidthConstraint>
  );
}
