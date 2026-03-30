import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type PillArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function PillArrowLink({ href, children, className = "" }: PillArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group flex h-10 items-center gap-2 rounded-full border border-foreground pl-3 pr-4 text-[0.62rem] font-medium uppercase tracking-[0.08em] text-zinc-800 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700 md:text-[0.96rem] ${className}`}
    >
      <span className="rounded-full bg-foreground p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-foreground group-active:-rotate-45" />
      </span>
      <span>{children}</span>
    </Link>
  );
}
