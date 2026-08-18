export const site = {
  name: "TMS of Austin",
  logo: "/images/logo.webp",
  logoFooter: "/images/logo-footer.webp",
  /** Twilio tracking number — replace when assigned */
  phone: "(737) 471-5402",
  phoneHref: "tel:+17374715402",
  fax: "(512) 727-6761",
  email: "contact@tmsofaustin.com",
  emailHref: "mailto:contact@tmsofaustin.com",
  website: "https://www.tmsofaustin.com",
  routes: {
    qualify: "/#qualify",
    inquiry: "/#qualify",
    tms: "/#tms",
    whyChoose: "/#why-choose",
    whoQualifies: "/#who-qualifies",
    meetDoctor: "/#meet-doctor",
    locations: "/#locations",
    faq: "/#faq",
  },
  images: {
    tmsTreatment: "/images/what-is-tms.jpg",
    hero: "/images/hero-bg.jpg",
    whyChoose: "/images/why-choose-bg.jpg",
    faq: "/images/faq.jpg",
    drAragon: "/images/dr-ramon-aragon.jpg",
  },
  locations: [
    {
      name: "South Austin",
      addressLines: ["1213 W. Slaughter Ln #110", "Austin, TX 78748"],
      mapsUrl:
        "https://maps.google.com/maps?q=1213+W+Slaughter+Ln+%23110+Austin+TX+78748",
      note: "Full psychiatric services & Deep TMS",
    },
    {
      name: "North / Central Austin",
      addressLines: ["1106 Clayton Ln #240W", "Austin, TX 78723"],
      mapsUrl:
        "https://maps.google.com/maps?q=1106+Clayton+Ln+%23240W+Austin+TX+78723",
      note: "Full psychiatric services & Deep TMS",
    },
    {
      name: "Cedar Park",
      addressLines: ["12151 W Parmer Ln Ste 202", "Cedar Park, TX 78613"],
      mapsUrl:
        "https://maps.google.com/maps?q=12151+W+Parmer+Ln+Ste+202+Cedar+Park+TX+78613",
      note: "Deep TMS only",
    },
  ],
  serviceAreas: [
    "South Austin",
    "North Austin",
    "Central Austin",
    "Cedar Park",
    "Round Rock",
    "Greater Austin",
  ],
  /**
   * GHL embeds (Rise4 / go.4tms.com)
   * Survey: 3j8JkYokCF658GJctxs0
   */
  ghl: {
    origin: "https://go.4tms.com",
    embedScriptSrc: "https://go.4tms.com/js/form_embed.js",
    qualifySurvey: {
      id: "3j8JkYokCF658GJctxs0",
      iframeId: "3j8JkYokCF658GJctxs0",
      src: "https://go.4tms.com/widget/survey/3j8JkYokCF658GJctxs0",
      title: "Find out if you qualify for Deep TMS",
    },
  },
} as const;
