"use client";

import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Error() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <main className="flex flex-1 items-center justify-center px-5 py-24 sm:px-8 lg:px-12">
                <div className="w-full max-w-2xl text-center">
                    <div className="text-sm font-bold uppercase tracking-[0.25em] text-taha">
                        Error
                    </div>

                    <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] text-taha-dark sm:text-6xl lg:text-7xl">
                        An error occurred
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-600">
                        We’re unable to complete your request right now.
                        Please try again or return to the TAHA website.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="inline-flex h-12 items-center gap-2 bg-taha-dark px-6 text-sm font-bold text-white transition-colors hover:bg-taha"
                        >
                            <RefreshCw size={17} />
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="inline-flex h-12 items-center gap-2 border border-neutral-300 px-6 text-sm font-bold text-neutral-700 transition-colors hover:border-taha hover:text-taha"
                        >
                            <ArrowLeft size={17} />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}