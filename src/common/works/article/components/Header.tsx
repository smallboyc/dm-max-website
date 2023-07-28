"use client";
import { Title } from "@/common/typography";
import { Text } from "@/common/typography";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyle } from "@/lib/toast";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const CopyUrl = (pathname: any) => {
  navigator.clipboard.writeText(
    `${process.env.NEXT_PUBLIC_APP_URL}${pathname}`
  );
  toast.success("Lien copié !", toastStyle);
};

export default function Header({ data }: any) {
  const pathname = usePathname();
  return (
    <div className="pt-20 flex flex-col gap-5 md:gap-10">
      <div className="px-6 lg:px-8 border-l-2">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-col gap-4 ">
          <div className="flex gap-6 items-center">
            <div className="bg-variation/50 rounded-xl w-fit py-1 px-2">
              <Text size={Text.size.SMALL} color={Text.color.PRIMARY}>
                {data.work.data.attributes.released}
              </Text>
            </div>
            <div className="bg-variation/50 rounded-xl w-fit py-1 px-2">
              <Text size={Text.size.SMALL} color={Text.color.PRIMARY}>
                {data.work.data.attributes.author}
              </Text>
            </div>
            {data.share && (
              <AiOutlineShareAlt
                className="w-6 h-auto cursor-pointer"
                onClick={() => CopyUrl(pathname)}
              />
            )}
          </div>
          <Title
            size={Title.size.EXTRA}
            weight={Title.weight.BOLD}
            color={Title.color.PRIMARY}
          >
            {data.work.data.attributes.title}
          </Title>
          <Text size={Text.size.LARGE} color={Text.color.GRAY}>
            {data.work.data.attributes.plot}
          </Text>
        </div>
      </div>

      <figure
        key={data.id}
        className={classNames(
          data.banner.size != "full"
            ? `w-full max-w-${data.banner.size}`
            : "w-full"
        )}
      >
        <Image
          className={classNames(
            data.banner.ajusted && "aspect-video",
            "rounded-xl bg-gray-50 object-cover w-full"
          )}
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.banner.image.data.attributes.url}`}
          alt=""
          width={500}
          height={500}
        />
        {data.banner.link != null && (
          <Link href={data.banner.link} target="_blank">
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
      <ToastContainer />
    </div>
  );
}
