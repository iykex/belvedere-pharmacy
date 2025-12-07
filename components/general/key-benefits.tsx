import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "@/components/ui/button";
import { KEY_BENEFITS_TEXTS } from "@/lib/constants";
import { ArrowRight, Check, HandHelping, Sparkles, Wand } from "lucide-react";
import Link from "next/link";

export default function KeyBenefits() {
  return (
    <section className="bg-white">
      <WidthConstraint>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HandHelping className="size-5 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                What We Offer
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why Patients <span className="text-primary">Love Us</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Experience healthcare services designed with you in mind. We go
              beyond traditional pharmacy care.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl shadow-lg"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-3 sm:px-4 py-2">
          {KEY_BENEFITS_TEXTS.map((item, index) => {
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-lg"
              >
                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 flex items-center justify-center size-12 bg-primary text-white rounded-xl font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 items-start text-gray-600"
                    >
                      <div className="shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600 stroke-3" />
                      </div>
                      <p className="leading-relaxed text-sm">{bullet}</p>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href="https://app.belvederepharmacy.net/#/auth/signin"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Get Started
                  <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
}
