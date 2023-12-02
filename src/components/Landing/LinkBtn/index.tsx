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
        "uppercase font-bold py-2 w-32 text-center rounded-full lg:text-xl lg:py-3 lg:w-40 hover:bg-white lg:shadow-[0_5px_5px_5px_rgba(0,0,0,0.5)]" +
        (alternative ? " bg-yellow text-black " : " bg-black text-white hover:text-black")
      }
      href={href}
    >
      {children}
    </Link>
  );
}
