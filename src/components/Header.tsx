"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

const navItems = [
  { href: site.routes.tms, label: copy.header.nav.tms },
  { href: site.routes.whyChoose, label: copy.header.nav.whyChoose },
  { href: site.routes.whoQualifies, label: copy.header.nav.whoQualifies },
  { href: site.routes.locations, label: copy.header.nav.locations },
  { href: site.routes.faq, label: copy.header.nav.faq },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`bt-nav-wrap relative ${open ? "z-[70]" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <nav className={`bt-nav-bar ${scrolled ? "is-scrolled" : ""}`} aria-label="Main">
          <a href="#" className="logo relative z-10 flex shrink-0 items-center" aria-label={`${site.name} home`}>
            <Image
              src={site.logo}
              alt={site.name}
              width={177}
              height={40}
              priority
              className="h-[38px] w-auto transition-opacity duration-300 hover:opacity-85 sm:h-[44px]"
            />
          </a>

          <div className="bt-nav-pill">
            <div className="bt-nav-pill-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="bt-nav-pill-link">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="bt-nav-pill-actions">
              <Button href={site.routes.bookConsult} variant="secondary" className="bt-nav-pill-cta !h-10 !px-5 !text-sm">
                {copy.header.bookCta}
              </Button>
              <Button
                href={site.phoneHref}
                className="bt-nav-phone-pill !inline-flex"
                aria-label={`Call ${site.phone}`}
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                <span className="bt-nav-phone-text hidden min-[1680px]:inline">{site.phone}</span>
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="bt-nav-menu-btn relative z-[80] xl:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </nav>

        {open && (
          <div id="mobile-nav" className="bt-mobile-nav" aria-label="Mobile navigation">
            <p className="bt-mobile-nav-label">Menu</p>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="bt-mobile-nav-link" onClick={close}>
                {item.label}
              </a>
            ))}
            <Button href={site.routes.bookConsult} variant="secondary" className="bt-mobile-nav-cta w-full" onClick={close}>
              {copy.header.bookCta}
            </Button>
            <Button href={site.phoneHref} className="w-full" onClick={close}>
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </Button>
          </div>
        )}
      </div>

      {open && (
        <button
          type="button"
          className="bt-mobile-nav-backdrop xl:hidden"
          aria-label="Close menu"
          onClick={close}
        />
      )}
    </>
  );
}
