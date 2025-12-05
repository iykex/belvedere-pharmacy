import { BELVEDERE_VALUES } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";

export default function OurValuesSection() {
  return (
    <section className="py-20 bg-white">
      <WidthConstraint className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Our <span className="text-primary">Guiding</span> Principles
          </h2>
          <p className="text-gray-600 text-lg">
            These core principles guide everything we do at Belvedere Pharmacy
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BELVEDERE_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${value.color} p-4`}
                >
                  <Icon className={`size-6 ${value.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
}
