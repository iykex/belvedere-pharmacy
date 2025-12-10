import Link from "next/link";
import {
  CONTACT_ITEMS,
  FOOTER_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";

export function Footer() {
  return (
    <WidthConstraint className="py-8 md:py-12 px-0">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] text-white">
        {/* Column 1: Logo and social */}
        <div className="space-y-4">
          <h3 className="font-semibold text-card-title mb-2">
            Belvedere Pharmacy
          </h3>
          <p className="text-white/70 text-sm sm:max-w-xs">
            Your trusted local pharmacy providing quality healthcare services to
            the community.
          </p>
          <div className="flex space-x-4 pt-2">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Icon className="text-ring size-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2: Quick Links & Column 3: Services  */}
        {FOOTER_LINKS.map((item) => {
          return (
            <div className="space-y-4" key={item.title}>
              <h3 className="font-semibold text-card-title mb-2">
                {item.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {item.items.map((item) => {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-ring hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {/* Column 4: Contact Us */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <address className="not-italic text-white/70 space-y-2 text-sm">
            {CONTACT_ITEMS.map((item) => {
              return <p key={item}>{item}</p>;
            })}
          </address>
        </div>
      </div>

      {/* Bottom section with copyright and links */}
      <div className="border-t mt-8 pt-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
        <p className="text-xs text-white/70">
          &copy; {new Date().getFullYear()} Belvedere Pharmacy. All rights
          reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          {LEGAL_LINKS.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-ring hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </WidthConstraint>
  );
}
