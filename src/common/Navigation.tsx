"use client";
import { Disclosure } from "@headlessui/react";
import { BiX, BiMenu } from "react-icons/bi";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Language from "./elements/Language";
import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export const navigation = [
  { id: 0, name: "home", href: "#home" },
  { id: 1, name: "education", href: "#education" },
  { id: 2, name: "about", href: "#about" },
  { id: 3, name: "contact", href: "#contact" },
];

const social = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/smallboyc",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/maxence-dupuis-19559025a/",
  },
];

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("navigation");
  const [navShadow, setNavShadow] = useState(false);
  useEffect(() => {
    const handleNavShadow = () => {
      if (window.scrollY >= 85) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleNavShadow);
  }, []);
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className={classNames(
        navShadow && "shadow-md",
        "bg-white sticky top-0 z-30 duration-200 ease-in"
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-container py-2">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    alt=""
                    src="/images/logo-dm-max.png"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="hidden md:ml-12 lg:flex md:space-x-10 items-center">
                  {navigation.map((nav) => (
                    <Link
                      key={nav.id}
                      href={nav.href}
                      className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-900"
                    >
                      {t(nav.name)}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6">
                  {social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <div className="hidden md:block">
                  <Language locale={locale} />
                </div>
                <div className="flex gap-2">
                  <a href="/works">
                    <button
                      type="button"
                      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-variation px-3 py-2 text-base font-semibold text-black NavShadow-sm hover:bg-variation/80 hover:scale-105 duration-100 ease-out tracking-wider"
                    >
                      works
                    </button>
                  </a>
                  <div className="-ml-2 mr-2 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black  ml-2">
                      {open ? (
                        <BiX className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <BiMenu className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden shadow-md absolute bg-white w-full NavShadow duration-300 ease-out">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((nav) => (
                <Disclosure.Button
                  key={nav.id}
                  as="a"
                  href={nav.href}
                  className="py-2 text-base font-medium block border-l-4 pl-5 sm:pr-6 hover:bg-indigo-50 duration-100 ease-out"
                >
                  {t(nav.name)}
                </Disclosure.Button>
              ))}

              <div className="flex md:hidden space-x-6 mx-6 pt-2">
                {social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <div className="block md:hidden w-24 ml-3 pt-4">
                <Language locale={locale} />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
