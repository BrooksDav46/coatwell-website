import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://coatwellinteriors.com";
const PAGE_URL = `${SITE_URL}/services/kitchen-remodeling`;

export const metadata: Metadata = {
  title: "Kitchen Remodeling in El Paso, TX | Coatwell",
  description:
    "Kitchen remodeling services in El Paso, TX for complete renovations and targeted upgrades. Coatwell handles cabinets, flooring, drywall, painting and more.",

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Kitchen Remodeling in El Paso, TX | Coatwell",
    description:
      "Professional kitchen remodeling and renovation services throughout El Paso, Texas and surrounding areas.",
    url: PAGE_URL,
    siteName: "Coatwell",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodeling in El Paso, TX | Coatwell",
    description:
      "Kitchen remodeling services for homeowners throughout El Paso, Texas and surrounding areas.",
  },
};

const serviceLinks = [
  {
    label: "Painting",
    href: "/services/painting",
    active: false,
  },
  {
    label: "Roofing",
    href: "/services/roofing",
    active: false,
  },
  {
    label: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    active: true,
  },
  {
    label: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling",
    active: false,
  },
  {
    label: "Flooring",
    href: "/services/flooring",
    active: false,
  },
  {
    label: "Drywall",
    href: "/services/drywall",
    active: false,
  },
];

const faqs = [
  {
    question: "What kitchen remodeling services does Coatwell offer in El Paso?",
    answer:
      "Coatwell provides kitchen remodeling and renovation services throughout El Paso. Depending on the project, work can include cabinetry, countertops, flooring, drywall, painting, trim, finishes and coordination of the different parts of the kitchen renovation.",
  },
  {
    question: "Can Coatwell remodel an entire kitchen?",
    answer:
      "Yes. Coatwell can handle larger kitchen renovations as well as targeted kitchen upgrades. The scope is built around the existing kitchen, the changes you want to make and the finishes selected for the project.",
  },
  {
    question: "Can I update my kitchen without completely remodeling it?",
    answer:
      "Yes. A kitchen project does not always require a complete renovation. Depending on your goals, the project can focus on selected improvements such as cabinetry, painting, flooring, drywall or other finishes.",
  },
  {
    question: "Does Coatwell handle cabinets during a kitchen remodel?",
    answer:
      "Yes. Cabinetry can be included as part of a Coatwell kitchen remodeling project. The exact scope depends on whether the project involves updating existing cabinetry or installing new cabinets as part of the renovation.",
  },
  {
    question: "What areas does Coatwell serve for kitchen remodeling?",
    answer:
      "Coatwell provides kitchen remodeling services throughout El Paso, Socorro, Horizon City, East El Paso, West El Paso, Northeast El Paso and surrounding communities.",
  },
];

export default function KitchenRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen Remodeling in El Paso, TX",
    serviceType: "Kitchen Remodeling and Renovation",
    url: PAGE_URL,
    description:
      "Kitchen remodeling and renovation services for homeowners in El Paso, Texas and surrounding communities.",

    provider: {
      "@type": "Organization",
      name: "Coatwell",
      url: SITE_URL,
    },

    areaServed: [
      {
        "@type": "City",
        name: "El Paso",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      {
        "@type": "City",
        name: "Socorro",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      {
        "@type": "City",
        name: "Horizon City",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kitchen Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Kitchen Remodeling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Cabinet Updates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Flooring and Finishes",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Kitchen Remodeling",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative min-h-[500px] overflow-hidden bg-[#11151c] text-white lg:min-h-[540px]"
        aria-labelledby="kitchen-remodeling-page-heading"
      >
        <Image
          src="/Services_cab_1.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[500px]
            max-w-[1450px]
            items-center
            px-6
            pb-16
            pt-[175px]
            lg:min-h-[540px]
            lg:px-10
            lg:pb-20
            lg:pt-[190px]
            xl:px-14
          "
        >
          <div className="max-w-[950px]">
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-3 text-sm font-bold"
            >
              <Link
                href="/"
                className="text-white/50 transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-red-500">/</span>

              <Link
                href="/services"
                className="text-white/50 transition hover:text-white"
              >
                Services
              </Link>

              <span className="text-red-500">/</span>

              <span className="text-white">Kitchen Remodeling</span>
            </nav>

            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Kitchen Remodeling • El Paso, Texas
              </p>
            </div>

            <h1
              id="kitchen-remodeling-page-heading"
              className="
                mt-5
                max-w-[1050px]
                text-[52px]
                font-black
                uppercase
                leading-[0.91]
                tracking-[-0.05em]
                sm:text-[64px]
                lg:text-[76px]
                xl:text-[82px]
              "
            >
              Kitchen Remodeling
              <br />
              <span className="text-red-600">In El Paso.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-[760px]
                text-lg
                font-medium
                leading-8
                text-white/75
                lg:text-xl
              "
            >
              Kitchen remodeling and renovation services designed to transform
              outdated kitchens into functional, finished spaces built around
              your home.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-red-600" />
      </section>

      {/* =====================================================
          MAIN SERVICE CONTENT
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div
          className="
            mx-auto
            grid
            max-w-[1450px]
            gap-12
            px-6
            lg:grid-cols-[minmax(0,1fr)_320px]
            lg:gap-16
            lg:px-10
            xl:px-14
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <main>
            {/* MAIN PROJECT IMAGE */}

            <div
              className="
                relative
                h-[390px]
                overflow-hidden
                rounded-[10px]
                sm:h-[450px]
                lg:h-[500px]
              "
            >
              <Image
                src="/Services_cab_1.jpeg"
                alt="Kitchen remodeling project in El Paso Texas"
                fill
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>

            {/* INTRODUCTION */}

            <div className="mt-10 max-w-[1000px]">
              <p className="text-[17px] leading-8 text-neutral-600">
                The kitchen is one of the most used spaces in a home, and the
                right renovation can improve both how it looks and how it
                functions. Coatwell provides kitchen remodeling services
                throughout El Paso, TX for homeowners looking to update,
                improve or completely transform their kitchens.
              </p>

              <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                Kitchen remodeling can include cabinetry, countertops,
                flooring, drywall, painting, trim and other interior finishes.
                Whether you&apos;re planning a targeted kitchen update or a
                larger renovation, the project is built around the existing
                space, your goals and the work required to bring everything
                together.
              </p>
            </div>

            {/* =================================================
                COMPLETE KITCHEN REMODELING
            ================================================= */}

            <section
              aria-labelledby="complete-kitchen-remodeling-heading"
              className="mt-16"
            >
              <div
                className="
                  grid
                  gap-10
                  lg:grid-cols-[1fr_1fr]
                  lg:items-center
                  lg:gap-12
                "
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Kitchen Renovations
                  </p>

                  <h2
                    id="complete-kitchen-remodeling-heading"
                    className="
                      mt-4
                      text-[38px]
                      font-black
                      leading-[1]
                      tracking-[-0.04em]
                      text-[#151922]
                      sm:text-[44px]
                      lg:text-[48px]
                    "
                  >
                    Kitchen Remodeling
                    <br />
                    in{" "}
                    <span className="text-red-600">El Paso, TX</span>
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    A kitchen remodel can range from updating finishes to
                    rebuilding major portions of the room. Coatwell brings the
                    different parts of the renovation together so the finished
                    kitchen feels intentional rather than like a collection of
                    separate improvements.
                  </p>

                  <ul className="mt-7 space-y-4">
                    {[
                      "Kitchen Cabinets & Cabinet Updates",
                      "Countertops & Interior Finishes",
                      "Flooring, Drywall & Painting",
                      "Complete Kitchen Renovations",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[15px] font-bold text-[#273142]"
                      >
                        <span
                          aria-hidden="true"
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-red-500
                            text-[11px]
                            font-black
                            text-red-600
                          "
                        >
                          ✓
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-[430px] overflow-hidden rounded-[8px]">
                  <Image
                    src="/Services_cab_1.jpeg"
                    alt="Kitchen cabinets and remodeling work in an El Paso home"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* =================================================
                QUALITY CARDS
            ================================================= */}

            <section
              aria-label="Kitchen remodeling service benefits"
              className="
                mt-14
                grid
                overflow-hidden
                border
                border-black/10
                sm:grid-cols-2
              "
            >
              <div className="flex gap-5 p-8 sm:border-r sm:border-black/10">
                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-red-500
                    text-lg
                    font-black
                    text-red-600
                  "
                >
                  ✓
                </div>

                <div>
                  <h3 className="text-[17px] font-black text-[#151922]">
                    Built Around Your Kitchen
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    The remodeling scope is developed around the existing
                    kitchen, the improvements you want and the finishes selected
                    for the space.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-t border-black/10 p-8 sm:border-t-0">
                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-red-500
                    text-lg
                    font-black
                    text-red-600
                  "
                >
                  ★
                </div>

                <div>
                  <h3 className="text-[17px] font-black text-[#151922]">
                    One Coordinated Remodel
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Cabinets, flooring, drywall, painting and finish work can be
                    coordinated as parts of one larger kitchen renovation.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                KITCHEN UPDATES
            ================================================= */}

            <section
              aria-labelledby="kitchen-updates-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <div
                className="
                  grid
                  gap-10
                  lg:grid-cols-[1fr_1fr]
                  lg:items-center
                  lg:gap-12
                "
              >
                <div className="relative h-[430px] overflow-hidden rounded-[8px]">
                  <Image
                    src="/Services_floor_2.jpeg"
                    alt="Kitchen flooring and renovation work in El Paso Texas"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Kitchen Updates
                  </p>

                  <h2
                    id="kitchen-updates-heading"
                    className="
                      mt-4
                      text-[38px]
                      font-black
                      leading-[1]
                      tracking-[-0.04em]
                      text-[#151922]
                      sm:text-[44px]
                      lg:text-[48px]
                    "
                  >
                    Upgrade Your Kitchen
                    <br />
                    Without Starting Over.
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    Not every kitchen needs to be completely rebuilt. Targeted
                    improvements can change the appearance and feel of the room
                    while keeping portions of the existing kitchen that still
                    work for your home.
                  </p>

                  <p className="mt-4 text-[16px] leading-8 text-neutral-600">
                    Depending on the project, that can include updating
                    cabinetry, installing new flooring, repairing drywall,
                    repainting the space or replacing selected finishes as part
                    of a more focused renovation.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                LOCAL SEO / AEO
            ================================================= */}

            <section
              aria-labelledby="el-paso-kitchen-remodeling-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <div className="max-w-[1000px]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                  Local Kitchen Remodeling
                </p>

                <h2
                  id="el-paso-kitchen-remodeling-heading"
                  className="
                    mt-4
                    text-[38px]
                    font-black
                    leading-[1]
                    tracking-[-0.04em]
                    text-[#151922]
                    sm:text-[44px]
                  "
                >
                  Kitchen Remodeling Throughout{" "}
                  <span className="text-red-600">El Paso.</span>
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                  Coatwell is a veteran-owned remodeling company serving El
                  Paso, Texas and surrounding communities. We provide kitchen
                  remodeling and renovation services for homeowners throughout
                  East El Paso, West El Paso, Northeast El Paso, Socorro,
                  Horizon City and surrounding areas.
                </p>

                <p className="mt-5 text-[17px] leading-8 text-neutral-600">
                  If you&apos;re looking for a kitchen remodeling contractor in
                  El Paso, Coatwell can evaluate your existing kitchen, discuss
                  the changes you want to make and develop a remodeling scope
                  around the work required for your project.
                </p>

                <Link
                  href="/contact"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-5
                    rounded-lg
                    bg-red-600
                    px-7
                    py-4
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.08em]
                    text-white
                    transition
                    hover:bg-[#151922]
                  "
                >
                  Request A Kitchen Estimate

                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </Link>
              </div>
            </section>

            {/* =================================================
                FAQ / AEO
            ================================================= */}

            <section
              aria-labelledby="kitchen-remodeling-faq-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                Frequently Asked Questions
              </p>

              <h2
                id="kitchen-remodeling-faq-heading"
                className="
                  mt-4
                  text-[38px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#151922]
                  sm:text-[44px]
                "
              >
                El Paso Kitchen Remodeling{" "}
                <span className="text-red-600">FAQs.</span>
              </h2>

              <div className="mt-9 border-t border-black/10">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border-b border-black/10"
                  >
                    <summary
                      className="
                        flex
                        cursor-pointer
                        list-none
                        items-center
                        justify-between
                        gap-8
                        py-6
                        text-[17px]
                        font-black
                        text-[#151922]
                        [&::-webkit-details-marker]:hidden
                      "
                    >
                      <span>{faq.question}</span>

                      <span
                        aria-hidden="true"
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-red-500
                          text-xl
                          text-red-600
                          transition-transform
                          group-open:rotate-45
                        "
                      >
                        +
                      </span>
                    </summary>

                    <p className="max-w-[900px] pb-7 pr-12 text-[15px] leading-7 text-neutral-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </main>

          {/* =================================================
              RIGHT SERVICES SIDEBAR
          ================================================= */}

          <aside>
            <div className="lg:sticky lg:top-[120px]">
              <div className="rounded-[8px] bg-[#f0f3f9] px-7 py-7">
                <div className="flex items-center gap-4">
                  <h2 className="text-[23px] font-black text-[#151922]">
                    Services
                  </h2>

                  <span className="h-px w-5 bg-[#151922]" />
                </div>

                <nav
                  aria-label="Coatwell services"
                  className="mt-5 border-t border-[#d7dce5]"
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      aria-current={service.active ? "page" : undefined}
                      className={`
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#d7dce5]
                        py-[18px]
                        text-[14px]
                        font-bold
                        transition
                        ${
                          service.active
                            ? "text-red-600"
                            : "text-[#151922] hover:text-red-600"
                        }
                      `}
                    >
                      {service.label}

                      {service.active && (
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-red-600"
                        />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-red-600 text-white">
        <div
          className="
            mx-auto
            flex
            max-w-[1450px]
            flex-col
            gap-8
            px-6
            py-16
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-10
            xl:px-14
          "
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/55">
              Coatwell Kitchen Remodeling
            </p>

            <h2
              className="
                mt-3
                text-[42px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-[50px]
              "
            >
              Ready To Remodel
              <br />
              Your Kitchen?
            </h2>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-8
              rounded-lg
              bg-white
              px-8
              py-[18px]
              text-xs
              font-black
              uppercase
              tracking-[0.08em]
              text-black
              transition
              hover:bg-[#151922]
              hover:text-white
            "
          >
            Get A Free Estimate

            <span
              aria-hidden="true"
              className="text-lg transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}