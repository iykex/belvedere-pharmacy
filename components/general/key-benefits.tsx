import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "@/components/ui/button";
import { KEY_BENEFITS_IMGS, KEY_BENEFITS_TEXTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronsRight, Check } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./section-divider-head";

export default function KeyBenefits() {
  return (
    <section className="bg-linear-to-b from-background via-accent/10 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>

      <WidthConstraint className="z-10 observer-target">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader heading="Why Choose Us" />
          <h2 className="text-section-header font-bold text-foreground mb-4">
            Key <span className="text-primary">Benefits</span>
          </h2>
          <div className="flex w-24 mx-auto mb-6">
            <hr className="w-1/2 bg-chart-3 h-1 border-0 rounded-full" />
            <hr className="w-1/2 bg-chart-2 h-1 border-0 rounded-full" />
          </div>
          <p className="text-muted-foreground text-base">
            Experience healthcare services designed with you in mind
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full place-items-center">
          {KEY_BENEFITS_TEXTS.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 group ${item.order} p-6 md:p-8`}
              >
                {/* Icon or Number Badge */}
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg md:text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Title */}
                <p className="text-lg md:text-[20px] font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                  {item.title}
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {item.bullets.map((bullet) => {
                    return (
                      <li
                        key={bullet}
                        className="flex gap-3 items-center text-foreground/90"
                      >
                        <div className="shrink-0 w-6 h-6 bg-chart-3/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-chart-3 stroke-3" />
                        </div>
                        <p className="leading-relaxed">{bullet}</p>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <Button className="rounded-full px-6 py-3 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn w-full sm:w-auto">
                  Get Prescription
                  <ChevronsRight className="ml-2 w-5 h-5 stroke-3 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            );
          })}

          {/* Images */}
          {KEY_BENEFITS_IMGS.map((item) => {
            return (
              <div
                key={item.url}
                className={`overflow-hidden ${item.order} flex items-center justify-center p-4`}
              >
                <Image
                  src={item.url}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-[420px] object-contain pt-6 transition-transform duration-500 hover:scale-95"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <h3 className="text-card-title font-medium text-foreground mb-4">
            Ready to experience better healthcare?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their health
            and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started Today
              <ChevronsRight className="ml-2 size-5 stroke-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
