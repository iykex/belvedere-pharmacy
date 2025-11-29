import Banner from "@/components/general/landing-page-banner";
import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "@/components/ui/button";
import { KEY_BENEFITS_IMGS, KEY_BENEFITS_TEXTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <KeyBenefits />
    </div>
  );
}

export function KeyBenefits() {
  return (
    <WidthConstraint className="mt-15">
      <h1 className="text-card-title font-montserrat font-bold text-center">
        Key Benefits
      </h1>
      <div className="flex w-20 mx-auto">
        <hr className="w-1/2 bg-green-600 h-1 border-0" />
        <hr className="w-1/2 bg-blue-600 h-1 border-0" />
      </div>
      <div className="grid sm:grid-cols-2 mt-10 justify-between gap-20 place-items-center">
        {KEY_BENEFITS_TEXTS.map((item) => {
          return (
            <div key={item.title} className={cn("space-y-5", item.order)}>
              <h3 className="text-base font-bold">{item.title}</h3>
              <ul className="space-y-4">
                {item.bullets.map((bullet) => {
                  return (
                    <li key={bullet} className="flex items-center gap-x-2">
                      <Image
                        src="/exclude.svg"
                        alt=""
                        width={13}
                        height={12}
                        className=""
                      />
                      {bullet}
                    </li>
                  );
                })}
              </ul>
              <Button
                className="rounded-2xl px-5 font-semibold mt-5 w-xs"
                variant={"outline"}
              >
                Get prescription <ChevronsRight className="text-green-700 stroke-3 size-5" />
              </Button>
            </div>
          );
        })}
        {KEY_BENEFITS_IMGS.map((item) => {
          return (
            <Image
              key={item.url}
              src={item.url}
              alt=""
              width={300}
              height={300}
              className={cn("", item.order)}
            />
          );
        })}
      </div>
    </WidthConstraint>
  );
}
