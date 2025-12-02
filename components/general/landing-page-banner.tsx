"use client";
import WidthConstraint from "@/components/shared/width-constraint";
import { Badge } from "@/components/ui/badge";
import { ABOUT_US_INFO_BANNER } from "@/lib/constants";
import { ArrowRight, BadgeCheckIcon } from "lucide-react";
import { useRef } from "react";
import { useBannerAnimation } from "@/hooks/use-gsap";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Banner() {
  const animationScope = useRef<HTMLDivElement>(null);
  useBannerAnimation(animationScope);

  return (
    <div
      className="bg-[url('/banner.png')] bg-cover bg-center h-screen overflow-x-hidden"
      ref={animationScope}
    >
      <div className="w-full h-full bg-linear-to-r from-[#002f4b] from-2% flex items-center text-white overflow-hidden lg:pt-20">
        <WidthConstraint className="space-y-10 min-[500px]:space-y-15">
          <Badge
            id="NHS-badge"
            variant="secondary"
            className="py-1.5 min-[300px]:px-4 max-[300px]:text-sm text-base font-bold bg-[#00BFFF] text-[#002f4b] hover:bg-[#00BFFF]/90 border-0"
          >
            <BadgeCheckIcon className="size-5! mr-2 stroke-3" />
            NHS Services Available
          </Badge>

          <div className="max-w-4xl space-y-4 sm:space-y-8 w-full">
            <h1
              id="title"
              className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-xl font-sans"
            >
              Welcome to <br />
              <span className="text-[#FF9900]">Belvedere Pharmacy</span>
            </h1>
            <p
              id="description"
              className="text-base max-w-2xl font-medium leading-relaxed "
            >
              Accessible healthcare for our community with expert advice,
              prescription services, and personalized care.
            </p>
          </div>
          <div className="flex flex-col min-[907px]:flex-row gap-4">
            <Button
              id="menu-outline-btn"
              variant="outline"
              className="flex bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002f4b] w-fit p-5 md:px-10 md:py-6 rounded-full min-[330px]:text-card-title font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link
                href="https://app.belvederepharmacy.net/#/auth/signin"
                className="font-semibold hover:text-foreground"
              >
                Order Prescriptions
              </Link>
            </Button>

            <Button
              id="menu-solid-btn"
              className="flex items-center justify-center bg-[#FF9900] text-white hover:bg-[#FF9900]/90 w-fit p-5 md:px-10 md:py-6  rounded-full min-[330px]:text-card-title font-bold transition-all duration-300 shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 group border-2 border-[#FF9900]"
            >
              <Link
                href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
                className="font-semibold flex items-center hover:gap-x-4 transition-all duration-300 ease-in-out"
              >
                Book an Appointment{" "}
                <ArrowRight className="hidden sm:flex ml-3 size-6 stroke-3 transition-transform group-hover:translate-x-1 group-hover:animate-bounce" />
              </Link>
            </Button>
          </div>

          <div id="info-badges" className="flex flex-wrap gap-5">
            {ABOUT_US_INFO_BANNER.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.description}
                  className="flex items-center gap-4 backdrop-blur-xs  rounded-2xl p-0.5 hover:px-2 hover:bg-[#002f4b]/70 hover:border-[#00BFFF]/50 transition-all duration-500 group cursor-default"
                >
                  <div className="bg-[#00BFFF] p-1.5 sm:p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="size-4 sm:size-6 text-[#002f4b] stroke-3" />
                  </div>
                  <div>
                    <p className="font-semibold text-white leading-relaxed">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </WidthConstraint>
      </div>
    </div>
  );
}
