import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import WidthConstraint from "./width-constraint";
import {
  CTA_SECTION_FEATURES_LIST,
  CTA_SECTION_CONTACT_INFO,
} from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />

      <WidthConstraint className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                Ready to Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Experience the Belvedere Difference
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                Join thousands of satisfied patients who trust us with their
                healthcare needs. From prescriptions to personalized
                consultations, we're here for you.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {CTA_SECTION_FEATURES_LIST.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <Button
                asChild
                size="lg"
                className="group bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-xl shadow-lg w-fit"
              >
                <Link
                  href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
                  className="flex items-center gap-2"
                >
                  Book Appointment
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-0 text-foreground hover:bg-foreground hover:text-white hover:scale-105 hover:shadow-xs hover:shadow-background font-semibold px-8 rounded-xl transition-all ease-in-out duration-500 w-fit"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get In Touch
              </h3>
              <p className="text-gray-600">
                We're here to help with all your healthcare needs
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              {CTA_SECTION_CONTACT_INFO.map((contact, index) => {
                const IconComponent = contact.icon;
                const contactContent = (
                  <div className="space-y-2">
                    <div
                      className={`p-3 w-fit ${contact.iconBgColor} rounded-lg`}
                    >
                      <IconComponent
                        className={`size-5 ${contact.iconColor}`}
                      />
                    </div>
                    <div>
                      <p className="text text-gray-500">{contact.label}</p>
                      <p
                        className={`${contact.valueClass} ${contact.textColor}`}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>
                );

                return contact.isLink ? (
                  <Link
                    key={index}
                    href={contact.href}
                    className={`flex items-center gap-4 p-2  sm:p-4 rounded-xl ${contact.bgColor} ${contact.hoverBgColor} transition-colors`}
                  >
                    {contactContent}
                  </Link>
                ) : (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl ${contact.bgColor} ${contact.hoverBgColor} transition-colors`}
                  >
                    {contactContent}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 py-6 rounded-xl font-semibold"
            >
              <Link
                href="/contact-us"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="size-4" />
                Send us a Message
              </Link>
            </Button>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
