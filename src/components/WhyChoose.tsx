import Image from "next/image";
import { CheckCircle2, Clock, Focus, MapPin, ShieldCheck, Zap } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [Focus, ShieldCheck, Clock, Zap, Zap, MapPin];

const trustHighlights = [
  "BrainsWay Deep TMS",
  "Insurance accepted",
  "3 convenient locations",
] as const;

export function WhyChoose() {
  return (
    <section id="why-choose" className="why-choose-section bt-section scroll-mt-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="why-choose-layout">
          <Reveal className="why-choose-media">
            <div className="why-choose-visual-frame overflow-hidden">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[3/4]">
                <Image
                  src={site.images.whyChoose}
                  alt="TMS of Austin clinic — BrainsWay Deep TMS in the greater Austin area"
                  fill
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  className="why-choose-visual-img object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="why-choose-intro">
            <SectionHeader
              eyebrow={copy.whyChoose.eyebrow}
              headline={copy.whyChoose.headline}
              body={copy.whyChoose.body}
              splitOnDesktop
              className="!mx-0 !max-w-none"
            />

            <ul className="why-choose-highlights mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:mt-7 lg:justify-start">
              {trustHighlights.map((label) => (
                <li key={label}>
                  <span className="why-choose-highlight">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <StaggerGrid className="why-choose-cards" staggerMs={60}>
            {copy.whyChoose.cards.map((card, i) => {
              const Icon = icons[i] ?? Focus;
              return (
                <article key={card.title} className="why-choose-card">
                  <span className="why-choose-card-icon">
                    <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-snug text-bt-ink">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-bt-body">{card.body}</p>
                  </div>
                </article>
              );
            })}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
