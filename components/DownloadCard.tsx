"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type DownloadCardProps = {
    id: number;
    title: string;
    description: string;
    fileType: "pdf" | "doc" | "xls" | "zip";
    fileSize: string;
    date: string;
};

export default function DownloadCard({
    id,
    title,
    description,
    fileType,
    fileSize,
    date,
}: DownloadCardProps) {
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

    const fileIcon =
        fileType === "pdf"
            ? "FileText"
            : fileType === "doc"
            ? "File"
            : fileType === "xls"
            ? "FileSpreadsheet"
            : "Zip";

    return (
        <div
            ref={ref}
            className={`group border-e border-neutral-200 hover:border-taha transition-colors duration-300 overflow-hidden rounded-lg p-5 flex items-start gap-4`}
        >
            <div className="w-10 h-10 rounded bg-neutral-100 flex items-center justify-center shrink-0">
                <Image
                    src={`/icons/${fileIcon.toLowerCase()}.svg`}
                    alt={fileType}
                    className="h-5 w-5 text-taha"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-taha-dark group-hover:text-taha transition-colors">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {description}
                </p>
            </div>

            <div className="mt-2 text-right">
                <span className="text-xs text-neutral-500">{date}</span>

                <a
                    href="#"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-taha transition hover:text-taha-dark"
                >
                    Download
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}