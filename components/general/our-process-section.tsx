import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OUR_PROCESS_STEPS } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import SectionHeader from "./section-divider-head";

export function OurProcessSection() {
  return (
    <section className="relative w-full">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
      <WidthConstraint className="observer-target bg-linear-to-b from-background via-accent/20 to-background relative overflow-hidden">
        <div className="relative z-10 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <SectionHeader heading="Our Process" />
            <h2 className="text-section-header font-bold tracking-tight text-foreground mb-4">
              How We <span className="text-primary">Help You</span>
            </h2>
            {/* <div className="flex w-24 mx-auto mb-6">
              <hr className="w-1/2 bg-chart-3 h-1 border-0" />
              <hr className="w-1/2 bg-chart-2 h-1 border-0" />
            </div> */}
            <p className="text-base text-muted-foreground leading-relaxed">
              We offer a comprehensive range of healthcare services to meet your
              needs
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 mx-[5%]">
            {OUR_PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="flex flex-col h-full bg-card rounded-2xl border-2 border-border p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 backdrop-blur-sm">
                    {/* Number badge */}
                    <div className="absolute -top-3 -left-3 bg-linear-to-br from-primary to-primary/80 text-primary-foreground text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg ring-4 ring-background">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`mb-4 ${step.bgColor} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-card-title font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 grow leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative line */}
                    <div className="h-1 w-12 bg-linear-to-r from-primary to-chart-2 rounded-full mt-auto group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
