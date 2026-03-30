import Link from "next/link";
import { PillArrowLink } from "./PillArrowLink";

const leftLinks = [
  { label: "About", href: "/about" },
  { label: "Visions", href: "/visions" },
  { label: "Team", href: "/team" },
];
const rightLinks = [
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
];

const baseLinkClass =
  "text-[0.62rem] font-medium uppercase tracking-[0.06em] text-foreground transition-colors md:text-[.96rem]";

function AnimatedNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className={`${baseLinkClass} group block overflow-hidden`} href={href}>
      <span className="block h-[1.15em]">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:-translate-y-1/2">
          <span className="flex h-[1.15em] items-center leading-none">{label}</span>
          <span className="flex h-[1.15em] items-center leading-none">{label}</span>
        </span>
      </span>
    </Link>
  );
}

export function MainNav() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-40 border-b border-zinc-200/80 bg-linear-to-r from-white via-white to-lime-100/70"
    >
      <div className="container py-3">
        <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-44">
          <div className="order-2 md:order-1">
            <ul className="flex items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 md:justify-between md:overflow-visible md:pb-0">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <AnimatedNavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="order-1 justify-self-center text-4xl font-bold leading-none tracking-tight text-foreground md:order-2"
            aria-label="rocket home"
          >
            rocket
          </Link>

          <div className="order-3">
            <ul className="flex items-center justify-between gap-3 overflow-x-auto whitespace-nowrap pb-1 md:gap-5 md:overflow-visible md:pb-0">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <AnimatedNavLink href={link.href} label={link.label} />
                </li>
              ))}
              <li>
                <PillArrowLink href="/contact">Contact us</PillArrowLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
