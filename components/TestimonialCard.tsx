"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TestimonialCardProps = {
    id: number;
    quote: string;
    name: string;
    role: string;
};

export default function TestimonialCard({
    id,
    quote,
    name,
    role,
}: TestimonialCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsHovered(false);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`group absolute inset-0 flex flex-col justify-between py-6 px-5 transition-all duration-500 ${
                isHovered ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-5 opacity-0"
            }`}
        >
            <p className="max-w-2xl text-xl pl-8 font-medium leading-[1.4] tracking-[-0.025em] text-taha-dark">
                &ldquo;{quote}&rdquo;
            </p>

            <div className="mt-6 pl-8 flex items-end justify-between">
                <div>
                    <p className="text-sm font-semibold text-taha-dark">
                        {name}
                    </p>

                    <p className="mt-0.5 text-xs text-neutral-500">
                        {role}
                    </p>
                </div>

                <div className="flex gap-1.5">
                    <button
                        type="button"
                        onClick={() => setIsHovered(!isHovered)}
                        aria-label="Go to testimonial"
                        className="h-0.5 flex-1 bg-neutral-200 transition-all duration-500"
                    >
                        <span
                            className={`block h-full bg-taha transition-all duration-500 ${
                                isHovered ? "w-full" : "w-0"
                            }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}