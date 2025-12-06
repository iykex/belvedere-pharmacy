import Menu from "@/components/shared/navigation-menu";
import WidthConstraint from "@/components/shared/width-constraint";
import CTASection from "@/components/shared/cta-section";
import {
  TERMS_SERVICES_LIST,
  TERMS_ELIGIBILITY,
  TERMS_LIABILITY,
} from "@/lib/constants";

export default function TermsPage() {
  return (
    <div className="overflow-hidden space-y-20 sm:space-y-30 mb-30">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-linear-to-br from-primary/5 via-chart-2/5 to-chart-3/5">
        <WidthConstraint className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our pharmacy services
          </p>
          <p className="text-sm text-gray-500">Last updated: December 2024</p>
        </WidthConstraint>
      </section>

      {/* Content Section */}
      <section>
        <WidthConstraint className="space-y-12">
          {/* 1. Introduction */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">1</span>
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Belvedere Pharmacy. These Terms and Conditions
              ("Terms") govern your use of our website, mobile applications, and
              pharmacy services. By accessing or using our services, you agree
              to be bound by these Terms. If you do not agree to any part of
              these Terms, you may not use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Belvedere Pharmacy is a registered pharmacy located in Belvedere,
              Kent, UK, licensed and regulated by the General Pharmaceutical
              Council (GPhC).
            </p>
          </article>

          {/* 2. Services */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">2</span>
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We provide a range of pharmacy and healthcare services including:
            </p>
            <ul className="space-y-2 ml-6">
              {TERMS_SERVICES_LIST.map((service, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Service availability may vary. Please contact us for current
              offerings or visit our services page.
            </p>
          </article>

          {/* 3. Eligibility */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">3</span>
              Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To use our services, you must:
            </p>
            <ul className="space-y-2 ml-6">
              {TERMS_ELIGIBILITY.map((requirement, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* 4. Prescriptions and Medication */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">4</span>
              Prescriptions and Medication
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4.1 Prescription Validity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prescriptions are valid for 6 months from the date issued by
                  your healthcare provider. We will not dispense medication on
                  expired or illegible prescriptions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4.2 Accuracy of Information
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to provide accurate information regarding your
                  medical history, current medications, and allergies. Failure
                  to disclose relevant medical information may result in harm.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4.3 Right to Refuse
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to refuse to dispense medication if we
                  believe it may be harmful, contraindicated, or if the
                  prescription appears forged or invalid.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4.4 Storage and Handling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  It is your responsibility to store medication as directed. We
                  are not liable for medication that has been improperly stored
                  or mishandled.
                </p>
              </div>
            </div>
          </article>

          {/* 5. Payments and Charges */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">5</span>
              Payments and Charges
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  5.1 NHS Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  NHS prescription charges apply as set by the Department of
                  Health. Exemptions may apply based on age, medical conditions,
                  or benefits received.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  5.2 Private Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prices for private services will be provided before treatment.
                  Payment must be made at the time of service unless alternative
                  arrangements have been agreed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  5.3 Refunds and Returns
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Medication can only be returned if unused and in original
                  packaging. Returns must be made within 30 days of purchase.
                  Refunds will not be issued for medication that has been
                  opened, used, or stored improperly.
                </p>
              </div>
            </div>
          </article>

          {/* 6. Confidentiality and Data Protection */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">6</span>
              Confidentiality and Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your health information is confidential and protected under UK
              data protection laws (GDPR and Data Protection Act 2018). We will
              only disclose your information with your consent, except where
              required by law.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For full details on how we collect, use, and protect your data,
              please refer to our Privacy Policy.
            </p>
          </article>

          {/* 7. Limitations of Liability */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">7</span>
              Limitations of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the extent permitted by law, Belvedere Pharmacy shall not be
              liable for:
            </p>
            <ul className="space-y-2 ml-6">
              {TERMS_LIABILITY.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* 8. Professional Standards */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">8</span>
              Professional Standards and Complaints
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to providing high-quality care. Our team is
              regulated by the GPhC and follows their standards and guidance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you wish to make a complaint, please contact us at
              info@belvederepharmacy.com or visit our pharmacy. We will
              investigate and respond to complaints within 10 working days.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You also have the right to complain to the GPhC if you believe we
              have breached professional standards.
            </p>
          </article>

          {/* 9. Website Use */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">9</span>
              Website Use
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  9.1 Acceptable Use
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree not to use our website or services for illegal
                  purposes, harassment, or to transmit harmful or malicious
                  code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  9.2 Intellectual Property
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All content on our website, including text, images, and logos,
                  is the property of Belvedere Pharmacy and protected by
                  copyright. You may not reproduce or distribute without
                  permission.
                </p>
              </div>
            </div>
          </article>

          {/* 10. Amendments */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">10</span>
              Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Changes will be
              posted on this page, and the "Last updated" date will be revised.
              Your continued use of our services constitutes acceptance of the
              revised Terms.
            </p>
          </article>

          {/* 11. Governing Law */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">11</span>
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of England and Wales. Any disputes arising from these Terms
              shall be subject to the exclusive jurisdiction of the English
              courts.
            </p>
          </article>

          {/* 12. Contact */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">12</span>
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-2">
              <p className="text-gray-900 font-semibold">Belvedere Pharmacy</p>
              <p className="text-gray-700">11 Picardy Street</p>
              <p className="text-gray-700">Belvedere, Kent DA17 5QQ</p>
              <p className="text-gray-700">Phone: +44 (0) 123 456 7890</p>
              <p className="text-gray-700">Email: info@belvederepharmacy.com</p>
            </div>
          </article>
        </WidthConstraint>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
