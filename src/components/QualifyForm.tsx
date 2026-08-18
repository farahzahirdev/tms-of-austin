import { Mail, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { GhlSurveyForm } from "./GhlSurveyForm";
import { Reveal } from "./Reveal";

export function QualifyForm() {
  return (
    <section id="qualify" className="bt-section" aria-labelledby="qualify-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bt-embed-layout">
          <Reveal className="bt-embed-copy space-y-5 lg:sticky lg:top-28">
            <div>
              <p className="section-eyebrow justify-center lg:justify-start">{copy.qualify.eyebrow}</p>
              <h2 id="qualify-heading" className="mt-3 text-center lg:text-left">
                {copy.qualify.headline}
              </h2>
              <p className="text-lead mx-auto mt-4 max-w-xl text-center lg:mx-0 lg:text-left">
                {copy.qualify.body}
              </p>
              <p className="mx-auto mt-3 max-w-xl text-center text-sm text-bt-muted lg:mx-0 lg:text-left">
                {copy.qualify.formSubtitle}
              </p>
            </div>

            <p className="text-center text-sm font-medium text-bt-body lg:text-left">{copy.qualify.callPrompt}</p>

            <ul className="bt-contact-list">
              <li>
                <a href={site.phoneHref} className="bt-contact-item group">
                  <span className="bt-icon-badge shrink-0 p-2.5">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-bt-muted">
                      Phone
                    </span>
                    <span className="mt-0.5 block font-medium text-bt-ink group-hover:text-bt-accent-ink">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="bt-contact-item group">
                  <span className="bt-icon-badge shrink-0 p-2.5">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="pt-2 font-medium text-bt-ink group-hover:text-bt-accent-ink">
                    {site.email}
                  </span>
                </a>
              </li>
            </ul>

            <p className="text-center text-sm text-bt-muted lg:text-left">{copy.qualify.trustLine}</p>
          </Reveal>

          <div className="animate-fade-in bt-form-embed" style={{ animationDelay: "120ms" }}>
            <GhlSurveyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
