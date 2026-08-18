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
        <Reveal>
          <SectionHeader
            eyebrow={copy.whyChoose.eyebrow}
            headline={copy.whyChoose.headline}
            body={copy.whyChoose.body}
          />
        </Reveal>

        <ul className="why-choose-highlights mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {trustHighlights.map((label) => (
            <li key={label}>
              <span className="why-choose-highlight">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                {label}
              </span>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 lg:mt-14">
          <div className="why-choose-visual-frame">
            <Image
              src={site.images.whyChoose}
              alt="Person laughing with joy — representing relief and hope after treatment"
              width={1024}
              height={306}
              sizes="(max-width: 1140px) 100vw, 1140px"
              className="why-choose-visual-img"
              priority={false}
            />
            <div className="why-choose-visual-shade" aria-hidden />
            <div className="why-choose-visual-caption">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-bt-lavender">
                Patient-centered care
              </p>
              <p className="mt-1 font-heading text-lg font-semibold text-white sm:text-xl">
                Feel like yourself again
              </p>
            </div>
            <div className="why-choose-visual-badge">
              <p className="text-[10px] font-bold uppercase tracking-wider text-bt-accent-ink">
                Powered by
              </p>
              <p className="font-heading text-base font-semibold text-bt-ink">BrainsWay</p>
            </div>
          </div>
        </Reveal>

        <StaggerGrid className="why-choose-cards mt-8 sm:mt-10" staggerMs={70}>
          {copy.whyChoose.cards.map((card, i) => {
            const Icon = icons[i] ?? Focus;
            return (
              <article key={card.title} className="why-choose-card h-full">
                <span className="why-choose-card-icon">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bt-body">{card.body}</p>
                </div>
              </article>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
