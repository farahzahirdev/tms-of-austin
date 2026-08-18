import Image from "next/image";
import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function MeetDoctor() {
  return (
    <section id="meet-doctor" className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="doctor-layout">
          <Reveal className="doctor-photo-wrap order-1 lg:order-2">
            <figure className="doctor-photo">
              <div className="doctor-photo-frame">
                <Image
                  src={site.images.drAragon}
                  alt="Dr. Ramon Aragon, MD, FAPA, Founder and Medical Director at TMS of Austin"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-brand hover:scale-[1.02]"
                  sizes="(max-width: 640px) 320px, 384px"
                />
              </div>
              <figcaption className="doctor-caption">{copy.meetDoctor.headline}</figcaption>
            </figure>
          </Reveal>

          <Reveal className="doctor-copy order-2 space-y-5 lg:order-1" delay={80}>
            <SectionHeader
              eyebrow={copy.meetDoctor.eyebrow}
              headline={copy.meetDoctor.headline}
              splitOnDesktop
              className="!mx-0 !max-w-none !text-left"
            />

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-bt-accent-ink">
              {copy.meetDoctor.role}
            </p>

            <p className="leading-relaxed text-bt-body">{copy.meetDoctor.intro}</p>

            <p className="doctor-highlight">{copy.meetDoctor.highlight}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
              <Button href={site.phoneHref}>
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {copy.meetDoctor.primaryCta} {site.phone}
              </Button>
              <Button href={site.routes.qualify} variant="secondary">
                {copy.meetDoctor.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
