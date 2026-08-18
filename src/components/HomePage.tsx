import { Header } from "./Header";
import { Hero } from "./Hero";
import { InsuranceStrip } from "./InsuranceStrip";
import { WhatIsTms } from "./WhatIsTms";
import { WhyChoose } from "./WhyChoose";
import { WhoQualifies } from "./WhoQualifies";
import { MeetDoctor } from "./MeetDoctor";
import { Locations } from "./Locations";
import { Faq } from "./Faq";
import { QualifyForm } from "./QualifyForm";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <Hero />
        <WhatIsTms />
        <WhyChoose />
        <InsuranceStrip />
        <WhoQualifies />
        <MeetDoctor />
        <Locations />
        <Faq />
        <QualifyForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
