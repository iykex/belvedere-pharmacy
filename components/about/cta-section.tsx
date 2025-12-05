import { CheckCircle, Mail, PhoneCall } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import {
  CTA_SECTION_BUTTONS,
  CTA_SECTION_CONTACT_ITEMS,
  CTA_SECTION_FEATURES_LIST,
} from "@/lib/constants";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function CTASection() {
  return (
    <section>
      <WidthConstraint className="bg-primary relative p-5 rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_2px),linear-gradient(to_bottom,#ffffff12_1.5px,transparent_1px)] bg-size-[40px_40px]"></div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16  place-items-center">
          {/* Left Column - Content */}
          <div className="text-white font-medium space-y-5">
            <Badge className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <CheckCircle className="size-5!" />
              Ready to Serve You
            </Badge>

            <h2 className="text-card-title font-bold tracking-tight">
              Experience the Belvedere Difference
            </h2>

            <p className="text-[20px] max-w-lg opacity-80">
              Join thousands of satisfied patients who trust us with their
              healthcare needs. From prescriptions to personalized
              consultations, we're here to support your health journey.
            </p>

            {/* Features List */}
            <div className="mb-10 space-y-4">
              {CTA_SECTION_FEATURES_LIST.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="opacity-90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {CTA_SECTION_BUTTONS.map((item) => {
                return (
                  <Button
                    key={item.label}
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                    asChild
                  >
                    <Link href="/contact">
                      <PhoneCall className="mr-2 h-5 w-5" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl max-w-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground">
                  We're here to help with all your healthcare needs
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-6">
                {CTA_SECTION_CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.description}
                      className={
                        item.card
                          ? "rounded-xl bg-primary/5 p-4 flex items-center gap-4"
                          : "flex items-center gap-3"
                      }
                    >
                      <div
                        className={`flex ${item.iconSize} items-center justify-center rounded-lg ${item.iconBg}`}
                      >
                        <Icon className={item.iconClass} />
                      </div>

                      <div>
                        <p
                          className={
                            item.card
                              ? "text-sm font-medium text-muted-foreground"
                              : "font-medium"
                          }
                        >
                          {item.title}
                        </p>
                        <p
                          className={
                            item.card
                              ? "text-xl font-bold text-primary"
                              : "text-sm text-muted-foreground"
                          }
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Form/Button */}
              <div className="pt-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Send us a Message
                  </Link>
                </Button>
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  We respond within 1 hour during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
