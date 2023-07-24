import { HomeIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home({ locale }: any) {
  const pathname = usePathname();
  return (
    <nav>
      <ul role="list" className="flex flex-1 flex-col">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <li key="home">
              <Link
                href="/works"
                className={classNames(
                  pathname == `/${locale}/works` || pathname == "/works"
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <HomeIcon
                  key={""}
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                {locale == "en" ? "Home" : "Accueil"}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
