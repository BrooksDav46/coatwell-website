"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-5 md:px-6 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        <div className="flex min-h-[88px] items-center justify-between overflow-hidden rounded-[22px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]">

          {/* LOGO AREA */}
          <Link
            href="/"
            className="relative flex min-h-[88px] items-center bg-black px-6 md:px-8"
          >
            {/* RED ACCENT */}
            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-red-600" />

            <Image
              src="/Coatwell_Logo_Nav.png"
              alt="Coatwell Painting Roofing Remodeling"
              width={220}
              height={75}
              priority
              className="h-auto w-[175px] object-contain md:w-[210px]"
            />
          </Link>

          {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-9 px-6 lg:flex xl:gap-11">
            <Link href="/" className="coatwell-nav-link">
                Home
            </Link>

            <Link href="/about" className="coatwell-nav-link">
                About Us
            </Link>

            <Link href="/services" className="coatwell-nav-link">
                Services
            </Link>

            <Link href="/faqs" className="coatwell-nav-link">
                FAQs
            </Link>

            <Link href="/contact" className="coatwell-nav-link">
                Contact Us
            </Link>
            </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-5 pr-4 xl:flex">
            <a
              href="tel:+19150000000"
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition group-hover:bg-red-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 stroke-red-600"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.37-.277.542-.75.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>

              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                  Call Coatwell
                </span>

                <span className="block text-sm font-extrabold text-black">
                  915-247-6924
                </span>
              </div>
            </a>

            <Link
              href="/contact"
              className="rounded-[14px] bg-red-600 px-6 py-4 text-[12px] font-black uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-black"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* TABLET ESTIMATE BUTTON */}
          <Link
            href="/contact"
            className="mr-3 hidden rounded-xl bg-red-600 px-5 py-3 text-xs font-extrabold uppercase text-white lg:block xl:hidden"
          >
            Free Estimate
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="mr-4 flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-xl bg-black lg:hidden"
          >
            <span
              className={`h-[2px] w-5 bg-white transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-5 bg-red-600 transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-5 bg-white transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-3 overflow-hidden rounded-[20px] bg-white shadow-2xl lg:hidden">
            <nav className="flex flex-col px-6 py-5">
              {[
                ["Home", "/"],
                ["Painting", "/painting"],
                ["Roofing", "/roofing"],
                ["Remodeling", "/remodeling"],
                ["Our Work", "/projects"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-neutral-100 py-4 text-sm font-bold text-neutral-900 transition hover:text-red-600"
                >
                  {name}
                </Link>
              ))}

              <a
                href="tel:+19150000000"
                className="mt-5 text-center text-sm font-bold text-neutral-700"
              >
                Call 915-000-0000
              </a>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-xl bg-red-600 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white"
              >
                Get a Free Estimate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}