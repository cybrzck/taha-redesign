import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "TAHA | Tanzania Horticultural Association",
        template: "%s | TAHA",
    },
    description:
        "Tanzania Horticultural Association (TAHA) is a private sector member-based organization working to strengthen the growth and competitiveness of Tanzania's horticultural industry.",
    keywords: [
        "TAHA",
        "Tanzania Horticultural Association",
        "Tanzania horticulture",
        "horticulture",
        "agriculture",
        "farmers",
        "Tanzania",
    ],
    authors: [
        {
            name: "Tanzania Horticultural Association, Izack M. (Developer)",
        },
    ],
    icons: {
        icon: "/taha-logo.png",
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body>{children}</body>
        </html>
    );
}