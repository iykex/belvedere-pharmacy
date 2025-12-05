import { Shield } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { Button } from "../ui/button";
import { ABOUT_BANNER_BUTTONS } from "@/lib/constants";
import { ButtonVariants } from "@/lib/types";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute animate-in top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/pills/v2.mp4" type="video/mp4" />
      </video>

      {/*Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <WidthConstraint className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <Badge className="text-foreground text-sm font-bold bg-background py-2">
            <Shield className="size-5! text-primary" />
            Trusted since 2020
          </Badge>

          <h1 className="text-title font-montserrat font-extrabold tracking-tight text-foreground leading-15">
            About <span className="text-primary">Belvedere Pharmacy</span>
          </h1>

          <p className="text-card-title text-background leading-relaxed max-w-xl mx-auto">
            Providing accessible healthcare and personalized service to our
            community with a commitment to excellence and compassion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ABOUT_BANNER_BUTTONS.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant={item.variant as ButtonVariants}
                  size="lg"
                  className="grow rounded-2xl py-6 border-0"
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-card-title"
                  >
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
