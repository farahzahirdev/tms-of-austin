const ctas = {
  call: "Call",
  qualify: "Find out if you Qualify",
  qualifyShort: "Qualify",
  bookConsult: "Book your Free Consultation",
  bookConsultShort: "Book Consult",
} as const;

export const copy = {
  ctas,
  header: {
    nav: {
      tms: "About Deep TMS",
      whyChoose: "Why Us",
      whoQualifies: "Who Qualifies",
      meetDoctor: "Our Doctor",
      locations: "Locations",
      faq: "FAQ",
    },
    qualifyCta: ctas.bookConsultShort,
  },
  hero: {
    tagline: "Feel like yourself again.",
    headlineLine1: "Relief for",
    headlineLine2: "Treatment-Resistant",
    headlineLine3: "Depression",
    headlineAccent: "& OCD",
    subheadline:
      "FDA-approved Deep TMS with BrainsWay — a non-invasive, medication-free treatment for adults in the greater Austin area who haven't found enough relief with medication alone.",
    primaryCta: ctas.call,
    secondaryCta: ctas.qualify,
    chips: [
      { label: "FDA-Approved", icon: "shield" as const },
      { label: "Non-Invasive", icon: "brain" as const },
      { label: "Insurance Accepted", icon: "heart" as const },
    ],
  },
  trustBar: {
    items: [
      {
        title: "FDA-Approved",
        subtitle: "Safe and effective",
        icon: "shield" as const,
      },
      {
        title: "Non-Invasive",
        subtitle: "No drugs. No surgery.",
        icon: "pill" as const,
      },
      {
        title: "Most Major Insurance",
        subtitle: "Carriers Accepted",
        icon: "insurance" as const,
      },
      {
        title: "3 Convenient Locations",
        subtitle: "Serving Greater Austin",
        icon: "map" as const,
      },
    ],
  },
  whatIsTms: {
    eyebrow: "Deep TMS with BrainsWay",
    headline: "What Is Deep TMS & How Can It Help?",
    body: "Deep Transcranial Magnetic Stimulation (Deep TMS) uses focused magnetic pulses to stimulate brain networks involved in mood and behavior. With BrainsWay technology, a specialized helmet delivers treatment while you sit comfortably — awake, alert, and able to return to your day afterward.",
    points: [
      {
        title: "Non-invasive & medication-free",
        body: "No surgery, no sedation, and no systemic medication side effects.",
      },
      {
        title: "FDA-approved for depression & OCD",
        body: "BrainsWay Deep TMS is cleared for major depressive disorder and obsessive-compulsive disorder in adults.",
      },
      {
        title: "Outpatient sessions",
        body: "Treatment fits into your weekly routine with brief in-office visits and no recovery time needed.",
      },
    ],
    cta: ctas.qualify,
  },
  whyChoose: {
    eyebrow: "Why TMS of Austin",
    headline: "Expert Psychiatric Care, Close to Home",
    body: "TMS of Austin combines BrainsWay Deep TMS with comprehensive psychiatric services — so you get thoughtful, coordinated care from a team that knows this treatment inside and out.",
    cards: [
      {
        title: "BrainsWay Deep TMS",
        body: "Cutting-edge, FDA-approved technology designed for deeper brain stimulation and broader treatable conditions.",
      },
      {
        title: "Non-invasive & drug-free",
        body: "Stay awake throughout treatment. No anesthesia, no sedation, and no hospital stay.",
      },
      {
        title: "Insurance accepted",
        body: "We accept most major insurance carriers. Our team can help verify your benefits before you begin.",
      },
      {
        title: "3 convenient locations",
        body: "South Austin, North/Central Austin, and a Cedar Park TMS-only clinic serving the greater metro area.",
      },
      {
        title: "Expert psychiatric care",
        body: "Psychiatric consults, medication management, and psychotherapy available alongside Deep TMS.",
      },
      {
        title: "Feel like yourself again",
        body: "Warm, reassuring care focused on helping you find lasting relief from treatment-resistant symptoms.",
      },
    ],
  },
  insuranceStrip: {
    label: "Accepting most major insurance carriers",
    logos: [
      { src: "/images/insurance/magellan-health.png", alt: "Magellan Health", width: 180, height: 80 },
      { src: "/images/insurance/united-healthcare.png", alt: "UnitedHealthcare", width: 220, height: 80 },
      { src: "/images/insurance/humana.png", alt: "Humana", width: 180, height: 80 },
      { src: "/images/insurance/blue-cross-blue-shield.png", alt: "Blue Cross Blue Shield", width: 220, height: 80 },
      { src: "/images/insurance/aetna.png", alt: "Aetna", width: 160, height: 80 },
      { src: "/images/insurance/medicare.png", alt: "Medicare", width: 180, height: 80 },
      { src: "/images/insurance/cigna.png", alt: "Cigna", width: 160, height: 80 },
    ],
  },
  whoQualifies: {
    eyebrow: "Who Qualifies",
    headline: "Is Deep TMS Right for You?",
    subheadline:
      "Deep TMS may be appropriate if you've tried medication without enough improvement — or if side effects have made daily life harder.",
    items: [
      {
        title: "Treatment-Resistant Depression",
        body: "Adults whose depression has not improved enough after trying one or more antidepressant medications.",
        tag: "MDD",
      },
      {
        title: "Obsessive-Compulsive Disorder",
        body: "Adults with OCD who haven't found adequate relief with medication or therapy alone.",
        tag: "OCD",
      },
      {
        title: "Seeking a Non-Invasive Option",
        body: "Individuals looking for an FDA-approved alternative that doesn't require surgery or systemic medication.",
        tag: "Non-Invasive",
      },
    ],
    cta: ctas.qualify,
    note: "Treatment eligibility is determined after an in-person evaluation and safety screening. Individual results vary.",
  },
  meetDoctor: {
    eyebrow: "Our Medical Director",
    headline: "Ramon Aragon, MD, FAPA",
    role: "Founder and Medical Director",
    intro:
      "Dr. Aragon is a double Board-Certified Adult Psychiatrist who is Fellowship-trained in Consultation-Liaison Psychiatry. During his training, he developed extensive experience in managing complex psychiatric disorders. During his fellowship training, he specialized in handling acute medical illnesses' psychiatric manifestations.",
    highlight:
      "Currently serving as the founder and Medical Director for TMS of Austin, Dr. Aragon brings his expertise to deliver state-of-the-art treatment for psychiatric disorders such as TMS, CES, esketamine and Neurofeedback.",
    primaryCta: ctas.call,
    secondaryCta: ctas.bookConsult,
  },
  locations: {
    eyebrow: "Locations",
    headline: "3 Locations to Serve You",
    body: "Convenient clinics across the greater Austin area — including a dedicated Deep TMS clinic in Cedar Park.",
    serving: "Serving South Austin, North/Central Austin, Cedar Park, and the greater Austin metro area.",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common Questions About Deep TMS",
    items: [
      {
        q: "Do you accept insurance?",
        a: "Yes — TMS of Austin accepts most major insurance carriers. Coverage varies by plan. Our team will help verify your benefits before treatment begins. Coverage cannot be guaranteed in advance.",
      },
      {
        q: "How long is each session?",
        a: "Most Deep TMS sessions take about 20 minutes. You'll sit comfortably while magnetic pulses stimulate targeted brain networks, then return to your normal activities.",
      },
      {
        q: "What are the side effects?",
        a: "Deep TMS is generally well tolerated. The most common side effect is mild scalp discomfort or headache during or after treatment. Serious side effects are rare. Your provider will review risks during your consultation.",
      },
      {
        q: "Will I be awake during treatment?",
        a: "Yes. You stay awake the entire time. Treatment does not require anesthesia or sedation, and most patients drive themselves to and from sessions.",
      },
      {
        q: "How long does a full course take?",
        a: "A typical course involves daily sessions over about 4 to 6 weeks, though your provider will recommend a schedule based on your condition and response.",
      },
      {
        q: "Who determines if I'm eligible?",
        a: "Treatment eligibility is determined after an in-person evaluation and safety screening. We'll review your symptoms, history, and goals during a free consultation.",
      },
    ],
  },
  qualify: {
    eyebrow: "Free Consultation",
    headline: ctas.bookConsult,
    body: "Answer a few quick questions about your symptoms and treatment history. If Deep TMS may be right for you, you can schedule on the next step.",
    formTitle: "Qualification Survey",
    formSubtitle: "Confidential. Takes about 2 minutes.",
    callPrompt: "Prefer to talk now?",
    trustLine: "Treatment eligibility is determined after an in-person evaluation. Individual results vary.",
  },
  finalCta: {
    headline: "Ready to Feel Like Yourself Again?",
    body: "Call TMS of Austin to speak with our team, or book your free consultation online — answer a few quick questions to get started.",
    primaryCta: ctas.call,
    secondaryCta: ctas.bookConsult,
  },
  floatingCta: {
    survey: ctas.bookConsultShort,
    call: ctas.call,
  },
  footer: {
    surveyCta: ctas.bookConsult,
    tagline:
      "FDA-approved BrainsWay Deep TMS in Austin, TX — serving South Austin, North/Central Austin, Cedar Park, and the greater metro area.",
    disclaimer:
      "This website provides educational information only and is not medical advice. TMS of Austin does not provide emergency services. If you are in crisis, call 911 or dial 988 for the Suicide & Crisis Lifeline.",
    eligibility:
      "Treatment eligibility is determined after in-person evaluation and safety screening. Individual results vary. No outcome guarantees are made.",
    rights: "All rights reserved.",
  },
} as const;
