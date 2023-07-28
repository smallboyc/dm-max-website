"use client";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

export default function Diaporama({ data }: any) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10">
      {data.images.map((image: any) => (
        <figure
          key={image.id}
          className={classNames(
            image.size != "full" ? `w-full max-w-${image.size}` : "w-full"
          )}
        >
          <Image
            className={classNames(
              image.ajusted && "aspect-video",
              "rounded-xl bg-gray-50 object-cover w-full"
            )}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.image.data.attributes.url}`}
            alt=""
            width={500}
            height={500}
          />
          {image.link != null && (
            <Link href={image.link} target="_blank">
              <figcaption className="mt-2 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                source
              </figcaption>
            </Link>
          )}
        </figure>
      ))}
    </div>
  );
}
