"use client";
import { Title } from "@/common/typography";
import { Text } from "@/common/typography";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="flex flex-col mx-auto max-w-2xl lg:max-w-4xl gap-8">
        <div className="flex flex-col items-center gap-5">
          <Title
            size={Title.size.LARGE}
            color={Title.color.VARIATION}
            weight={Title.weight.BOLD}
          >
            {t("title")}
          </Title>
          <Text size={Text.size.LARGE} color={Text.color.GRAY} italic>
            {t("subtitle")}
          </Text>
        </div>
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className=" leading-8  sm:leading-9">
              <Text size={Text.size.LARGE} weight={Text.weight.BOLD}>
                {t("content")}
              </Text>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              src="/images/me.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <figcaption className="lg:col-start-1 lg:row-start-3">
            <Text
              size={Text.size.NORMAL}
              color={Text.color.DARK}
              weight={Text.weight.SEMIBOLD}
            >
              Maxence Dupuis
            </Text>
            <div className="mt-1 text-gray-500">
              <Text size={Text.size.NORMAL} color={Text.color.GRAY}>
                {t("status")}
              </Text>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
