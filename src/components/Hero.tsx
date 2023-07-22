"use client";
import Flyout from "@/common/elements/Flyout";
import {
  ChevronRightIcon,
  ChatBubbleBottomCenterIcon,
  ArrowPathIcon,
  FaceSmileIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";
import { Title, Text } from "@/common/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";

const features = [
  {
    name: "clear",
    description: "clear_content",
    icon: BookOpenIcon,
  },
  {
    name: "share",
    description: "share_content",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "up_to_date",
    description: "up_to_date_content",
    icon: ArrowPathIcon,
  },
  {
    name: "simple",
    description: "simple_content",
    icon: FaceSmileIcon,
  },
];

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <div id="home" className="scroll-mt-20">
      <div className="relative overflow-hidden isolate bg-white">
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />

        <div className="mx-auto max-w-7xl px-6 pb-24 md:pt-32 sm:pb-32 lg:flex xl:px-4 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <div className="mt-16 lg:mt-5 mb-5">
              <div className="inline-flex space-x-4">
                <span className="rounded-full bg-variation/10 px-3 py-1 leading-6 ring-1 ring-inset ring-variation/10">
                  <Text
                    size={Text.size.SMALL}
                    weight={Text.weight.SEMIBOLD}
                    color={Text.color.VARIATION}
                  >
                    {t("status")}
                  </Text>
                </span>

                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Text
                    size={Text.size.SMALL}
                    weight={Text.weight.NORMAL}
                    color={Text.color.GRAY}
                  >
                    Maxence Dupuis
                  </Text>
                </span>
              </div>
            </div>

            <span className="mt-10 tracking-tight">
              <Title size={Title.size.EXTRA} weight={Title.weight.BOLD}>
                {" "}
                {t("title_1")} <span className="text-variation/80">works</span>
                {t("title_2")}
              </Title>
            </span>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-primary">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    {t(feature.name)}
                  </dt>{" "}
                  <dd className="inline">{t(feature.description)}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex items-center gap-x-6 ">
              <a href="/works">
                <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-md bg-variation px-3 py-2 text-base font-semibold text-black NavShadow-sm hover:bg-variation/80 hover:scale-105 duration-100 ease-out tracking-wider"
                >
                  {t("button_discover")}
                </button>
              </a>
              <Flyout />
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-primary/5 p-2 ring-1 ring-inset ring-primary/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/images/banner.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-primary/10"
                />
                {/* <div className="w-[76rem] rounded-md shadow-2xl ring-1 ring-primary/10">
                  <iframe
                    width={1200}
                    height={670}
                    src="https://www.youtube.com/embed/ge8dJvs7MP0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
