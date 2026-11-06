import Image from "next/image";
import Link from "next/link";

type BenefitIcon =
  | "quality"
  | "communication"
  | "estimate"
  | "services";

type Benefit = {
  title: string;
  description: string;
  icon: BenefitIcon;
};

const benefits: Benefit[] = [
  {
    title: "Quality Craftsmanship",
    description:
      "Detail-focused work and finishes built to look right and last.",
    icon: "quality",
  },
  {
    title: "Clear Communication",
    description:
      "Straightforward updates and expectations from estimate to completion.",
    icon: "communication",
  },
  {
    title: "Detailed Estimates",
    description:
      "Clear project scopes so you understand the work before we get started.",
    icon: "estimate",
  },
  {
    title: "One Team. More Capability.",
    description:
      "Painting, roofing, remodeling, flooring, drywall and more.",
    icon: "services",
  },
];

function BenefitIcon({ type }: { type: BenefitIcon }) {
  if (type === "quality") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24 4 40 10v11c0 10.5-6.4 18.4-16 23-9.6-4.6-16-12.5-16-23V10L24 4Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.5 24 5 5 10.5-11"
        />
      </svg>
    );
  }

  if (type === "communication") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9h32v23H22L12 40v-8H8V9Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h18M15 24h13"
        />
      </svg>
    );
  }

  if (type === "estimate") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5h22l6 6v31H11V5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M33 5v7h6M17 19h16M17 26h16M17 33h9"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 13H5v30h25"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 23 24 7l19 16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20v22h28V20"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 42V29h10v13"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 13h8M32 13h8"
      />
    </svg>
  );
}

export default function WhyCoatwell() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#edf2f7]
        py-20
        lg:min-h-[760px]
        lg:py-24
      "
      aria-labelledby="why-coatwell-heading"
    >
      {/* =========================================
          LARGE BACKGROUND BRAND TEXT
         ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[40px]
          select-none
          whitespace-nowrap
          text-[130px]
          font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-[#111827]/[0.025]
          md:text-[190px]
          xl:text-[250px]
        "
      >
        COATWELL
      </div>

      {/* =========================================
          SUBTLE HOUSE LINEWORK
         ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-110px]
          right-[-70px]
          h-[420px]
          w-[420px]
          opacity-[0.035]
          xl:h-[520px]
          xl:w-[520px]
        "
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          className="h-full w-full stroke-[#111827]"
          strokeWidth="2"
        >
          <path d="M45 270 250 90l205 180" />
          <path d="M90 235v205h320V235" />
          <path d="M185 440V290h130v150" />
          <path d="M115 270h80v85h-80z" />
          <path d="M305 270h80v85h-80z" />
          <path d="M250 90v-40" />
          <path d="M330 160V80h45v120" />
        </svg>
      </div>

      {/* =========================================
          MAIN CONTENT
         ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1500px]
          items-center
          gap-12
          px-6
          md:px-10
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-10
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================
            LEFT SIDE — TRUCK
           ===================================== */}

        <div
          className="
            relative
            flex
            min-h-[400px]
            items-end
            justify-center
            lg:min-h-[590px]
            lg:justify-end
          "
        >
          {/* RED ACCENT */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[62px]
              left-[2%]
              h-[165px]
              w-[165px]
              rounded-full
              bg-red-600/[0.07]
              blur-[2px]
              lg:h-[220px]
              lg:w-[220px]
            "
          />

          {/* LARGE FAINT CIRCLE */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[35px]
              left-[6%]
              h-[310px]
              w-[310px]
              rounded-full
              border
              border-[#111827]/[0.05]
              lg:h-[430px]
              lg:w-[430px]
            "
          />

          {/* GROUND SHADOW */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[28px]
              left-1/2
              h-[45px]
              w-[80%]
              -translate-x-1/2
              rounded-[100%]
              bg-black/20
              blur-[28px]
            "
          />

          {/* TRUCK */}

          <div
            className="
              relative
              z-10
              w-[115%]
              max-w-[780px]
              lg:-ml-[15%]
              lg:w-[125%]
              xl:-ml-[20%]
              xl:w-[132%]
              xl:max-w-[850px]
            "
          >
            <Image
              src="/Coatwell_Truck.png"
              alt="Coatwell painting, roofing and remodeling service truck serving El Paso, Texas"
              width={1800}
              height={1000}
              sizes="(min-width: 1280px) 850px, (min-width: 1024px) 55vw, 100vw"
              className="
                h-auto
                w-full
                object-contain
                drop-shadow-[0_24px_25px_rgba(0,0,0,0.22)]
              "
            />
          </div>

          {/* SMALL LOCATION TAG */}

          <div
            className="
              absolute
              bottom-[5px]
              right-[2%]
              z-20
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-black/[0.06]
              bg-white/80
              px-5
              py-3
              shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              backdrop-blur-md
              lg:flex
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.17em] text-neutral-400">
                Proudly Serving
              </p>

              <p className="mt-0.5 text-xs font-black uppercase text-[#111827]">
                El Paso, Texas
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            RIGHT SIDE
           ===================================== */}

        <div className="relative lg:py-6">
          {/* EYEBROW */}

          <div className="mb-5 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-[3px] w-10 bg-red-600"
            />

            <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
              Why Choose Coatwell
            </p>
          </div>

          {/* HEADING */}

          <h2
            id="why-coatwell-heading"
            className="
              max-w-[720px]
              text-[42px]
              font-black
              uppercase
              leading-[0.94]
              tracking-[-0.045em]
              text-[#111827]
              sm:text-[50px]
              lg:text-[56px]
              xl:text-[62px]
            "
          >
            Why El Paso
            <br />
            Homeowners Choose{" "}
            <span className="text-red-600">Coatwell.</span>
          </h2>

          {/* COPY */}

          <p
            className="
              mt-6
              max-w-[690px]
              text-base
              leading-8
              text-neutral-600
              lg:text-[17px]
            "
          >
            Great projects start with clear communication, quality
            craftsmanship, and attention to detail. From painting and roofing
            to complete home renovations, Coatwell is focused on delivering
            dependable service and results you&apos;ll be proud of.
          </p>

          {/* =================================
              BENEFIT CARDS
             ================================= */}

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="
                  group
                  relative
                  min-h-[145px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-black/[0.04]
                  bg-white
                  p-6
                  shadow-[0_10px_35px_rgba(15,23,42,0.055)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-600/20
                  hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                "
              >
                {/* HOVER ACCENT */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[3px]
                    origin-left
                    scale-x-0
                    bg-red-600
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                <div className="flex items-start gap-5">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[58px]
                      w-[58px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      bg-red-600/[0.07]
                      text-red-600
                      transition
                      duration-300
                      group-hover:bg-red-600
                      group-hover:text-white
                    "
                  >
                    <BenefitIcon type={benefit.icon} />
                  </div>

                  {/* TEXT */}

                  <div className="pt-1">
                    <h3
                      className="
                        text-[17px]
                        font-black
                        uppercase
                        leading-[1.1]
                        tracking-[-0.02em]
                        text-[#111827]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-neutral-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =================================
              BOTTOM LINKS
             ================================= */}

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-xl
                bg-[#111827]
                px-7
                py-4
                text-xs
                font-black
                uppercase
                tracking-[0.09em]
                text-white
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-red-600
                hover:shadow-[0_15px_30px_rgba(220,38,38,0.2)]
              "
            >
              Get A Free Estimate

              <span
                aria-hidden="true"
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

            <Link
              href="/about"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-xs
                font-black
                uppercase
                tracking-[0.09em]
                text-[#111827]
                transition
                hover:text-red-600
              "
            >
              About Coatwell

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM RED ACCENT
         ========================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-1/2
          h-[4px]
          w-[110px]
          -translate-x-1/2
          bg-red-600
        "
      />
    </section>
  );
}