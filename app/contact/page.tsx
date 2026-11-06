"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const services = [
  "Painting",
  "Roofing",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring & Drywall",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* =====================================================
          CONTACT HERO
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
      >
        <Image
          src="/Services_shower_1.jpeg"
          alt="Coatwell painting, roofing and remodeling services in El Paso Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/95
            via-black/70
            to-black/20
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-25px]
            right-[-25px]
            select-none
            whitespace-nowrap
            text-[130px]
            font-black
            uppercase
            leading-none
            tracking-[-0.075em]
            text-white/[0.04]
            lg:text-[220px]
          "
        >
          CONTACT
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
                Start Your Project
              </p>
            </div>

            <h1
              className="
                max-w-[950px]
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
              Let&apos;s Build
              <br />
              Something <span className="text-red-600">Better.</span>
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
              Tell us about your painting, roofing, remodeling, flooring, or
              property improvement project in El Paso. We&apos;ll help you take
              the next step.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-md">
                Veteran-Owned
              </span>

              <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-md">
                El Paso, Texas
              </span>

              <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-md">
                Free Estimates
              </span>
            </div>

            <nav
              aria-label="Breadcrumb"
              className="mt-8 flex items-center gap-3 text-sm font-bold"
            >
              <Link
                href="/"
                className="text-white/50 transition hover:text-red-500"
              >
                Home
              </Link>

              <span className="text-red-500">/</span>

              <span>Contact</span>
            </nav>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-red-600" />
      </section>

      {/* =====================================================
          CONTACT + ESTIMATE CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f5f5f3] py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-40px]
            top-[40px]
            select-none
            whitespace-nowrap
            text-[150px]
            font-black
            uppercase
            leading-none
            tracking-[-0.075em]
            text-black/[0.025]
            lg:text-[250px]
          "
        >
          START
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1450px]
            gap-14
            px-6
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
            lg:px-10
            xl:px-14
          "
        >
          {/* LEFT */}

          <div className="lg:pt-4">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-11 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Contact Coatwell
              </p>
            </div>

            <h2
              className="
                mt-6
                text-[44px]
                font-black
                leading-[0.96]
                tracking-[-0.045em]
                text-[#151922]
                sm:text-[52px]
                lg:text-[58px]
              "
            >
              Tell Us About
              <br />
              Your <span className="text-red-600">Project.</span>
            </h2>

            <p className="mt-6 max-w-[610px] text-[16px] leading-8 text-neutral-600">
              Whether you&apos;re repainting your home, replacing a roof,
              remodeling a kitchen or bathroom, installing flooring, or
              planning a larger renovation, tell us what you&apos;re looking
              to accomplish.
            </p>

            <div className="mt-9 border-t border-black/10">
              <div className="border-b border-black/10 py-5">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-red-600">
                  Service Area
                </p>

                <p className="mt-1 font-black text-[#151922]">
                  El Paso, Texas & Surrounding Areas
                </p>
              </div>

              <div className="border-b border-black/10 py-5">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-red-600">
                  Call Coatwell
                </p>

                <a
                  href="tel:+19150000000"
                  className="mt-1 block font-black text-[#151922] transition hover:text-red-600"
                >
                  915-247-6924
                </a>
              </div>

              <div className="py-5">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-red-600">
                  Email
                </p>

                <p className="mt-1 font-black text-[#151922]">
                  office@coatwellinteriors.com
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="rounded-[24px] bg-white p-7 shadow-[0_25px_70px_rgba(0,0,0,0.09)] sm:p-9 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-600">
              Free Estimate
            </p>

            <h2 className="mt-2 text-[30px] font-black uppercase tracking-[-0.035em] text-[#151922]">
              Start Your Project
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Send us a few details about your project and we&apos;ll get in
              touch.
            </p>

            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-black text-white">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-black uppercase text-[#151922]">
                  Thank You
                </h3>

                <p className="mt-3 max-w-[380px] text-sm leading-6 text-neutral-600">
                  Your information has been entered into the form.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-[#171c24] px-6 py-3 text-xs font-black uppercase text-white transition hover:bg-red-600"
                >
                  Start Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="h-[55px] rounded-xl border border-neutral-200 bg-[#fafafa] px-5 text-sm font-semibold outline-none transition focus:border-red-600"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="h-[55px] rounded-xl border border-neutral-200 bg-[#fafafa] px-5 text-sm font-semibold outline-none transition focus:border-red-600"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="h-[55px] rounded-xl border border-neutral-200 bg-[#fafafa] px-5 text-sm font-semibold outline-none transition focus:border-red-600"
                />

                <select
                  name="service"
                  defaultValue=""
                  required
                  className="h-[55px] rounded-xl border border-neutral-200 bg-[#fafafa] px-5 text-sm font-semibold outline-none transition focus:border-red-600"
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="resize-none rounded-xl border border-neutral-200 bg-[#fafafa] px-5 py-4 text-sm font-semibold leading-6 outline-none transition focus:border-red-600"
                />

                <button
                  type="submit"
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    justify-between
                    rounded-xl
                    bg-red-600
                    px-6
                    text-sm
                    font-black
                    uppercase
                    tracking-[0.08em]
                    text-white
                    transition
                    hover:bg-[#171c24]
                  "
                >
                  Request My Free Estimate
                  <span className="text-xl">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}