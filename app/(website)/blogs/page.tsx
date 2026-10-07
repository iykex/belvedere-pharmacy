import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";
import Menu from "@/components/navigation/navigation-menu";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import CTASection from "@/components/shared/cta-section";
import { getPublishedBlogs } from "@/lib/server/blog-service";
import { getTenantSlug, TENANT_DISPLAY_NAMES } from "@/lib/config/tenant";

export async function generateMetadata(): Promise<Metadata> {
  const tenantSlug = getTenantSlug();
  const pharmacyName = TENANT_DISPLAY_NAMES[tenantSlug] || "Meckay Pharmacy";

  return {
    title: `Health Guides & Clinical Articles | ${pharmacyName}`,
    description: `Expert health guides, NHS Pharmacy First clinical advice, and wellness bulletins written and reviewed by registered pharmacists at ${pharmacyName}.`,
    alternates: {
      canonical: "/blogs",
    },
  };
}

export default async function BlogsIndexPage() {
  const tenantSlug = getTenantSlug();
  const blogs = await getPublishedBlogs(tenantSlug);

  const featuredBlog = blogs.find((b) => b.featured) || blogs[0];
  const regularBlogs = featuredBlog ? blogs.filter((b) => b.id !== featuredBlog.id) : blogs;

  return (
    <div className="overflow-hidden space-y-16 sm:space-y-24 pb-28 pt-24 sm:pt-28 bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Health Guides & Articles", path: "/blogs" },
        ]}
      />

      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Page Hero Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wider font-mono inline-block">
            Clinical Health Guides & Bulletins
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Evidence-Based Health Advice from Your Community Pharmacists
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Stay informed with verified NHS clinical guidance, seasonal wellness tips, and practical health education to support you and your family.
          </p>
        </section>

        {/* Featured Article Hero Card */}
        {featuredBlog && (
          <section className="rounded-3xl border border-border/70 overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {featuredBlog.coverImage && (
                <div className="lg:col-span-7 aspect-video lg:aspect-auto relative min-h-[280px] lg:min-h-[420px] bg-muted/20">
                  <img
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              )}
              <div className={`${featuredBlog.coverImage ? "lg:col-span-5" : "lg:col-span-12"} p-6 sm:p-10 flex flex-col justify-between space-y-6`}>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full font-bold bg-amber-400/20 text-amber-800 dark:text-amber-300 font-mono">
                      FEATURED GUIDE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md font-bold bg-primary/10 text-primary font-mono text-[11px]">
                      {featuredBlog.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-tight">
                    <Link
                      href={`/blogs/${featuredBlog.slug}`}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      {featuredBlog.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t flex items-center justify-between">
                  <div className="text-xs text-muted-foreground space-y-0.5">
                    <div className="font-bold text-foreground">
                      {featuredBlog.author?.name || "Clinical Pharmacy Team"}
                    </div>
                    {featuredBlog.readTimeMinutes && (
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{featuredBlog.readTimeMinutes} min read</span>
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles Grid */}
        {regularBlogs.length > 0 ? (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-xl font-extrabold text-foreground">All Clinical Guides</h3>
              <span className="text-xs font-mono text-muted-foreground">{regularBlogs.length} Article(s)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularBlogs.map((b) => (
                <article
                  key={b.id}
                  className="group rounded-2xl border border-border/70 bg-card overflow-hidden hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {b.coverImage && (
                      <div className="aspect-video relative overflow-hidden bg-muted/20">
                        <img
                          src={b.coverImage}
                          alt={b.title}
                          className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-0.5 rounded-md font-bold bg-primary/10 text-primary font-mono text-[11px]">
                          {b.category}
                        </span>
                        {b.readTimeMinutes && (
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
                            <Clock className="size-3" />
                            {b.readTimeMinutes} min
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        <Link href={`/blogs/${b.slug}`} className="cursor-pointer">
                          {b.title}
                        </Link>
                      </h4>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {b.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t mt-4 border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {b.publishedAt
                        ? new Date(b.publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Recently published"}
                    </span>
                    <Link
                      href={`/blogs/${b.slug}`}
                      className="font-bold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          !featuredBlog && (
            <div className="p-16 text-center rounded-3xl border bg-muted/10 space-y-3">
              <BookOpen className="size-8 text-muted-foreground mx-auto" />
              <div className="text-base font-bold text-foreground">No Articles Published Yet</div>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Our pharmacists are currently preparing new healthcare guides. Check back soon or visit our pharmacy for immediate consultations.
              </p>
            </div>
          )
        )}
      </main>

      <CTASection />
    </div>
  );
}
