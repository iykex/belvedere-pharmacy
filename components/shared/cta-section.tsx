"use client";
import { CheckCircle, ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import WidthConstraint from "./width-constraint";
import { INTERNAL_LINKS, TRACKING_EVENTS } from "@/lib/constants/general";
import { Button } from "../ui/button";
import Link from "next/link";
import { track } from "@/lib/analytics/tracker";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { formatOpeningHoursSummary } from "@/lib/utils/format-tenant";
import { useMarketingBlocks } from "@/hooks/use-marketing-blocks";
import {
  CtaContactCardSkeleton,
  CtaTenantBlockSkeleton,
} from "@/components/shared/tenant-skeletons";

export default function CTASection() {
  const { tenant, isTenantReady } = useTenantContext();
  const { marketing } = useMarketingBlocks();
  const featureLines = marketing?.ctaFeatureLines ?? [];

  if (!isTenantReady || !tenant) {
    return (
      <section className="overflow-hidden">
        <WidthConstraint className="relative rounded-[2rem] bg-[#002f4b] p-6 md:p-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <CtaTenantBlockSkeleton />
            <div className="z-10 rounded-3xl bg-white p-4 shadow-2xl dark:bg-[#03456a] sm:p-8">
              <CtaContactCardSkeleton />
            </div>
          </div>
        </WidthConstraint>
      </section>
    );
  }

  const phoneHref = `tel:${tenant.phone.replace(/\s/g, "")}`;
  const mailHref = `mailto:${tenant.email}`;
  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: tenant.phone,
      href: phoneHref,
      isLink: true,
      bgColor: "bg-primary/5",
      hoverBgColor: "hover:bg-primary/10",
      iconBgColor: "bg-primary/10",
      iconColor: "text-primary",
      textColor: "text-primary",
      valueClass: "font-semibold",
      tracking: TRACKING_EVENTS.phoneContactClick,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: tenant.email,
      href: mailHref,
      isLink: true,
      bgColor: "bg-gray-50 dark:bg-primary/5",
      hoverBgColor: "",
      iconBgColor: "bg-gray-100 dark:bg-primary/10",
      iconColor: "text-gray-600 dark:text-primary",
      textColor: "text-gray-900 dark:text-primary/90",
      valueClass: "font-semibold",
      tracking: TRACKING_EVENTS.emailClick,
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: tenant.address.line1,
      href: INTERNAL_LINKS.aboutPage,
      isLink: false,
      bgColor: "bg-gray-50 dark:bg-primary/5",
      hoverBgColor: "",
      iconBgColor: "bg-gray-100 dark:bg-primary/10",
      iconColor: "text-gray-600 dark:text-primary",
      textColor: "text-gray-900 dark:text-primary/90",
      valueClass: "font-semibold",
      tracking: "",
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: formatOpeningHoursSummary(tenant),
      href: INTERNAL_LINKS.aboutPage,
      isLink: false,
      bgColor: "bg-gray-50 dark:bg-primary/5",
      hoverBgColor: "",
      iconBgColor: "bg-gray-100 dark:bg-primary/10",
      iconColor: "text-gray-600 dark:text-primary",
      textColor: "text-gray-900 dark:text-primary/90",
      valueClass: "font-semibold",
      tracking: "",
    },
  ];

  return (
    <section className="overflow-hidden">
      <WidthConstraint className="relative rounded-[2rem] bg-[#002f4b] p-6 md:p-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                Ready to Get Started
              </span>
              <h2 className="mt-4 mb-4 text-xl font-semibold tracking-tight sm:text-4xl">
                Experience care with {tenant.displayName}
              </h2>
              <p className="text-white/80 sm:text-lg leading-relaxed max-w-lg pr-4 sm:pr-0">
                Join thousands of satisfied patients who trust us with their
                healthcare needs. From prescriptions to personalized
                consultations, we&apos;re here for you.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {featureLines.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 ">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="text-white/90 pr-4 sm:pr-0">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <Button
                asChild
                size="lg"
                className="group z-10 min-h-13 w-fit rounded-full bg-white px-6 font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0"
              >
                <Link
                  href={tenant.bookAppointmentUrl}
                  onClick={() =>
                    track(
                      TRACKING_EVENTS.bookAppointmentButton,
                      tenant.bookAppointmentUrl
                    )
                  }
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
                className="z-10 min-h-13 w-fit rounded-full border border-white/25 bg-white/10 px-6 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary active:translate-y-0"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="z-10 rounded-3xl bg-white p-4 shadow-2xl dark:bg-[#03456a] sm:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-white/60">
                We&apos;re here to help with all your healthcare needs
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const contactContent = (
                  <div className="space-y-2">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center ${contact.iconBgColor} rounded-full sm:size-14`}
                    >
                      <IconComponent
                        className={`size-5 ${contact.iconColor} sm:size-6`}
                      />
                    </div>
                    <div>
                      <p className="text text-gray-500 dark:text-white/60">
                        {contact.label}
                      </p>
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
                    onClick={() => track(contact.tracking, contact.href)}
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
              className="w-full rounded-full bg-primary py-6 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link
                href={INTERNAL_LINKS.contactPage}
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
