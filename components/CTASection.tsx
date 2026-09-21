"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
    title: string;
    description?: string;
    primaryAction: {
        label: string;
        href: string;
    };
    secondaryAction?: {
        label: string;
        href: string;
    };
    background?: "light" | "dark" | "green";
};

export default function CTASection({
    title,
    description,
    primaryAction,
    secondaryAction,
    background = "light",
}: CTASectionProps) {
    const bgClass =
        background === "dark"
            ? "bg-taha-dark text-white"
            : background === "green"
            ? "bg-taha-light"
            : "bg-white";

    return (
        <section className={bgClass} py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="text-center lg:text-left">
                    <p
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha"
                    >
                        {title}
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[40px]">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-6 max-w-xl text-base leading-6 text-neutral-600 sm:text-lg sm:leading-7">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-8 lg:mt-12 grid gap-6 lg:grid-cols-2 lg:items-end">
                    <div>
                        <Link
                            href={primaryAction.href}
                            className="inline-flex items-center gap-3 bg-taha px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-taha-hover"
                        >
                            {primaryAction.label}
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    {secondaryAction && (
                        <div>
                            <Link
                                href={secondaryAction.href}
                                className="inline-flex items-center gap-3 border border-taha px-5 py-3.5 text-sm font-semibold text-taha transition hover:border-taha-hover hover:text-taha-dark"
                            >
                                {secondaryAction.label}
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}