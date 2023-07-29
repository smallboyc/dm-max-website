import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumb = (pathname: any, locale: any) => {
  return pathname.split("/").filter((el: any) => el != "" && el != locale);
};

export default function Breadcrumb({ locale }: any) {
  const pathname = usePathname();
  const breadcrumbs = breadcrumb(pathname, locale);
  return (
    <nav
      className="flex border-b border-gray-200 bg-white items-center fixed w-full z-50 "
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="mx-auto flex w-full space-x-4 px-4 sm:px-6 lg:px-8"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </li>
        {breadcrumbs.map((page: any) => (
          <li key={page} className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                href={page == "works" ? `/${page}` : `/works/${page}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize"
                aria-current={page.current ? "page" : undefined}
              >
                {page}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
