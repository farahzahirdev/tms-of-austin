import Image from "next/image";
import { copy } from "@/content/copy";

function LogoTrack({ logos, ariaHidden = false }: { logos: typeof copy.insuranceStrip.logos; ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 px-5 sm:gap-14 sm:px-7"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo) => (
        <li key={`${ariaHidden ? "dup-" : ""}${logo.alt}`} className="shrink-0">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="insurance-strip-logo"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

export function InsuranceStrip() {
  const logos = copy.insuranceStrip.logos;

  return (
    <section
      aria-label="Insurance acceptance"
      className="border-y border-bt-line bg-bt-sand py-8 sm:py-10"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-bt-accent-ink sm:text-base">
          {copy.insuranceStrip.label}
        </p>

        <div className="relative mt-6 overflow-hidden sm:mt-7">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bt-sand to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bt-sand to-transparent sm:w-16"
            aria-hidden
          />

          <div className="bt-marquee-track motion-reduce:hidden">
            <LogoTrack logos={logos} />
            <LogoTrack logos={logos} ariaHidden />
          </div>
        </div>

        <ul className="mt-6 hidden flex-wrap items-center justify-center gap-8 motion-reduce:flex sm:gap-10">
          {logos.map((logo) => (
            <li key={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="insurance-strip-logo"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
