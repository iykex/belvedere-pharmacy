import { WHY_CHOOSE_US_SERVICES } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import SectionHeader from "../general/section-divider-head";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <section className="relative space-y-15">
      <WidthConstraint className="relative space-y-15">
        <SectionHeader heading="Why choose us" />
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-section-header font-bold">
            Why Choose Belvedere
          </h2>
          <p className="text-base text-muted-foreground">
            We combine expertise, convenience, and personalized care to deliver
            exceptional healthcare experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
          {WHY_CHOOSE_US_SERVICES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-md transition-all duration-500 ease-in-out border border-input/20"
              >
                <div
                  className={cn(
                    "absolute top-[-75px] right-[-75px] size-32 rounded-full z-0 group-hover:scale-[10] transition-all duration-500 ease-linear",
                    feature.color === "primary"
                      ? "bg-primary"
                      : feature.color === "chart-3"
                      ? "bg-chart-3"
                      : feature.color === "chart-2"
                      ? "bg-chart-2"
                      : "bg-primary"
                  )}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className="size-16 bg-card dark:bg-[#055482]  rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        className={cn(
                          "size-8 transition-all duration-300 ease-linear",
                          feature.color === "primary"
                            ? "text-primary"
                            : feature.color === "chart-3"
                            ? "text-chart-3"
                            : feature.color === "chart-2"
                            ? "text-chart-2"
                            : "text-primary"
                        )}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-card-title font-bold text-foreground group-hover:text-white transition-all duration-300 ease-linear min-h-[60px]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
}
