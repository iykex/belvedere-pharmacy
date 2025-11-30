// import WidthConstraint from "@/components/shared/width-constraint";
// import { Button } from "@/components/ui/button";
// import { KEY_BENEFITS_IMGS, KEY_BENEFITS_TEXTS } from "@/lib/constants";
// import { cn } from "@/lib/utils";
// import { ChevronsRight } from "lucide-react";
// import Image from "next/image";

// export default function KeyBenefits() {
//   return (
//     <WidthConstraint className="mt-15 max-[828px]:min-[644px]:px-10">
//       <h1 className="text-card-title font-montserrat font-bold text-center text-foreground">
//         Key Benefits
//       </h1>
//       <div className="flex w-20 mx-auto">
//         <hr className="w-1/2 bg-chart-3 h-1 border-0" />
//         <hr className="w-1/2 bg-chart-2 h-1 border-0" />
//       </div>
//       <div className="grid sm:grid-cols-2 mt-10 sm:justify-between gap-20 place-items-center justify-center">
//         {KEY_BENEFITS_TEXTS.map((item) => {
//           return (
//             <div key={item.title} className={cn("space-y-5", item.order)}>
//               <h3 className="text-base font-bold text-foreground">
//                 {item.title}
//               </h3>
//               <ul className="space-y-4 text-foreground/90">
//                 {item.bullets.map((bullet) => {
//                   return (
//                     <li key={bullet} className="flex items-center gap-x-2">
//                       <Image
//                         src="/exclude.svg"
//                         alt=""
//                         width={13}
//                         height={12}
//                         className=""
//                       />
//                       {bullet}
//                     </li>
//                   );
//                 })}
//               </ul>
//               <Button
//                 className="rounded-2xl px-5 font-semibold mt-5 max-w-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
//                 variant={"outline"}
//               >
//                 Get prescription{" "}
//                 <ChevronsRight className="text-chart-3 stroke-3 size-5" />
//               </Button>
//             </div>
//           );
//         })}
//         {KEY_BENEFITS_IMGS.map((item) => {
//           return (
//             <Image
//               key={item.url}
//               src={item.url}
//               alt=""
//               width={300}
//               height={300}
//               className={cn("", item.order)}
//             />
//           );
//         })}
//       </div>
//     </WidthConstraint>
//   );
// }

import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "@/components/ui/button";
import { KEY_BENEFITS_IMGS, KEY_BENEFITS_TEXTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronsRight, Check } from "lucide-react";
import Image from "next/image";

export default function KeyBenefits() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-background via-accent/10 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>

      <WidthConstraint className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key <span className="text-primary">Benefits</span>
          </h2>
          <div className="flex w-24 mx-auto mb-6">
            <hr className="w-1/2 bg-chart-3 h-1 border-0 rounded-full" />
            <hr className="w-1/2 bg-chart-2 h-1 border-0 rounded-full" />
          </div>
          <p className="text-muted-foreground text-base md:text-lg">
            Experience healthcare services designed with you in mind
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {KEY_BENEFITS_TEXTS.map((item, index) => {
            return (
              <div key={item.title} className={cn("space-y-6", item.order)}>
                {/* Card Container */}
                <div className="rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                  {/* Icon or Number Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Benefits List */}
                  <ul className="space-y-4 mb-8">
                    {item.bullets.map((bullet) => {
                      return (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-foreground/90"
                        >
                          <div className="shrink-0 w-6 h-6 bg-chart-3/10 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-chart-3 stroke-3" />
                          </div>
                          <span className="text-base leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <Button className="w-full sm:w-auto rounded-full px-6 py-6 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn">
                    Get Prescription
                    <ChevronsRight className="ml-2 size-5 stroke-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}

          {/* Images */}
          {KEY_BENEFITS_IMGS.map((item, index) => {
            return (
              <div key={item.url} className={cn("relative", item.order)}>
                <div className="relative group">
                  {/* Decorative background blur */}

                  {/* Image container with border */}
                  <div className="relative overflow-hidden group-hover:border-primary/50 transition-all duration-300">
                    <Image
                      src={item.url}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-linear-to-br from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-2xl shadow-lg">
                    <p className="text-sm font-bold">Trusted Service</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-linear-to-br from-accent/50 to-accent/30 border-2 border-border rounded-3xl p-10 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to experience better healthcare?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base md:text-lg">
            Join thousands of satisfied customers who trust us with their health
            and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started Today
              <ChevronsRight className="ml-2 size-5 stroke-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
