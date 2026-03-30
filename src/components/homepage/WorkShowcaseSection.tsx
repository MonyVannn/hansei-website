import Image from "next/image";
import { PillArrowLink } from "@/components/layout/PillArrowLink";

export function WorkShowcaseSection() {
  return (
    <section
      aria-labelledby="work-showcase-title"
      className="bg-background py-14 md:py-20"
    >
      <div className="container space-y-6 md:space-y-8">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="work-showcase-title"
            className="text-5xl uppercase tracking-tight text-foreground md:text-7xl"
          >
            Work
          </h2>
          <PillArrowLink href="/works">All work</PillArrowLink>
        </div>

        <article className="group overflow-hidden bg-foreground">
          <div className="relative min-h-[280px] bg-foreground md:min-h-[720px] cursor-pointer">
            <Image
              src="/homepage-project.webp"
              alt="Latest project thumbnail"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/30"
            />
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="rounded-full border border-lime-200 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-lime-200 md:text-[0.7rem]">
                Social Media
              </span>
              <span className="rounded-full border border-lime-200 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-lime-200 md:text-[0.7rem]">
                Website
              </span>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-2 text-zinc-500 md:flex-row md:items-start md:justify-between">
          <p className="text-xl font-medium text-foreground">
            Sky Alliance Inc.
          </p>
          <p className="max-w-xl text-sm leading-relaxed md:text-right md:text-base">
            We ran social media and shaped their story online. We redesigned the
            website to match the brand and convert visitors.
          </p>
        </div>
      </div>
    </section>
  );
}
