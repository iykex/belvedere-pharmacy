import Menu from "@/components/shared/navigation-menu";
import WidthConstraint from "@/components/shared/width-constraint";
import CTASection from "@/components/shared/cta-section";
import {
  PRIVACY_POLICY_PERSONAL_INFO,
  PRIVACY_POLICY_AUTO_COLLECTED,
  PRIVACY_POLICY_LEGAL_BASIS,
  PRIVACY_POLICY_USE_CASES,
  PRIVACY_POLICY_SHARING,
  PRIVACY_POLICY_SECURITY,
  PRIVACY_POLICY_DATA_RETENTION,
  PRIVACY_POLICY_USER_RIGHTS,
  PRIVACY_POLICY_COOKIES,
} from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden space-y-20 sm:space-y-30 mb-30">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-linear-to-br from-primary/5 via-chart-2/5 to-chart-3/5">
        <WidthConstraint className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How we collect, use, and protect your personal data
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
              Belvedere Pharmacy ("we", "us", or "our") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website, use our mobile applications, and access our
              pharmacy services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, please do not use our services.
              Your continued use of our services signifies your acceptance of
              this Privacy Policy.
            </p>
          </article>

          {/* 2. Information We Collect */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">2</span>
              Information We Collect
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2.1 Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect personal information that you voluntarily provide,
                  including:
                </p>
                <ul className="space-y-2 ml-6">
                  {PRIVACY_POLICY_PERSONAL_INFO.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2.2 Automatically Collected Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you use our website or apps, we automatically collect:
                </p>
                <ul className="space-y-2 ml-6">
                  {PRIVACY_POLICY_AUTO_COLLECTED.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2.3 Health Data
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Health information is special category data under GDPR. We
                  only collect and process health data with your explicit
                  consent and as necessary to provide pharmacy services. This
                  information is handled with the highest level of
                  confidentiality.
                </p>
              </div>
            </div>
          </article>

          {/* 3. Legal Basis for Processing */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">3</span>
              Legal Basis for Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We process your data on the following legal bases:
            </p>
            <ul className="space-y-3 ml-6">
              {PRIVACY_POLICY_LEGAL_BASIS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                    <p className="text-gray-700">– {item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* 4. How We Use Your Information */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">4</span>
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use your information for the following purposes:
            </p>
            <ul className="space-y-2 ml-6">
              {PRIVACY_POLICY_USE_CASES.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* 5. Sharing Your Information */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">5</span>
              Sharing Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may share your information with:
            </p>
            <ul className="space-y-3 ml-6">
              {PRIVACY_POLICY_SHARING.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                    <p className="text-gray-700">– {item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We never sell your personal information to third parties for
              marketing purposes.
            </p>
          </article>

          {/* 6. Data Security */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">6</span>
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We implement comprehensive security measures to protect your
              information:
            </p>
            <ul className="space-y-2 ml-6">
              {PRIVACY_POLICY_SECURITY.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              While we strive to protect your information, no method of
              transmission over the Internet is 100% secure. We cannot guarantee
              absolute security.
            </p>
          </article>

          {/* 7. Data Retention */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">7</span>
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We retain your information for as long as necessary to provide
              services and comply with legal obligations:
            </p>
            <ul className="space-y-3 ml-6">
              {PRIVACY_POLICY_DATA_RETENTION.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.category}:
                    </span>
                    <p className="text-gray-700">{item.period}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Once the retention period expires, we securely delete or anonymise
              your information.
            </p>
          </article>

          {/* 8. Your Rights */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">8</span>
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Under UK data protection laws (GDPR and Data Protection Act 2018),
              you have the following rights:
            </p>
            <ul className="space-y-3 ml-6">
              {PRIVACY_POLICY_USER_RIGHTS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.right}
                    </span>
                    <p className="text-gray-700">– {item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the
              details in section 11.
            </p>
          </article>

          {/* 9. Cookies and Tracking */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">9</span>
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our website uses cookies to enhance your experience:
            </p>
            <ul className="space-y-3 ml-6">
              {PRIVACY_POLICY_COOKIES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.type}
                    </span>
                    <p className="text-gray-700">– {item.purpose}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. Please note
              that disabling some cookies may affect website functionality.
            </p>
          </article>

          {/* 10. Third-Party Links */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">10</span>
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites and
              services. We are not responsible for their privacy practices. We
              recommend reviewing their privacy policies before providing
              personal information.
            </p>
          </article>

          {/* 11. International Transfers */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">11</span>
              International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is stored in the United Kingdom. If we transfer
              data internationally, we ensure appropriate safeguards are in
              place under relevant data protection regulations.
            </p>
          </article>

          {/* 12. Children's Privacy */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">12</span>
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are intended for adults (18+). We do not knowingly
              collect personal information from children. If we become aware
              that a child has provided information, we will delete it
              immediately.
            </p>
          </article>

          {/* 13. Data Protection Officer */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">13</span>
              Data Protection Officer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We have appointed a Data Protection Officer to oversee our data
              protection practices. You can contact our DPO with any data
              protection concerns.
            </p>
          </article>

          {/* 14. Contact Information */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">14</span>
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your data
              rights, please contact us:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-2">
              <p className="text-gray-900 font-semibold">Belvedere Pharmacy</p>
              <p className="text-gray-700">11 Picardy Street</p>
              <p className="text-gray-700">Belvedere, Kent DA17 5QQ</p>
              <p className="text-gray-700">Phone: +44 (0) 123 456 7890</p>
              <p className="text-gray-700">Email: info@belvederepharmacy.com</p>
              <p className="text-gray-700">
                DPO Email: dpo@belvederepharmacy.com
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              You also have the right to lodge a complaint with the Information
              Commissioner's Office (ICO) at www.ico.org.uk.
            </p>
          </article>

          {/* 15. Changes to This Policy */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">15</span>
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated "Last updated" date. We
              encourage you to review this policy periodically to stay informed
              about how we protect your information.
            </p>
          </article>
        </WidthConstraint>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
