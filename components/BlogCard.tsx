import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }: any) {
  return (
    <Link
  href={`/blogs/${blog.slug}`}
  className="group w-[370px] rounded-xl border border-gray-700 overflow-hidden bg-[#111] hover:border-[#f5efdd] transition-all duration-300"
>
      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
        height={300}
        className="w-full h-56 object-cover group-hover:scale-105 duration-500"
      />

      <div className="p-5">

        <h2 className="font-semibold text-lg mb-3 line-clamp-2">

          {blog.title}

        </h2>

        <p className="text-gray-400 text-sm line-clamp-3">

          {blog.description}

        </p>




      </div>
    </Link>
  );
}