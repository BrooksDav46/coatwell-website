import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[900px] overflow-hidden bg-black lg:min-h-[940px]"
      aria-labelledby="home-hero-heading"
    >
      {/* =========================
          EL PASO VIDEO BACKGROUND
         ========================= */}

      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/El_Paso_Drone.mp4" type="video/mp4" />
        </video>
      </div>

      {/* LIGHT OVERALL DARKENING */}
      <div className="absolute inset-0 bg-black/[0.08]" />

      {/* LEFT GRADIENT FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      {/* SUBTLE BOTTOM GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-black/35 to-transparent" />

      {/* =========================
          COATWELL TRUCK
         ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[15px]
          left-[50%]
          z-[8]
          hidden
          w-[46vw]
          max-w-[830px]
          xl:block
          2xl:left-[51%]
          2xl:w-[45vw]
          2xl:max-w-[875px]
        "
      >
        <Image
          src="/Coatwell_Truck.png"
          alt="Coatwell painting, roofing and remodeling service truck in El Paso, Texas"
          width={1800}
          height={1000}
          priority
          sizes="(min-width: 1536px) 875px, 46vw"
          className="h-auto w-full object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* =========================
          HERO CONTENT
         ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[900px]
          max-w-[1600px]
          items-center
          px-6
          pb-[100px]
          pt-[160px]
          md:px-10
          lg:min-h-[940px]
          lg:px-12
          xl:px-14
        "
      >
        <div className="w-full max-w-[650px] xl:-translate-x-2">
          {/* LOCATION */}
          <div className="mb-6 flex items-center gap-4">
            <span
              className="h-[3px] w-12 bg-red-600"
              aria-hidden="true"
            />

            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
              El Paso, Texas
            </p>
          </div>

          {/* PRIMARY SEO H1 */}
          <h1
            id="home-hero-heading"
            className="
              text-[52px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.045em]
              text-white
              sm:text-[64px]
              lg:text-[72px]
              xl:text-[78px]
            "
          >
            Built Better.
            <br />
            Finished
            <span className="text-red-600"> Right.</span>
          </h1>

          {/* SERVICES */}
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-black uppercase tracking-[0.17em] text-white">
            <span>Painting</span>

            <span className="text-red-600" aria-hidden="true">
              •
            </span>

            <span>Roofing</span>

            <span className="text-red-600" aria-hidden="true">
              •
            </span>

            <span>Remodeling</span>
          </p>

          {/* SUPPORTING COPY */}
          <p className="mt-6 max-w-[570px] text-lg leading-8 text-white/90 lg:text-xl">
            Professional painting, roofing, and home remodeling in El Paso,
            TX. Coatwell delivers quality workmanship, straightforward
            communication, and results built to last.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#estimate"
              className="
                rounded-xl
                bg-red-600
                px-8
                py-4
                text-sm
                font-black
                uppercase
                tracking-[0.08em]
                text-white
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-black
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                focus:ring-offset-2
                focus:ring-offset-black
              "
            >
              Get a Free Estimate
            </Link>

            <Link
              href="/services"
              className="
                rounded-xl
                border
                border-white/50
                bg-black/10
                px-8
                py-4
                text-sm
                font-black
                uppercase
                tracking-[0.08em]
                text-white
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-white
                hover:bg-white
                hover:text-black
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-offset-2
                focus:ring-offset-black
              "
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}