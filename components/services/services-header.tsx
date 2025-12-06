import Image from "next/image";
import WidthConstraint from "../shared/width-constraint";
import { Button } from "../ui/button";
import { ArrowRight, Video, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

export function ServicesHeading() {
  return (
    <section>
      <WidthConstraint className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 place-items-center">
          {/* LEFT COL - Content */}
          <div className="space-y-2 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full">
              <span className="text-sm font-bold">
                Premium Healthcare Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-title font-montserrat font-bold tracking-tight text-foreground sm:leading-20">
              Find the Right <span className="text-primary">Service</span> for
              Your Health
            </h1>

            {/* Divider */}
            <div className="flex w-24">
              <hr className="w-1/2 bg-chart-3 h-1 border-0 rounded-full" />
              <hr className="w-1/2 bg-chart-2 h-1 border-0 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-8 max-w-xl">
              Our pharmacists offer a comprehensive range of NHS-commissioned
              and private healthcare services. Get expert help from the comfort
              of your home with our video consultation service.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span>NHS Services</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium">
                <Video className="w-4 h-4 text-chart-2" />
                <span>Video Consultations</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Same Day Appointments</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COL - Image with decorative elements */}
          <div className=" hidden sm:block relative w-full">
            {/* Image card */}
            <div className="relative w-full">
              <Image
                src="/booking.jpg"
                alt="Healthcare Services"
                width={1200}
                height={120}
                className="w-full object-cover rounded-4xl"
              />
            </div>

            {/* Decorative circles */}
            <div className="absolute z-10 -top-14 -right-10 size-40 bg-white rounded-full"></div>
            <div className="absolute z-10 -bottom-14 -left-20 size-40 bg-white rounded-full"></div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
