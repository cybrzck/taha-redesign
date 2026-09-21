import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <main className="flex flex-1 items-center justify-center px-5 py-24 sm:px-8 lg:px-12">
                <div className="w-full max-w-2xl text-center">
                    <div className="text-[30px] font-bold leading-none tracking-[-0.08em] text-taha-dark sm:text-[50px]">
                        Page not Found
                    </div>

                    <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        We couldn't find the page you're looking for.
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-neutral-600">
                        The page may have moved, the link may be outdated, or
                        the address may have been entered incorrectly. Let's get
                        you back to the TAHA website.
                    </p>

                </div>
            </main>

            <Footer />
        </div>
    );
}