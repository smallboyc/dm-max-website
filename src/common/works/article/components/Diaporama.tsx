"use client";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import classNames from "classnames";
const numberOfImages = (images: any) => {
  let nb = 0;
  images.map((image: any) => nb++);
  return nb;
};
export default function Diaporama({ data }: any) {
  return (
    <div className={`grid lg:grid-cols-${numberOfImages(data.images)} gap-5`}>
      {data.images.map((image: any) => (
        <figure key={image.id} className={`col-span-${image.size} mt-16`}>
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
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
