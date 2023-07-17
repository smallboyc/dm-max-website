"use client";
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

const navigation = [
  { name: "Home", href: "/works", icon: HomeIcon },
  {
    name: "Web",
    href: "/works/web",
    icon: ComputerDesktopIcon,
  },
  { name: "2D / 3D", href: "#", icon: CubeIcon },
  { name: "Video", href: "#", icon: VideoCameraIcon },
  { name: "Art", href: "#", icon: PencilIcon },
  { name: "Game", href: "#", icon: PuzzlePieceIcon },
  { name: "Data / ML / DL", href: "#", icon: ChartPieIcon },
];
const type = [
  { name: "School", href: "#", icon: AcademicCapIcon },
  { name: "Personal ", href: "#", icon: UserIcon },
  ,
];

export default function Features({ author }: any) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    pathname == item.href
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
              href="#"
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
