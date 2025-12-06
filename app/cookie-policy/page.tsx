import Menu from "@/components/shared/navigation-menu";
import WidthConstraint from "@/components/shared/width-constraint";
import CTASection from "@/components/shared/cta-section";
import {
  COOKIE_POLICY_ESSENTIAL,
  COOKIE_POLICY_ANALYTICS,
  COOKIE_POLICY_MARKETING,
  COOKIE_POLICY_DURATION,
  COOKIE_POLICY_THIRD_PARTY,
  COOKIE_POLICY_PREFERENCES,
  COOKIE_POLICY_BROWSER_CONTROLS,
  COOKIE_POLICY_OPTOUT,
  COOKIE_POLICY_DETAILED_LIST,
  COOKIE_POLICY_SECURITY,
} from "@/lib/constants";

export default function CookiePolicyPage() {
  return (
    <div className="overflow-hidden space-y-20 sm:space-y-30 mb-30">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-linear-to-br from-primary/5 via-chart-2/5 to-chart-3/5">
        <WidthConstraint className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Cookie <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding how we use cookies to enhance your experience
          </p>
          <p className="text-sm text-gray-500">Last updated: December 2024</p>
        </WidthConstraint>
      </section>

      {/* Content Section */}
      <section>
        <WidthConstraint className="space-y-12">
          {/* 1. What Are Cookies */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">1</span>
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit a website. They
              allow websites to remember information about your visit, such as
              your preferences and login details.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies serve important functions, including improving website
              performance, personalizing your experience, and helping us
              understand how our website is used.
            </p>
          </article>

          {/* 2. Types of Cookies We Use */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">2</span>
              Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Essential Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for our website to function
                  properly. They enable core functionality such as security,
                  network management, and accessibility.
                </p>
                <ul className="space-y-2 ml-6">
                  {COOKIE_POLICY_ESSENTIAL.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 font-semibold">
                  These cookies cannot be disabled as the website would not
                  function without them.
                </p>
              </div>

              <div className="bg-chart-2/5 border border-chart-2/20 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Performance and Analytics Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies help us understand how visitors interact with
                  our website. They collect anonymous data about page visits,
                  user behavior, and site performance.
                </p>
                <ul className="space-y-2 ml-6">
                  {COOKIE_POLICY_ANALYTICS.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-chart-2 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 font-semibold">
                  You can disable these cookies without affecting website
                  functionality.
                </p>
              </div>

              <div className="bg-chart-3/5 border border-chart-3/20 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Marketing and Targeting Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies track your online activity to deliver
                  personalized advertising content and measure marketing
                  campaign effectiveness.
                </p>
                <ul className="space-y-2 ml-6">
                  {COOKIE_POLICY_MARKETING.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-chart-3 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 font-semibold">
                  You can disable these cookies through your browser settings or
                  opt-out services.
                </p>
              </div>
            </div>
          </article>

          {/* 3. Cookie Duration */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">3</span>
              How Long Cookies Last
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Cookies can be either session-based or persistent:
            </p>
            <ul className="space-y-3 ml-6">
              {COOKIE_POLICY_DURATION.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.type}:
                    </span>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* 4. Third-Party Cookies */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">4</span>
              Third-Party Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              In addition to our own cookies, third-party services may set
              cookies on your device:
            </p>
            <ul className="space-y-3 ml-6">
              {COOKIE_POLICY_THIRD_PARTY.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.service}
                    </span>
                    <p className="text-gray-700">{item.purpose}</p>
                    <p className="text-sm text-gray-600">{item.privacy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* 5. Your Cookie Preferences */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">5</span>
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have control over cookies on our website. When you first
              visit, you'll see a cookie consent banner where you can:
            </p>
            <ul className="space-y-2 ml-6">
              {COOKIE_POLICY_PREFERENCES.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can change your cookie preferences at any time by clicking the
              "Cookie Preferences" link in the footer of our website.
            </p>
          </article>

          {/* 6. Browser Controls */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">6</span>
              Browser Cookie Controls
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Most browsers allow you to control cookies through their settings:
            </p>
            <ul className="space-y-3 ml-6">
              {COOKIE_POLICY_BROWSER_CONTROLS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.browser}:
                    </span>
                    <p className="text-gray-700">{item.steps}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please note: Disabling essential cookies may affect website
              functionality and your ability to use certain features.
            </p>
          </article>

          {/* 7. Do Not Track */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">7</span>
              Do Not Track (DNT)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" feature that sends a signal
              to websites requesting they don't track your activity. Currently,
              there is no industry standard for recognizing DNT signals. We
              respect your privacy choices but continue to collect analytics
              data to improve our website unless you disable cookies in your
              browser settings.
            </p>
          </article>

          {/* 8. Opt-Out Options */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">8</span>
              Opting Out of Third-Party Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You can opt out of specific third-party services:
            </p>
            <ul className="space-y-3 ml-6">
              {COOKIE_POLICY_OPTOUT.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.service}:
                    </span>
                    <p className="text-gray-700 break-all">{item.link}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* 9. Specific Cookies We Use */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">9</span>
              Detailed Cookie List
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Below is a comprehensive list of cookies we use:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Cookie Name
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Duration
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIE_POLICY_DETAILED_LIST.map((cookie, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {cookie.name}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{cookie.type}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {cookie.duration}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {cookie.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* 10. Security */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">10</span>
              Cookie Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We take cookie security seriously:
            </p>
            <ul className="space-y-2 ml-6">
              {COOKIE_POLICY_SECURITY.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* 11. Contact Information */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">11</span>
              Questions About Our Cookie Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our cookie practices or how to manage
              your preferences, please contact us:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-2">
              <p className="text-gray-900 font-semibold">Belvedere Pharmacy</p>
              <p className="text-gray-700">11 Picardy Street</p>
              <p className="text-gray-700">Belvedere, Kent DA17 5QQ</p>
              <p className="text-gray-700">Phone: +44 (0) 123 456 7890</p>
              <p className="text-gray-700">Email: info@belvederepharmacy.com</p>
            </div>
          </article>

          {/* 12. Updates to Cookie Policy */}
          <article className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-primary font-bold text-4xl">12</span>
              Changes to This Cookie Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy periodically to reflect changes
              in technology, regulations, or our practices. The "Last updated"
              date at the top of this page indicates when it was last revised.
              We encourage you to review this policy regularly to stay informed
              about how we use cookies.
            </p>
          </article>
        </WidthConstraint>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
