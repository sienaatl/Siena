import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }: any) {
  return (
    <Link
  href={`/blogs/${blog.slug}`}
  className="siena-view-18 group"
>
      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
        height={300}
        className="siena-view-19"
      />

      <div className="p-5">

        <h2 className="siena-view-20">

          {blog.title}

        </h2>

        <p className="text-gray-400 text-sm line-clamp-3">

          {blog.description}

        </p>




      </div>
    </Link>
  );
}