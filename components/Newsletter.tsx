"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!email.trim()) return;

        setEmail("");
    }

    return (
        <section className="bg-taha-light py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-8 border-y border-taha-dark/10 py-9 sm:py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-taha" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha">
                                Stay Informed
                            </span>
                        </div>

                        <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-taha-dark sm:text-4xl lg:text-[46px]">
                            Horticulture updates,
                            <span className="text-taha"> straight to your inbox.</span>
                        </h2>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                            Receive industry updates, opportunities, events and
                            useful information from TAHA.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 sm:flex-row lg:justify-end"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Your email address"
                            aria-label="Email address"
                            className="h-14 min-w-0 flex-1 border border-neutral-300 bg-white px-5 text-sm text-taha-dark outline-none transition placeholder:text-neutral-400 focus:border-taha lg:max-w-md"
                        />

                        <button
                            type="submit"
                            className="group flex h-14 shrink-0 items-center justify-center gap-3 bg-taha px-7 text-sm font-semibold text-white transition hover:bg-taha-dark"
                        >
                            Subscribe
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}