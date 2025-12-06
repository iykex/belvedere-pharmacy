import { ArrowRight, Calendar, Shield, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NHS_PHARMACY_FIRST_SERVICES } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";

export function NHSPharmacyFirstSection() {
  return (
    <section className="relative overflow-hidden observer-target">
      <WidthConstraint>
        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-[#005EB8]/10 rounded-lg">
                  <Shield className="size-5 text-[#005EB8]" />
                </div>
                <span className="text-[#005EB8] font-semibold text-sm uppercase tracking-wider">
                  NHS Pharmacy First
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-1 leading-tight">
                Can't Get to the GP?
              </h2>
              <h2 className="text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
                We Can Help
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Access free NHS treatment for common conditions without waiting
                for a GP appointment. Our qualified pharmacists are here to
                help.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="group bg-[#005EB8] hover:bg-[#005EB8]/90 text-white font-semibold px-8 rounded-xl shadow-lg"
            >
              <Link href="/pharmacy-first" className="flex items-center gap-2">
                View All Conditions
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-4 py-2">
            {NHS_PHARMACY_FIRST_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  {/* Icon */}
                  <div
                    className={`${service.bgColor} size-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`size-6 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Book Button */}
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Calendar className="size-4" />
                    Book Now
                    <ArrowRight className="size-3 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* NHS Badge */}
          <div className="mt-5 sm:mt-10 flex items-center justify-center gap-3 text-sm text-gray-600">
            <div className="h-px flex-1 bg-gray-200 max-w-24 w-full" />
            <p className="flex flex-col sm:flex-row items-center gap-2 ">
              <Stethoscope className="size-4 text-[#005EB8]" />
              <p className="font-semibold text-gray-900">NHS Pharmacy First</p>
              <span className="block">
                <span className="hidden sm:inline-flex">—</span> Free treatment
                for eligible conditions
              </span>
            </p>
            <div className="h-px flex-1 bg-gray-200 max-w-24" />
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
