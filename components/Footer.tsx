import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Interior Painting", href: "/services/painting" },
  { label: "Exterior Painting", href: "/services/painting" },
  { label: "Roofing", href: "/services/roofing" },
  { label: "Kitchen Remodeling", href: "/services/remodeling" },
  { label: "Bathroom Remodeling", href: "/services/remodeling" },
  { label: "Flooring & Drywall", href: "/services/flooring-drywall" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#f3f3f0] text-[#111318]">
      {/* TOP ACCENT */}
      <div className="absolute inset-x-0 top-0 h-[5px] bg-black">
        <div className="h-full w-[18%] bg-red-600" />
      </div>

      {/* BACKGROUND WORD */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-35px]
          right-[-25px]
          select-none
          whitespace-nowrap
          text-[100px]
          font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-black/[0.025]
          sm:text-[150px]
          lg:text-[210px]
          xl:text-[250px]
        "
      >
        COATWELL
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-6
          pb-8
          pt-16
          lg:px-10
          lg:pb-9
          lg:pt-20
          xl:px-14
        "
      >
        {/* MAIN FOOTER */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.35fr_.75fr_.9fr_.9fr]
            lg:gap-10
            xl:gap-16
          "
        >
          {/* BRAND */}
          <div className="max-w-[430px]">
            <Link
              href="/"
              aria-label="Coatwell home"
              className="inline-block"
            >
              <div
                className="
                  relative
                  flex
                  h-[88px]
                  w-[240px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[12px]
                  bg-black
                  px-4
                "
              >
                <Image
                  src="/Coatwell_Logo_Nav.png"
                  alt="Coatwell Painting, Roofing and Remodeling"
                  width={420}
                  height={150}
                  className="h-auto w-full object-contain"
                />

                <div className="absolute inset-x-0 bottom-0 h-[4px] bg-red-600" />
              </div>
            </Link>

            <p className="mt-6 max-w-[410px] text-[15px] leading-7 text-neutral-600">
              Professional painting, roofing, remodeling, flooring, and
              interior improvement services for homeowners and businesses
              throughout El Paso, Texas and surrounding areas.
            </p>

            {/* LOCATION */}
            <div className="mt-6 flex items-start gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-red-600
                  text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-neutral-400">
                  Service Area
                </p>

                <p className="mt-1 text-sm font-black uppercase">
                  El Paso, Texas
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[3px] w-7 bg-red-600"
              />

              <h2 className="text-xs font-black uppercase tracking-[0.15em]">
                Services
              </h2>
            </div>

            <nav aria-label="Footer services" className="mt-6">
              <ul className="space-y-3.5">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-neutral-600
                        transition
                        duration-200
                        hover:text-red-600
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          h-[2px]
                          w-0
                          bg-red-600
                          transition-all
                          duration-200
                          group-hover:w-3
                        "
                      />

                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COMPANY */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[3px] w-7 bg-red-600"
              />

              <h2 className="text-xs font-black uppercase tracking-[0.15em]">
                Company
              </h2>
            </div>

            <nav aria-label="Footer company navigation" className="mt-6">
              <ul className="space-y-3.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-neutral-600
                        transition
                        duration-200
                        hover:text-red-600
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          h-[2px]
                          w-0
                          bg-red-600
                          transition-all
                          duration-200
                          group-hover:w-3
                        "
                      />

                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[3px] w-7 bg-red-600"
              />

              <h2 className="text-xs font-black uppercase tracking-[0.15em]">
                Get In Touch
              </h2>
            </div>

            <p className="mt-6 text-sm leading-6 text-neutral-600">
              Have a project in mind? Contact Coatwell to schedule an estimate
              for your property.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-6
                flex
                w-full
                max-w-[230px]
                items-center
                justify-between
                rounded-[10px]
                bg-black
                px-5
                py-3.5
                text-[10px]
                font-black
                uppercase
                tracking-[0.09em]
                text-white
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-red-600
              "
            >
              Contact Coatwell

              <span
                aria-hidden="true"
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            <Link
              href="#estimate"
              className="
                mt-3
                inline-block
                text-[11px]
                font-black
                uppercase
                tracking-[0.08em]
                text-red-600
                transition
                hover:text-black
              "
            >
              Get A Free Estimate →
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 h-px w-full bg-black/10 lg:mt-16" />

        {/* BOTTOM BAR */}
        <div
          className="
            flex
            flex-col
            gap-4
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[11px] font-semibold text-neutral-500">
            © {currentYear} Coatwell. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-[11px] font-semibold text-neutral-500 transition hover:text-red-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[11px] font-semibold text-neutral-500 transition hover:text-red-600"
            >
              Terms
            </Link>

            <span className="text-[11px] font-black uppercase tracking-[0.1em] text-neutral-400">
              Painting • Roofing • Remodeling
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}