import { MenuButtons } from "@/components/general/navigation-menu";
import WidthConstraint from "@/components/shared/width-constraint";
import { Badge } from "@/components/ui/badge";
import { ABOUT_US_INFO_BANNER } from "@/lib/constants";
import { ArrowRight, BadgeCheckIcon } from "lucide-react";

export function Banner() {
  return (
    <div className="bg-[url('/banner.png')] bg-cover bg-center h-screen">
      <div className="w-full h-full bg-linear-to-r from-[#002f4b] from-2% flex items-center text-white">
        <WidthConstraint>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon />
            NHS Services Available
          </Badge>
          <div className="max-w-xl">
            {/* <h1 className="text-title">
              We can get your Drug Prescriptions to You
            </h1>
            <h1 className="text-title">Your Health, Our Priority</h1> */}
            <h1 className="text-title ">Welcome to Belvedere Pharmacy</h1>
            {/* <p className="text-base">
              We have all the drugs your doctor prescribed for your health and
              what&apos;s more, we can get it to you.
            </p> */}
            <p className="text-base">
              Accessible healthcare for our community with expert advice,
              prescription services, and personalized care.
            </p>
          </div>
          <MenuButtons
            wrapperClassName="flex flex-col sm:flex-row gap-5 mt-5 px-5 sm:px-0"
            solidButtonClassName="block order-first flex"
            outlineButtonClassName="flex bg-transparent hover:text-[#002f4b]"
            solidButtonIcon={<ArrowRight className="stroke-3 animate-bounce" />}
            solidButtonText="Book an Appointment"
          />
          <div className="my-10 flex flex-col sm:flex-row gap-5">
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

export default function LandingPage() {
  return (
    <div>
      <Banner />
    </div>
  );
}
