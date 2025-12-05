import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "../general/section-divider-head";
import WidthConstraint from "../shared/width-constraint";
import { WORKING_HOURS } from "@/lib/constants";
import { Badge } from "../ui/badge";

export default function ContactLocationSection() {
  return (
    <section>
      <WidthConstraint>
        <SectionHeader heading="Visit Us" />
        {/* SECTION GRID */}
        <div className="grid gap-12 md:grid-cols-2 p-5 place-items-center">
          {/* LEFT SECTION */}
          <div className="space-y-4">
            {/* HEADING */}
            <h2 className="text-section-header font-bold tracking-tight text-foreground">
              Visit <span className="text-primary">Our</span> Pharmacy
            </h2>
            {/* LOCATION */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[20px]">Location</h3>
                  <p className="text-muted-foreground">11 Picardy Street</p>
                  <p className="text-muted-foreground">
                    Belvedere, Kent DA17 5QQ
                  </p>
                </div>
              </div>
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[20px]">Phone</h3>
                  <p className="text-muted-foreground">+44 (0) 123 456 7890</p>
                </div>
              </div>
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[20px]">Email</h3>
                  <p className="text-muted-foreground">
                    info@belvederepharmacy.com
                  </p>
                </div>
              </div>
              {/* OPENING HOURS */}
              <div className="flex items-start gap-4 w-full max-w-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="grow">
                  <h3 className="mb-3 font-bold text-[20px]">Opening Hours</h3>
                  <div className="grid gap-3 max-w-2xs">
                    {WORKING_HOURS.map((schedule, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between border-b pb-2"
                      >
                        <span className="font-medium">{schedule.days}</span>
                        <span className="text-muted-foreground">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full">
            <div className="max-w-xl space-y-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9548834847816!2d0.1399!3d51.4899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzIzLjYiTiAwwrAwOCczNS42IkU!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Belvedere Pharmacy Location"
                className="rounded-2xl aspect-4/3 mx-auto shadow-sm"
              />
              <Badge className="flex-col w-full rounded-sm bg-foreground text-card-title text-white p-2 font-bold">
                Free Parking Available
              </Badge>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
