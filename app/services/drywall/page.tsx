import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://coatwellinteriors.com";
const PAGE_URL = `${SITE_URL}/services/drywall`;

export const metadata: Metadata = {
  title: "Drywall Repair & Installation in El Paso, TX | Coatwell",
  description:
    "Professional drywall repair and installation in El Paso, TX. Coatwell provides drywall patching, installation, texture, wall and ceiling repairs for homes and businesses.",

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
    title: "Drywall Repair & Installation in El Paso, TX | Coatwell",
    description:
      "Professional drywall repair, installation, patching and texture services throughout El Paso, Texas and surrounding areas.",
    url: PAGE_URL,
    siteName: "Coatwell",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drywall Repair & Installation in El Paso, TX | Coatwell",
    description:
      "Drywall repair and installation services for homes and businesses throughout El Paso, Texas.",
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
    active: true,
  },
];

const faqs = [
  {
    question: "What drywall services does Coatwell offer in El Paso?",
    answer:
      "Coatwell provides drywall repair and installation for residential and commercial properties throughout El Paso. Services can include drywall patching, damaged drywall replacement, new drywall installation, wall and ceiling repairs, texture work and drywall associated with remodeling projects.",
  },
  {
    question: "Does Coatwell repair damaged drywall?",
    answer:
      "Yes. Coatwell repairs damaged drywall in walls and ceilings. The repair scope depends on the size and location of the damaged area and the condition of the surrounding drywall.",
  },
  {
    question: "Does Coatwell install new drywall?",
    answer:
      "Yes. New drywall installation is available for remodeling projects, damaged areas, new walls and other interior projects where drywall needs to be installed and finished.",
  },
  {
    question: "Can Coatwell match existing wall texture?",
    answer:
      "Coatwell can repair and texture drywall with the goal of blending the repaired area as closely as reasonably possible with the surrounding existing finish. Exact texture matching can vary depending on the existing surface and texture.",
  },
  {
    question: "Can Coatwell paint after repairing drywall?",
    answer:
      "Yes. Because Coatwell also provides professional painting services, drywall repair and painting can be included within the same project when both are required.",
  },
  {
    question: "What areas does Coatwell serve for drywall work?",
    answer:
      "Coatwell provides drywall services throughout El Paso, Socorro, Horizon City, East El Paso, West El Paso, Northeast El Paso and surrounding communities.",
  },
];

export default function DrywallPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drywall Repair & Installation in El Paso, TX",
    serviceType: "Drywall Repair and Installation",
    url: PAGE_URL,
    description:
      "Drywall repair, installation, patching and texture services for residential and commercial properties in El Paso, Texas and surrounding communities.",

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
      name: "Drywall Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Patching and Texture",
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
        name: "Drywall",
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
        aria-labelledby="drywall-page-heading"
      >
        <Image
          src="/Services_bath_1.jpeg"
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

              <span className="text-white">Drywall</span>
            </nav>

            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Drywall Services • El Paso, Texas
              </p>
            </div>

            <h1
              id="drywall-page-heading"
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
              Drywall Services
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
              Professional drywall repair, installation, patching and texture
              work for homes, businesses and remodeling projects throughout El
              Paso.
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
                src="/Services_bath_1.jpeg"
                alt="Drywall repair and installation project in El Paso Texas"
                fill
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>

            {/* INTRODUCTION */}

            <div className="mt-10 max-w-[1000px]">
              <p className="text-[17px] leading-8 text-neutral-600">
                Damaged or poorly finished drywall can stand out throughout an
                otherwise finished room. Coatwell provides professional drywall
                repair and installation throughout El Paso, TX for residential
                and commercial properties, including standalone drywall work
                and repairs completed as part of larger remodeling projects.
              </p>

              <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                Our drywall services can include patching damaged areas,
                replacing sections of drywall, installing new drywall,
                repairing walls and ceilings, applying texture and preparing
                surfaces for paint. The scope is based on the existing
                condition and the work required to return the area to a clean,
                finished appearance.
              </p>
            </div>

            {/* =================================================
                DRYWALL REPAIR
            ================================================= */}

            <section
              aria-labelledby="drywall-repair-heading"
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
                    Drywall Repair
                  </p>

                  <h2
                    id="drywall-repair-heading"
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
                    Professional Drywall
                    <br />
                    Repair in{" "}
                    <span className="text-red-600">El Paso, TX</span>
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    Drywall damage can range from small holes and cracks to
                    larger sections that need to be removed and replaced.
                    Coatwell evaluates the affected area and develops the
                    repair around the size of the damage, surrounding drywall
                    and existing finish.
                  </p>

                  <ul className="mt-7 space-y-4">
                    {[
                      "Drywall Patching & Repairs",
                      "Wall & Ceiling Repairs",
                      "Damaged Drywall Replacement",
                      "Texture & Surface Preparation",
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
                    src="/Services_bath_1.jpeg"
                    alt="Professional drywall repair for a wall in El Paso Texas"
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
              aria-label="Drywall service benefits"
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
                    Careful Repairs
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Repairs are developed around the damaged area and
                    surrounding surfaces to create a clean, finished result.
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
                    Ready For Paint
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Drywall can be finished and prepared for painting, with
                    painting services available when they are part of the same
                    project.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                DRYWALL INSTALLATION
            ================================================= */}

            <section
              aria-labelledby="drywall-installation-heading"
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
                    alt="New drywall installation for an El Paso remodeling project"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Drywall Installation
                  </p>

                  <h2
                    id="drywall-installation-heading"
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
                    Drywall Installation
                    <br />
                    in <span className="text-red-600">El Paso, TX</span>
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    New drywall installation may be required during a remodel,
                    after damaged materials are removed or when interior spaces
                    are being changed. Coatwell can install and finish drywall
                    as part of standalone work or a larger renovation.
                  </p>

                  <p className="mt-4 text-[16px] leading-8 text-neutral-600">
                    Once installed, drywall can be finished, textured and
                    prepared for primer and paint so the new surfaces integrate
                    with the rest of the room as closely as reasonably
                    possible.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                LOCAL SEO / AEO
            ================================================= */}

            <section
              aria-labelledby="el-paso-drywall-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <div className="max-w-[1000px]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                  Local Drywall Services
                </p>

                <h2
                  id="el-paso-drywall-heading"
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
                  Drywall Services Throughout{" "}
                  <span className="text-red-600">El Paso.</span>
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                  Coatwell is a veteran-owned painting and remodeling company
                  serving El Paso, Texas and surrounding communities. We
                  provide drywall repair and installation for residential and
                  commercial properties throughout East El Paso, West El Paso,
                  Northeast El Paso, Socorro, Horizon City and surrounding
                  areas.
                </p>

                <p className="mt-5 text-[17px] leading-8 text-neutral-600">
                  If you&apos;re looking for drywall repair in El Paso,
                  Coatwell can evaluate the damaged or unfinished area and
                  develop a scope for the drywall installation, repair,
                  finishing, texture and related painting your project
                  requires.
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
                  Request A Drywall Estimate

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
              aria-labelledby="drywall-faq-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                Frequently Asked Questions
              </p>

              <h2
                id="drywall-faq-heading"
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
                El Paso Drywall{" "}
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
              Coatwell Drywall
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
              Need Drywall
              <br />
              Work Done?
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