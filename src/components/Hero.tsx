import Image from "next/image";
import { ArrowRight, Brain, Heart, Phone, ShieldCheck } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { TrustBar } from "./TrustBar";

const chipIcons = {
  shield: ShieldCheck,
  brain: Brain,
  heart: Heart,
} as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bt-hero">
      <div className="bt-hero-bg" aria-hidden>
        <Image
          src={site.images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="bt-hero-bg-img"
        />
      </div>
      <div className="bt-hero-overlay" aria-hidden />

      <div className="bt-hero-inner">
        <div className="bt-hero-shell mx-auto max-w-content px-2 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12 lg:px-8 lg:pb-10 lg:pt-14">
          <div className="bt-hero-copy bt-fade-up">
            <p className="hero-tagline">{copy.hero.tagline}</p>

            <h1 id="hero-heading" className="hero-headline">
              <span className="hero-headline-main">{copy.hero.headlineLine1}</span>
              <span className="hero-headline-nowrap">{copy.hero.headlineLine2}</span>
              <span className="hero-headline-second">
                {copy.hero.headlineLine3}{" "}
                <span className="hero-headline-accent">{copy.hero.headlineAccent}</span>
              </span>
            </h1>

            <p className="hero-subhead">{copy.hero.subheadline}</p>

            <ul className="hero-chips" aria-label="Treatment highlights">
              {copy.hero.chips.map((chip) => {
                const Icon = chipIcons[chip.icon];
                return (
                  <li key={chip.label}>
                    <span className="hero-chip">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      {chip.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="hero-ctas">
              <a href={site.phoneHref} className="hero-cta-primary group">
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                <span>
                  {copy.hero.primaryCta} {site.phone}
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a href={site.routes.qualify} className="hero-cta-secondary">
                <span>{copy.hero.secondaryCta}</span>
              </a>
            </div>
          </div>
        </div>

        <TrustBar />
      </div>
    </section>
  );
}
