"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Tanzania Horticultural Association",
    title: "Growing a stronger",
    highlight: "horticulture industry.",
    description:
      "Supporting farmers, businesses and partners across Tanzania to build a competitive, sustainable and market-driven horticulture sector.",
    primaryText: "Become a Member",
    primaryHref: "#membership",
    secondaryText: "Explore Our Work",
    secondaryHref: "#work",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Supporting Producers",
    title: "From production",
    highlight: "to market.",
    description:
      "Connecting horticultural producers and businesses with knowledge, opportunities and markets that support sustainable growth.",
    primaryText: "Our Work",
    primaryHref: "#work",
    secondaryText: "Value Chains",
    secondaryHref: "#value-chains",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Market Access",
    title: "Opening doors to",
    highlight: "new opportunities.",
    description:
      "Working across the horticulture value chain to strengthen market access and create opportunities for Tanzanian businesses.",
    primaryText: "Explore Markets",
    primaryHref: "#markets",
    secondaryText: "Learn More",
    secondaryHref: "#about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523742810798-4c6c9b7b0b3d?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "A Growing Network",
    title: "Building the future of",
    highlight: "Tanzania's horticulture.",
    description:
      "Bringing together producers, exporters, traders, service providers and partners to strengthen the horticulture industry.",
    primaryText: "Join TAHA",
    primaryHref: "#membership",
    secondaryText: "About TAHA",
    secondaryHref: "#about",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = slides[activeSlide];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  return (
    <section
      className="relative min-h-[800px] overflow-hidden bg-[#123d2a]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
              index === activeSlide ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#071b12]/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071b12]/90 via-[#123d2a]/55 to-[#123d2a]/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071b12]/75 via-transparent to-transparent" />

      {/* Main 1400px Container */}
      <div className="relative z-10 mx-auto min-h-[800px] max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Hero Content */}
        <div className="flex min-h-[800px] items-center py-24 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              key={`eyebrow-${activeSlide}`}
              className="mb-7 flex animate-[fadeIn_.6s_ease-out] items-center gap-3"
            >
              {/* Optional eyebrow */}
              {/* 
              <span className="h-px w-8 bg-[#a9d5b8] sm:w-10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7e5d2] sm:text-[11px] sm:tracking-[0.24em]">
                {slide.eyebrow}
              </span>
              */}
            </div>

            {/* Heading */}
            <h1
              key={`title-${activeSlide}`}
              className="max-w-3xl animate-[fadeInUp_.7s_ease-out] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl lg:text-[72px]"
            >
              {slide.title}
              <br />
              <span className="text-[#a9d5b8]">{slide.highlight}</span>
            </h1>

            {/* Description */}
            <p
              key={`description-${activeSlide}`}
              className="mt-8 max-w-2xl animate-[fadeInUp_.8s_ease-out] text-sm leading-7 text-white/80 sm:mt-9 sm:text-lg sm:leading-8"
            >
              {slide.description}
            </p>

            {/* Buttons */}
            <div
              key={`buttons-${activeSlide}`}
              className="mt-9 flex animate-[fadeInUp_.9s_ease-out] flex-wrap items-center gap-4 sm:mt-10"
            >
              <Link
                href={slide.primaryHref}
                className="group inline-flex h-11 items-center gap-3 bg-[#168044] px-5 text-sm font-semibold text-white transition hover:bg-[#126b39] sm:h-12 sm:px-6"
              >
                {slide.primaryText}

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={slide.secondaryHref}
                className="inline-flex h-11 items-center gap-3 border border-white/50 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#123d2a] sm:h-12 sm:px-6"
              >
                {slide.secondaryText}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/20 pt-7 sm:mt-16 sm:gap-x-10 sm:pt-8">
              <div>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  20+
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-[10px] sm:tracking-[0.16em]">
                  Years of service
                </p>
              </div>

              <span className="hidden h-9 w-px bg-white/20 sm:block" />

              <div>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  25,900+
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-[10px] sm:tracking-[0.16em]">
                  Members
                </p>
              </div>

              <span className="hidden h-9 w-px bg-white/20 sm:block" />

              <div>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Tanzania
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-[10px] sm:tracking-[0.16em]">
                  Horticulture network
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Arrows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0">
          <div className="relative mx-auto flex h-full max-w-[1400px] items-center">
            {/* Previous */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="pointer-events-auto absolute left-3 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/15 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#123d2a] sm:left-5 sm:h-11 sm:w-11 lg:left-0 lg:-translate-x-1/2"
            >
              <ArrowLeft size={16} className="sm:size-[17px]" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="pointer-events-auto absolute right-3 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/15 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#123d2a] sm:right-5 sm:h-11 sm:w-11 lg:right-0 lg:translate-x-1/2"
            >
              <ArrowRight size={16} className="sm:size-[17px]" />
            </button>
          </div>
        </div>

        {/* Slide Number */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 sm:right-8 lg:right-12 xl:flex">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80">
            {String(activeSlide + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-10 bg-white/40" />

          <span className="text-[10px] tracking-[0.15em] text-white/40">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Right Information */}
        <div className="absolute bottom-28 right-5 hidden max-w-xs sm:right-8 sm:block lg:right-12">
          <div className="border-l border-white/40 pl-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Tanzania Horticulture
            </p>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Connecting producers, businesses, markets and opportunities.
            </p>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-28">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                index === activeSlide
                  ? "w-9 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Explore */}
        <Link
          href="#about"
          className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 px-8 py-5 text-white/55 transition hover:text-white"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
            Explore
          </span>

          <ChevronDown size={16} />
        </Link>
      </div>
    </section>
  );
}