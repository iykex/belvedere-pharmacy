"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "./service-card";
import { SERVICE_CATEGORIES } from "@/lib/constants/general";
import { SERVICES_LIST } from "@/lib/constants/data";
import WidthConstraint from "../shared/width-constraint";

export function ServicesGrid() {
  return (
    <section>
      <WidthConstraint>
        <Tabs defaultValue="all">
          <div className="w-full overflow-x-auto sm:mx-0 sm:px-0">
            <TabsList>
              {SERVICE_CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="z-10 shrink-0 text-base font-medium transition-all duration-400 ease-in-out bg-white shadow-sm h-full py-4 hover:scale-95 text-foreground/50 hover:text-foreground
              data-[state=active]:bg-primary data-[state=active]:dark:bg-primary 
              data-[state=active]:text-background  
              data-[state=active]:hover:scale-100
              data-[state=active]:font-bold
              data-[state=active]:shadow-none
            "
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {SERVICE_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES_LIST.filter(
                  (service) =>
                    category.id === "all" || service.category === category.id
                ).map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <ServiceCard
                      key={index}
                      description={service.description}
                      image={service.image}
                      link={service.link}
                      title={service.title}
                      features={service.features}
                      borderColor=""
                      category=""
                      color=""
                      icon={IconComponent}
                      tracking={service.tracking}
                    />
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </WidthConstraint>
    </section>
  );
}
