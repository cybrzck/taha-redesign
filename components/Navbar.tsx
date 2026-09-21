"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    BriefcaseBusiness,
    Mail,
    MapPin,
    Menu,
    Search,
    Sprout,
    Home,
    X,
} from "lucide-react";

type MenuItem = {
    title: string;
    description?: string;
    href: string;
};

type Menu = {
    label: string;
    href?: string;
    items?: MenuItem[];
    featured?: {
        title: string;
        description: string;
        href: string;
    };
};

const menus: Menu[] = [
    {
        label: "About TAHA",
        items: [
            {
                title: "About TAHA",
                description: "Who we are and what we do",
                href: "#about",
            },
            {
                title: "Our History",
                description: "TAHA's journey since 2004",
                href: "#",
            },
            {
                title: "Vision & Mission",
                description: "Our direction and purpose",
                href: "#",
            },
            {
                title: "Leadership",
                description: "Meet our leadership team",
                href: "#",
            },
            {
                title: "Board of Directors",
                description: "Our governance structure",
                href: "#",
            },
            {
                title: "Partners",
                description: "Organizations we work with",
                href: "#partners",
            },
        ],
        featured: {
            title: "20+ years of horticulture",
            description:
                "Building a stronger and more competitive horticultural industry in Tanzania.",
            href: "#about",
        },
    },
    {
        label: "Our Work",
        items: [
            {
                title: "Market Access",
                description: "Connecting businesses to markets",
                href: "#work",
            },
            {
                title: "Production",
                description: "Improving production systems",
                href: "#work",
            },
            {
                title: "Policy & Advocacy",
                description: "Representing industry interests",
                href: "#work",
            },
            {
                title: "Gender & Nutrition",
                description: "Inclusive horticultural development",
                href: "#work",
            },
            {
                title: "Food Safety",
                description: "Standards and compliance",
                href: "#work",
            },
            {
                title: "Business Development",
                description: "Growing horticultural enterprises",
                href: "#work",
            },
        ],
    },
    {
        label: "Value Chains",
        items: [
            {
                title: "Flowers & Cuttings",
                description: "Flowers and ornamental products",
                href: "#value-chains",
            },
            {
                title: "Vegetables",
                description: "Fresh and processed vegetables",
                href: "#value-chains",
            },
            {
                title: "Fruits",
                description: "Fruit production and trade",
                href: "#value-chains",
            },
            {
                title: "Spices & Herbs",
                description: "Spices, herbs and aromatics",
                href: "#value-chains",
            },
            {
                title: "Roots & Tubers",
                description: "Root and tuber crops",
                href: "#value-chains",
            },
            {
                title: "Horticultural Nuts",
                description: "Nuts and related products",
                href: "#value-chains",
            },
        ],
    },
    {
        label: "Membership",
        items: [
            {
                title: "Become a Member",
                description: "Join the TAHA network",
                href: "/membership",
            },
            {
                title: "Membership Categories",
                description: "Find the right category",
                href: "/membership",
            },
            {
                title: "Membership Benefits",
                description: "Explore member benefits",
                href: "/membership",
            },
            {
                title: "Member Services",
                description: "Services available to members",
                href: "/membership",
            },
        ],
        featured: {
            title: "Join 25,900+ members",
            description:
                "Connect with farmers, businesses and organizations across Tanzania.",
            href: "/membership",
        },
    },
    {
        label: "Markets",
        items: [
            {
                title: "Market Information",
                description: "Market intelligence and insights",
                href: "#",
            },
            {
                title: "Market Opportunities",
                description: "Explore new opportunities",
                href: "#",
            },
            {
                title: "Export Markets",
                description: "International market information",
                href: "#",
            },
            {
                title: "Trade Information",
                description: "Trade and market resources",
                href: "#",
            },
            {
                title: "Market Reports",
                description: "Reports and publications",
                href: "#",
            },
        ],
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "News & Events",
        items: [
            {
                title: "News",
                description: "Latest TAHA news",
                href: "#news",
            },
            {
                title: "Events",
                description: "Upcoming events and activities",
                href: "#",
            },
            {
                title: "Announcements",
                description: "Important announcements",
                href: "#",
            },
            {
                title: "Success Stories",
                description: "Stories from our network",
                href: "#",
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                title: "Publications",
                description: "Research and industry publications",
                href: "#",
            },
            {
                title: "Reports",
                description: "Reports and studies",
                href: "#",
            },
            {
                title: "Downloads",
                description: "Useful documents and resources",
                href: "#",
            },
            {
                title: "Useful Links",
                description: "External industry resources",
                href: "#",
            },
        ],
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setActiveMenu(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    function closeNavigation() {
        setActiveMenu(null);
        setMobileOpen(false);
        setMobileMenu(null);
    }

    function toggleDesktopMenu(label: string) {
        setActiveMenu((current) =>
            current === label ? null : label,
        );
    }

    function toggleMobileMenu(label: string) {
        setMobileMenu((current) =>
            current === label ? null : label,
        );
    }

    function submitSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const value = search.trim();

        if (!value) return;

        window.location.href = `/search?query=${encodeURIComponent(value)}`;
    }

    return (
        <>
            <header
                ref={navRef}
                className="sticky top-0 z-50 border-b border-neutral-200 bg-taha-light"
            >
                {/* Utility Bar */}
                <div className="hidden bg-taha-dark text-white lg:block">
                    <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 text-[12px]">
                        <div className="flex items-center gap-5">
                            <span className="flex items-center gap-1.5 text-white/80">
                                <MapPin size={13} />
                                Arusha, Tanzania
                            </span>

                            <span className="h-3 w-px bg-white/20" />

                            <a
                                href="mailto:info@taha.or.tz"
                                className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
                            >
                                <Mail size={13} />
                                info@taha.or.tz
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <Link
                                href="/careers"
                                className="text-white/80 transition-colors hover:text-white"
                            >
                                Careers
                            </Link>

                            <Link
                                href="/tenders"
                                className="text-white/80 transition-colors hover:text-white"
                            >
                                Tenders
                            </Link>

                            <Link
                                href="/resources/downloads"
                                className="text-white/80 transition-colors hover:text-white"
                            >
                                Downloads
                            </Link>

                            <span className="h-3 w-px bg-white/20" />

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-xs font-semibold text-white/70 transition-colors hover:text-white"
                            >
                                FB
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-xs font-semibold text-white/70 transition-colors hover:text-white"
                            >
                                IG
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-xs font-semibold text-white/70 transition-colors hover:text-white"
                            >
                                IN
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="flex h-[78px] items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={closeNavigation}
                            className="flex shrink-0 items-center"
                        >
                            <div className="flex items-center justify-center p-2">
                                <Image
                                    src="/taha-logo.png"
                                    alt="TAHA"
                                    width={70}
                                    height={40}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="ml-auto hidden items-center xl:flex">
                            <nav className="flex items-center">
                                <Link
                                    href="/"
                                    onClick={() => setActiveMenu(null)}
                                    className="px-3 py-7 text-[13px] font-semibold text-taha"
                                >
                                    Home
                                </Link>

                                {menus.map((menu) => {
                                    const hasDropdown =
                                        !!menu.items?.length;

                                    if (!hasDropdown) {
                                        return (
                                            <Link
                                                key={menu.label}
                                                href={menu.href || "#"}
                                                onClick={() =>
                                                    setActiveMenu(null)
                                                }
                                                className="px-3 py-7 text-[13px] font-semibold text-neutral-700 transition-colors hover:text-taha"
                                            >
                                                {menu.label}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <div
                                            key={menu.label}
                                            className="relative"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    toggleDesktopMenu(
                                                        menu.label,
                                                    )
                                                }
                                                aria-expanded={
                                                    activeMenu ===
                                                    menu.label
                                                }
                                                aria-haspopup="true"
                                                className={`flex items-center gap-1 px-3 py-7 text-[13px] font-semibold transition-colors ${
                                                    activeMenu ===
                                                    menu.label
                                                        ? "text-taha"
                                                        : "text-neutral-700 hover:text-taha"
                                                }`}
                                            >
                                                {menu.label}

                                                <ChevronDown
                                                    size={14}
                                                    className={`transition-transform duration-200 ${
                                                        activeMenu ===
                                                        menu.label
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                    );
                                })}
                            </nav>

                            {/* Desktop Actions */}
                            <div className="ml-3 flex items-center gap-2 border-l border-neutral-200 pl-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearchOpen(
                                            (current) => !current,
                                        )
                                    }
                                    className="flex h-10 w-10 items-center justify-center text-neutral-600 transition-colors hover:text-taha"
                                    aria-label="Search"
                                >
                                    <Search size={19} />
                                </button>

                                <Link
                                    href="/membership"
                                    onClick={closeNavigation}
                                    className="flex h-11 items-center gap-2 bg-taha-dark px-5 text-[13px] font-bold text-white transition-colors hover:bg-taha-hover"
                                >
                                    Join TAHA
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-2 xl:hidden">
                            <button
                                type="button"
                                onClick={() =>
                                    setSearchOpen(
                                        (current) => !current,
                                    )
                                }
                                className="flex h-10 w-10 items-center justify-center text-neutral-700 transition-colors hover:text-taha"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setMobileOpen(true)}
                                className="flex h-10 w-10 items-center justify-center text-neutral-700 transition-colors hover:text-taha"
                                aria-label="Open navigation"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search */}
                {searchOpen && (
                    <div className="absolute left-0 right-0 top-full z-40 border-b border-neutral-200 bg-taha-light shadow-lg">
                        <form
                            onSubmit={submitSearch}
                            className="mx-auto max-w-4xl px-6 py-5"
                        >
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Search
                                        size={20}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                                    />

                                    <input
                                        autoFocus
                                        type="search"
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(event.target.value)
                                        }
                                        placeholder="Search TAHA..."
                                        className="h-14 w-full border border-neutral-300 pl-12 pr-5 text-sm text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-taha focus:ring-1 focus:ring-taha"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex h-14 shrink-0 items-center gap-2 bg-taha-dark px-6 text-sm font-bold text-white transition-colors hover:bg-taha"
                                >
                                    <Search size={18} />
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Desktop Mega Menu */}
                {activeMenu && (
                    <div className="absolute left-0 right-0 top-full border-t border-neutral-100 bg-taha-light shadow-[0_15px_40px_rgba(0,0,0,0.10)]">
                        <div className="mx-auto max-w-[1400px] px-6 py-8">
                            {(() => {
                                const menu = menus.find(
                                    (item) =>
                                        item.label === activeMenu,
                                );

                                if (!menu) return null;

                                return (
                                    <div
                                        className={
                                            menu.featured
                                                ? "grid grid-cols-[1fr_280px] gap-12"
                                                : "block"
                                        }
                                    >
                                        <div>
                                            <div className="grid grid-cols-2 gap-x-10 gap-y-2 lg:grid-cols-3">
                                                {menu.items?.map(
                                                    (item) => (
                                                        <Link
                                                            key={
                                                                item.title
                                                            }
                                                            href={
                                                                item.href
                                                            }
                                                            onClick={
                                                                closeNavigation
                                                            }
                                                            className="group border-b border-neutral-100 py-4"
                                                        >
                                                            <div className="flex items-center justify-between gap-3">
                                                                <div>
                                                                    <div className="text-[14px] font-semibold text-neutral-800 transition-colors group-hover:text-taha">
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </div>

                                                                    {item.description && (
                                                                        <div className="mt-1 text-xs text-neutral-500">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                <ArrowRight
                                                                    size={
                                                                        15
                                                                    }
                                                                    className="shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-taha"
                                                                />
                                                            </div>
                                                        </Link>
                                                    ),
                                                )}
                                            </div>

                                            <div className="mt-6">
                                                <Link
                                                    href="#"
                                                    onClick={
                                                        closeNavigation
                                                    }
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-taha transition-colors hover:text-taha-dark"
                                                >
                                                    View all{" "}
                                                    {menu.label.toLowerCase()}
                                                    <ArrowRight
                                                        size={16}
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        {menu.featured && (
                                            <div className="self-start rounded-lg bg-white p-7">
                                                <div className="text-xs font-bold uppercase tracking-[0.15em] text-taha">
                                                    Featured
                                                </div>

                                                <h3 className="mt-4 text-2xl font-bold text-taha-dark">
                                                    {
                                                        menu.featured
                                                            .title
                                                    }
                                                </h3>

                                                <p className="mt-3 text-sm leading-6 text-neutral-600">
                                                    {
                                                        menu.featured
                                                            .description
                                                    }
                                                </p>

                                                <Link
                                                    href={
                                                        menu.featured
                                                            .href
                                                    }
                                                    onClick={
                                                        closeNavigation
                                                    }
                                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-taha transition-colors hover:text-taha-hover"
                                                >
                                                    Explore
                                                    <ArrowRight
                                                        size={16}
                                                    />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                )}
            </header>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 z-[100] xl:hidden ${
                    mobileOpen
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                }`}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
                        mobileOpen
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                    onClick={closeNavigation}
                />

                {/* Mobile Panel */}
                <aside
                    className={`absolute bottom-0 left-0 top-0 w-[min(420px,92vw)] overflow-y-auto bg-taha-light shadow-2xl transition-transform duration-300 ease-out ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }`}
                >
                    {/* Mobile Header */}
                    <div className="flex h-[78px] items-center justify-between border-b border-neutral-200 px-6">
                        <Link
                            href="/"
                            onClick={closeNavigation}
                            className="flex shrink-0 items-center"
                        >
                            <div className="flex items-center justify-center  p-2">
                                <Image
                                    src="/taha-logo.png"
                                    alt="TAHA"
                                    loading="lazy"
                                    width={70}
                                    height={60}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </Link>

                        <button
                            type="button"
                            onClick={closeNavigation}
                            className="flex h-10 w-10 items-center justify-center text-neutral-700 transition-colors hover:text-taha"
                            aria-label="Close navigation"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="p-6">
                        <Link
                            href="/"
                            onClick={closeNavigation}
                            className="block border-b border-neutral-200 py-4 font-semibold text-taha"
                        >
                            Home
                        </Link>

                        {menus.map((menu) => {
                            const hasItems =
                                !!menu.items?.length;

                            if (!hasItems) {
                                return (
                                    <Link
                                        key={menu.label}
                                        href={menu.href || "#"}
                                        onClick={closeNavigation}
                                        className="block border-b border-neutral-200 py-4 font-semibold text-neutral-800 transition-colors hover:text-taha"
                                    >
                                        {menu.label}
                                    </Link>
                                );
                            }

                            const open =
                                mobileMenu === menu.label;

                            return (
                                <div
                                    key={menu.label}
                                    className="border-b border-neutral-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMobileMenu(
                                                menu.label,
                                            )
                                        }
                                        className="flex w-full items-center justify-between py-4 text-left font-semibold text-neutral-800"
                                        aria-expanded={open}
                                    >
                                        {menu.label}

                                        <ChevronDown
                                            size={17}
                                            className={`text-neutral-500 transition-transform duration-200 ${
                                                open
                                                    ? "rotate-180 text-taha"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {/* Mobile Submenu */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                            open
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <div className="pb-3 pl-3">
                                                {menu.items?.map(
                                                    (item) => (
                                                        <Link
                                                            key={
                                                                item.title
                                                            }
                                                            href={
                                                                item.href
                                                            }
                                                            onClick={
                                                                closeNavigation
                                                            }
                                                            className="flex items-center justify-between py-3 text-sm text-neutral-600 transition-colors hover:text-taha"
                                                        >
                                                            <span>
                                                                {
                                                                    item.title
                                                                }
                                                            </span>

                                                            <ArrowRight
                                                                size={
                                                                    14
                                                                }
                                                            />
                                                        </Link>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CTA */}
                        <div className="pt-6">
                            <Link
                                href="/membership"
                                onClick={closeNavigation}
                                className="flex items-center justify-center gap-2 bg-taha py-4 font-bold text-white transition-colors hover:bg-taha-hover"
                            >
                                Join TAHA
                                <ArrowRight size={17} />
                            </Link>
                        </div>

                        {/* Contact */}
                        <div className="mt-8 hidden border-t border-neutral-200 pt-6 sm:block">
                            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                                Contact
                            </div>

                            <a
                                href="mailto:info@taha.or.tz"
                                className="mt-4 flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-taha"
                            >
                                <Mail size={16} />
                                info@taha.or.tz
                            </a>

                            <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
                                <MapPin size={16} />
                                Arusha, Tanzania
                            </div>

                            <div className="mt-6 flex gap-5 text-sm font-semibold text-neutral-500">
                                <a
                                    href="#"
                                    className="transition-colors hover:text-taha"
                                >
                                    Facebook
                                </a>

                                <a
                                    href="#"
                                    className="transition-colors hover:text-taha"
                                >
                                    Instagram
                                </a>

                                <a
                                    href="#"
                                    className="transition-colors hover:text-taha"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Mobile Bottom Navigation */}
            <nav
                className={`fixed bottom-0 left-0 right-0 z-[90] px-3 pb-4 xl:hidden ${
                    mobileOpen
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                }`}
            >
                <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/40 bg-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                    <div className="grid h-[68px] grid-cols-5">
                        <Link
                            href="/"
                            onClick={closeNavigation}
                            className="flex flex-col items-center justify-center gap-1 text-taha transition-colors"
                        >
                            <Home size={20} strokeWidth={2} />
                            <span className="text-[10px] font-semibold">
                    Home
                </span>
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeNavigation}
                            className="flex flex-col items-center justify-center gap-1 text-neutral-500 transition-colors hover:text-taha"
                        >
                            <Sprout size={20} strokeWidth={2} />
                            <span className="text-[10px] font-semibold">
                    About
                </span>
                        </Link>

                        <Link
                            href="/markets"
                            onClick={closeNavigation}
                            className="flex flex-col items-center justify-center gap-1 text-neutral-500 transition-colors hover:text-taha"
                        >
                            <Search size={20} strokeWidth={2} />
                            <span className="text-[10px] font-semibold">
                    Markets
                </span>
                        </Link>

                        <Link
                            href="/projects"
                            onClick={closeNavigation}
                            className="flex flex-col items-center justify-center gap-1 text-neutral-500 transition-colors hover:text-taha"
                        >
                            <BriefcaseBusiness
                                size={20}
                                strokeWidth={2}
                            />
                            <span className="text-[10px] font-semibold">
                    Projects
                </span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(true)}
                            className="flex flex-col items-center justify-center gap-1 text-neutral-500 transition-colors hover:text-taha"
                            aria-label="Open more navigation"
                        >
                            <Menu size={20} strokeWidth={2} />
                            <span className="text-[10px] font-semibold">
                    More
                </span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}