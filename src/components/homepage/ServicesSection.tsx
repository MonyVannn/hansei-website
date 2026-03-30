import { PillArrowLink } from "../layout/PillArrowLink";
import { ServiceFlipLinks } from "./ServiceFlipLinks";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-background py-14 md:py-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
          <div className="space-y-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 rounded-full bg-lime-400" />
              <p id="services-title" className="text-lg text-foreground">
                Services
              </p>
            </div>
            <p className="text-2xl leading-relaxed text-foreground">
              We keep it focused: social media to build momentum, brand identity
              to sharpen recognition, and websites designed to turn attention
              into measurable growth.
            </p>
            <div className="w-fit">
              <PillArrowLink href="/works">Our Services</PillArrowLink>
            </div>
          </div>

          <div className="md:col-span-1">
            <ServiceFlipLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
