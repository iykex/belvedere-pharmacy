import { PFP_BENEFITS } from "@/lib/constants";
import SectionHeader from "../general/section-divider-head";
import WidthConstraint from "../shared/width-constraint";

export const AboutSection = () => {
  return (
    <section className="space-y-14">
      <WidthConstraint className="space-y-8">
        <SectionHeader heading="About the Programme" />
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-card-title font-bold text-foreground z-10">
            What is the Pharmacy First Programme?
          </h2>
          <p className="text-gray-600 dark:text-white/60 leading-9 z-10">
            The NHS Pharmacy First programme allows patients in England and
            Scotland to receive healthcare advice and treatment for various
            common conditions directly from their local pharmacy, reducing the
            strain on GP services. At Belvedere Pharmacy, we are committed to
            offering this valuable service to help you access the care you need
            quickly and efficiently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PFP_BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white dark:bg-[#003b5c] shadow-sm dark:shadow-md/30 border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 group z-10"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent group-hover:bg-ring transition-colors duration-300">
                  <Icon className="size-6 text-ring group-hover:text-white" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 dark:text-white/60">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
};
