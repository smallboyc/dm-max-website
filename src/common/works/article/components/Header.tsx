import { Title } from "@/common/typography";
import { Text } from "@/common/typography";
import Image from "next/image";

export default function Header({ data }: any) {
  console.log(data);
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-52">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.banner.data.attributes.url}`}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75"
        width={500}
        height={500}
      />
      <div className=" lg:px-8 mx-auto max-w-4xl px-12">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-col gap-5">
          <Title
            size={Title.size.EXTRA}
            weight={Title.weight.BOLD}
            color={Title.color.VARIATION}
          >
            {data.work.data.attributes.title}
          </Title>

          <Text size={Text.size.LARGE} color={Text.color.WHITE}>
            {data.work.data.attributes.plot}
          </Text>
          <Text size={Text.size.LARGE} color={Text.color.WHITE}>
            {data.work.data.attributes.released}
          </Text>
        </div>
      </div>
    </div>
  );
}
