import {
  AcademicCapIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
  CubeIcon,
  PencilIcon,
  PuzzlePieceIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineTeam } from "react-icons/ai";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiArticleMediumBold } from "react-icons/pi";

const navigation = [
  { slug: "web", icon: ComputerDesktopIcon },
  { slug: "2d-3d", icon: CubeIcon },
  { slug: "video", icon: VideoCameraIcon },
  { slug: "art", icon: PencilIcon },
  { slug: "game", icon: PuzzlePieceIcon },
  { slug: "data-ml-dl", icon: ChartPieIcon },
  { slug: "entertainment", icon: PiArticleMediumBold },
  { slug: "school", icon: AcademicCapIcon },
  { slug: "personal", icon: UserIcon },
  { slug: "team", icon: AiOutlineTeam },
  { slug: "internship", icon: LiaBusinessTimeSolid },
];

export default function Features({ locale, data }: any) {
  const pathname = usePathname();
  return (
    <nav className="-mt-2">
      <ul role="list" className="-mx-2 space-y-1">
        {data.map((item: any) => (
          <li key={item.attributes.title}>
            <Link
              href={`/works/${item.attributes.slug}`}
              className={classNames(
                pathname == `/${locale}/works/${item.attributes.slug}` ||
                  pathname == `/works/${item.attributes.slug}`
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
