import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { SiNextdotjs, SiStrapi, SiTailwindcss } from "react-icons/si";
import { useTranslations } from "next-intl";

const solutions = [
  {
    name: "Next JS",
    description: "React Framework",
    href: "https://nextjs.org/",
    color: "black",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    description: "CSS Framework",
    href: "https://tailwindcss.com/",
    color: "rgb(6 182 212)",
    icon: SiTailwindcss,
  },
  {
    name: "Strapi",
    description: "Headless CMS",
    href: "https://strapi.io/",
    color: "#7D3BF8",
    icon: SiStrapi,
  },
];

export default function Flyout() {
  const t = useTranslations("hero")
  return (
    <Popover className="relative md:flex md:justify-center md:items-center">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none hover:border-none">
        <span>{t("button_made_with")}</span>
        <ChevronDownIcon className="md:hidden h-5 w-5" aria-hidden="true" />
        <ChevronRightIcon
          className="hidden md:block h-5 w-5"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10  mt-5 flex w-screen max-w-max -translate-x-1/4 px-4 md:translate-x-60 md:-translate-y-2">
          <div className="w-screen max-w-xs flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600"
                      color={item.color}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
