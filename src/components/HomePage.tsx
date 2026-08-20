import { Header } from "./Header";
import { Hero } from "./Hero";
import { InsuranceStrip } from "./InsuranceStrip";
import { WhatIsTms } from "./WhatIsTms";
import { WhyChoose } from "./WhyChoose";
import { WhoQualifies } from "./WhoQualifies";
import { MeetDoctor } from "./MeetDoctor";
import { Locations } from "./Locations";
import { Faq } from "./Faq";
import { BookConsult } from "./BookConsult";
import { QualifyForm } from "./QualifyForm";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhatIsTms />
        <WhyChoose />
        <InsuranceStrip />
        <WhoQualifies />
        <MeetDoctor />
        <Locations />
        <BookConsult />
        <Faq />
        <QualifyForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
