import { BadgeCheck, MapPin, Pill, ShieldCheck, type LucideIcon } from "lucide-react";
import { copy } from "@/content/copy";

const trustIcons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  pill: Pill,
  insurance: BadgeCheck,
  map: MapPin,
};

export function TrustBar() {
  return (
    <div className="hero-trust-wrap" aria-label="Trust highlights">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <ul className="hero-trust-strip">
          {copy.trustBar.items.map((item, index) => {
            const Icon = trustIcons[item.icon] ?? ShieldCheck;
            return (
              <li key={item.title} className="hero-trust-item">
                {index > 0 ? <span className="hero-trust-divider" aria-hidden /> : null}
                <div className="hero-trust-content">
                  <Icon className="hero-trust-icon" aria-hidden />
                  <div>
                    <p className="hero-trust-title">{item.title}</p>
                    <p className="hero-trust-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
