export default function EstimateCTA() {
  return (
    <section
      id="estimate"
      aria-labelledby="estimate-heading"
      className="relative z-30 bg-neutral-100 px-4 pb-10 md:px-6 lg:px-10 lg:pb-14"
    >
      {/* OVERLAP HERO */}
      <div className="mx-auto max-w-[1450px] -translate-y-[90px]">
        <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
          
          {/* RED TOP ACCENT */}
          <div className="h-[5px] w-full bg-red-600" />

          <div className="px-6 py-6 lg:px-8 lg:py-7">

            {/* =========================
                TOP CONTENT
               ========================= */}

            <div className="grid gap-6 lg:grid-cols-[1.5fr_.8fr_auto] lg:items-center">

              {/* LEFT */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-red-600"
                    aria-hidden="true"
                  />

                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Start Your Project
                  </p>
                </div>

                <h2
                  id="estimate-heading"
                  className="text-[28px] font-black leading-tight tracking-[-0.035em] text-black sm:text-[32px] lg:text-[36px]"
                >
                  Tell Us What You&apos;re Working On.
                </h2>
              </div>

              {/* MIDDLE MESSAGE */}
              <div className="hidden border-l border-neutral-200 pl-6 lg:block">
                <p className="max-w-[300px] text-sm leading-6 text-neutral-500">
                  Get a free, no-obligation estimate from the Coatwell team.
                  We&apos;ll reach out to discuss your project.
                </p>
              </div>

              {/* TRUST MESSAGE */}
              <div className="flex items-center gap-4 border-l border-neutral-200 pl-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 stroke-red-600"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-neutral-400">
                    Free Estimates
                  </p>

                  <p className="mt-1 text-base font-black text-black">
                    No Obligation.
                  </p>
                </div>
              </div>
            </div>

            {/* =========================
                FORM
               ========================= */}

            <form className="mt-6 grid gap-3 lg:grid-cols-[1fr_1fr_1.15fr_260px]">

              {/* NAME */}
              <div className="group flex min-h-[70px] items-center gap-4 rounded-[12px] border border-neutral-200 bg-neutral-50 px-5 transition focus-within:border-red-500 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(220,38,38,0.08)]">

                {/* ICON */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0 stroke-neutral-500"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0ZM4.5 20.118a7.5 7.5 0 0115 0"
                  />
                </svg>

                <div className="w-full">
                  <label
                    htmlFor="estimate-name"
                    className="block text-[9px] font-black uppercase tracking-[0.16em] text-neutral-500"
                  >
                    Your Name
                  </label>

                  <input
                    id="estimate-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Smith"
                    required
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-black outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="group flex min-h-[70px] items-center gap-4 rounded-[12px] border border-neutral-200 bg-neutral-50 px-5 transition focus-within:border-red-500 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(220,38,38,0.08)]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0 stroke-neutral-500"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.37-.277.542-.75.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25Z"
                  />
                </svg>

                <div className="w-full">
                  <label
                    htmlFor="estimate-phone"
                    className="block text-[9px] font-black uppercase tracking-[0.16em] text-neutral-500"
                  >
                    Phone Number
                  </label>

                  <input
                    id="estimate-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(915) 000-0000"
                    required
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-black outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* PROJECT TYPE */}
              <div className="group flex min-h-[70px] items-center gap-4 rounded-[12px] border border-neutral-200 bg-neutral-50 px-5 transition focus-within:border-red-500 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(220,38,38,0.08)]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0 stroke-neutral-500"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12m-12 5.25h12m-12 5.25h12M3.75 6.75h.008v.008H3.75V6.75Zm0 5.25h.008v.008H3.75V12Zm0 5.25h.008v.008H3.75v-.008Z"
                  />
                </svg>

                <div className="w-full">
                  <label
                    htmlFor="estimate-service"
                    className="block text-[9px] font-black uppercase tracking-[0.16em] text-neutral-500"
                  >
                    Project Type
                  </label>

                  <select
                    id="estimate-service"
                    name="service"
                    defaultValue=""
                    required
                    className="mt-1 w-full cursor-pointer bg-transparent text-sm font-semibold text-black outline-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="interior-painting">
                      Interior Painting
                    </option>

                    <option value="exterior-painting">
                      Exterior Painting
                    </option>

                    <option value="roofing">
                      Roofing
                    </option>

                    <option value="kitchen-remodeling">
                      Kitchen Remodeling
                    </option>

                    <option value="bathroom-remodeling">
                      Bathroom Remodeling
                    </option>

                    <option value="flooring">
                      Flooring
                    </option>

                    <option value="drywall">
                      Drywall
                    </option>

                    <option value="other">
                      Other Project
                    </option>
                  </select>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="min-h-[70px] rounded-[12px] bg-red-600 px-7 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_25px_rgba(220,38,38,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center gap-3">
                  Get My Estimate

                  <span
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </button>
            </form>

            {/* =========================
                BOTTOM TRUST BAR
               ========================= */}

            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-neutral-200 pt-5">

              <p className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <span className="font-black text-red-600">✓</span>
                Painting
              </p>

              <p className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <span className="font-black text-red-600">✓</span>
                Roofing
              </p>

              <p className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <span className="font-black text-red-600">✓</span>
                Remodeling
              </p>

              <div className="ml-auto hidden items-center gap-2 text-xs font-semibold text-neutral-500 md:flex">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  className="h-4 w-4 stroke-red-600"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-4.35 6-11a6 6 0 10-12 0c0 6.65 6 11 6 11Z"
                  />
                  <circle cx="12" cy="10" r="2" />
                </svg>

                Serving El Paso, TX &amp; surrounding communities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}