import { ArrowRight, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-[#EEF4F7] py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-content px-4 text-center sm:px-6 lg:max-w-3xl lg:px-8">
        <Reveal>
          <p className="section-eyebrow mx-auto justify-center">{site.name}</p>
          <h2 id="final-cta-heading" className="mt-4 text-bt-ink">
            {copy.finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-bt-body sm:text-lg">
            {copy.finalCta.body}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={site.phoneHref} className="!px-8">
              <Phone className="h-4 w-4" aria-hidden />
              {copy.finalCta.primaryCta} {site.phone}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={site.routes.bookConsult} variant="secondary">
              {copy.finalCta.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
