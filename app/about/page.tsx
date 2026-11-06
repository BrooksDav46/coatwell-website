import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Coatwell | Painting, Roofing & Remodeling | El Paso, TX",
  description:
    "Learn about Coatwell, a veteran-owned painting, roofing and remodeling company founded in El Paso, Texas and serving the greater El Paso area.",
};

const process = [
  {
    number: "01",
    title: "Tell Us About It",
    text: "Start by telling us what you want to improve, repair, update, or completely transform.",
  },
  {
    number: "02",
    title: "Build The Plan",
    text: "We review the project, define the scope, and put together a clear plan for the work.",
  },
  {
    number: "03",
    title: "Build It Right",
    text: "Our focus stays on quality workmanship, communication, and delivering a finished project we're proud to put the Coatwell name on.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          ABOUT HERO
          Same structure and scale as Services
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
        aria-labelledby="about-heading"
      >
        <Image
          src="/Services_cab_1.jpeg"
          alt="Coatwell remodeling and property improvement work in El Paso Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50" />

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
            h-[170px]
            bg-gradient-to-t
            from-black/55
            to-transparent
          "
        />

        {/* Background word */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-35px]
            top-[125px]
            select-none
            whitespace-nowrap
            text-[145px]
            font-black
            uppercase
            leading-none
            tracking-[-0.075em]
            text-white/[0.035]
            lg:text-[235px]
            xl:text-[280px]
          "
        >
          ABOUT
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
                Built In El Paso
              </p>
            </div>

            <h1
              id="about-heading"
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
              About <span className="text-red-600">Coatwell.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-[730px]
                text-lg
                font-medium
                leading-8
                text-white/75
                lg:text-xl
              "
            >
              A local, veteran-owned painting, roofing, and remodeling company
              built to serve El Paso with quality work and straightforward
              communication.
            </p>

            <nav
              aria-label="Breadcrumb"
              className="mt-8 flex items-center gap-3 text-sm font-bold"
            >
              <Link
                href="/"
                className="text-white/55 transition-colors duration-300 hover:text-red-500"
              >
                Home
              </Link>

              <span className="text-red-500">/</span>

              <span className="text-white">About Us</span>
            </nav>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-red-600" />
      </section>

      {/* =====================================================
          OUR STORY
         ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#f5f5f3]
          py-20
          lg:py-24
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-30px]
            top-[25px]
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
            gap-12
            px-6
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-20
            lg:px-10
            xl:px-14
          "
        >
          {/* IMAGE */}
          <div
            className="
              group
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[24px]
              bg-neutral-300
              shadow-[0_25px_60px_rgba(0,0,0,0.12)]
              lg:min-h-[500px]
            "
          >
            <Image
              src="/Services_shower_1.jpeg"
              alt="Coatwell bathroom remodeling project in El Paso Texas"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.025]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-transparent
              "
            />

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                El Paso, Texas
              </p>

              <p className="mt-2 text-2xl font-black uppercase text-white">
                Built Here. Built To Last.
              </p>
            </div>
          </div>

          {/* STORY */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-11 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Our Story
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
              More Than A
              <br />
              Contractor.
              <br />
              <span className="text-red-600">A Local Company.</span>
            </h2>

            <p className="mt-7 max-w-[650px] text-[17px] leading-8 text-neutral-600">
              Coatwell was created in El Paso to provide homeowners and
              businesses with one dependable company for painting, roofing,
              remodeling, and property improvements.
            </p>

            <p className="mt-5 max-w-[650px] text-[17px] leading-8 text-neutral-600">
              We believe good construction starts before the work ever begins.
              It means understanding the project, communicating clearly,
              paying attention to the details, and taking pride in the finished
              result.
            </p>

            <p className="mt-5 max-w-[650px] text-[17px] leading-8 text-neutral-600">
              Whether the project is a fresh coat of paint, a kitchen or
              bathroom renovation, roofing work, new flooring, or a larger
              remodel, the goal stays the same: build it better and finish it
              right.
            </p>

            <div
              className="
                mt-8
                border-l-[3px]
                border-red-600
                pl-5
              "
            >
              <p className="text-sm font-black uppercase tracking-[0.1em] text-black">
                One Team. One Standard.
              </p>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Quality work, clear communication, and a better experience from
                the first conversation through the finished project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VETERAN OWNED / LOCAL
          Compact instead of another giant section
         ===================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div
          className="
            mx-auto
            max-w-[1450px]
            px-6
            lg:px-10
            xl:px-14
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-[#171c24]
              px-8
              py-11
              text-white
              sm:px-10
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-16
              lg:px-12
              lg:py-12
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-25px]
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
              EL PASO
            </div>

            <div className="relative z-10 max-w-[820px]">
              <div className="flex items-center gap-4">
                <span className="h-[3px] w-10 bg-red-600" />

                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-500">
                  Veteran-Owned • Locally Operated
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
                Proud To Call
                <span className="text-red-600"> El Paso Home.</span>
              </h2>

              <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-white/60">
                Coatwell is a veteran-owned company founded in El Paso. We
                serve homeowners and businesses throughout the greater El Paso
                area with a focus on dependable service and workmanship we can
                stand behind.
              </p>
            </div>

            <div
              className="
                relative
                z-10
                mt-8
                flex
                shrink-0
                items-center
                gap-4
                border-l-[3px]
                border-red-600
                pl-5
                lg:mt-0
              "
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                  Our Home
                </p>

                <p className="mt-1 text-xl font-black uppercase">
                  El Paso, Texas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}