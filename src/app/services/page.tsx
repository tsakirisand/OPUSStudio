import type { Metadata } from "next";
import { ServicesPage } from "@/components/studio-pages";

export const metadata: Metadata = { title: "Υπηρεσίες", description: "Web design, development, SEO και υποστήριξη από την OPUS Studio." };

export default function Page() { return <ServicesPage />; }
