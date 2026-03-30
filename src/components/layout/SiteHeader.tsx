import { MainNav } from "./MainNav";

const tickerItems = [
  "Social strategy that scales",
  "Content that stops the scroll",
  "Performance campaigns that convert",
  "Paid social for measurable growth",
  "Community building with real engagement",
  "Brand storytelling across every platform",
  "Creative production for Reels and TikTok",
  "Influencer partnerships that feel authentic",
  "Always-on optimization and reporting",
  "Turning followers into customers",
];

const tickerText = tickerItems.join(" \u2014 ");

export function SiteHeader() {
  return (
    <>
      <header className="shrink-0">
        <div className="relative overflow-hidden bg-black py-1">
          <div className="ticker-track flex min-w-max items-center gap-4 whitespace-nowrap px-4 pl-36 text-[0.52rem] font-medium uppercase tracking-[0.09em] text-white/90 md:pl-48 md:text-[0.78rem]">
            <span aria-label="Ticker updates">{tickerText}</span>
            <span aria-hidden>{tickerText}</span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-black pl-4 pr-8 md:pl-6 md:pr-10">
            <span
              aria-hidden
              className="absolute inset-y-0 right-0 w-10 bg-linear-to-r from-black to-transparent md:w-14"
            />
            <span className="relative flex items-center gap-2 whitespace-nowrap text-[0.5rem] font-semibold uppercase tracking-[0.11em] text-white md:text-[0.72rem]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 md:h-2 md:w-2" />
              <span>Now creating</span>
            </span>
          </div>
        </div>
      </header>
      <MainNav />
    </>
  );
}
