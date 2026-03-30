import Link from "next/link";
import { FooterContactForm } from "./FooterContactForm";
import { siteConfig } from "@/config/site";

const footerNavLinks = [
  { label: "About", href: "/about" },
  { label: "Visions", href: "/visions" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-14 overflow-hidden border-t border-zinc-200 bg-linear-to-l from-white via-white to-lime-100/70 text-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                {siteConfig.brandName}
              </p>
              <p className="max-w-sm text-base leading-relaxed text-zinc-600">
                {siteConfig.contactIntro}
              </p>
            </div>

            <div className="space-y-7">
              <div>
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  Contact
                </p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-foreground underline-offset-4 transition hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>

              <div>
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  Connect
                </p>
                <ul className="space-y-2">
                  {siteConfig.socialLinks.map((socialLink) => (
                    <li key={socialLink.label}>
                      <a
                        href={socialLink.href}
                        className="text-sm text-foreground underline-offset-4 transition hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {socialLink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <div className="space-y-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Get in touch
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
                {siteConfig.formIntro}
              </p>
            </div>
            <FooterContactForm />
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="container py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-zinc-500">
              <Link href="/privacy" className="transition hover:text-zinc-900">
                Privacy
              </Link>
              <Link href="/cookies" className="transition hover:text-zinc-900">
                Cookies
              </Link>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-zinc-500">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="text-sm font-semibold tracking-tight text-zinc-900">
              {`© ${new Date().getFullYear()} ${siteConfig.legalName}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
