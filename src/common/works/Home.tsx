import { HomeIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = { name: "Home", icon: HomeIcon };

export default function Home({ locale }: any) {
  const pathname = usePathname();
  return (
    <nav>
      <ul role="list" className="flex flex-1 flex-col">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <li key={navigation.name}>
              <Link
                href="/works"
                className={classNames(
                  pathname == `/${locale}/works` || pathname == "/works"
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <navigation.icon
                  key={""}
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                {navigation.name}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
