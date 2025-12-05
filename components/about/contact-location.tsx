import { CircleParking, Clock, Mail, MapPin, Phone } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { WORKING_HOURS, CONTACT_LOCATION_INFO } from "@/lib/constants";
import { Badge } from "../ui/badge";
import SectionHeader from "../general/section-divider-head";

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
};

export default function ContactLocationSection() {
  return (
    <section>
      <WidthConstraint className="space-y-12">
        <SectionHeader heading="Visit Us" />
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Visit <span className="text-primary">Our</span> Pharmacy
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {CONTACT_LOCATION_INFO.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Opening Hours
                </h3>
                <div className="space-y-3 max-w-xs">
                  {WORKING_HOURS.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium text-gray-900">
                        {schedule.days}
                      </span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9548834847816!2d0.1399!3d51.4899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzIzLjYiTiAwwrAwOCczNS42IkU!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Belvedere Pharmacy Location"
                className="w-full"
              />
            </div>
            <Badge className="w-full justify-center items-center gap-2 rounded-xl bg-[#002f4b] text-white py-3 text-base font-semibold hover:bg-[#002f4b]/90">
              Free Parking Available
              <CircleParking className="size-5! text-primary stroke-2" />
            </Badge>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
