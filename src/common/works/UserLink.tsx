import Link from "next/link";
import Image from "next/image";

export default function UserLink({ username }: { username?: string }) {
  return (
    <>
      {username ? (
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
            <span aria-hidden="true">{username}</span>
          </Link>
        </li>
      ) : (
        <Link href="/#about">
          <Image
            className="h-8 w-auto rounded-full"
            src="/images/me.jpg"
            alt="Logo"
            width={500}
            height={500}
          />
        </Link>
      )}{" "}
    </>
  );
}
