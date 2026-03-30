import Image from "next/image";
import { PillArrowLink } from "@/components/layout/PillArrowLink";

export function WorkShowcaseSection() {
  return (
    <section
      aria-labelledby="work-showcase-title"
      className="bg-background py-14 md:py-32"
    >
      <div className="container space-y-4">
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
              className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/0"
            />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
              <span className="rounded-full border border-white/80 bg-white/15 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-[0.65rem]">
                Social Media
              </span>
              <span className="rounded-full border border-white/80 bg-white/15 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-[0.65rem]">
                Website
              </span>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-2 text-zinc-500 md:flex-row md:items-start md:justify-between">
          <p className="text-2xl font-medium text-foreground">
            Sky Alliance Inc.
          </p>
          <p className="max-w-xl text-sm leading-relaxed md:text-right md:text-base">
            We ran social media and shaped their story online. We redesigned the
            website to match the brand and convert visitors.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 items-start gap-12 md:mt-28 md:grid-cols-12 md:gap-16 lg:gap-24">
          <div className="space-y-8 md:col-span-4">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-2 w-2 shrink-0 rounded-full bg-lime-400"
              />
              <p className="text-sm font-medium text-foreground md:text-base">
                Stand out and make impact
              </p>
            </div>
            <p className="text-lg leading-relaxed text-zinc-500">
              Rocket exists to turn static brands into high-velocity digital
              leaders—that is the vision our team shows up for every day.
              Strategists, designers, and developers work as one crew across
              social, identity, and web, so you partner with people who own the
              outcome from first brief to launch.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-foreground">
                Get to know your digital partner
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=faces",
                  ].map((src, i) => (
                    <div
                      key={src}
                      className={`relative size-12 overflow-hidden rounded-full border-2 border-background md:size-14 ${["z-1", "z-2", "z-3", "z-4"][i]}`}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={100}
                        height={100}
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <article className="group overflow-hidden bg-foreground">
              <div className="relative min-h-[240px] cursor-pointer md:min-h-[420px] lg:min-h-[520px]">
                <Image
                  src="/homepage-project2.webp"
                  alt="Urban Creative project — retail and web presence"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/40"
                />
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/90 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white md:text-[0.7rem]">
                    Websites
                  </span>
                  <span className="rounded-full border border-white/90 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white md:text-[0.7rem]">
                    Branding
                  </span>
                </div>
              </div>
            </article>
            <div className="mt-4 flex flex-col gap-1 text-zinc-500 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                Looden Creative
              </p>
              <p className="text-sm md:text-base">Branding Agency</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-8 lg:gap-10">
          <article className="group">
            <div className="relative aspect-4/3 overflow-hidden bg-zinc-200 md:aspect-16/11">
              <Image
                src="/homepage-project4.png"
                alt="So Syncd — branding and platform"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/35"
              />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
                <span className="rounded-full border border-white/80 bg-white/15 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-[0.65rem]">
                  Web Application
                </span>
                <span className="rounded-full border border-white/80 bg-white/15 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-[0.65rem]">
                  SaaS · Platforms
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                SkillBridge
              </p>
              <p className="text-sm text-zinc-500 md:text-base">
                Job Searching Web Application
              </p>
            </div>
          </article>

          <article className="group">
            <div className="relative aspect-4/3 overflow-hidden bg-zinc-200 md:aspect-16/11">
              <Image
                src="/homepage-project3.webp"
                alt="Scooperz — web platform"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/35"
              />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
                <span className="rounded-full border border-white/80 bg-white/15 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-[0.65rem]">
                  Websites
                </span>
                <span className="rounded-full border border-white/80 bg-white/15 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-[0.65rem]">
                  Business services
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                Theng's Portfolio
              </p>
              <p className="text-sm text-zinc-500 md:text-base">
                Personal website for photographer
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
