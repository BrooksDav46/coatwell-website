import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://coatwellinteriors.com";
const PAGE_URL = `${SITE_URL}/services/painting`;

export const metadata: Metadata = {
  title: "Painting Services in El Paso, TX | Coatwell",
  description:
    "Professional interior and exterior painting services in El Paso, TX for homes and businesses. Coatwell provides interior painting, exterior painting, surface preparation, drywall repair, trim painting and more.",

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
    title: "Painting Services in El Paso, TX | Coatwell",
    description:
      "Interior and exterior painting services for homes and businesses throughout El Paso, Texas and surrounding areas.",
    url: PAGE_URL,
    siteName: "Coatwell",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Painting Services in El Paso, TX | Coatwell",
    description:
      "Professional interior and exterior painting services throughout El Paso, Texas.",
  },
};

const serviceLinks = [
  {
    label: "Painting",
    href: "/services/painting",
    active: true,
  },
  {
    label: "Roofing",
    href: "/services/roofing",
    active: false,
  },
  {
    label: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    active: false,
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
    question: "What painting services does Coatwell offer in El Paso?",
    answer:
      "Coatwell provides interior and exterior painting for residential and commercial properties throughout El Paso. Depending on the project, painting services can include walls, ceilings, doors, trim, baseboards, cabinets, stucco, fascia, soffits, surface preparation and related drywall repairs.",
  },
  {
    question: "Does Coatwell provide interior painting?",
    answer:
      "Yes. Coatwell provides interior painting for individual rooms, complete interior repaints and other residential or commercial painting projects throughout the El Paso area.",
  },
  {
    question: "Does Coatwell provide exterior painting?",
    answer:
      "Yes. Coatwell provides exterior painting in El Paso for surfaces such as stucco, fascia, soffits, doors, trim and other painted exterior surfaces depending on the property.",
  },
  {
    question: "Can you repair drywall before painting?",
    answer:
      "Yes. Coatwell also provides drywall services, so minor drywall repair, patching and surface preparation can be included when required by the painting project.",
  },
  {
    question: "What areas does Coatwell serve?",
    answer:
      "Coatwell serves El Paso, Socorro, Horizon City, East El Paso, West El Paso, Northeast El Paso and surrounding communities.",
  },
];

export default function PaintingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Painting Services in El Paso, TX",
    serviceType: "Interior and Exterior Painting",
    url: PAGE_URL,
    description:
      "Interior and exterior painting services for residential and commercial properties in El Paso, Texas and surrounding communities.",

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
      name: "Painting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Painting",
            url: `${SITE_URL}/services/interior-painting`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Painting",
            url: `${SITE_URL}/services/exterior-painting`,
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
        name: "Painting",
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
        aria-labelledby="painting-page-heading"
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
          <div className="max-w-[900px]">
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

              <span className="text-white">Painting</span>
            </nav>

            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Painting Services • El Paso, Texas
              </p>
            </div>

            <h1
              id="painting-page-heading"
              className="
                mt-5
                max-w-[1000px]
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
              Painting Services
              <br />
              <span className="text-red-600">In El Paso.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-[740px]
                text-lg
                font-medium
                leading-8
                text-white/75
                lg:text-xl
              "
            >
              Professional interior and exterior painting for homes and
              businesses throughout El Paso, Texas and surrounding areas.
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
            {/* MAIN PROJECT IMAGE - SLIGHTLY SMALLER */}

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
                alt="Professional interior painting project in El Paso Texas"
                fill
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>

            {/* INTRODUCTION */}

            <div className="mt-10 max-w-[1000px]">
              <p className="text-[17px] leading-8 text-neutral-600">
                A fresh coat of paint can completely transform the look and
                feel of your home or business. Coatwell provides professional
                painting services throughout El Paso, TX, with careful
                preparation, clean application, and attention to detail from
                start to finish. Whether you&apos;re repainting a single room
                or updating an entire property, we help create a clean,
                finished look built around your space.
              </p>

              <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                Our painting services are available for residential and
                commercial properties throughout El Paso and surrounding
                communities. We paint walls, ceilings, doors, baseboards, trim,
                cabinets, stucco, fascia, soffits and other interior or
                exterior surfaces while handling the preparation required for
                a professional finish.
              </p>
            </div>

            {/* =================================================
                INTERIOR PAINTING
            ================================================= */}

            <section
              aria-labelledby="interior-painting-heading"
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
                    Interior Painting
                  </p>

                  <h2
                    id="interior-painting-heading"
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
                    Professional Interior
                    <br />
                    Painting in{" "}
                    <span className="text-red-600">El Paso, TX</span>
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    From color updates to complete interior repaints, Coatwell
                    provides interior painting solutions tailored to your
                    property. Our team focuses on proper preparation and
                    detailed finish work to give your home or business a
                    polished, refreshed appearance.
                  </p>

                  <ul className="mt-7 space-y-4">
                    {[
                      "Walls & Ceiling Painting",
                      "Doors, Baseboards & Trim",
                      "Drywall Patching & Surface Prep",
                      "Residential & Commercial Painting",
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

                  <Link
                    href="/services/interior-painting"
                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-4
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.08em]
                      text-red-600
                      transition
                      hover:text-[#151922]
                    "
                  >
                    Learn More About Interior Painting

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>

                <div className="relative h-[430px] overflow-hidden rounded-[8px]">
                  <Image
                    src="/Services_bath_1.jpeg"
                    alt="Interior painting services for homes in El Paso Texas"
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
              aria-label="Painting service benefits"
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
                    Detailed Preparation
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Proper preparation helps create smoother, cleaner painted
                    surfaces and a more professional finished appearance.
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
                    Quality Finishes
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Careful application and attention to detail help create a
                    clean, consistent and professionally finished appearance.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                EXTERIOR PAINTING
            ================================================= */}

            <section
              aria-labelledby="exterior-painting-heading"
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
                    src="/Services_shower_1.jpeg"
                    alt="Exterior painting services for properties in El Paso Texas"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Exterior Painting
                  </p>

                  <h2
                    id="exterior-painting-heading"
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
                    Exterior Painting
                    <br />
                    in <span className="text-red-600">El Paso, TX</span>
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    Coatwell provides exterior painting for homes and
                    businesses throughout the El Paso area. Exterior projects
                    can include stucco, fascia, soffits, doors, trim and other
                    painted surfaces depending on the property.
                  </p>

                  <p className="mt-4 text-[16px] leading-8 text-neutral-600">
                    Proper preparation helps create a cleaner finished
                    appearance while refreshing surfaces exposed to El
                    Paso&apos;s sun and dry climate.
                  </p>

                  <Link
                    href="/services/exterior-painting"
                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-4
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.08em]
                      text-red-600
                      transition
                      hover:text-[#151922]
                    "
                  >
                    Learn More About Exterior Painting

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            {/* =================================================
                LOCAL SEO / AEO
            ================================================= */}

            <section
              aria-labelledby="el-paso-painting-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <div className="max-w-[1000px]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                  Local Painting Company
                </p>

                <h2
                  id="el-paso-painting-heading"
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
                  Painting Services Throughout{" "}
                  <span className="text-red-600">El Paso.</span>
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                  Coatwell is a veteran-owned painting and remodeling company
                  serving El Paso, Texas and surrounding communities. We
                  provide interior and exterior painting for residential and
                  commercial properties, including projects throughout East El
                  Paso, West El Paso, Northeast El Paso, Socorro and Horizon
                  City.
                </p>

                <p className="mt-5 text-[17px] leading-8 text-neutral-600">
                  If you&apos;re looking for a painting company in El Paso,
                  Coatwell can evaluate your property and build an estimate
                  around the surfaces, preparation and painting work your
                  project requires.
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
                  Request A Painting Estimate

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
              aria-labelledby="painting-faq-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                Frequently Asked Questions
              </p>

              <h2
                id="painting-faq-heading"
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
                El Paso Painting{" "}
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
              Coatwell Painting
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
              Ready To Refresh
              <br />
              Your Property?
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