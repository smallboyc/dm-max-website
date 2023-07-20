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

const features = [
  {
    name: "Clear.",
    description:
      "I wanted to create an interface in which I could organize and share all my different projects and creations!",
    icon: BookOpenIcon,
  },
  {
    name: "Share.",
    description: "You can interact on some projects by posting comments.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Up to date.",
    description:
      "Feel free to keep an eye on the latest projects by joining my newsletter via the contact form!",
    icon: ArrowPathIcon,
  },
  {
    name: "Simple.",
    description: "Quick documentation is available",
    icon: FaceSmileIcon,
  },
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
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
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-16 lg:mt-0 mb-5">
            <div className="inline-flex space-x-4">
              <span className="rounded-full bg-variation/10 px-3 py-1 leading-6 ring-1 ring-inset ring-variation/10">
                <Text
                  size={Text.size.SMALL}
                  weight={Text.weight.SEMIBOLD}
                  color={Text.color.VARIATION}
                >
                  Creative Student
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
              Follow my projects through the{" "}
              <span className="text-variation/80">works</span> platform
            </Title>
          </span>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-gray-900"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex items-center gap-x-6 ">
            <a
              href="#"
              className="rounded-md bg-variation px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-variation/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-variation"
            >
              Discover
            </a>
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Discover <span aria-hidden="true">→</span>
            </a> */}
            <Flyout />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/images/test.jpg"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
