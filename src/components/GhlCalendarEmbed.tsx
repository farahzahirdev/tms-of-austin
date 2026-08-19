import { site } from "@/content/site";

const calendar = site.ghl.calendar;
const CALENDAR_HEIGHT = 720;

export function GhlCalendarEmbed() {
  /*
    Static iframe in markup (Westchester / sister-site pattern) so the browser
    starts fetching the widget on first paint. Dynamically inserting the iframe
    after hydration waits for React effects and makes the calendar feel late.

    form_embed.js is loaded once in layout.tsx with afterInteractive so the
    resize listener is ready before the widget posts its height.
  */
  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-white">
      <iframe
        src={calendar.src}
        id={calendar.iframeId}
        title={calendar.title}
        allow="payment"
        scrolling="no"
        className="block w-full border-0"
        style={{
          width: "100%",
          height: CALENDAR_HEIGHT,
          minHeight: CALENDAR_HEIGHT,
          overflow: "hidden",
        }}
      />
    </div>
  );
}
