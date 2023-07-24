import Link from "next/link";
import Image from "next/image";

export default function Logo({ works }: { works?: any }) {
  return (
    <>
      {works ? (
        <Link href="/">
          <Image
            className="h-8 w-auto"
            src="/images/logo-dm-max-variation.png"
            alt="Logo"
            width={500}
            height={500}
          />
        </Link>
      ) : (
        <Image alt="" src="/images/logo-dm-max.png" width={100} height={100} />
      )}
    </>
  );
}
