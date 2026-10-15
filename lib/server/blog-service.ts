import { getAdminDb } from "@/lib/firebase/firebase-admin";
import type { BlogPost } from "@/lib/types/blog";
import { CURATED_BLOG_POSTS } from "@/lib/data/curated-blogs";

function mapDocToBlog(id: string, data: any): BlogPost {
  const publishedAt = data.publishedAt?.toDate
    ? data.publishedAt.toDate().toISOString()
    : typeof data.publishedAt === "string"
    ? data.publishedAt
    : null;

  const createdAt = data.createdAt?.toDate
    ? data.createdAt.toDate().toISOString()
    : typeof data.createdAt === "string"
    ? data.createdAt
    : null;

  const updatedAt = data.updatedAt?.toDate
    ? data.updatedAt.toDate().toISOString()
    : typeof data.updatedAt === "string"
    ? data.updatedAt
    : null;

  return {
    id,
    title: String(data.title || "Health Guide"),
    slug: String(data.slug || id),
    excerpt: String(data.excerpt || ""),
    content: String(data.content || ""),
    coverImage: data.coverImage || undefined,
    category: String(data.category || "Health & Wellness"),
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: data.author || {
      name: "Clinical Pharmacy Team",
      role: "Superintendent Pharmacist",
    },
    tenantIds: Array.isArray(data.tenantIds) ? data.tenantIds : ["belvedere"],
    status: data.status || "published",
    featured: Boolean(data.featured),
    pinned: Boolean(data.pinned),
    readTimeMinutes: Number(data.readTimeMinutes) || 3,
    seo: data.seo || undefined,
    publishedAt,
    scheduledAt: data.scheduledAt || null,
    createdAt,
    updatedAt,
    views: Number(data.views) || 0,
  };
}

export async function getBlogPostBySlug(
  slug: string,
  tenantId: string = "belvedere"
): Promise<BlogPost | null> {
  try {
    const db = getAdminDb();
    if (db) {
      const snap = await db
        .collection("blogs")
        .where("slug", "==", slug)
        .limit(1)
        .get();

      if (!snap.empty) {
        const doc = snap.docs[0];
        const blog = mapDocToBlog(doc.id, doc.data());

        if (
          blog.status === "published" &&
          (!tenantId || blog.tenantIds.length === 0 || blog.tenantIds.includes(tenantId))
        ) {
          return blog;
        }
      }
    }
  } catch (error) {
    console.warn(`[BlogService] Firestore check failed for slug "${slug}", checking curated blogs:`, error);
  }

  // Fallback to high-authority curated guides
  const curated = CURATED_BLOG_POSTS.find(
    (b) => b.slug === slug && (!tenantId || b.tenantIds.includes(tenantId))
  );

  return curated || null;
}

export async function getPublishedBlogs(
  tenantId: string = "belvedere"
): Promise<BlogPost[]> {
  const blogsMap = new Map<string, BlogPost>();

  // First populate curated blogs
  CURATED_BLOG_POSTS.forEach((curated) => {
    if (!tenantId || curated.tenantIds.includes(tenantId)) {
      blogsMap.set(curated.slug, curated);
    }
  });

  try {
    const db = getAdminDb();
    if (db) {
      const snap = await db
        .collection("blogs")
        .where("status", "==", "published")
        .get();

      snap.forEach((doc) => {
        const blog = mapDocToBlog(doc.id, doc.data());
        if (!tenantId || blog.tenantIds.includes(tenantId)) {
          // Firestore document overrides curated post with matching slug
          blogsMap.set(blog.slug, blog);
        }
      });
    }
  } catch (error) {
    console.warn("[BlogService] Firestore published blogs lookup failed, serving curated blogs:", error);
  }

  const blogs = Array.from(blogsMap.values());

  // Sort by publishedAt desc
  blogs.sort((a, b) => {
    const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return timeB - timeA;
  });

  return blogs;
}

export async function getRelatedBlogs(
  currentSlug: string,
  category?: string,
  tenantId: string = "belvedere",
  limitCount: number = 3
): Promise<BlogPost[]> {
  const allBlogs = await getPublishedBlogs(tenantId);
  const otherBlogs = allBlogs.filter((b) => b.slug !== currentSlug);

  if (category) {
    const sameCategory = otherBlogs.filter((b) => b.category === category);
    if (sameCategory.length >= limitCount) {
      return sameCategory.slice(0, limitCount);
    }
  }

  return otherBlogs.slice(0, limitCount);
}
