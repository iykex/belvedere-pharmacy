import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Shield,
  Heart,
} from "lucide-react";
import Link from "next/link";
import WidthConstraint from "../shared/width-constraint";
import { CONTACT_CARDS_SERVICES, TRUST_BADGES_SERVICES } from "@/lib/constants";

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden observer-target">
      {/* <div className="absolute inset-0 bg-linear-to-r from-primary via-primary to-chart-2"></div> */}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <WidthConstraint className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center place-items-center">
          {/* Left Content */}
          <div className=" space-y-6">
            <div>
              <p className="text-sm font-semibold  mb-2 uppercase tracking-wider">
                Take the Next Step
              </p>
              <h2 className="text-card-title font-bold leading-tight">
                Start Your Health Journey Today
              </h2>
            </div>

            <p className="text-base max-w-lg leading-relaxed">
              Don't wait for health concerns to escalate. Our expert team at
              Belvedere Pharmacy is ready to support your wellness goals with
              personalized, professional care.
            </p>

            <div className="space-y-4 pt-4">
              {TRUST_BADGES_SERVICES.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{badge.title}</p>
                      <p className="text-sm">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                asChild
                className="bg-white text-primary hover:bg-white font-bold px-8 py-6 text-base group"
              >
                <Link
                  href="http://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378"
                  className="flex items-center gap-2"
                >
                  Book Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white  hover:bg-white/10 font-bold px-8 py-6 text-base"
              >
                <Link href="/pharmacy-first">Learn About Pharmacy First</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Cards */}
          <div>
            {CONTACT_CARDS_SERVICES.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm mb-1">{card.label}</p>
                      <p className="text-[20px] font-bold">{card.title}</p>
                      <p className="text-xs /70 mt-1">{card.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
