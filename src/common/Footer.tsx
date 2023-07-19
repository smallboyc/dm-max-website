"use client";
import { navigation } from "./Navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Text } from "./typography";
import { useTranslations } from "next-intl";

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

export default function Footer() {
  const t = useTranslations("navigation");
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-10">
        <nav
          className="-mb-6 columns-2 flex justify-center space-x-8 sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.id} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {t(item.name)}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-10  leading-5">
          <Text
            align={Text.align.CENTER}
            size={Text.size.SMALL}
            color={Text.color.GRAY}
          >
            {" "}
            &copy; 2023 Maxence Dupuis.
          </Text>
        </div>
      </div>
    </footer>
  );
}
