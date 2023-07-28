"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Head({ data }: any) {
  const pathname = usePathname();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((post: any) => (
            <article key={post.id} className="flex flex-col ">
              <Link
                href={
                  pathname.includes(post.attributes.domain.data.attributes.slug)
                    ? `${pathname}/${post.attributes.slug}`
                    : `/works/${post.attributes.domain.data.attributes.slug}/${post.attributes.slug}`
                }
              >
                <div className="relative w-full hover:opacity-90 ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.image.data.attributes.url}`}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </Link>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="" className="text-gray-500">
                    {post.attributes.released}
                  </time>
                  <Link
                    href={`${pathname}/${post.attributes.domain.data.attributes.slug}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.attributes.domain.data.attributes.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link
                      href={
                        pathname.includes(
                          post.attributes.domain.data.attributes.slug
                        )
                          ? `${pathname}/${post.attributes.slug}`
                          : `${pathname}/${post.attributes.domain.data.attributes.slug}/${post.attributes.slug}`
                      }
                    >
                      <span className="absolute inset-0" />
                      {post.attributes.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.attributes.plot}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src="/images/me.jpg"
                    className="h-10 w-10 rounded-full bg-gray-100"
                    width={500}
                    height={500}
                    alt={""}
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.attributes.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
