import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OUR_PROCESS_STEPS } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import SectionHeader from "./section-divider-head";

export function OurProcessSection() {
  return (
    <section className="bg-white observer-target">
      <WidthConstraint>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionHeader heading="Our Process" />
            <h2 className="text-section-header font-bold tracking-tight text-gray-900 mt-4 mb-4">
              How We <span className="text-primary">Help You</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We offer a comprehensive range of healthcare services to meet your
              needs
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 px-5 py-2">
            {OUR_PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group max-w-sm">
                  <div className="flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                    {/* Number badge */}
                    <div className="absolute -top-3 -left-3 bg-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`mb-4 ${step.bgColor} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 grow leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative line */}
                    <div className="h-0.5 w-10 bg-primary/30 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
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
