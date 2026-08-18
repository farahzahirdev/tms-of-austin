import { Brain, CloudRain, Sparkles } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const conditionIcons = [CloudRain, Brain, Sparkles];

export function WhoQualifies() {
  return (
    <section id="who-qualifies" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.whoQualifies.eyebrow}
            headline={copy.whoQualifies.headline}
            body={copy.whoQualifies.subheadline}
          />
        </Reveal>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.whoQualifies.items.map((item, i) => {
            const Icon = conditionIcons[i];
            return (
              <article key={item.title} className="group bt-card flex h-full flex-col !p-0 overflow-hidden">
                <div className="w-full border-b border-bt-line bg-[rgba(29,98,141,0.08)] px-6 py-5 transition-colors duration-300 group-hover:bg-[rgba(29,98,141,0.14)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="bt-icon-badge !bg-bt-card">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full bg-[rgba(29,98,141,0.12)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bt-accent-ink">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3>{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bt-body">{item.body}</p>
                </div>
              </article>
            );
          })}
        </StaggerGrid>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <Button href={site.routes.qualify}>{copy.whoQualifies.cta}</Button>
            <p className="max-w-2xl text-sm text-bt-muted">{copy.whoQualifies.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
