import type { Metadata } from "next";
import { WorkPage } from "@/components/studio-pages";

export const metadata: Metadata = { title: "Έργα & Demos", description: "Δες τα Starter και Business website demos της OPUS Studio." };

export default function Page() { return <WorkPage />; }
