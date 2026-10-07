export type BlogStatus = "draft" | "published" | "archived" | "scheduled";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  userId?: string;
};

export type BlogSeo = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags?: string[];
  author?: BlogAuthor;
  tenantIds: string[];
  status: BlogStatus;
  featured?: boolean;
  pinned?: boolean;
  readTimeMinutes?: number;
  seo?: BlogSeo;
  publishedAt: string | null;
  scheduledAt?: string | null;
  createdAt: string | null;
  updatedAt?: string | null;
  views?: number;
};
