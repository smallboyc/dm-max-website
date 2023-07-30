import Link from "next/link";
import Image from "next/image";
import { BsPatchQuestion } from "react-icons/bs";

export default function UserLink({ doc }: { doc?: string }) {
  return (
    <>
      {doc ? (
        <li className="-mx-6 mt-auto">
          <Link
            href="/works/doc"
            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
          >
            <BsPatchQuestion className="w-5 h-auto" />
            <span aria-hidden="true">{doc}</span>
          </Link>
        </li>
      ) : (
        <Link href="/works/doc" className="text-white">
          <BsPatchQuestion className="w-5 h-auto" />
        </Link>
      )}{" "}
    </>
  );
}
