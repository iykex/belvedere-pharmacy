import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card, CardContent } from "../ui/card";
import { IconProps, Icon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { TRUST_BADGES_MARQUEE } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import SectionHeader from "./section-divider-head";

export const TrustBadgeCard = ({
  title,
  subtitle,
  icon,
  color,
  bgColor,
}: {
  title: string;
  subtitle: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  color: string;
  bgColor: string;
}) => {
  const Icon = icon;
  return (
    <Card className="w-60 shrink-0 bg-card backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-border mx-3 group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div
          className={cn(
            "mb-3 size-16 rounded-2xl flex items-center justify-center transition-transform duration-300",
            bgColor
          )}
        >
          <Icon className={cn("size-8", color)} />
        </div>
        <h3 className="text-base font-bold text-foreground mb-1 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
};

export default function PharmacyServicesMarquee() {
  return (
    <section className="observer-target relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-linear(to_right,#dde2e612_1px,transparent_1px),linear-linear(to_bottom,#dde2e612_1px,transparent_1px)] bg-cover"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]"></div>
      <WidthConstraint>
        <div className={cn("px-4 md:px-6 mx-auto")}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeader heading="Why Choose Us" />
            <h2 className="text-section-header font-bold tracking-tight mb-4 text-foreground">
              Trusted <span className="text-primary">Healthcare Partner</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Accredited, experienced, and committed to providing exceptional
              pharmaceutical care to our community.
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative flex flex-col gap-6 bg-transparent">
            {/* Row 1: Right to Left */}
            <div className="flex overflow-hidden group bg-transparent">
              <div className="flex min-w-full shrink-0 animate-scroll gap-4 group-hover:paused bg-transparent py-2">
                {TRUST_BADGES_MARQUEE.map((badge, i) => (
                  <TrustBadgeCard key={`row1-${i}`} {...badge} />
                ))}
                {TRUST_BADGES_MARQUEE.map((badge, i) => (
                  <TrustBadgeCard key={`row1-dup-${i}`} {...badge} />
                ))}
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="text-center max-w-3xl mt-4 mx-auto">
            <p className="text-sm text-muted-foreground">
              Regulated by the General Pharmaceutical Council (GPhC) and
              registered with the Care Quality Commission (CQC). Your health and
              safety are our top priorities.
            </p>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
