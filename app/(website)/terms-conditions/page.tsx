"use client";

import Menu from "@/components/navigation/navigation-menu";
import { useTenantContext } from "@/components/providers/tenant-provider";
import WidthConstraint from "@/components/shared/width-constraint";
import CTASection from "@/components/shared/cta-section";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import { TenantContactCard } from "@/components/shared/tenant-contact-card";
import { LegalSectionContent } from "@/components/shared/legal/legal-section-content";
import { useLegalDocument } from "@/hooks/use-legal-document";

export default function TermsPage() {
  const legal = useLegalDocument("terms");
  const { tenant, isTenantReady } = useTenantContext();
  const contentSections = legal?.sections ?? [];

  return (
    <div className="overflow-x-clip pb-20 sm:pb-24 lg:pb-30">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms-conditions" },
        ]}
      />
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-10 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16">
        <WidthConstraint className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Please read these terms carefully before using our pharmacy services
          </p>
          {legal?.effectiveDate && (
            <p className="text-sm text-muted-foreground">
              Last updated: {legal.effectiveDate}
            </p>
          )}
        </WidthConstraint>
      </section>

      {/* Content Section */}
      <section className="bg-background/95">
        <WidthConstraint className="max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
            {contentSections.map((section, idx) => (
              <article key={idx} className="space-y-4 sm:space-y-5">
                <h2 className="flex items-start gap-3 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-foreground">
                  <span className="shrink-0 text-2xl sm:text-3xl lg:text-4xl leading-none text-primary">
                    {section.number}
                  </span>
                  <span className="min-w-0">{section.title}</span>
                </h2>

                <LegalSectionContent section={section} variant="terms" />
              </article>
            ))}
          </div>
          {/* Contact Type */}
          <div className="max-w-3xl mx-auto space-y-3 mt-10 sm:mt-12">
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms and Conditions, please
              contact us
            </p>

            {isTenantReady && tenant && <TenantContactCard tenant={tenant} />}
          </div>
        </WidthConstraint>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
