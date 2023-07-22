import {
  AcademicCapIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
  CubeIcon,
  HomeIcon,
  PencilIcon,
  PuzzlePieceIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { PiArticleMediumBold } from "react-icons/pi";

const navigation = [
  { slug: "home", icon: HomeIcon },
  { slug: "web", icon: ComputerDesktopIcon },
  { slug: "2d-3d", icon: CubeIcon },
  { slug: "video", icon: VideoCameraIcon },
  { slug: "art", icon: PencilIcon },
  { slug: "game", icon: PuzzlePieceIcon },
  { slug: "data-ml-dl", icon: ChartPieIcon },
  { slug: "entertainment", icon: PiArticleMediumBold },
];

const type = [
  { name: "School", href: "#", icon: AcademicCapIcon },
  { name: "Personal", href: "#", icon: UserIcon },
  { name: "Team", href: "#", icon: AiOutlineTeam },
  { name: "Internship", href: "#", icon: LiaBusinessTimeSolid },
  ,
];

export default function Features({ locale, author, data }: any) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {data.map((item: any) => (
              <li key={item.attributes.title}>
                <Link
                  href={`/works/${
                    item.attributes.slug == "home" ? "" : item.attributes.slug
                  }`}
                  className={classNames(
                    pathname ==
                      `/${locale}/${
                        item.attributes.slug == "home"
                          ? "works"
                          : `works/${item.attributes.slug}`
                      }` ||
                      pathname ==
                        `/${
                          item.attributes.slug == "home"
                            ? "works"
                            : `works/${item.attributes.slug}`
                        }`
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  {navigation.map(
                    (el) =>
                      el.slug == item.attributes.slug && (
                        <el.icon
                          key={""}
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                      )
                  )}

                  {item.attributes.title}
                </Link>
                {item.attributes.title == "Home" && (
                  <div className="mx-2 text-xs font-semibold leading-6 text-variation mt-5">
                    Projects
                  </div>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="text-xs font-semibold leading-6 text-white">Type</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {type.map((item: any) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
                {item.name == "Home" && (
                  <div className="mx-2 text-xs font-semibold leading-6 text-variation mt-5">
                    Projects
                  </div>
                )}
              </li>
            ))}
          </ul>
        </li>
        {author && (
          <li className="-mx-6 mt-auto">
            <Link
              href="/#about"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <Image
                className="h-8 w-auto rounded-full"
                src="/images/me.jpg"
                alt="Logo"
                width={500}
                height={500}
              />
              <span aria-hidden="true">Maxence Dupuis</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
