import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const results = [
    {
        title: "About TAHA",
        description:
            "Learn about the Tanzania Horticultural Association, its mission, vision and role in developing Tanzania's horticultural industry.",
        href: "/about",
        category: "About",
    },
    {
        title: "Strategic Areas",
        description:
            "Explore TAHA's strategic areas including market access, production, policy advocacy, food safety and business development.",
        href: "/strategic-areas",
        category: "Our Work",
    },
    {
        title: "Membership",
        description:
            "Discover TAHA membership categories, benefits and opportunities to connect with Tanzania's horticultural network.",
        href: "/membership",
        category: "Membership",
    },
    {
        title: "Value Chains",
        description:
            "Explore horticultural value chains including flowers, vegetables, fruits, spices, herbs, roots, tubers and nuts.",
        href: "/value-chains",
        category: "Value Chains",
    },
];

type SearchPageProps = {
    searchParams: Promise<{
        query?: string;
    }>;
};

export default async function SearchPage({
                                             searchParams,
                                         }: SearchPageProps) {
    const params = await searchParams;
    const query = params.query?.trim() || "";

    const filteredResults = query
        ? results.filter((item) =>
            `${item.title} ${item.description} ${item.category}`
                .toLowerCase()
                .includes(query.toLowerCase()),
        )
        : [];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <main className="flex-1">
                <section className="border-b border-neutral-200 bg-taha-light">
                    <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-taha">
                                <span className="h-px w-8 bg-taha" />
                                Search
                            </div>

                            <h1 className="mt-5 text-4xl font-bold tracking-tight text-taha-dark sm:text-5xl">
                                Search TAHA
                            </h1>

                            <p className="mt-4 text-base leading-7 text-neutral-600">
                                Find information, services and resources from
                                the Tanzania Horticultural Association.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12">
                    <form
                        action="/search"
                        method="GET"
                        className="mx-auto flex max-w-3xl"
                    >
                        <div className="relative flex-1">
                            <Search
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                            />

                            <input
                                type="search"
                                name="query"
                                defaultValue={query}
                                placeholder="Search TAHA..."
                                className="h-14 w-full border border-neutral-300 pl-12 pr-4 text-sm text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-taha"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-14 bg-taha-dark px-7 text-sm font-bold text-white transition-colors hover:bg-taha"
                        >
                            Search
                        </button>
                    </form>

                    {query && (
                        <div className="mt-14">
                            <div className="mb-8 border-b border-neutral-200 pb-5">
                                <p className="text-sm text-neutral-500">
                                    Search results for
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-neutral-900">
                                    "{query}"
                                </h2>

                                <p className="mt-2 text-sm text-neutral-500">
                                    {filteredResults.length}{" "}
                                    {filteredResults.length === 1
                                        ? "result"
                                        : "results"}{" "}
                                    found
                                </p>
                            </div>

                            {filteredResults.length > 0 ? (
                                <div className="divide-y divide-neutral-200">
                                    {filteredResults.map((result) => (
                                        <Link
                                            key={result.href}
                                            href={result.href}
                                            className="group flex items-center justify-between gap-8 py-7"
                                        >
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-wider text-taha">
                                                    {result.category}
                                                </div>

                                                <h3 className="mt-2 text-xl font-bold text-neutral-900 transition-colors group-hover:text-taha">
                                                    {result.title}
                                                </h3>

                                                <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
                                                    {result.description}
                                                </p>
                                            </div>

                                            <ArrowRight
                                                size={19}
                                                className="shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-taha"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-16 text-center">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center border border-neutral-200">
                                        <Search
                                            size={22}
                                            className="text-neutral-400"
                                        />
                                    </div>

                                    <h2 className="mt-5 text-xl font-bold text-neutral-900">
                                        No results found
                                    </h2>

                                    <p className="mt-2 text-sm text-neutral-500">
                                        Try another search term.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-taha hover:text-taha-dark"
                                    >
                                        <ArrowLeft size={16} />
                                        Back to Home
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}