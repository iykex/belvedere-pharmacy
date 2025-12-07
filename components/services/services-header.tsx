import Image from "next/image";
import WidthConstraint from "../shared/width-constraint";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, CheckCircle, Video } from "lucide-react";
import elderlyCouple from "@/public/ui/elderly-couple.jpg";
import Link from "next/link";

export function ServicesHeading() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <WidthConstraint className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COL - Content */}
          <div className="space-y-6 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full">
              <span className="text-sm font-semibold">
                Premium Healthcare Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Find the Right <span className="text-primary">Service</span> for
              Your Health
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Our pharmacists offer a comprehensive range of NHS-commissioned
              and private healthcare services. Get expert help from the comfort
              of your home with our video consultation service.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full text-sm font-medium text-green-700">
                <CheckCircle className="w-4 h-4" />
                <span>NHS Services</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700">
                <Video className="w-4 h-4" />
                <span>Video Consultations</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Calendar className="w-4 h-4" />
                <span>Same Day Appointments</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link
                  href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book an Appointment
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COL - Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={elderlyCouple}
                alt="Healthcare Services"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
