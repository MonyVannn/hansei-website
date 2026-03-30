import ScrollingLogos from "./ScrollingLogos";

export function AboutSection() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="container">
        <div className="mb-10 md:mb-14">
          <ScrollingLogos />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-40">
          <div className="space-y-5 md:col-span-1">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 rounded-full bg-lime-400" />
              <p className="text-lg text-foreground">About us</p>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-zinc-500">
              Rocket turns static brands into high-velocity digital leaders by
              combining social momentum, sharp brand identity, and websites
              built to convert.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="max-w-4xl text-2xl leading-snug tracking-tight text-foreground md:text-4xl">
              Rocket moves you from a stagnant status quo to data-driven growth
              through three integrated pillars: social media propulsion for
              community velocity, brand systems that build a halo of trust, and
              high-performance websites that turn attention into action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
