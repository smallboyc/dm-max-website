"use client";
import { Title, Text } from "@/common/typography";
import { MdEngineering } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import Image from "next/image";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const education = [
  {
    id: 0,
    logo: "/images/logoIMAC.png",
    style: "h-12 w-16",
    logo_type: MdEngineering,
    type: "IMAC.type",
    name: "IMAC.name",
    date: "2023 - ?",
    description: "IMAC.content",
  },
  {
    id: 1,
    logo: "/images/NantesUniversite.png",
    style: "w-44 h-auto",
    logo_type: LiaSchoolSolid,
    type: "FAC.type",
    name: "FAC.name",
    date: "2020 - 2023",
    description: "FAC.content",
  },
];

export default function Education() {
  const t = useTranslations("education");
  return (
    <section id="education" className="scroll-mt-20 bg-slate-100/50 py-20">
      <div className="max-w-container flex flex-col items-center gap-10 justify-center">
        <div className="flex flex-col items-center gap-5">
          <Title
            size={Title.size.LARGE}
            color={Title.color.VARIATION}
            weight={Title.weight.BOLD}
          >
            {t("title")}
          </Title>
          <Text
            align={Text.align.CENTER}
            size={Text.size.LARGE}
            color={Text.color.GRAY}
            italic
          >
            {t("subtitle")}
          </Text>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {education.map((school) => (
              <div
                key={school.id}
                className={classNames(
                  school.id % 2 != 0
                    ? "border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
                    : "pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20",
                  "flex flex-col"
                )}
              >
                <div className={classNames(school.style, "flex self-start")}>
                  <Image src={school.logo} alt="" width={500} height={500} />
                </div>
                <div className="my-5">
                  <Text size={Text.size.SMALL} color={Text.color.GRAY}>
                    {school.date}
                  </Text>
                </div>
                <figure className="flex flex-auto flex-col justify-between">
                  <blockquote className="leading-8">
                    <Text size={Text.size.LARGE} color={Text.color.DARK}>
                      {t(school.description)}
                    </Text>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <div className="bg-variation p-2 rounded-xl">
                      <school.logo_type className="w-10 h-auto text-primary" />
                    </div>
                    <div className="text-base">
                      <Text
                        size={Text.size.NORMAL}
                        color={Text.color.DARK}
                        weight={Text.weight.BOLD}
                      >
                        {t(school.type)}
                      </Text>
                      <div className="mt-1">
                        <Text size={Text.size.NORMAL} color={Text.color.GRAY}>
                          {t(school.name)}
                        </Text>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
