import { Title } from "@/common/typography";
import Image from "next/image";

export default function Tools({ data }: any) {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-5 items-center">
        <Title
          size={Title.size.XLARGE}
          weight={Title.weight.BOLD}
          color={Title.color.PRIMARY}
        >
          {data.title}
        </Title>
        <div className="flex flex-wrap gap-10 justify-center ">
          {data.technos.map((techno: any) => (
            <>
              {" "}
              <div
                key={techno.id}
                className=" p-4 flex items-center"
              >
                <Image
                  className="object-contain w-16 h-16 hover:scale-105 duration-150 ease-in-out rounded-xl tracking-wider"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${techno.image.data.attributes.url}`}
                  alt="Transistor"
                  width={500}
                  height={500}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
