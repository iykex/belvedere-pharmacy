import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Menu from "@/components/navigation/navigation-menu";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import CTASection from "@/components/shared/cta-section";
import { BlogContentRenderer } from "@/components/blog/blog-content-renderer";
import {
  getBlogPostBySlug,
  getRelatedBlogs,
} from "@/lib/server/blog-service";
import { getTenantSlug, TENANT_DISPLAY_NAMES } from "@/lib/config/tenant";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tenantSlug = getTenantSlug();
  const pharmacyName = TENANT_DISPLAY_NAMES[tenantSlug] || "Meckay Pharmacy";
  const blog = await getBlogPostBySlug(slug, tenantSlug);

  if (!blog) {
    return {
      title: `Article Not Found | ${pharmacyName}`,
      description: "The requested health article could not be found.",
    };
  }

  const title = blog.seo?.metaTitle || `${blog.title} | ${pharmacyName}`;
  const description = blog.seo?.metaDescription || blog.excerpt;
  const canonicalUrl = `/blogs/${blog.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: blog.publishedAt || undefined,
      authors: [blog.author?.name || `${pharmacyName} Team`],
      images: blog.coverImage
        ? [
            {
              url: blog.coverImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.coverImage ? [blog.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tenantSlug = getTenantSlug();
  const pharmacyName = TENANT_DISPLAY_NAMES[tenantSlug] || "Meckay Pharmacy";
  const blog = await getBlogPostBySlug(slug, tenantSlug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.slug, blog.category, tenantSlug, 3);

  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Recently Published";

  return (
    <div className="overflow-hidden space-y-12 sm:space-y-16 pb-28 pt-24 sm:pt-28 bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Health Guides & Articles", path: "/blogs" },
          { name: blog.title, path: `/blogs/${blog.slug}` },
        ]}
      />

      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all health articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 sm:space-y-6 border-b pb-8">
          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full font-bold bg-primary/10 text-primary uppercase tracking-wider font-mono">
              {blog.category}
            </span>
            {blog.readTimeMinutes && (
              <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                <Clock className="size-3.5" />
                <span>{blog.readTimeMinutes} min read</span>
              </span>
            )}
            <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
              <Calendar className="size-3.5" />
              <span>{formattedDate}</span>
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-[1.18]">
            {blog.title}
          </h1>

          {/* Lead Excerpt */}
          {blog.excerpt && (
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
              {blog.excerpt}
            </p>
          )}

          {/* Author & Medically Reviewed Credential */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold text-sm shrink-0">
                {blog.author?.avatar ? (
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="size-full rounded-full object-cover"
                  />
                ) : (
                  <User className="size-5" />
                )}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  {blog.author?.name || "Clinical Pharmacy Team"}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="size-3.5 text-emerald-600" />
                  <span>{blog.author?.role || "Superintendent Pharmacist"}</span>
                </div>
              </div>
            </div>

            {/* Medically Reviewed Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-semibold self-start sm:self-auto">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              <span>Medically Reviewed Clinical Guide</span>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        {blog.coverImage && (
          <div className="my-8 rounded-2xl overflow-hidden border border-border/60 shadow-md">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full max-h-[460px] object-cover"
            />
          </div>
        )}

        {/* Article Body Content */}
        <article className="pt-4 pb-12">
          <BlogContentRenderer content={blog.content} />
        </article>

        {/* Clinical Disclaimer Box */}
        <div className="my-10 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-blue-950 dark:text-blue-200 text-xs sm:text-sm leading-relaxed space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-foreground text-sm">
            <ShieldCheck className="size-4 text-blue-600" /> Clinical & Healthcare Guidance Disclaimer
          </div>
          <p className="text-muted-foreground">
            This guide is prepared for health education and clinical advice under NHS Community Pharmacy guidelines. Treatments, dosages, and recommendations may vary based on personal medical history. If you experience severe symptoms, chest pain, or difficulty breathing, call <strong>999</strong> immediately.
          </p>
        </div>

        {/* Action Banner to Consult Pharmacist */}
        <div className="my-12 p-8 rounded-3xl bg-linear-to-br from-[#002f4b] to-[#004d7a] text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-white/15 text-white inline-block">
              Consult Our Pharmacists
            </span>
            <h3 className="text-2xl font-black tracking-tight">
              Need Treatment or Consultation?
            </h3>
            <p className="text-sm text-slate-200 max-w-lg leading-relaxed">
              Visit {pharmacyName} or book an accredited NHS Pharmacy First clinical assessment with our registered pharmacists today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm text-center shadow-md transition-all active:scale-95"
            >
              Book Clinical Assessment
            </Link>
            <Link
              href="/pharmacies"
              className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm text-center border border-white/20 transition-all active:scale-95"
            >
              View Pharmacy Details
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <div className="pt-12 border-t space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">Related Health Guides</h3>
                <p className="text-xs text-muted-foreground">Explore more clinical advice from our duty pharmacists</p>
              </div>
              <Link
                href="/blogs"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                <span>View all articles</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  className="group rounded-2xl border bg-card p-4 hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    {rel.coverImage && (
                      <div className="rounded-xl overflow-hidden aspect-video bg-muted/20">
                        <img
                          src={rel.coverImage}
                          alt={rel.title}
                          className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary font-mono inline-block">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t text-[11px] text-primary font-bold flex items-center gap-1">
                    <span>Read guide</span>
                    <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <CTASection />
    </div>
  );
}
