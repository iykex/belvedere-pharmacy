import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import WidthConstraint from "../shared/width-constraint";
import { APP_DOWNLOAD_BUTTONS, DOWNLOAD_APP_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SectionHeader from "./section-divider-head";

export default function DownloadAppSection() {
  return (
    <section className="observer-target">
      <SectionHeader heading="App Download" />
      <WidthConstraint className="mt-10 grid gap-12 md:grid-cols-2 items-center bg-linear-to-br from-accent/50 via-background to-secondary/30 xl:rounded-3xl p-8 md:p-12 lg:p-16 md:shadow-sm overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10"></div>

        <div className="space-y-6 sm:space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="text-section-header font-bold tracking-tight text-foreground leading-tight">
              Begin your health journey with{" "}
              <span className="text-primary">Belvedere</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Download our app to manage your prescriptions, book appointments,
              and access health resources on the go.
            </p>
          </div>

          <div className="space-y-5">
            {DOWNLOAD_APP_FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.description}
                  className="max-w-lg flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className="mt-0.5 bg-primary/10 p-2.5 rounded-lg shrink-0">
                    <Icon className={cn("size-5 text-primary")} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg justify-center items-center">
            {APP_DOWNLOAD_BUTTONS.map((item) => {
              return (
                <Button
                  key={item.icon}
                  asChild
                  variant="outline"
                  className="px-5 py-7 bg-card hover:bg-accent hover:border-background transition-all duration-300 border-border hover:shadow-md group w-full sm:w-fit"
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.labelSmall}
                      width={35}
                      height={35}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        {item.labelSmall}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-foreground">
                        {item.labelLarge}
                      </span>
                    </div>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] flex scale-70 md:scale-100 items-center justify-center">
          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border-2 border-primary/20 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border border-chart-2/10"></div>
          </div>

          {/* Phone mockup placeholder - replace with your actual phone image */}
          <div className="relative z-10 w-[280px] h-[560px] bg-linear-to-br from-foreground to-foreground/80 rounded-[3rem] shadow-lg border-8 border-foreground/20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
            <div className="w-full h-full bg-linear-to-br from-primary/20 via-accent to-chart-2/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 bg-primary rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-primary-foreground">
                    B
                  </span>
                </div>
                <p className="text-sm text-foreground/70 font-medium">
                  Your Health App
                </p>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 right-10 w-16 h-16 bg-chart-3/20 rounded-2xl backdrop-blur-sm animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-12 h-12 bg-primary/20 rounded-full backdrop-blur-sm animate-pulse"></div>
        </div>
      </WidthConstraint>
    </section>
  );
}
