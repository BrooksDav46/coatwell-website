import Link from "next/link";

export default function FinalCTA() {
  const inputClass = `
    h-[48px]
    w-full
    rounded-[10px]
    border
    border-white/10
    bg-white/[0.06]
    px-4
    text-sm
    text-white
    outline-none
    transition
    placeholder:text-white/30
    focus:border-red-500
    focus:bg-white/[0.08]
    focus:ring-2
    focus:ring-red-600/20
  `;

  const labelClass =
    "mb-1.5 block text-[10px] font-black uppercase tracking-[0.14em] text-white/55";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-red-600 text-white"
      aria-labelledby="final-cta-heading"
    >
      {/* BACKGROUND COATWELL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-40px]
          top-1/2
          -translate-y-1/2
          select-none
          whitespace-nowrap
          text-[130px]
          font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-black/[0.055]
          sm:text-[180px]
          lg:right-[-20px]
          lg:text-[250px]
          xl:text-[300px]
        "
      >
        COATWELL
      </div>

      {/* ARCHITECTURAL LINEWORK */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[5%]
          h-[420px]
          w-[420px]
          opacity-[0.08]
          lg:h-[500px]
          lg:w-[500px]
        "
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          className="h-full w-full stroke-black"
          strokeWidth="1.5"
        >
          <path d="M40 260 245 75l215 185" />
          <path d="M83 222v220h326V222" />
          <path d="M175 442V286h138v156" />
          <path d="M108 270h70v82h-70z" />
          <path d="M316 270h68v82h-68z" />
          <path d="M245 75V35" />
          <path d="M67 282 245 118l180 164" />
          <path d="M82 388h326" />
        </svg>
      </div>

      <div className="absolute inset-x-0 top-0 h-[5px] bg-black" />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1450px]
          gap-10
          px-6
          py-14
          sm:py-16
          lg:grid-cols-[minmax(0,1fr)_470px]
          lg:items-center
          lg:gap-16
          lg:px-10
          lg:py-[72px]
          xl:grid-cols-[minmax(0,1fr)_500px]
          xl:gap-20
          xl:px-14
        "
      >
        {/* LEFT */}
        <div className="max-w-[850px]">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[3px] w-10 bg-black" aria-hidden="true" />

            <p className="text-xs font-black uppercase tracking-[0.22em] text-black">
              Start Your Project
            </p>
          </div>

          <h2
            id="final-cta-heading"
            className="
              max-w-[900px]
              text-[44px]
              font-black
              uppercase
              leading-[0.91]
              tracking-[-0.05em]
              text-white
              sm:text-[56px]
              lg:text-[68px]
              xl:text-[76px]
            "
          >
            Ready To Build
            <br />
            Something <span className="text-black">Better?</span>
          </h2>

          <p className="mt-6 max-w-[720px] text-base leading-7 text-white/85 sm:text-lg">
            Tell us about your next painting, roofing, or remodeling project.
            Coatwell proudly serves homeowners and businesses throughout El
            Paso, Texas and surrounding areas.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xs font-black uppercase tracking-[0.13em]">
              Painting
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <span className="text-xs font-black uppercase tracking-[0.13em]">
              Roofing
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <span className="text-xs font-black uppercase tracking-[0.13em]">
              Remodeling
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <span className="text-xs font-black uppercase tracking-[0.13em]">
              Flooring
            </span>
          </div>

          <div className="mt-8 flex max-w-[650px] items-start gap-4 border-t border-black/15 pt-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
              ✓
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.04em] text-black">
                Straightforward Estimates. Quality Work.
              </p>

              <p className="mt-1 text-sm leading-6 text-white/75">
                Give us a few details about your project and we&apos;ll help
                you figure out the next step.
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div
          className="
            w-full
            rounded-[24px]
            border
            border-white/10
            bg-[#101318]
            p-6
            shadow-[0_28px_70px_rgba(0,0,0,0.28)]
            sm:p-7
            lg:p-8
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 bg-red-600" aria-hidden="true" />

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
              Free Project Estimate
            </p>
          </div>

          <h3 className="mt-3 text-[29px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white">
            Tell Us About Your Project.
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Get started with your Coatwell project in El Paso.
          </p>

          <form className="mt-5 space-y-3.5">
            {/* NAME + PHONE */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-name" className={labelClass}>
                  Your Name
                </label>

                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="cta-phone" className={labelClass}>
                  Phone
                </label>

                <input
                  id="cta-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="(915) 000-0000"
                  className={inputClass}
                />
              </div>
            </div>

            {/* EMAIL + SERVICE */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-email" className={labelClass}>
                  Email
                </label>

                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="cta-service" className={labelClass}>
                  Service
                </label>

                <select
                  id="cta-service"
                  name="service"
                  defaultValue=""
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[10px]
                    border
                    border-white/10
                    bg-[#191d24]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    transition
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-600/20
                  "
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  <option value="painting">Painting</option>
                  <option value="roofing">Roofing</option>
                  <option value="kitchen-remodeling">Kitchen Remodel</option>
                  <option value="bathroom-remodeling">Bathroom Remodel</option>
                  <option value="flooring">Flooring</option>
                  <option value="drywall">Drywall</option>
                  <option value="other">Other Project</option>
                </select>
              </div>
            </div>

            {/* PROJECT */}
            <div>
              <label htmlFor="cta-project" className={labelClass}>
                Tell Us About Your Project
              </label>

              <textarea
                id="cta-project"
                name="project"
                rows={3}
                placeholder="What are you looking to have done?"
                className="
                  w-full
                  resize-none
                  rounded-[10px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-4
                  py-3
                  text-sm
                  leading-5
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/30
                  focus:border-red-500
                  focus:bg-white/[0.08]
                  focus:ring-2
                  focus:ring-red-600/20
                "
              />
            </div>

            <button
              type="submit"
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-[11px]
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
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-offset-2
                focus:ring-offset-[#101318]
              "
            >
              Request My Free Estimate

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </form>

          <p className="mt-3 text-center text-[9px] font-bold uppercase tracking-[0.1em] text-white/30">
            Your information stays private
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[5px] bg-black" />
    </section>
  );
}