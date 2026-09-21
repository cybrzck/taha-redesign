"use client";

import { useEffect, useRef, useState } from "react";

type StatisticCardProps = {
    value: string | number;
    label: string;
};

export default function StatisticCard({ value, label }: StatisticCardProps) {
    const [displayValue, setDisplayValue] = useState<string | number>(value);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDisplayValue(value);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <p
                className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            >
                {displayValue}
            </p>

            <p
                className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500"
            >
                {label}
            </p>
        </div>
    );
}