import { ArrowRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NHS_PHARMACY_FIRST_SERVICES } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import SectionHeader from "./section-header";

export function NHSPharmacyFirstSection() {
  return (
    <section className="w-full relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
      <WidthConstraint className="observer-target">
        <div className="container relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <SectionHeader
              heading={
                <div className="flex items-center gap-1">
                  <div className="bg-[#003087] rounded-4xl px-2 py-0.5 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      NHS
                    </span>
                  </div>
                  <span className="text-white font-bold">
                    Pharmacy First Services
                  </span>
                </div>
              }
            />

            <h2 className="text-section-header font-bold tracking-tight text-foreground mb-4 leading-tight">
              Can't get to the GP?{" "}
              <span className="text-primary">We can help</span>
            </h2>

            <div className="flex w-24 mx-auto mb-6">
              <hr className="w-1/2 bg-chart-3 h-1 border-0" />
              <hr className="w-1/2 bg-chart-2 h-1 border-0" />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Access free NHS treatment for common conditions without waiting
              for a GP appointment. Our qualified pharmacists are here to help.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
            {NHS_PHARMACY_FIRST_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between relative group bg-card rounded-2xl border-2 border-border p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  {/* Free badge */}
                  <div className="absolute -top-4 right-0 bg-linear-to-r from-chart-3 to-chart-3/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg ring-4 ring-background">
                    FREE
                  </div>

                  {/* Optional secondary badge */}
                  {service.badge && (
                    <div className="absolute -top-4 -left-0.5 bg-linear-to-r from-chart-2 to-chart-2/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg ring-4 ring-background">
                      {service.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`${service.bgColor} size-14 rounded-xl flex items-center justify-center my-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <h6 className="text-[20px] font-bold my-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h6>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed min-h-12">
                    {service.description}
                  </p>

                  {/* Book Now Button */}
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl group/btn"
                  >
                    <Link
                      href="/book-consultation"
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <h3 className="text-card-title font-bold text-foreground mb-3">
              Need help with a different condition?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We treat many more NHS Pharmacy First conditions. View our
              complete list of services or speak with our team for guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/nhs-services" className="flex items-center gap-2">
                  View All Conditions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 rounded-full transition-all duration-300 group"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Speak to a Pharmacist
                  <Users className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-8 text-center italic">
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">
                NHS Pharmacy First
              </span>{" "}
              is a free service funded by the NHS. No prescription charges apply
              for eligible conditions.
            </p>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
