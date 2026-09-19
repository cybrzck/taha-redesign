"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { tahaApi } from "@/lib/api";
import type { Membership } from "@/types/taha";

function MemberCounter({ target }: { target: number }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1,
            );

            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(target * eased));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [started, target]);

    return (
        <div ref={ref} className="mt-3 flex items-end">
            <span className="text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                {count.toLocaleString()}
            </span>

            <span className="mb-1 ml-1 text-2xl text-taha-light">
                +
            </span>
        </div>
    );
}

export default function MembershipSection() {
    const [membership, setMembership] = useState<Membership | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMembership = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await tahaApi.getMembership();

            if (!response.data) {
                throw new Error("No membership data was returned.");
            }

            setMembership(response.data);
        } catch (error) {
            console.error("Failed to load membership:", error);

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to load membership.",
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let cancelled = false;

        const loadMembership = async () => {
            try {
                const response = await tahaApi.getMembership();

                if (!response.data) {
                    throw new Error("No membership data was returned.");
                }

                if (!cancelled) {
                    setMembership(response.data);
                    setError(null);
                    setLoading(false);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error("Failed to load membership:", error);

                    setError(
                        error instanceof Error
                            ? error.message
                            : "Failed to load membership.",
                    );

                    setLoading(false);
                }
            }
        };

        loadMembership();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section
            id="membership"
            className="bg-taha-dark py-14 text-white sm:py-16 lg:py-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-5 border-b border-white/15 pb-7 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-taha-light" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha-light">
                                Membership
                            </span>
                        </div>

                        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                            Be part of{" "}
                            <span className="text-taha-light">
                                the network.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-6 text-white/60 lg:ml-auto">
                        Join a national network connecting producers,
                        businesses, service providers and organizations across
                        Tanzania&apos;s horticulture industry.
                    </p>
                </div>

                {loading && (
                    <div className="grid lg:grid-cols-[0.85fr_1.4fr]">
                        <div className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:py-9 lg:pr-12">
                            <div className="h-3 w-24 animate-pulse bg-white/10" />
                            <div className="mt-4 h-16 w-56 animate-pulse bg-white/10" />
                            <div className="mt-4 h-12 w-full max-w-sm animate-pulse bg-white/5" />
                            <div className="mt-6 h-6 w-32 animate-pulse bg-white/10" />
                        </div>

                        <div className="lg:pl-12">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="grid gap-4 border-b border-white/15 py-6 last:border-b-0 sm:grid-cols-[60px_1fr] sm:py-7"
                                >
                                    <div className="h-3 w-5 animate-pulse bg-white/10" />

                                    <div>
                                        <div className="h-6 w-40 animate-pulse bg-white/10" />
                                        <div className="mt-3 h-10 max-w-2xl animate-pulse bg-white/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!loading && error && (
                    <div className="border-b border-white/15 py-10">
                        <p className="text-sm font-semibold">
                            Unable to load membership information.
                        </p>

                        <p className="mt-2 text-sm text-white/50">
                            {error}
                        </p>

                        <button
                            type="button"
                            onClick={fetchMembership}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-taha-light transition hover:text-white"
                        >
                            Try again
                            <ArrowRight size={16} />
                        </button>
                    </div>
                )}

                {!loading && !error && !membership && (
                    <div className="border-b border-white/15 py-10">
                        <p className="text-sm text-white/50">
                            No membership information is currently available.
                        </p>
                    </div>
                )}

                {!loading && !error && membership && (
                    <div className="grid lg:grid-cols-[0.85fr_1.4fr]">
                        <div className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:py-9 lg:pr-12">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                                TAHA Network
                            </p>

                            <MemberCounter
                                target={membership.totalMembers}
                            />

                            <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                                Members connected through Tanzania&apos;s
                                horticulture industry.
                            </p>

                            <Link
                                href="/membership"
                                className="group mt-6 inline-flex items-center gap-2 border-b border-taha-light pb-1.5 text-sm font-semibold text-white transition hover:border-white"
                            >
                                Become a Member
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                        </div>

                        <div className="lg:pl-12">
                            {membership.categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="group grid gap-4 border-b border-white/15 py-6 last:border-b-0 sm:grid-cols-[60px_1fr] sm:py-7"
                                >
                                    <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 transition-colors group-hover:text-taha-light">
                                        {category.number}
                                    </span>

                                    <div>
                                        <div className="flex items-center justify-between gap-5">
                                            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                                {category.title}
                                            </h3>

                                            <ArrowRight
                                                size={16}
                                                className="shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-taha-light"
                                            />
                                        </div>

                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* <div className="grid gap-3 border-t border-white/15 pt-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                        Why join TAHA
                    </span>

                    <p className="max-w-3xl text-base font-medium leading-6 tracking-tight text-white/75 sm:text-lg">
                        Access a stronger industry network, business
                        opportunities, knowledge and collective representation
                        across Tanzania&apos;s horticulture sector.
                    </p>
                </div> */}
            </div>
        </section>
    );
}