"use client";

import Link from "next/link";
import { Search, Home, MapPin, Phone, Mail, LucideIcon } from "lucide-react";
import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "@/components/ui/button";
import { NOT_FOUND_NAV_ITEMS, NOT_FOUND_CONTACT_INFO } from "@/lib/constants";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Home,
  Search,
  MapPin,
  Phone,
  Mail,
};

// Navigation card component
function NavCard({
  href,
  iconName,
  title,
  description,
}: {
  href: string;
  iconName: string;
  title: string;
  description: string;
}) {
  const Icon = iconMap[iconName];
  return (
    <Link
      href={href}
      className="group bg-card border-2 border-input hover:border-primary rounded-xl p-6 transition-all hover:shadow-lg z-10"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

// Contact item component
function ContactItem({
  iconName,
  label,
  value,
  href,
}: {
  iconName: string;
  label: string;
  value: string;
  href?: string;
}) {
  const Icon = iconMap[iconName];
  const content = (
    <>
      <p className="text-sm text-gray-600 dark:text-white/60">{label}</p>
      {href ? (
        <a
          href={href}
          className="font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
      )}
    </>
  );

  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-primary shrink-0" />
      <div>{content}</div>
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <WidthConstraint className="max-w-2xl w-full">
        <div className="space-y-8 py-[10%]">
          {/* 404 Display */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
                <div className="relative text-9xl sm:text-[10rem] font-bold text-red-600">
                  404
                </div>
              </div>
            </div>

            <div className="space-y-3 z-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white z-10">
                Page Not Found
              </h1>
              <p className="text-lg text-gray-600 dark:text-white/60 max-w-xl mx-auto leading-relaxed z-10">
                Sorry, we couldn't find the page you're looking for. The page
                may have been moved, deleted, or the URL might be incorrect.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NOT_FOUND_NAV_ITEMS.map((item) => (
              <NavCard key={item.href} {...item} />
            ))}
          </div>

          {/* Contact Card */}
          <div className="bg-linear-to-br from-primary/10 to-chart-2/10 border border-primary/20 rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              Still need help?
            </h3>
            <div className="space-y-3">
              <ContactItem
                iconName={NOT_FOUND_CONTACT_INFO.phone.iconName}
                label={NOT_FOUND_CONTACT_INFO.phone.label}
                value={NOT_FOUND_CONTACT_INFO.phone.value}
                href={NOT_FOUND_CONTACT_INFO.phone.href}
              />
              <ContactItem
                iconName={NOT_FOUND_CONTACT_INFO.email.iconName}
                label={NOT_FOUND_CONTACT_INFO.email.label}
                value={NOT_FOUND_CONTACT_INFO.email.value}
                href={NOT_FOUND_CONTACT_INFO.email.href}
              />
              <ContactItem
                iconName={NOT_FOUND_CONTACT_INFO.address.iconName}
                label={NOT_FOUND_CONTACT_INFO.address.label}
                value={NOT_FOUND_CONTACT_INFO.address.value}
              />
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-8"
            >
              <Link href="/">
                <Home className="h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-xl px-8"
            >
              <Link href="/services">
                <Search className="h-5 w-5" />
                Browse Services
              </Link>
            </Button>
          </div>
        </div>
      </WidthConstraint>
    </div>
  );
}
