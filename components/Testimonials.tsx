"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "TAHA helped us improve our production practices and connect with new market opportunities. The knowledge and network have made a real difference to our business.",
        name: "Asha M.",
        role: "Horticultural Farmer, Arusha",
    },
    {
        quote:
            "Through TAHA events and business connections, we have been able to meet new customers and better understand the needs of horticultural producers.",
        name: "David K.",
        role: "Managing Director, AgroLink Tanzania",
    },
    {
        quote:
            "The support around standards and market requirements has helped our team become more prepared for regional and international markets.",
        name: "Neema P.",
        role: "Export Manager, FreshHarvest Ltd",
    },
    {
        quote:
            "Being part of the TAHA network gives us access to valuable industry information, business contacts and opportunities to learn from other companies.",
        name: "John S.",
        role: "Founder, GreenFields Produce",
    },
    {
        quote:
            "TAHA provides an important platform for horticulture stakeholders to share experiences, address challenges and create opportunities for growth.",
        name: "Grace W.",
        role: "Agribusiness Consultant, Dodoma",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const previous = () => {
        setActive((current) =>
            current === 0 ? testimonials.length - 1 : current - 1,
        );
    };

    const next = () => {
        setActive((current) =>
            current === testimonials.length - 1 ? 0 : current + 1,
        );
    };

    useEffect(() => {
        const timer = setInterval(next, 6500);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-taha-light py-10 sm:py-12 lg:py-14">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col justify-between gap-4 border-b border-neutral-200 pb-5 lg:flex-row lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-7 bg-taha" />
                            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-taha">
                                Member Voices
                            </span>
                        </div>

                        <h2 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-taha-dark sm:text-4xl lg:text-[44px]">
                            Experiences from{" "}
                            <span className="text-taha">the network.</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-xs leading-5 text-neutral-500">
                        Perspectives from people and businesses across
                        Tanzania&apos;s horticulture sector.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[180px_1fr]">
                    <div className="flex items-center justify-between border-b border-neutral-200 py-5 lg:block lg:border-b-0 lg:border-r lg:py-7 lg:pr-8">
                        <Quote
                            size={32}
                            strokeWidth={1}
                            className="text-taha"
                        />

                        <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-400 lg:mt-8 lg:block">
                            0{active + 1}{" "}
                            <span className="text-neutral-300">/</span>{" "}
                            0{testimonials.length}
                        </span>
                    </div>

                    <div className="relative min-h-[270px] overflow-hidden lg:min-h-[285px] lg:pl-10">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.name}
                                className={`absolute inset-0 flex flex-col justify-between py-6 transition-all duration-500 lg:py-7 ${
                                    index === active
                                        ? "translate-x-0 opacity-100"
                                        : "pointer-events-none translate-x-5 opacity-0"
                                }`}
                            >
                                <p className="max-w-4xl text-xl font-medium leading-[1.4] tracking-[-0.025em] text-taha-dark sm:text-2xl lg:text-[30px]">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                <div className="mt-6 flex items-end justify-between gap-5">
                                    <div>
                                        <p className="text-sm font-semibold text-taha-dark">
                                            {testimonial.name}
                                        </p>

                                        <p className="mt-0.5 text-xs text-neutral-500">
                                            {testimonial.role}
                                        </p>
                                    </div>

                                    <div className="flex gap-1.5">
                                        <button
                                            type="button"
                                            onClick={previous}
                                            aria-label="Previous testimonial"
                                            className="flex h-9 w-9 items-center justify-center border border-neutral-300 text-taha-dark transition hover:border-taha hover:bg-taha hover:text-white"
                                        >
                                            <ArrowLeft size={15} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={next}
                                            aria-label="Next testimonial"
                                            className="flex h-9 w-9 items-center justify-center border border-neutral-300 text-taha-dark transition hover:border-taha hover:bg-taha hover:text-white"
                                        >
                                            <ArrowRight size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-1.5 border-t border-neutral-200 pt-4">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.name}
                            type="button"
                            onClick={() => setActive(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className="h-0.5 flex-1 bg-neutral-200"
                        >
                            <span
                                className={`block h-full bg-taha transition-all duration-500 ${
                                    index === active ? "w-full" : "w-0"
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}