import { BELVEDERE_VALUES } from "@/lib/constants";
import SectionHeader from "../general/section-divider-head";
import WidthConstraint from "../shared/width-constraint";
import { Card, CardContent } from "../ui/card";

export default function OurValuesSection() {
  return (
    <section>
      <WidthConstraint className="space-y-10">
        <div className="text-center mx-auto space-y-2">
          <SectionHeader heading="Our Values" />
          <h2 className="text-section-header font-bold tracking-tight text-foreground">
            Our <span className="text-primary">Guiding</span> Principles
          </h2>
          <p className="text-base text-muted-foreground">
            These core principles guide everything we do at Belvedere Pharmacy
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4">
          {BELVEDERE_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="group relative border-0 shadow transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div
                    className={`mb-6 inline-flex items-center justify-center rounded-xl bg-linear-to-br ${value.color} p-4`}
                  >
                    <div className={value.iconColor}>
                      <Icon />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
}
