"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

export default function ServicesShowcase() {
  const [hoveringWord, setHoveringWord] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  function handleWordMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  }

  return (
    <section
      className="
        relative
        -mt-20
        overflow-hidden
        bg-[#f5f5f3]
        pb-0
        pt-8
        md:-mt-20
        lg:-mt-24
        lg:pt-10
      "
      aria-labelledby="services-showcase-heading"
    >
      {/* =====================================================
          INTERACTIVE BACKGROUND COATWELL
         ===================================================== */}

      <div
        aria-hidden="true"
        onMouseMove={handleWordMouseMove}
        onMouseEnter={() => setHoveringWord(true)}
        onMouseLeave={() => setHoveringWord(false)}
        className="
          pointer-events-auto
          absolute
          left-1/2
          top-[70px]
          z-0
          -translate-x-1/2
          cursor-default
          select-none
          whitespace-nowrap
          md:top-[65px]
          lg:top-[60px]
        "
      >
        {/* GHOST COATWELL */}
        <span
          className="
            block
            text-[110px]
            font-black
            uppercase
            leading-none
            tracking-[-0.07em]
            text-black/[0.035]
            transition-opacity
            duration-500
            md:text-[180px]
            xl:text-[260px]
          "
          style={{
            opacity: hoveringWord ? 0.3 : 1,
          }}
        >
          COATWELL
        </span>

        {/* RED / BLACK CURSOR REVEAL */}
        <span
          className="
            pointer-events-none
            absolute
            inset-0
            block
            text-[110px]
            font-black
            uppercase
            leading-none
            tracking-[-0.07em]
            text-transparent
            transition-opacity
            duration-300
            md:text-[180px]
            xl:text-[260px]
          "
          style={{
            opacity: hoveringWord ? 1 : 0,
            backgroundImage: `
              radial-gradient(
                circle 210px at ${mousePosition.x}% ${mousePosition.y}%,
                #ef0000 0%,
                #dc2626 24%,
                #111111 48%,
                rgba(17,17,17,0.20) 66%,
                transparent 80%
              )
            `,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          COATWELL
        </span>

        {/* CURSOR GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            h-[190px]
            w-[190px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-600/10
            blur-[55px]
            transition-opacity
            duration-300
          "
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            opacity: hoveringWord ? 1 : 0,
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
         ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-6
          pb-14
          lg:px-10
          lg:pb-16
          xl:px-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
             ================================================= */}

          <div>
            <div className="mb-5 flex items-center gap-4">
              <span
                className="h-[3px] w-10 bg-red-600"
                aria-hidden="true"
              />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
                Built For El Paso
              </p>
            </div>

            <h2
              id="services-showcase-heading"
              className="
                max-w-[680px]
                text-[44px]
                font-black
                uppercase
                leading-[0.94]
                tracking-[-0.045em]
                text-black
                sm:text-[54px]
                lg:text-[62px]
                xl:text-[70px]
              "
            >
              More Than
              <br />
              A Contractor.
              <br />

              <span className="text-red-600">We Transform</span>{" "}
              Homes.
            </h2>

            <p className="mt-7 max-w-[590px] text-lg leading-8 text-neutral-600">
              Coatwell provides professional painting, roofing, and remodeling
              services throughout El Paso, Texas. From a fresh coat of paint
              to a complete home transformation, we bring quality
              craftsmanship and attention to detail to every project.
            </p>

            <div className="mt-8 border-l-[3px] border-red-600 pl-5">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-black">
                One Team. One Standard.
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Quality work. Clear communication. Results built to last.
              </p>
            </div>

            <div className="mt-9">
              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-xl
                  bg-black
                  px-7
                  py-4
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.08em]
                  text-white
                  shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-red-600
                  hover:shadow-[0_16px_35px_rgba(220,38,38,0.22)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-600
                  focus:ring-offset-2
                "
              >
                Explore Our Services

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
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE COMPOSITION
             ================================================= */}

          <div className="relative min-h-[600px] lg:min-h-[660px]">
            {/* LARGE REAR IMAGE */}
            <div
              className="
                group
                absolute
                right-0
                top-[60px]
                h-[500px]
                w-[82%]
                overflow-hidden
                rounded-[28px]
                bg-neutral-300
                shadow-[0_30px_70px_rgba(0,0,0,0.16)]
              "
            >
              <Image
                src="/Services_cab_1.jpeg"
                alt="Kitchen and cabinetry remodeling project by Coatwell in El Paso, Texas"
                fill
                priority={false}
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/5
                  to-transparent
                "
              />

              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  Kitchen Remodeling
                </p>

                <p className="mt-1 text-xl font-black uppercase text-white">
                  Transform Your Space
                </p>
              </div>
            </div>

            {/* SMALL FRONT IMAGE */}
            <div
              className="
                group
                absolute
                bottom-0
                left-0
                h-[315px]
                w-[48%]
                overflow-hidden
                rounded-[24px]
                border-[8px]
                border-[#f5f5f3]
                bg-neutral-300
                shadow-[0_25px_60px_rgba(0,0,0,0.18)]
              "
            >
              <Image
                src="/Services_shower_1.jpeg"
                alt="Bathroom and shower remodeling project by Coatwell in El Paso, Texas"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              <div className="absolute inset-0 bg-black/10" />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/55
                  to-transparent
                  px-5
                  pb-5
                  pt-14
                "
              >
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
                  Bathroom Remodeling
                </p>

                <p className="mt-1 text-sm font-black uppercase text-white">
                  Built Around You
                </p>
              </div>
            </div>

            {/* RED FLOATING BRAND CARD */}
            <div
              className="
                absolute
                bottom-[35px]
                right-[4%]
                z-20
                w-[280px]
                rounded-[20px]
                bg-red-600
                p-6
                text-white
                shadow-[0_20px_45px_rgba(220,38,38,0.25)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_25px_55px_rgba(220,38,38,0.32)]
              "
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  Coatwell
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    font-black
                    text-red-600
                  "
                  aria-hidden="true"
                >
                  ✓
                </span>
              </div>

              <p className="text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em]">
                Built Better.
                <br />
                Finished Right.
              </p>

              <div className="mt-5 h-px w-full bg-white/25" />

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                El Paso, Texas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECTION END / ARCHITECTURAL BOX-OFF
          Stops the visual linework cleanly before next section
         ===================================================== */}

      <div className="relative z-20 mx-auto max-w-[1450px] px-6 lg:px-10 xl:px-14">
        <div className="relative h-[30px] border-x border-t border-black/[0.09]">
          {/* LEFT RED DETAIL */}
          <div className="absolute left-0 top-[-2px] h-[3px] w-[72px] bg-red-600" />

          {/* RIGHT RED DETAIL */}
          <div className="absolute right-0 top-[-2px] h-[3px] w-[72px] bg-red-600" />

          {/* CENTER MARK */}
          <div className="absolute left-1/2 top-0 h-[12px] w-px -translate-x-1/2 bg-black/15" />
        </div>
      </div>

      {/* CLEAN HARD STOP */}
      <div className="relative z-20 h-px w-full bg-black/[0.06]" />
    </section>
  );
}