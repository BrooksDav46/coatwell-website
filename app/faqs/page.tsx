"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FAQCategory =
  | "general"
  | "painting"
  | "roofing"
  | "remodeling"
  | "flooring"
  | "estimates";

type FAQ = {
  category: FAQCategory;
  question: string;
  answer: string;
};

const categories: {
  key: FAQCategory;
  label: string;
}[] = [
  { key: "general", label: "General" },
  { key: "painting", label: "Painting" },
  { key: "roofing", label: "Roofing" },
  { key: "remodeling", label: "Remodeling" },
  { key: "flooring", label: "Flooring & Drywall" },
  { key: "estimates", label: "Estimates & Projects" },
];

const faqs: FAQ[] = [
  // GENERAL
  {
    category: "general",
    question: "What services does Coatwell provide?",
    answer:
      "Coatwell provides painting, roofing, kitchen remodeling, bathroom remodeling, flooring, drywall, cabinetry, trim, and additional property improvement services throughout El Paso, Texas and surrounding communities.",
  },
  {
    category: "general",
    question: "What areas does Coatwell serve?",
    answer:
      "Coatwell serves El Paso and surrounding communities, including East El Paso, West El Paso, Northeast El Paso, Socorro, Horizon City, and nearby areas.",
  },
  {
    category: "general",
    question: "Is Coatwell a local El Paso company?",
    answer:
      "Yes. Coatwell is a veteran-owned, locally operated company created in El Paso, Texas. We are building our reputation locally through quality workmanship, clear communication, and dependable project execution.",
  },
  {
    category: "general",
    question: "Do you work on residential and commercial properties?",
    answer:
      "Yes. Coatwell provides property improvement services for both residential and commercial customers. The exact scope depends on the property and type of project.",
  },
  {
    category: "general",
    question: "Can Coatwell handle multiple parts of my project?",
    answer:
      "Yes. Coatwell can coordinate multiple parts of a project, including painting, flooring, drywall, cabinetry, trim, roofing, and remodeling work depending on the scope.",
  },

  // PAINTING
  {
    category: "painting",
    question: "Does Coatwell provide interior painting in El Paso?",
    answer:
      "Yes. Coatwell provides professional interior painting services throughout El Paso for homes and businesses. Projects may include walls, ceilings, trim, doors, cabinetry, and other interior surfaces depending on the scope.",
  },
  {
    category: "painting",
    question: "Do you provide exterior painting?",
    answer:
      "Yes. Coatwell provides exterior painting for residential and commercial properties throughout El Paso and surrounding areas, including applicable stucco, siding, fascia, soffits, trim, doors, and other exterior surfaces.",
  },
  {
    category: "painting",
    question: "Do you prepare surfaces before painting?",
    answer:
      "Yes. Proper surface preparation is an important part of a quality paint job. Depending on existing conditions, preparation may include cleaning, masking, scraping, patching, minor repairs, and other work required before coatings are applied.",
  },
  {
    category: "painting",
    question: "Can you repair stucco before painting my house?",
    answer:
      "Minor stucco repairs can often be incorporated into an exterior painting project. More significant stucco damage should be evaluated so the appropriate repair scope can be determined before painting begins.",
  },
  {
    category: "painting",
    question: "How long does an exterior painting project take?",
    answer:
      "Project duration depends on the size of the property, amount of preparation required, surfaces being painted, weather, and overall scope. Coatwell can provide a more realistic timeline after evaluating the property.",
  },

  // ROOFING
  {
    category: "roofing",
    question: "What roofing services does Coatwell provide?",
    answer:
      "Coatwell provides roofing services including roof repairs, roof maintenance, and roof replacement solutions for properties throughout the El Paso area.",
  },
  {
    category: "roofing",
    question: "Does Coatwell handle roof repairs?",
    answer:
      "Yes. Coatwell can evaluate roofing problems and develop a repair scope based on the roofing system, location of the problem, existing condition, and extent of damage.",
  },
  {
    category: "roofing",
    question: "Do you provide complete roof replacements?",
    answer:
      "Yes. Coatwell provides roof replacement solutions when the existing roofing system or project conditions call for replacement rather than a smaller repair.",
  },
  {
    category: "roofing",
    question: "How do I know if my roof needs repair or replacement?",
    answer:
      "That depends on factors such as the roof's condition, age, extent of damage, previous repairs, and roofing system. Evaluating the property is the best way to determine whether repair or replacement makes sense.",
  },

  // REMODELING
  {
    category: "remodeling",
    question: "Does Coatwell provide kitchen remodeling in El Paso?",
    answer:
      "Yes. Coatwell provides kitchen remodeling and renovation services throughout El Paso. Depending on the project, work may include cabinetry, flooring, drywall, painting, trim, finishes, and other improvements.",
  },
  {
    category: "remodeling",
    question: "Does Coatwell remodel bathrooms?",
    answer:
      "Yes. Coatwell provides bathroom remodeling services ranging from targeted updates to larger renovations, depending on the existing space and the improvements you want to make.",
  },
  {
    category: "remodeling",
    question: "Can you handle painting, drywall and flooring during my remodel?",
    answer:
      "Yes. Coatwell can combine multiple trades and finish scopes into one renovation project. This is especially useful for kitchen, bathroom, and interior remodeling projects where several types of work need to come together.",
  },
  {
    category: "remodeling",
    question: "Can I choose my own finishes and materials?",
    answer:
      "Yes. Material and finish selections can be discussed during project planning. If you already have specific products, colors, fixtures, flooring, or finishes in mind, those can be considered when developing the project scope.",
  },
  {
    category: "remodeling",
    question: "How long does a kitchen or bathroom remodel take?",
    answer:
      "Remodeling timelines depend on project size, complexity, material availability, selections, and the amount of work involved. Expected scheduling can be discussed once the project scope has been evaluated.",
  },

  // FLOORING & DRYWALL
  {
    category: "flooring",
    question: "Does Coatwell install flooring in El Paso?",
    answer:
      "Yes. Coatwell provides flooring installation for individual flooring projects and as part of larger interior renovations throughout the El Paso area.",
  },
  {
    category: "flooring",
    question: "Does Coatwell repair drywall?",
    answer:
      "Yes. Coatwell provides drywall repair and interior finishing services. Drywall work can also be incorporated into painting and remodeling projects when walls or ceilings need repair.",
  },
  {
    category: "flooring",
    question: "Can you install new drywall during a remodel?",
    answer:
      "Yes. New drywall installation can be incorporated into interior renovations and remodeling projects when required by the project scope.",
  },
  {
    category: "flooring",
    question: "Can flooring and drywall be part of the same renovation?",
    answer:
      "Yes. Coatwell can combine flooring, drywall, painting, trim, cabinetry, and other interior finish work into a larger renovation project.",
  },

  // ESTIMATES
  {
    category: "estimates",
    question: "How do I request an estimate from Coatwell?",
    answer:
      "Contact Coatwell and tell us about your project. Depending on the type of work, we can discuss the scope and determine what information or property evaluation is needed to prepare your estimate.",
  },
  {
    category: "estimates",
    question: "What should I provide when requesting an estimate?",
    answer:
      "Helpful information includes the property location, type of project, areas you want improved, photos when available, your goals for the project, and any specific materials or finishes you already have in mind.",
  },
  {
    category: "estimates",
    question: "What happens after I approve my estimate?",
    answer:
      "Once the project scope is approved, the next steps generally involve confirming project details, selections, materials, and scheduling before work begins.",
  },
  {
    category: "estimates",
    question: "What happens if the project scope changes?",
    answer:
      "If additional work is requested or project conditions require a change to the agreed scope, the change should be discussed and documented so the additional work, pricing, and potential schedule impact are clear.",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("general");

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const visibleFAQs = faqs.filter(
    (faq) => faq.category === activeCategory
  );

  function changeCategory(category: FAQCategory) {
    setActiveCategory(category);
    setOpenFAQ(0);
  }

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="
          relative
          min-h-[510px]
          overflow-hidden
          bg-black
          text-white
          lg:min-h-[550px]
        "
      >
        <Image
          src="/Services_cab_1.jpeg"
          alt="Coatwell painting roofing and remodeling services in El Paso Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black/50 to-transparent" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[510px]
            max-w-[1450px]
            items-center
            px-6
            pb-16
            pt-[175px]
            lg:min-h-[550px]
            lg:px-10
            lg:pb-20
            lg:pt-[190px]
            xl:px-14
          "
        >
          <div className="max-w-[950px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[3px] w-12 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Coatwell • El Paso, Texas
              </p>
            </div>

            <h1
              className="
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
              Frequently Asked
              <br />
              <span className="text-red-600">Questions.</span>
            </h1>

            <p
              className="
                mt-7
                max-w-[760px]
                text-lg
                font-medium
                leading-8
                text-white/70
                lg:text-xl
              "
            >
              Answers to common questions about painting, roofing,
              remodeling, flooring, drywall, estimates, and working
              with Coatwell in El Paso.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-bold">
              <Link
                href="/"
                className="text-white/50 transition hover:text-red-500"
              >
                Home
              </Link>

              <span className="text-red-600">/</span>

              <span>FAQs</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-red-600" />
      </section>

      {/* =====================================================
          INTRO - TIGHTENED
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f5f5f3] pt-14 pb-12 lg:pt-16 lg:pb-14">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-20px]
            top-[0px]
            select-none
            whitespace-nowrap
            text-[150px]
            font-black
            uppercase
            leading-none
            tracking-[-0.075em]
            text-black/[0.025]
            lg:text-[220px]
            xl:text-[260px]
          "
        >
          ANSWERS
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
            lg:grid-cols-[.78fr_1.22fr]
            lg:gap-16
            lg:px-10
            xl:px-14
          "
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-10 bg-red-600" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Before We Get Started
              </p>
            </div>

            <h2
              className="
                mt-4
                text-[40px]
                font-black
                uppercase
                leading-[0.94]
                tracking-[-0.045em]
                text-[#151922]
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              Questions About
              <br />
              Your <span className="text-red-600">Project?</span>
            </h2>
          </div>

          <div className="max-w-[800px]">
            <p className="text-[19px] font-bold leading-8 text-[#172033]">
              Choosing a contractor is easier when you know what
              to expect before work begins.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-neutral-600">
              Coatwell provides professional painting, roofing,
              remodeling, flooring, drywall, and property
              improvement services throughout El Paso, Texas and
              surrounding communities.
            </p>

            <p className="mt-3 text-[16px] leading-7 text-neutral-600">
              Whether you&apos;re planning an interior repaint,
              exterior painting project, roof repair, kitchen
              remodel, bathroom renovation, new flooring, or
              drywall work, these answers cover many of the
              questions customers have before getting started.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION - MOVED UP / TIGHTENED
      ===================================================== */}
      <section className="relative bg-white pt-12 pb-16 lg:pt-14 lg:pb-20">
        <div
          className="
            mx-auto
            grid
            max-w-[1450px]
            gap-12
            px-6
            lg:grid-cols-[310px_minmax(0,1fr)]
            lg:gap-16
            lg:px-10
            xl:grid-cols-[330px_minmax(0,1fr)]
            xl:gap-20
            xl:px-14
          "
        >
          {/* LEFT CATEGORY NAV */}
          <aside>
            <div className="lg:sticky lg:top-[120px]">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                FAQ Categories
              </p>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-black
                  uppercase
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-[#151922]
                "
              >
                Find The
                <br />
                Answer You Need.
              </h2>

              <div className="mt-8 flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:overflow-visible">
                {categories.map((category) => {
                  const active =
                    activeCategory === category.key;

                  return (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() =>
                        changeCategory(category.key)
                      }
                      className={`
                        group
                        flex
                        min-w-max
                        items-center
                        justify-between
                        gap-8
                        rounded-[11px]
                        border
                        px-5
                        py-4
                        text-left
                        transition
                        duration-300
                        lg:w-full
                        ${
                          active
                            ? "border-red-600 bg-red-600 text-white shadow-[0_12px_28px_rgba(220,38,38,0.16)]"
                            : "border-black/[0.07] bg-[#f7f7f5] text-[#151922] hover:border-red-600/30 hover:bg-white"
                        }
                      `}
                    >
                      <span className="text-[11px] font-black uppercase tracking-[0.05em]">
                        {category.label}
                      </span>

                      <span
                        className={`
                          text-lg
                          transition-transform
                          group-hover:translate-x-1
                          ${
                            active
                              ? "text-white"
                              : "text-red-600"
                          }
                        `}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 hidden rounded-[16px] bg-[#171c24] p-6 text-white lg:block">
                <span className="block h-[3px] w-9 bg-red-600" />

                <p className="mt-5 text-[19px] font-black uppercase leading-6">
                  Still Have A Question?
                </p>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Every property is different. Tell us about your
                  project and we&apos;ll help determine the next
                  step.
                </p>

                <Link
                  href="/#estimate"
                  className="
                    group
                    mt-5
                    flex
                    items-center
                    justify-between
                    rounded-[9px]
                    bg-red-600
                    px-4
                    py-3
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.08em]
                    transition
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Get An Estimate
                  <span>→</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* FAQ QUESTIONS */}
          <div>
            <div className="border-b border-black/[0.08] pb-7">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 bg-red-600" />

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                  Coatwell FAQs
                </p>
              </div>

              <h3
                className="
                  mt-3
                  text-[36px]
                  font-black
                  uppercase
                  leading-none
                  tracking-[-0.04em]
                  text-[#151922]
                  sm:text-[42px]
                "
              >
                {
                  categories.find(
                    (category) =>
                      category.key === activeCategory
                  )?.label
                }
              </h3>
            </div>

            <div className="border-b border-black/[0.08]">
              {visibleFAQs.map((faq, index) => {
                const open = openFAQ === index;

                return (
                  <article
                    key={faq.question}
                    className="border-t border-black/[0.08]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFAQ(open ? null : index)
                      }
                      aria-expanded={open}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-8
                        py-7
                        text-left
                      "
                    >
                      <div className="flex items-start gap-5">
                        <span
                          className={`
                            mt-[5px]
                            text-[10px]
                            font-black
                            tracking-[0.12em]
                            ${
                              open
                                ? "text-red-600"
                                : "text-neutral-400"
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h4
                          className={`
                            max-w-[800px]
                            text-[18px]
                            font-black
                            leading-7
                            tracking-[-0.02em]
                            transition
                            sm:text-[21px]
                            ${
                              open
                                ? "text-red-600"
                                : "text-[#151922] group-hover:text-red-600"
                            }
                          `}
                        >
                          {faq.question}
                        </h4>
                      </div>

                      <span
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-xl
                          transition
                          duration-300
                          ${
                            open
                              ? "rotate-45 border-red-600 bg-red-600 text-white"
                              : "border-black/10 text-black group-hover:border-red-600 group-hover:text-red-600"
                          }
                        `}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ${
                          open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[850px] pb-8 pl-[45px] pr-6 text-[16px] leading-8 text-neutral-600 sm:pl-[49px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[#f3f3f0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10 xl:px-14">
          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              bg-red-600
              px-8
              py-12
              text-white
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-16
              lg:px-14
              lg:py-14
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-30px]
                top-1/2
                -translate-y-1/2
                select-none
                whitespace-nowrap
                text-[130px]
                font-black
                uppercase
                tracking-[-0.075em]
                text-black/[0.055]
                lg:text-[210px]
              "
            >
              COATWELL
            </div>

            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
                Still Have A Question?
              </p>

              <h2
                className="
                  mt-4
                  text-[40px]
                  font-black
                  uppercase
                  leading-[0.93]
                  tracking-[-0.045em]
                  sm:text-[48px]
                  lg:text-[55px]
                "
              >
                Let&apos;s Talk About
                <br />
                Your Project.
              </h2>

              <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-white/80">
                Tell us what you&apos;re planning and we&apos;ll
                help determine the next step for your painting,
                roofing, remodeling, flooring, or drywall project.
              </p>
            </div>

            <div className="relative z-10 mt-8 shrink-0 lg:mt-0">
              <Link
                href="/#estimate"
                className="
                  group
                  flex
                  min-w-[245px]
                  items-center
                  justify-between
                  rounded-[11px]
                  bg-[#171c24]
                  px-6
                  py-4
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.09em]
                  text-white
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:text-black
                "
              >
                Get A Free Estimate

                <span className="text-lg transition-transform group-hover:translate-x-1">
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