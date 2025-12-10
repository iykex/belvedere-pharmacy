import Menu from "@/components/shared/navigation-menu";
import WidthConstraint from "@/components/shared/width-constraint";
import CTASection from "@/components/shared/cta-section";
import { PRIVACY_POLICY_SECTIONS } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden space-y-18 pb-30">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      {/* Hero Section */}
      <section className="pt-34 sm:pt-[10%]">
        <WidthConstraint className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white z-10">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto z-10">
            How we collect, use, and protect your personal data
          </p>
          <p className="text-sm text-gray-500 dark:text-white/60">
            Last updated: 1st May 2024
          </p>
        </WidthConstraint>
      </section>

      {/* Content Section */}
      <section className="bg-white dark:bg-transparent">
        <WidthConstraint className="space-y-12 py-8">
          <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-8 lg:px-12">
            {PRIVACY_POLICY_SECTIONS.map((section, idx) => (
              <article key={idx} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="text-primary font-bold text-4xl">
                    {section.number}
                  </span>
                  {section.title}
                </h2>

                {/* Paragraphs Type */}
                {section.type === "paragraphs" &&
                  section.content?.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-gray-700 dark:text-white/60 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                {/* Bullet Points Type */}
                {section.type === "bulletPoints" && (
                  <>
                    {section.beforeText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed">
                        {section.beforeText}
                      </p>
                    )}
                    <ul className="space-y-2 ml-6">
                      {section.bulletPoints?.map((point: any, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-gray-700 dark:text-white/60 flex items-start gap-3"
                        >
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>
                            {typeof point === "string"
                              ? point
                              : point.title || point.right || point.category}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {section.afterText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed mt-4">
                        {section.afterText}
                      </p>
                    )}
                  </>
                )}

                {/* Bullet Points with Titles Type */}
                {section.type === "bulletPointsWithTitles" && (
                  <>
                    {section.beforeText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed mt-4">
                        {section.beforeText}
                      </p>
                    )}
                    <ul className="space-y-3 ml-6">
                      {section.bulletPoints?.map((point: any, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {point.title || point.right}
                            </span>
                            <p className="text-gray-700 dark:text-white/60">
                              {point.desc || point.purpose}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {section.afterText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed mt-4">
                        {section.afterText}
                      </p>
                    )}
                  </>
                )}

                {/* Bullet Points with Category Type */}
                {section.type === "bulletPointsWithCategory" && (
                  <>
                    {section.beforeText && (
                      <p className="text-gray-700 dark:text-white leading-relaxed mb-3">
                        {section.beforeText}
                      </p>
                    )}
                    <ul className="space-y-3 ml-6">
                      {section.bulletPoints?.map((point: any, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {point.category}:
                            </span>
                            <p className="text-gray-700 dark:text-white/60">
                              {point.period}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {section.afterText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed mt-4">
                        {section.afterText}
                      </p>
                    )}
                  </>
                )}

                {/* Complex Subsections Type */}
                {section.type === "complexSubsections" && (
                  <div className="space-y-4">
                    {section.subsections?.map((subsection, sIdx) => (
                      <div key={sIdx}>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {subsection.title}
                        </h3>
                        {subsection.beforeText && (
                          <p className="text-gray-700 dark:text-white/60 leading-relaxed mb-3">
                            {subsection.beforeText}
                          </p>
                        )}
                        {subsection.bulletPoints && (
                          <ul className="space-y-2 ml-6">
                            {subsection.bulletPoints.map((point, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-gray-700 dark:text-white/60 flex items-start gap-3"
                              >
                                <span className="text-primary font-bold mt-1">
                                  •
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {subsection.description && (
                          <p className="text-gray-700 dark:text-white leading-relaxed">
                            {subsection.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Contact Type */}
                {section.type === "contact" && (
                  <>
                    {section.beforeText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed mb-4">
                        {section.beforeText}
                      </p>
                    )}
                    {section.contactInfo && (
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-2">
                        <p className="text-gray-900 dark:text-white font-semibold">
                          {section.contactInfo.name}
                        </p>
                        <p className="text-gray-700 dark:text-white/60">
                          {section.contactInfo.address1}
                        </p>
                        <p className="text-gray-700 dark:text-white/60">
                          {section.contactInfo.address2}
                        </p>
                        <p className="text-gray-700 dark:text-white/60">
                          Phone: {section.contactInfo.phone}
                        </p>
                        <p className="text-gray-700 dark:text-white/60">
                          Email: {section.contactInfo.email}
                        </p>
                        {section.contactInfo.dpoEmail && (
                          <p className="text-gray-700 dark:text-white/60">
                            DPO Email: {section.contactInfo.dpoEmail}
                          </p>
                        )}
                      </div>
                    )}
                    {section.afterText && (
                      <p className="text-gray-700 dark:text-white/60 leading-relaxed mt-4">
                        {section.afterText}
                      </p>
                    )}
                  </>
                )}
              </article>
            ))}
          </div>
        </WidthConstraint>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
