import type { Metadata } from "next";
import { PricingPage } from "@/components/studio-pages";

export const metadata: Metadata = { title: "Πακέτα", description: "Starter και Business πακέτα κατασκευής ιστοσελίδων από την OPUS Studio." };

export default function Page() { return <PricingPage />; }
