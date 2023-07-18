"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";

export const navigation = [
  { id: 0, name: "home", href: "/" },
  { id: 1, name: "education", href: "/education" },
  { id: 2, name: "about", href: "/about" },
  { id: 3, name: "contact", href: "/contact" },
];

export default function Navigation() {
  const [NavBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleNavBg = () => {
      if (window.scrollY >= 85) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleNavBg);
  }, []);

  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className={classNames(
        NavBg && "bg-white",
        "sticky top-0 z-10 duration-200 ease-in"
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-container py-2">
            <div className="flex h-16 justify-between">
              <div className="flex">
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
                      {nav.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:flex space-x-6 mx-6">
                  <FaGithub className="h-5 w-auto" />
                  <FaLinkedin className="h-5 w-auto" />
                </div>
                <div className="flex gap-2">
                  <a href="/works">
                    <button
                      type="button"
                      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-variation px-3 py-2 text-base font-semibold text-black NavBg-sm hover:bg-variation/80 hover:scale-105 duration-100 ease-out tracking-wider"
                    >
                      works
                    </button>
                  </a>
                  <div className="-ml-2 mr-2 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black  ml-2">
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden absolute bg-white w-full NavBg">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((nav) => (
                <Disclosure.Button
                  key={nav.id}
                  as="a"
                  href={nav.href}
                  className={classNames(
                    nav.href == pathname &&
                      " border-variation text-variation/80 bg-indigo-50 ",
                    " py-2 pl-3 pr-4 text-base font-medium block border-l-4 sm:pl-5 sm:pr-6"
                  )}
                >
                  {nav.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
