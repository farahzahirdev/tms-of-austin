import { MapPin, Navigation } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Locations() {
  return (
    <section id="locations" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.locations.eyebrow}
            headline={copy.locations.headline}
            body={copy.locations.body}
          />
        </Reveal>

        <StaggerGrid className="mt-14 grid gap-5 lg:grid-cols-3">
          {site.locations.map((location) => (
            <article key={location.name} className="bt-card flex h-full flex-col items-center text-center">
              <span className="bt-icon-badge w-fit">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4">{location.name}</h3>
              <div className="mt-2 space-y-0.5">
                {location.addressLines.map((line) => (
                  <p key={line} className="text-sm text-bt-body">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-bt-accent-ink">{location.note}</p>
              <div className="mt-auto flex w-full justify-center pt-6">
                <Button
                  href={location.mapsUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Get Directions
                </Button>
              </div>
            </article>
          ))}
        </StaggerGrid>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm leading-relaxed text-bt-body">{copy.locations.serving}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {site.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-bt-line bg-bt-card px-3 py-1 text-xs font-semibold text-bt-ink-2 transition-colors duration-300 hover:border-bt-accent hover:text-bt-accent-ink"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
