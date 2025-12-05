import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { CTA_SECTION_FEATURES_LIST } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-xl shadow-lg"
              >
                <Link href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection" className="flex items-center gap-2">
                  Book Appointment
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 rounded-xl"
              >
                <Link href="/contact-us">
                  Contact Us
                </Link>
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
              <a
                href="tel:+441234567890"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-bold text-primary">+44 (0) 123 456 7890</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Mail className="size-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-semibold text-gray-900">info@belvederepharmacy.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <MapPin className="size-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-semibold text-gray-900">Belvedere, Kent</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Clock className="size-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Opening Hours</p>
                  <p className="font-semibold text-gray-900">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 py-6 rounded-xl font-semibold"
            >
              <Link href="/contact-us" className="flex items-center justify-center gap-2">
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
