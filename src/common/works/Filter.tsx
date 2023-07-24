import Link from "next/link";
import classNames from "classnames";
import { AcademicCapIcon, UserIcon } from "@heroicons/react/24/outline";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";

const type = [
  { name: "School", href: "#", icon: AcademicCapIcon },
  { name: "Personal", href: "#", icon: UserIcon },
  { name: "Team", href: "#", icon: AiOutlineTeam },
  { name: "Internship", href: "#", icon: LiaBusinessTimeSolid },
  ,
];

export default function Filter() {
  return (
    <div>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
