"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ServiceKey = "painting" | "roofing" | "remodeling" | "flooring";

type Service = {
  key: ServiceKey;
  title: string;
  subtitle: string;
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  features: string[];
  icon: "paint" | "roof" | "tools" | "floor";
};

const services: Service[] = [
  {
    key: "painting",
    title: "Painting",
    subtitle: "Interior & Exterior",
    eyebrow: "Professional Painting",
    heading: "Interior & Exterior Painting",
    description:
      "Give your home or business a cleaner, sharper finish with professional painting from Coatwell. We handle preparation, repairs, coatings, and finishing for interior and exterior projects throughout El Paso.",
    image: "/Services_cab_1.jpeg",
    alt: "Interior renovation and finishing project by Coatwell in El Paso, Texas",
    href: "/services/painting",
    features: [
      "Interior Painting",
      "Exterior Painting",
      "Surface Preparation",
      "Stucco & Drywall Repair",
    ],
    icon: "paint",
  },
  {
    key: "roofing",
    title: "Roofing",
    subtitle: "Repairs & Replacement",
    eyebrow: "Professional Roofing",
    heading: "Roofing Built To Protect",
    description:
      "Protect your home with dependable roofing services from Coatwell. We provide roof repairs, maintenance, and replacement solutions designed for homes throughout El Paso and the Southwest.",
    image: "/Services_Flooring_1.jpeg",
    alt: "Residential construction project by Coatwell in El Paso, Texas",
    href: "/services/roofing",
    features: [
      "Roof Replacement",
      "Roof Repairs",
      "Roof Maintenance",
      "Residential Roofing",
    ],
    icon: "roof",
  },
  {
    key: "remodeling",
    title: "Remodeling",
    subtitle: "Kitchens & Bathrooms",
    eyebrow: "Home Remodeling",
    heading: "Spaces Built Around You",
    description:
      "Transform outdated spaces into rooms designed around the way you live. Coatwell provides kitchen and bathroom remodeling with quality craftsmanship, practical design, and straightforward project management.",
    image: "/Services_shower_1.jpeg",
    alt: "Bathroom and shower remodeling project by Coatwell in El Paso, Texas",
    href: "/services/remodeling",
    features: [
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Cabinetry & Trim",
      "Interior Renovations",
    ],
    icon: "tools",
  },
  {
    key: "flooring",
    title: "Flooring & Drywall",
    subtitle: "Complete Interior Finishes",
    eyebrow: "Interior Finishes",
    heading: "Finish The Space Right",
    description:
      "Bring the entire renovation together with professional flooring and drywall services. From wall repairs and new drywall to flooring installation, Coatwell delivers clean, durable interior finishes.",
    image: "/Services_floor_2.jpeg",
    alt: "Flooring installation and interior renovation project by Coatwell in El Paso, Texas",
    href: "/services/flooring-drywall",
    features: [
      "Flooring Installation",
      "Drywall Installation",
      "Drywall Repair",
      "Interior Finishing",
    ],
    icon: "floor",
  },
];

function ServiceIcon({
  type,
  className = "h-7 w-7",
}: {
  type: Service["icon"];
  className?: string;
}) {
  if (type === "paint") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4h12v5H4zM16 6h2.5A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15h4v6H9z"
        />
      </svg>
    );
  }

  if (type === "roof") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3 11 9-7 9 7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 10v10h13V10M9 20v-6h6v6"
        />
      </svg>
    );
  }

  if (type === "tools") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.5 5.5 4-4 4 4-4 4M13 7l4 4M4 20l8.5-8.5M3 21l-1-1 7.5-7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4 4 16 16M4 4l3 1 2 3"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"
      />
    </svg>
  );
}

function TrustIcon({
  type,
}: {
  type: "quality" | "team" | "communication" | "location";
}) {
  if (type === "quality") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
        <path d="M8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 12v4M8 20h8M10 16h4" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3" />
        <circle cx="5" cy="10" r="2" />
        <circle cx="19" cy="10" r="2" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2M2 19v-1a4 4 0 0 1 5-3.9M22 19v-1a4 4 0 0 0-5-3.9" />
      </svg>
    );
  }

  if (type === "communication") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ServicesSection() {
  const [activeKey, setActiveKey] = useState<ServiceKey>("painting");

  const active =
    services.find((service) => service.key === activeKey) ?? services[0];

  function showNextService() {
    const currentIndex = services.findIndex(
      (service) => service.key === activeKey
    );

    const nextService = services[(currentIndex + 1) % services.length];

    setActiveKey(nextService.key);
  }

  return (
    <section
      className="
        relative
        flex
        min-h-[760px]
        items-center
        overflow-hidden
        bg-[#171c24]
        py-16
        text-white
        lg:min-h-[800px]
        lg:py-[72px]
        xl:min-h-[820px]
        xl:py-20
      "
      aria-labelledby="services-heading"
    >
      {/* =====================================================
          LARGE BACKGROUND SERVICES
         ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[-25px]
          select-none
          whitespace-nowrap
          text-[150px]
          font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-white/[0.035]
          lg:text-[215px]
          xl:text-[260px]
        "
      >
        SERVICES
      </div>

      {/* =====================================================
          ARCHITECTURAL BACKGROUND
         ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-60px]
          top-[20px]
          h-[380px]
          w-[380px]
          opacity-[0.08]
          xl:right-[-10px]
          xl:h-[440px]
          xl:w-[440px]
        "
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          className="h-full w-full stroke-white"
          strokeWidth="1.2"
        >
          <path d="M40 260 245 75l215 185" />
          <path d="M83 222v220h326V222" />
          <path d="M175 442V286h138v156" />
          <path d="M108 270h70v82h-70z" />
          <path d="M316 270h68v82h-68z" />
          <path d="M245 75V35" />
          <path d="M340 158V66h44v131" />
          <path d="M67 282 245 118l180 164" />
          <path d="M82 388h326" />

          <path
            d="M383 162v100"
            className="stroke-red-600"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN WIDTH
         ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-6 lg:px-10 xl:px-14">
        {/* =====================================================
            HEADING
           ===================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-[3px] w-10 bg-red-600"
              />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Our Services
              </p>
            </div>

            <h2
              id="services-heading"
              className="
                text-[44px]
                font-black
                uppercase
                leading-[0.92]
                tracking-[-0.045em]
                text-white
                sm:text-[52px]
                lg:text-[60px]
                xl:text-[66px]
              "
            >
              Built For Every
              <br />
              Part Of Your{" "}
              <span className="text-red-600">Home.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[570px] text-base leading-7 text-white/60 lg:ml-auto">
              From painting and roofing to complete home renovations, Coatwell
              provides professional construction and finishing services
              throughout El Paso, Texas. One team. A higher standard.
            </p>
          </div>
        </div>

        {/* =====================================================
            SERVICES + FEATURE CARD
           ===================================================== */}

        <div
          className="
            mt-10
            grid
            gap-5
            lg:grid-cols-[270px_minmax(0,1fr)]
            xl:grid-cols-[285px_minmax(0,1fr)]
          "
        >
          {/* =================================================
              SERVICE SELECTOR
             ================================================= */}

          <div className="flex flex-col gap-2.5">
            {services.map((service) => {
              const selected = service.key === activeKey;

              return (
                <button
                  key={service.key}
                  type="button"
                  onClick={() => setActiveKey(service.key)}
                  aria-pressed={selected}
                  className={`
                    group
                    relative
                    flex
                    min-h-[82px]
                    w-full
                    items-center
                    gap-3.5
                    overflow-hidden
                    rounded-[14px]
                    border
                    px-4
                    text-left
                    transition
                    duration-300
                    ${
                      selected
                        ? "border-red-600 bg-red-600 shadow-[0_14px_32px_rgba(220,38,38,0.22)]"
                        : "border-white/[0.07] bg-white/[0.045] hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.075]"
                    }
                  `}
                >
                  {selected && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[4px] bg-white"
                    />
                  )}

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-[9px]
                      ${
                        selected
                          ? "bg-white/10 text-white"
                          : "bg-white/[0.04] text-white/80"
                      }
                    `}
                  >
                    <ServiceIcon type={service.icon} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-black uppercase text-white">
                      {service.title}
                    </p>

                    <p
                      className={`mt-1 text-[11px] ${
                        selected ? "text-white/75" : "text-white/45"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`
                      text-lg
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      ${selected ? "text-white" : "text-white/35"}
                    `}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              FEATURE CARD
             ================================================= */}

          <div
            key={active.key}
            className="
              overflow-hidden
              rounded-[24px]
              bg-white
              text-[#151922]
              shadow-[0_28px_70px_rgba(0,0,0,0.28)]
            "
          >
            <div className="grid min-h-[375px] lg:grid-cols-[1.08fr_.92fr]">
              {/* =============================================
                  FEATURE COPY
                 ============================================= */}

              <div className="flex flex-col justify-center p-7 lg:p-8 xl:p-9">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-[3px] w-8 bg-red-600"
                  />

                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700">
                    {active.eyebrow}
                  </p>
                </div>

                <h3
                  className="
                    mt-4
                    max-w-[500px]
                    text-[30px]
                    font-black
                    uppercase
                    leading-[0.96]
                    tracking-[-0.04em]
                    text-[#11151c]
                    lg:text-[35px]
                    xl:text-[39px]
                  "
                >
                  {active.heading}
                </h3>

                <p className="mt-4 max-w-[520px] text-sm leading-6 text-neutral-600">
                  {active.description}
                </p>

                <div className="mt-6 grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                  {active.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="text-lg font-black text-red-600"
                      >
                        ✓
                      </span>

                      <span className="text-[13px] font-semibold text-neutral-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Link
                    href={active.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-5
                      rounded-[10px]
                      bg-[#101318]
                      px-6
                      py-3.5
                      text-[11px]
                      font-black
                      uppercase
                      tracking-[0.08em]
                      text-white
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-red-600
                      hover:shadow-[0_14px_30px_rgba(220,38,38,0.2)]
                    "
                  >
                    Explore {active.title}

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* =============================================
                  FEATURE IMAGE
                 ============================================= */}

              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[375px]">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/[0.04] via-transparent to-transparent" />

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/55
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white">
                    Coatwell • El Paso
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveKey("remodeling")}
                    aria-label="View remodeling service"
                    className="
                      relative
                      h-[58px]
                      w-[72px]
                      overflow-hidden
                      rounded-[8px]
                      border-2
                      border-red-600
                      bg-neutral-200
                      shadow-lg
                      transition
                      hover:-translate-y-1
                    "
                  >
                    <Image
                      src="/Services_shower_1.jpeg"
                      alt=""
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveKey("flooring")}
                    aria-label="View flooring and drywall service"
                    className="
                      relative
                      hidden
                      h-[58px]
                      w-[72px]
                      overflow-hidden
                      rounded-[8px]
                      border-2
                      border-white
                      bg-neutral-200
                      shadow-lg
                      transition
                      hover:-translate-y-1
                      sm:block
                    "
                  >
                    <Image
                      src="/Services_floor_2.jpeg"
                      alt=""
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveKey("painting")}
                    aria-label="View painting service"
                    className="
                      relative
                      hidden
                      h-[58px]
                      w-[72px]
                      overflow-hidden
                      rounded-[8px]
                      border-2
                      border-white
                      bg-neutral-200
                      shadow-lg
                      transition
                      hover:-translate-y-1
                      md:block
                    "
                  >
                    <Image
                      src="/Services_cab_1.jpeg"
                      alt=""
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={showNextService}
                    aria-label="View next service"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-black/80
                      text-base
                      text-white
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      duration-300
                      hover:bg-red-600
                    "
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST ROW + CTA
           ===================================================== */}

        <div
          className="
            mt-11
            grid
            gap-8
            border-t
            border-white/[0.08]
            pt-8
            xl:grid-cols-[1fr_300px]
            xl:gap-10
          "
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3 lg:border-r lg:border-white/10 lg:pr-5">
              <div className="shrink-0 text-red-600">
                <TrustIcon type="quality" />
              </div>

              <div>
                <p className="text-[13px] font-black uppercase leading-tight">
                  Quality
                  <br />
                  Craftsmanship
                </p>

                <p className="mt-1.5 text-[11px] text-white/45">
                  Built to last.
                </p>
              </div>
            </div>

            <div className="flex gap-3 lg:border-r lg:border-white/10 lg:pr-5">
              <div className="shrink-0 text-red-600">
                <TrustIcon type="team" />
              </div>

              <div>
                <p className="text-[13px] font-black uppercase leading-tight">
                  One Team
                  <br />
                  For Every Project
                </p>

                <p className="mt-1.5 text-[11px] text-white/45">
                  Painting. Roofing. Remodeling.
                </p>
              </div>
            </div>

            <div className="flex gap-3 lg:border-r lg:border-white/10 lg:pr-5">
              <div className="shrink-0 text-red-600">
                <TrustIcon type="communication" />
              </div>

              <div>
                <p className="text-[13px] font-black uppercase leading-tight">
                  Clear
                  <br />
                  Communication
                </p>

                <p className="mt-1.5 text-[11px] text-white/45">
                  Know what to expect.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0 text-red-600">
                <TrustIcon type="location" />
              </div>

              <div>
                <p className="text-[13px] font-black uppercase leading-tight">
                  Proudly Serving
                  <br />
                  El Paso, Texas
                </p>

                <p className="mt-1.5 text-[11px] text-white/45">
                  Homes and businesses in our community.
                </p>
              </div>
            </div>
          </div>

          <div className="border-white/10 xl:border-l xl:pl-8">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-7 bg-red-600"
              />

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
                Ready To Get Started?
              </p>
            </div>

            <h3 className="mt-3 text-[26px] font-black uppercase leading-[0.95] tracking-[-0.035em]">
              Let&apos;s Build
              <br />
              Something{" "}
              <span className="text-red-600">Better.</span>
            </h3>

            <Link
              href="#estimate"
              className="
                group
                mt-5
                flex
                w-full
                items-center
                justify-between
                rounded-[10px]
                bg-red-600
                px-5
                py-3.5
                text-[11px]
                font-black
                uppercase
                tracking-[0.08em]
                text-white
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-black
              "
            >
              Get A Free Estimate

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}