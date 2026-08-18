"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { initGhlIframe, unmountGhlEmbed, waitForGhlEmbed } from "@/lib/ghlEmbed";

const survey = site.ghl.qualifySurvey;

export function GhlSurveyForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const iframe = document.createElement("iframe");
    iframe.src = survey.src;
    iframe.id = survey.iframeId;
    iframe.title = survey.title;
    iframe.scrolling = "no";
    Object.assign(iframe.style, {
      width: "100%",
      border: "none",
      minHeight: "520px",
      display: "block",
    });

    host.replaceChildren(iframe);

    const handleLoad = () => waitForGhlEmbed(iframe);
    iframe.addEventListener("load", handleLoad);
    initGhlIframe(iframe);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      unmountGhlEmbed(host);
    };
  }, []);

  return <div ref={hostRef} className="w-full min-h-[520px]" />;
}
