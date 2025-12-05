import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "@/components/ui/button";
import { KEY_BENEFITS_TEXTS } from "@/lib/constants";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export default function KeyBenefits() {
  return (
    <section className="py-20 bg-white">
      <WidthConstraint className="observer-target">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="size-5 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
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
        <div className="grid gap-6 sm:grid-cols-2">
          {KEY_BENEFITS_TEXTS.map((item, index) => {
            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
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
                        <Check className="w-3 h-3 text-green-600 stroke-[3]" />
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

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "5000+", label: "Happy Patients" },
            { value: "5+", label: "Years Experience" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "NHS", label: "Accredited" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
}
