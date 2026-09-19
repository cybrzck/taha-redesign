"use client";

import { useEffect, useState } from "react";
import { tahaApi } from "@/lib/api";

type ValueChain = {
    id: number;
    number: string;
    title: string;
    image: string;
};

export default function ValueChains() {
    const [chains, setChains] = useState<ValueChain[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchValueChains = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await tahaApi.getValueChains();

                if (!response.data) {
                    throw new Error("No value chains were returned.");
                }

                setChains(response.data);
            } catch (error) {
                console.error("Failed to load value chains:", error);

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to load value chains.",
                );
            } finally {
                setLoading(false);
            }
        };

        fetchValueChains();
    }, []);

    return (
        <section
            id="value-chains"
            className="bg-taha-light py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-8 lg:flex-row lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-taha" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha">
                                Our Value Chains
                            </span>
                        </div>

                        <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-4xl lg:text-5xl">
                            From farm to{" "}
                            <span className="text-taha">market.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-neutral-500">
                        Supporting producers and businesses across Tanzania&apos;s
                        diverse horticultural value chains.
                    </p>
                </div>

                {loading && (
                    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className={`animate-pulse bg-neutral-200 ${
                                    index === 0
                                        ? "h-[400px] md:col-span-2 md:h-[340px] lg:col-span-2 lg:row-span-2 lg:h-[480px]"
                                        : "h-[210px] sm:h-[230px]"
                                }`}
                            />
                        ))}
                    </div>
                )}

                {!loading && error && (
                    <div className="mt-8 border border-neutral-200 bg-white px-6 py-8">
                        <p className="text-sm font-semibold text-taha-dark">
                            Unable to load value chains.
                        </p>

                        <p className="mt-2 text-sm text-neutral-500">
                            {error}
                        </p>

                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="mt-5 text-sm font-semibold text-taha transition hover:text-taha-dark"
                        >
                            Try again
                        </button>
                    </div>
                )}

                {!loading && !error && chains.length === 0 && (
                    <div className="mt-8 border border-neutral-200 bg-white px-6 py-8">
                        <p className="text-sm text-neutral-500">
                            No value chains are currently available.
                        </p>
                    </div>
                )}

                {!loading && !error && chains.length > 0 && (
                    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {chains[0] && (
                            <article className="group relative h-[400px] overflow-hidden md:col-span-2 md:h-[340px] lg:col-span-2 lg:row-span-2 lg:h-[480px]">
                                <img
                                    src={chains[0].image}
                                    alt={chains[0].title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/90 via-taha-dark/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-7 sm:p-8">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                                        {chains[0].number}
                                    </span>

                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        {chains[0].title}
                                    </h3>

                                    <div className="mt-3 h-[2px] w-8 bg-taha-light transition-all duration-300 group-hover:w-16" />
                                </div>
                            </article>
                        )}

                        {chains.slice(1).map((chain) => (
                            <article
                                key={chain.id}
                                className="group relative h-[210px] overflow-hidden sm:h-[230px]"
                            >
                                <img
                                    src={chain.image}
                                    alt={chain.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/85 via-taha-dark/10 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                                        {chain.number}
                                    </span>

                                    <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                                        {chain.title}
                                    </h3>

                                    <div className="mt-2 h-[2px] w-7 bg-taha-light transition-all duration-300 group-hover:w-12" />
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}