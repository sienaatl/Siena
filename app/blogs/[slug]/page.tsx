import { blogs } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

// The canonical host. Every other page in the app resolves to the bare domain via
// metadataBase in app/layout.tsx — these blog URLs were the only ones still on www,
// which told Google the site lived at two different addresses.
const SITE_URL = "https://sienaatl.com";
const LOGO_URL = `${SITE_URL}/assets/logo_beige.png`;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// The posts in blog-data are the complete set. Without this, Next generates a page
// on demand for any slug it is given and answers 200, so deleted and mistyped blog
// URLs looked alive to Google and stayed indexed.
export const dynamicParams = false;

// Static Routes
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const url = `${SITE_URL}/blogs/${blog.slug}`;

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      url,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    // Article heading (visitor sees this)
    headline: blog.title,

    image: [`${SITE_URL}${blog.image}`],

    // SEO description
    description: blog.seo.description,

    datePublished: blog.publishedAt,

    dateModified: blog.updatedAt,

    author: {
      "@type": "Organization",
      name: blog.author,
    },

    publisher: {
      "@type": "Organization",
      name: "Siena Restaurant",
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <section className="max-w-5xl mx-auto px-5 py-14">
        {/* Blog Title */}

        <h1 className="text-4xl md:text-4xl font-bold text-center leading-tight mt-15 text-[#e0b265]">
          {blog.title}
        </h1>

        {/* Publish Date */}

        <p className="text-center text-white/50 mt-4">
          Published on {blog.publishedAt}
        </p>

        {/* Featured Image */}

        <div className="mt-10">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={700}
            priority
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Blog Description */}

        <p className="text-lg mt-10 text-white/70">
          {blog.description}
        </p>

        {/* Blog Content */}

        <article
          className="prose prose-lg max-w-none mt-12 text-white/70"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </section>
    </>
  );
}