"use client";
import WidthConstraint from "@/components/shared/width-constraint";
import { Badge } from "@/components/ui/badge";
import { ABOUT_US_INFO_BANNER } from "@/lib/constants";
import { ArrowRight, BadgeCheckIcon } from "lucide-react";
import { MenuButtons } from "@/components/general/navigation-menu";
import { useRef } from "react";
import { useBannerAnimation } from "@/hooks/use-gsap";

export default function Banner() {
  const animationScope = useRef<HTMLDivElement>(null);
  useBannerAnimation(animationScope);

  return (
    <div
      className="bg-[url('/banner.png')] bg-cover bg-center h-screen overflow-x-hidden"
      ref={animationScope}
    >
      <div className="w-full h-full bg-linear-to-r from-[#002f4b] from-2% flex items-center text-white">
        <WidthConstraint>
          <Badge
            id="NHS-badge"
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600 invisible"
          >
            <BadgeCheckIcon />
            NHS Services Available
          </Badge>
          <div className="max-w-xl">
            <h1 id="title" className="text-title invisible">
              Welcome to Belvedere Pharmacy
            </h1>
            <p id="description" className="text-base invisible">
              Accessible healthcare for our community with expert advice,
              prescription services, and personalized care.
            </p>
          </div>
          <MenuButtons
            wrapperClassName="flex flex-col sm:flex-row gap-5 mt-5 px-5 sm:px-0"
            solidButtonClassName="block order-first flex group gap-x-1 transition-all duration-500 ease-in-out solid-button invisible"
            outlineButtonClassName="flex bg-transparent hover:text-[#002f4b] outline-button invisible"
            solidButtonIcon={
              <ArrowRight className=" hidden stroke-3 animate-bounce group-hover:block" />
            }
            solidButtonText="Book an Appointment"
          />
          <div
            id="info-badges"
            className="my-10 flex flex-col sm:flex-row gap-5  invisible"
          >
            {ABOUT_US_INFO_BANNER.map((item) => {
              const Icon = item.icon;
              return (
                <Badge
                  key={item.description}
                  variant={"secondary"}
                  className="rounded-sm gap-x-2 items-center justify-center hover:scale-105 transition-transform ease-initial duration-400"
                >
                  <div className="bg-primary rounded-full p-1">
                    <Icon className="text-white stroke-2" />
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </Badge>
              );
            })}
          </div>
        </WidthConstraint>
      </div>
    </div>
  );
}
