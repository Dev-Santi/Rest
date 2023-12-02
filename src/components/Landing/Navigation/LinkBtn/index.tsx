import Link from "next/link";

export default function LinkBtn({
  alternative,
  children,
  href,
}: {
  alternative?: boolean;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className={
        "text-white uppercase text-sm font-bold md:px-1 md:mx-2 md:py-2 md:rounded-full md:hover:bg-white md:hover:text-black xl:text-[1.1rem] " +
        (alternative ? "md:bg-yellow md:text-black lg:px-6 lg:py-3" : "md:bg-black lg:px-4 lg:py-2")
      }
      href={href}
    >
      {children}
    </Link>
  );
}
