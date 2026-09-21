"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
    id: number;
    title: string;
    slug: string;
    shortDescription: string;
    image: string;
    status: string;
    date: string;
};

export default function ProjectCard({
    id,
    title,
    slug,
    shortDescription,
    image,
    status,
    date,
}: ProjectCardProps) {
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

    const statusColor =
        status === "active"
            ? "bg-taha-light text-taha"
            : status === "completed"
            ? "bg-taha-light text-taha-dark"
            : "bg-taha-light text-neutral-600";

    return (
        <div
            ref={ref}
            className={`group border-e border-neutral-200 hover:border-taha transition-colors duration-300 overflow-hidden rounded-lg`}
        >
            <Link
                href={`/projects/${slug}`}
                className="group-hover:opacity-90 group-hover:scale-105 transition-transform"
            >
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="p-5">
                <span
                    className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400"
                >
                    {date}
                </span>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-taha-dark group-hover:text-taha transition-colors">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {shortDescription}
                </p>

                <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-medium {statusColor.split(' ')[1]}">
                        {status}
                    </span>
                </div>
            </div>
        </div>
    );
}