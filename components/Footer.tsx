import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
    { label: "About TAHA", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "News & Updates", href: "#" },
     { label: "IAA", href: "https://www.iaa.ac.tz" },
    { label: "Events", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Tenders", href: "#" },
];

const companies = [
    {
        name: "TAHA Fresh Handling Ltd",
        href: "https://tahafresh.co.tz",
    },
    {
        name: "GREENCERT Ltd",
        href: "https://www.greencert.co.tz",
    },
    {
        name: "TARIC",
        href: "https://taric.co.tz",
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-taha-dark text-white">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-10 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:gap-12 lg:py-20">
                    <div>
                        <Link
                            href="/"
                            className="relative block h-20 w-48"
                            aria-label="TAHA home"
                        >
                            <Image
                                src="/taha-logo.png"
                                alt="TAHA"
                                fill
                                sizes="192px"
                                className="object-contain object-left"
                            />
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                            Advocating for the growth and competitiveness of
                            Tanzania&apos;s horticultural industry.
                        </p>

                        <div className="mt-7 flex gap-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                            <a
                                href="#"
                                className="transition hover:text-taha-light"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-taha-light"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-taha-light"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                            Explore
                        </p>

                        <div className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                                >
                                    {link.label}

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                            Our Companies
                        </p>

                        <div className="mt-5 space-y-3">
                            {companies.map((company) => (
                                <a
                                    key={company.name}
                                    href={company.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                                >
                                    {company.name}

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                            Head Office
                        </p>

                        <div className="mt-5 space-y-5 text-sm leading-6 text-white/55">
                            <p>
                                P.O. Box 16520
                                <br />
                                Arusha, Tanzania
                            </p>

                            <p>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                                    Phone
                                </span>
                                <br />

                                <a
                                    href="tel:+255763718849"
                                    className="transition hover:text-taha-light"
                                >
                                    +255 763 718 849
                                </a>
                            </p>

                            <p>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                                    Email
                                </span>
                                <br />

                                <a
                                    href="mailto:info@taha.or.tz"
                                    className="transition hover:text-taha-light"
                                >
                                    info@taha.or.tz
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-4 py-6 text-[11px] text-white/35 sm:flex-row sm:items-center">
                    <p>
                        © {new Date().getFullYear()} Tanzania Horticultural
                        Association. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="transition hover:text-white"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="#"
                            className="transition hover:text-white"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}