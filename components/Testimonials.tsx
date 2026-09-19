"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { tahaApi } from "@/lib/api";
import type { Testimonial } from "@/types/taha";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await tahaApi.getTestimonials();

            if (!response.data) {
                throw new Error("No testimonials were returned.");
            }

            setTestimonials(response.data);
            setActive(0);
        } catch (error) {
            console.error("Failed to load testimonials:", error);

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to load testimonials.",
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let cancelled = false;

        const loadTestimonials = async () => {
            try {
                const response = await tahaApi.getTestimonials();

                if (!response.data) {
                    throw new Error("No testimonials were returned.");
                }

                if (!cancelled) {
                    setTestimonials(response.data);
                    setActive(0);
                    setError(null);
                    setLoading(false);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error(
                        "Failed to load testimonials:",
                        error,
                    );

                    setError(
                        error instanceof Error
                            ? error.message
                            : "Failed to load testimonials.",
                    );

                    setLoading(false);
                }
            }
        };

        loadTestimonials();

        return () => {
            cancelled = true;
        };
    }, []);

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
        if (testimonials.length <= 1) return;

        const timer = setInterval(next, 6500);

        return () => clearInterval(timer);
    }, [testimonials.length]);

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

                {loading && (
                    <div className="grid lg:grid-cols-[180px_1fr]">
                        <div className="border-b border-neutral-200 py-5 lg:border-b-0 lg:border-r lg:py-7 lg:pr-8">
                            <div className="h-8 w-8 animate-pulse bg-neutral-200" />
                            <div className="mt-8 h-3 w-10 animate-pulse bg-neutral-200" />
                        </div>

                        <div className="min-h-[270px] py-6 lg:min-h-[285px] lg:pl-10 lg:py-7">
                            <div className="h-24 max-w-4xl animate-pulse bg-neutral-200" />

                            <div className="mt-8">
                                <div className="h-4 w-24 animate-pulse bg-neutral-200" />
                                <div className="mt-2 h-3 w-40 animate-pulse bg-neutral-100" />
                            </div>
                        </div>
                    </div>
                )}

                {!loading && error && (
                    <div className="border-b border-neutral-200 py-10">
                        <p className="text-sm font-semibold text-taha-dark">
                            Unable to load testimonials.
                        </p>

                        <p className="mt-2 text-sm text-neutral-500">
                            {error}
                        </p>

                        <button
                            type="button"
                            onClick={fetchTestimonials}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-taha transition hover:text-taha-dark"
                        >
                            Try again
                            <ArrowRight size={16} />
                        </button>
                    </div>
                )}

                {!loading && !error && testimonials.length === 0 && (
                    <div className="border-b border-neutral-200 py-10">
                        <p className="text-sm text-neutral-500">
                            No testimonials are currently available.
                        </p>
                    </div>
                )}

                {!loading && !error && testimonials.length > 0 && (
                    <>
                        <div className="grid lg:grid-cols-[180px_1fr]">
                            <div className="flex items-center justify-between border-b border-neutral-200 py-5 lg:block lg:border-b-0 lg:border-r lg:py-7 lg:pr-8">
                                <Quote
                                    size={32}
                                    strokeWidth={1}
                                    className="text-taha"
                                />

                                <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-400 lg:mt-8 lg:block">
                                    {String(active + 1).padStart(2, "0")}{" "}
                                    <span className="text-neutral-300">/</span>{" "}
                                    {String(testimonials.length).padStart(
                                        2,
                                        "0",
                                    )}
                                </span>
                            </div>

                            <div className="relative min-h-[270px] overflow-hidden lg:min-h-[285px] lg:pl-10">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`absolute inset-0 flex flex-col justify-between py-6 transition-all duration-500 lg:py-7 ${
                                            index === active
                                                ? "translate-x-0 opacity-100"
                                                : "pointer-events-none translate-x-5 opacity-0"
                                        }`}
                                    >
                                        <p className="max-w-4xl text-xl pl-8 font-medium leading-[1.4] tracking-[-0.025em] text-taha-dark sm:text-2xl lg:text-[30px]">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </p>

                                        <div className="mt-6 pl-8 flex items-end justify-between gap-5">
                                            <div>
                                                <p className="text-sm font-semibold text-taha-dark">
                                                    {testimonial.name}
                                                </p>

                                                <p className="mt-0.5 text-xs text-neutral-500">
                                                    {testimonial.role}
                                                </p>
                                            </div>

                                            {testimonials.length > 1 && (
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
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {testimonials.length > 1 && (
                            <div className="flex gap-1.5 border-t border-neutral-200 pt-4">
                                {testimonials.map((testimonial, index) => (
                                    <button
                                        key={testimonial.id}
                                        type="button"
                                        onClick={() => setActive(index)}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                        className="h-0.5 flex-1 bg-neutral-200"
                                    >
                                        <span
                                            className={`block h-full bg-taha transition-all duration-500 ${
                                                index === active
                                                    ? "w-full"
                                                    : "w-0"
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}