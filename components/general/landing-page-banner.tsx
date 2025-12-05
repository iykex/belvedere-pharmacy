"use client";
import WidthConstraint from "@/components/shared/width-constraint";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BadgeCheckIcon, Download } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      className="bg-[url('/banner.png')] bg-cover bg-center h-screen overflow-hidden relative"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002f4b]/95 via-[#002f4b]/80 to-[#002f4b]/40" />

      {/* Content */}
      <div className="relative w-full h-full flex items-center">
        <WidthConstraint>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left Content - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <Badge
                variant="secondary"
                className="py-1.5 px-4 text-sm font-bold bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/20 backdrop-blur-sm"
              >
                <BadgeCheckIcon className="size-4 mr-2" />
                NHS Services Available
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Your Trusted Partner in <br />
                <span className="text-[#FF9900]">Community Healthcare</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed font-light">
                Experience accessible, professional healthcare with expert advice,
                prescription services, and personalized care tailored to your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="group bg-[#FF9900] text-white hover:bg-[#FF9900]/90 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/25 px-8 py-6 text-base font-semibold"
                >
                  <Link
                    href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
                    className="flex items-center gap-2"
                  >
                    Book an Appointment
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group border-white/20 bg-white/5 text-white hover:bg-white hover:text-[#002f4b] backdrop-blur-sm px-8 py-6 text-base font-semibold transition-all duration-300"
                >
                  <Link href="https://app.belvederepharmacy.net/#/auth/signin">
                    Order Prescriptions
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Download App Section (Desktop Only) - Takes 2 columns */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
              <div className="relative">
                {/* Pulsing ring animation */}
                <div className="absolute -inset-3 animate-ping-slow rounded-3xl bg-primary/20" />
                <div className="absolute -inset-6 animate-pulse rounded-3xl bg-primary/10" />

                {/* App Download Card */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-72 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                  {/* Floating download icon */}
                  <div className="absolute -top-5 -right-5 p-3 bg-primary rounded-xl shadow-lg shadow-primary/40 animate-bounce-slow">
                    <Download className="size-6 text-white" />
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <p className="text-primary font-semibold text-xs uppercase tracking-wider">Mobile App</p>
                      <h3 className="text-xl font-bold text-white">Download Our App</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Manage prescriptions & book appointments on the go.
                      </p>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex flex-col gap-2">
                      <Link
                        href="https://apps.apple.com/us/app/belvedere-pharmacy/id6670758281"
                        className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-2.5 transition-all duration-300"
                      >
                        <Image
                          src="/app-store.png"
                          alt="App Store"
                          width={28}
                          height={28}
                          className="rounded-md"
                        />
                        <div className="flex-1">
                          <p className="text-[10px] text-white/60">Download on the</p>
                          <p className="text-xs font-semibold text-white">App Store</p>
                        </div>
                        <ArrowRight className="size-3 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                      </Link>

                      <Link
                        href="https://play.google.com/store/apps/details?id=net.belvederepharmacy.app"
                        className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-2.5 transition-all duration-300"
                      >
                        <Image
                          src="/play-store.png"
                          alt="Google Play"
                          width={28}
                          height={28}
                          className="rounded-md"
                        />
                        <div className="flex-1">
                          <p className="text-[10px] text-white/60">Get it on</p>
                          <p className="text-xs font-semibold text-white">Google Play</p>
                        </div>
                        <ArrowRight className="size-3 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthConstraint>
      </div>
    </section>
  );
}
