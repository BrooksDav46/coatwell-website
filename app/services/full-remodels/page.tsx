import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://coatwellinteriors.com";
const PAGE_URL = `${SITE_URL}/services/full-remodels`;

export const metadata: Metadata = {
  title: "Full Home Remodeling in El Paso, TX | Coatwell",
  description:
    "Full home remodeling in El Paso, TX. Coatwell provides whole-home renovations, kitchen and bathroom remodeling, flooring, drywall, painting and interior renovations.",

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
    title: "Full Home Remodeling in El Paso, TX | Coatwell",
    description:
      "Whole-home remodeling and complete renovation services throughout El Paso, Texas and surrounding areas.",
    url: PAGE_URL,
    siteName: "Coatwell",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full Home Remodeling in El Paso, TX | Coatwell",
    description:
      "Complete home remodeling and renovation services throughout El Paso, Texas.",
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
    active: false,
  },
  {
    label: "Interior Renovations",
    href: "/services/interior-renovations",
    active: false,
  },
  {
    label: "Full Remodels",
    href: "/services/full-remodels",
    active: true,
  },
];

const faqs = [
  {
    question: "Does Coatwell provide full home remodeling in El Paso?",
    answer:
      "Yes. Coatwell provides full home remodeling and larger residential renovation services throughout El Paso. A full remodel can combine work across kitchens, bathrooms, living areas, bedrooms and other interior spaces within one coordinated project.",
  },
  {
    question: "What can be included in a full home remodel?",
    answer:
      "Depending on the property and project scope, a full remodel can include kitchen remodeling, bathroom remodeling, flooring, drywall, painting, doors, trim, cabinetry and other interior renovation work.",
  },
  {
    question: "Can Coatwell remodel multiple areas of my home at once?",
    answer:
      "Yes. Full remodels are designed for projects involving multiple rooms or larger portions of a property. Related work can be coordinated within one overall remodeling scope instead of treating every room as a separate project.",
  },
  {
    question:
      "What is the difference between an interior renovation and a full remodel?",
    answer:
      "An interior renovation may focus on one room, several finishes or selected areas of a property. A full remodel generally involves a broader scope across multiple rooms or major portions of the home and may combine several different remodeling services.",
  },
  {
    question: "Can kitchens and bathrooms be included in a full remodel?",
    answer:
      "Yes. Kitchen and bathroom remodeling can be incorporated into a larger full-home remodeling project along with flooring, drywall, painting and other interior renovation work.",
  },
  {
    question: "What areas does Coatwell serve for full home remodeling?",
    answer:
      "Coatwell provides full home remodeling services throughout El Paso, Socorro, Horizon City, East El Paso, West El Paso, Northeast El Paso and surrounding communities.",
  },
];

export default function FullRemodelsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Home Remodeling in El Paso, TX",
    serviceType: "Full Home Remodeling and Renovation",
    url: PAGE_URL,
    description:
      "Full home remodeling and complete residential renovation services in El Paso, Texas and surrounding communities.",

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
      name: "Full Home Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Whole-Home Remodeling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen and Bathroom Remodeling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Renovations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flooring, Drywall and Painting",
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
        name: "Full Remodels",
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
        aria-labelledby="full-remodels-page-heading"
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

              <span className="text-white">Full Remodels</span>
            </nav>

            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Full Home Remodeling • El Paso, Texas
              </p>
            </div>

            <h1
              id="full-remodels-page-heading"
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
              Full Home Remodeling
              <br />
              <span className="text-red-600">In El Paso.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-[790px]
                text-lg
                font-medium
                leading-8
                text-white/75
                lg:text-xl
              "
            >
              Complete home remodeling and renovation services for homeowners
              ready to transform multiple rooms or larger portions of their
              property.
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
                alt="Full home remodeling project in El Paso Texas"
                fill
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>

            {/* INTRODUCTION */}

            <div className="mt-10 max-w-[1000px]">
              <p className="text-[17px] leading-8 text-neutral-600">
                When several areas of a home need to be updated, handling each
                room as an unrelated project can make the renovation more
                complicated than it needs to be. Coatwell provides full home
                remodeling services throughout El Paso, TX for homeowners
                planning larger renovations involving multiple rooms or major
                portions of their property.
              </p>

              <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                A full remodel can bring together kitchen and bathroom
                remodeling, flooring, drywall, painting, doors, trim, cabinetry
                and other interior improvements within one coordinated scope.
                The project is developed around the existing home, the changes
                you want to make and the work required to create a cohesive
                finished space.
              </p>
            </div>

            {/* =================================================
                WHOLE HOME REMODELING
            ================================================= */}

            <section
              aria-labelledby="whole-home-remodeling-heading"
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
                    Whole-Home Renovations
                  </p>

                  <h2
                    id="whole-home-remodeling-heading"
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
                    Complete Home Remodeling
                    <br />
                    in{" "}
                    <span className="text-red-600">El Paso, TX</span>
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    Larger remodels require the different areas of the home to
                    work together. Instead of treating every room as a separate
                    project, Coatwell can build the renovation around one
                    overall scope so related work is coordinated throughout the
                    property.
                  </p>

                  <ul className="mt-7 space-y-4">
                    {[
                      "Kitchen & Bathroom Remodeling",
                      "Multi-Room Interior Renovations",
                      "Flooring, Drywall & Painting",
                      "Doors, Trim & Interior Finishes",
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
                    src="/Services_floor_2.jpeg"
                    alt="Complete home renovation and remodeling in El Paso Texas"
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
              aria-label="Full home remodeling benefits"
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
                    One Complete Scope
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Multiple rooms and remodeling services can be brought
                    together within one coordinated project scope.
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
                    Consistent Finished Home
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    Coordinating the renovation as a whole helps the materials,
                    finishes and remodeled spaces feel connected throughout the
                    property.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                MULTI-ROOM REMODELING
            ================================================= */}

            <section
              aria-labelledby="multi-room-remodeling-heading"
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
                    src="/Services_Flooring_1.jpeg"
                    alt="Multi room full home remodeling project in El Paso Texas"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Multi-Room Remodeling
                  </p>

                  <h2
                    id="multi-room-remodeling-heading"
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
                    Remodel Your Home
                    <br />
                    As One Project.
                  </h2>

                  <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                    A full remodel does not necessarily mean changing every
                    square foot of the property. It means approaching the
                    larger renovation as one project when several rooms or
                    major areas of the home need work.
                  </p>

                  <p className="mt-4 text-[16px] leading-8 text-neutral-600">
                    That could include remodeling the kitchen and bathrooms,
                    replacing flooring throughout the home, repairing or
                    replacing drywall, repainting interior spaces, updating
                    doors and trim, and completing the finish work needed to
                    bring the renovation together.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                LOCAL SEO / AEO
            ================================================= */}

            <section
              aria-labelledby="el-paso-full-remodeling-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <div className="max-w-[1000px]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                  Local Full Home Remodeling
                </p>

                <h2
                  id="el-paso-full-remodeling-heading"
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
                  Full Home Remodeling Throughout{" "}
                  <span className="text-red-600">El Paso.</span>
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-neutral-600">
                  Coatwell is a veteran-owned remodeling company serving El
                  Paso, Texas and surrounding communities. We provide full home
                  remodeling and larger residential renovation services
                  throughout East El Paso, West El Paso, Northeast El Paso,
                  Socorro, Horizon City and surrounding areas.
                </p>

                <p className="mt-5 text-[17px] leading-8 text-neutral-600">
                  If you&apos;re looking for a home remodeling contractor in El
                  Paso for a larger renovation, Coatwell can evaluate the
                  property, discuss the areas you want to remodel and develop a
                  project scope around the work required throughout your home.
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
                  Request A Remodel Estimate

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
              aria-labelledby="full-remodels-faq-heading"
              className="mt-20 border-t border-black/10 pt-16"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                Frequently Asked Questions
              </p>

              <h2
                id="full-remodels-faq-heading"
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
                El Paso Full Remodeling{" "}
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
              Coatwell Full Remodels
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
              Your Home?
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