"use client";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card, CardContent } from "../ui/card";
import { IconProps, Icon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { TRUST_BADGES_MARQUEE } from "@/lib/constants";
import { useServiceMarquee } from "@/hooks/use-service-marquee";

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
    <Card className="w-60 shrink-0 bg-card backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 mx-3 group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div
          className={cn(
            "mb-3 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
            bgColor
          )}
        >
          <Icon className={cn("h-8 w-8", color)} />
        </div>
        <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
};

export default function TrustBadgesMarquee() {
  const { isVisible, sectionRef } = useServiceMarquee();

  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-br from-accent/30 via-background to-accent/20 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-linear(to_right,#dde2e612_1px,transparent_1px),linear-linear(to_bottom,#dde2e612_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-chart-2/10 blur-[100px]"></div>

      <div
        className={cn(
          "container px-4 md:px-6 mx-auto transition-all duration-1000 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            Trusted <span className="text-primary">Healthcare Partner</span>
          </h2>
          <div className="flex w-24 mx-auto mb-6">
            <hr className="w-1/2 bg-chart-3 h-1 border-0" />
            <hr className="w-1/2 bg-chart-2 h-1 border-0" />
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Accredited, experienced, and committed to providing exceptional
            pharmaceutical care to our community.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-6">
          {/* linear Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

          {/* Row 1: Right to Left */}
          <div className="flex overflow-hidden group">
            <div className="flex min-w-full shrink-0 animate-scroll gap-4 group-hover:paused">
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
        <div className="mt-12 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Belvedere Pharmacy
            </span>{" "}
            - Regulated by the General Pharmaceutical Council (GPhC) and
            registered with the Care Quality Commission (CQC). Your health and
            safety are our top priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
