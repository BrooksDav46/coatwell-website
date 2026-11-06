import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Painting, Roofing & Remodeling Services in El Paso, TX | Coatwell",
  description:
    "Explore Coatwell painting, roofing, kitchen remodeling, bathroom remodeling, flooring, drywall and renovation services in El Paso, Socorro, Horizon City and surrounding areas.",
};

const services = [
  {
    number: "01",
    title: "Painting",
    eyebrow: "Interior & Exterior",
    image: "/Services_cab_1.jpeg",
    href: "/services/painting",
  },
  {
    number: "02",
    title: "Roofing",
    eyebrow: "Residential & Commercial",
    image: "/Services_Flooring_1.jpeg",
    href: "/services/roofing",
  },
  {
    number: "03",
    title: "Kitchen Remodeling",
    eyebrow: "Kitchen Renovations",
    image: "/Services_cab_1.jpeg",
    href: "/services/kitchen-remodeling",
  },
  {
    number: "04",
    title: "Bathroom Remodeling",
    eyebrow: "Bathroom Renovations",
    image: "/Services_shower_1.jpeg",
    href: "/services/bathroom-remodeling",
  },
  {
    number: "05",
    title: "Flooring",
    eyebrow: "Installation & Replacement",
    image: "/Services_floor_2.jpeg",
    href: "/services/flooring",
  },
  {
    number: "06",
    title: "Drywall",
    eyebrow: "Installation & Repair",
    image: "/Services_bath_1.jpeg",
    href: "/services/drywall",
  },
  {
    number: "07",
    title: "Interior Renovations",
    eyebrow: "Interior Improvements",
    image: "/Services_Flooring_1.jpeg",
    href: "/services/interior-renovations",
  },
  {
    number: "08",
    title: "Full Remodels",
    eyebrow: "Complete Renovations",
    image: "/Services_shower_1.jpeg",
    href: "/services/full-remodels",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* =====================================================
          HERO
          Same scale/style as About page
         ===================================================== */}
      <section
        className="
          relative
          min-h-[500px]
          overflow-hidden
          bg-black
          text-white
          lg:min-h-[540px]
        "
        aria-labelledby="services-page-heading"
      >
        <Image
          src="/Services_shower_1.jpeg"
          alt="Coatwell painting roofing and remodeling services in El Paso Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* PHOTO FADE */}
        <div className="absolute inset-0 bg-black/55" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/95
            via-black/65
            to-black/15
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[160px]
            bg-gradient-to-t
            from-black/45
            to-transparent
          "
        />

        {/* LARGE BACKGROUND WORD */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-30px]
            top-[120px]
            select-none
            whitespace-nowrap
            text-[150px]
            font-black
            uppercase
            leading-none
            tracking-[-0.075em]
            text-white/[0.035]
            lg:text-[240px]
            xl:text-[285px]
          "
        >
          SERVICES
        </div>

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
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[3px] w-12 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Painting • Roofing • Remodeling
              </p>
            </div>

            <h1
              id="services-page-heading"
              className="
                text-[54px]
                font-black
                uppercase
                leading-[0.91]
                tracking-[-0.05em]
                sm:text-[66px]
                lg:text-[76px]
                xl:text-[82px]
              "
            >
              Our <span className="text-red-600">Services.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-[720px]
                text-lg
                font-medium
                leading-8
                text-white/75
                lg:text-xl
              "
            >
              Painting, roofing, remodeling, and property improvements for
              homes and businesses throughout the greater El Paso area.
            </p>

            <nav
              aria-label="Breadcrumb"
              className="mt-8 flex items-center gap-3 text-sm font-bold"
            >
              <Link
                href="/"
                className="text-white/55 transition hover:text-red-500"
              >
                Home
              </Link>

              <span className="text-red-500">/</span>

              <span className="text-white">Services</span>
            </nav>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-red-600" />
      </section>

      {/* =====================================================
          SHORT INTRO
         ===================================================== */}
      <section className="relative overflow-hidden bg-[#f5f5f3] py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-25px]
            top-[10px]
            select-none
            whitespace-nowrap
            text-[140px]
            font-black
            uppercase
            leading-none
            tracking-[-0.075em]
            text-black/[0.025]
            lg:text-[220px]
          "
        >
          COATWELL
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1450px]
            gap-8
            px-6
            lg:grid-cols-[1fr_1fr]
            lg:items-end
            lg:gap-20
            lg:px-10
            xl:px-14
          "
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-11 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                What We Do
              </p>
            </div>

            <h2
              className="
                mt-5
                text-[44px]
                font-black
                uppercase
                leading-[0.93]
                tracking-[-0.05em]
                text-[#151922]
                sm:text-[50px]
                lg:text-[58px]
              "
            >
              Everything Your
              <br />
              Property <span className="text-red-600">Needs.</span>
            </h2>
          </div>

          <div className="max-w-[700px]">
            <p className="text-[17px] leading-8 text-neutral-600">
              From a fresh coat of paint to a complete remodel, Coatwell brings
              multiple property improvement services together through one local
              company. Select a service below to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
         ===================================================== */}
      <section className="bg-white py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10 xl:px-14">
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="
                  group
                  relative
                  min-h-[340px]
                  overflow-hidden
                  rounded-[20px]
                  bg-[#171c24]
                  sm:min-h-[360px]
                  lg:min-h-[375px]
                  xl:min-h-[390px]
                "
              >
                {/* SERVICE IMAGE */}
                <Image
                  src={service.image}
                  alt={`${service.title} services by Coatwell in El Paso Texas`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/95
                    via-black/25
                    to-black/5
                    transition
                    duration-500
                    group-hover:via-black/35
                  "
                />

                {/* NUMBER */}
                <div
                  className="
                    absolute
                    left-6
                    top-6
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    text-[10px]
                    font-black
                    tracking-[0.08em]
                    text-white
                    backdrop-blur-md
                    transition
                    duration-300
                    group-hover:border-red-600
                    group-hover:bg-red-600
                    lg:left-7
                    lg:top-7
                  "
                >
                  {service.number}
                </div>

                {/* CARD CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-red-500
                    "
                  >
                    {service.eyebrow}
                  </p>

                  <h2
                    className="
                      mt-2
                      max-w-[590px]
                      text-[31px]
                      font-black
                      uppercase
                      leading-[0.95]
                      tracking-[-0.045em]
                      text-white
                      sm:text-[34px]
                      lg:text-[38px]
                      xl:text-[40px]
                    "
                  >
                    {service.title}
                  </h2>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/15
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-white/80
                      "
                    >
                      Explore Service
                    </span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-red-600
                        text-base
                        text-white
                        transition
                        duration-300
                        group-hover:translate-x-1
                        group-hover:bg-white
                        group-hover:text-black
                      "
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* BOTTOM HOVER ACCENT */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[4px]
                    origin-left
                    scale-x-0
                    bg-red-600
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SIMPLE PACKAGE PRICING
         ===================================================== */}
      <section className="bg-white pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10 xl:px-14">
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-[#171c24]
              px-7
              py-10
              text-white
              sm:px-9
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-14
              lg:px-12
              lg:py-12
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-20px]
                top-1/2
                -translate-y-1/2
                select-none
                whitespace-nowrap
                text-[100px]
                font-black
                uppercase
                leading-none
                tracking-[-0.07em]
                text-white/[0.025]
                lg:text-[180px]
              "
            >
              PACKAGE
            </div>

            <div className="relative z-10 max-w-[850px]">
              <div className="flex items-center gap-4">
                <span className="h-[3px] w-10 bg-red-600" />

                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-500">
                  Multi-Service Packages
                </p>
              </div>

              <h2
                className="
                  mt-4
                  text-[34px]
                  font-black
                  uppercase
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[40px]
                  lg:text-[46px]
                "
              >
                More Projects.
                <span className="text-red-600"> Better Value.</span>
              </h2>

              <p className="mt-4 max-w-[780px] text-[15px] leading-7 text-white/60">
                Combining multiple improvements into one project? Ask about
                available Coatwell package pricing for multi-service projects,
                larger renovations, and whole-home improvements.
              </p>
            </div>

            <div className="relative z-10 mt-7 shrink-0 lg:mt-0">
              <Link
                href="/#estimate"
                className="
                  group
                  flex
                  min-w-[235px]
                  items-center
                  justify-between
                  rounded-[10px]
                  bg-red-600
                  px-6
                  py-4
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.09em]
                  text-white
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Ask About Packages

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}   