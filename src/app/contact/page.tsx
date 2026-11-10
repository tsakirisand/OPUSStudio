import type { Metadata } from "next";
import { ContactPage } from "@/components/studio-pages";

export const metadata: Metadata = { title: "Επικοινωνία", description: "Επικοινώνησε με την OPUS Studio για το επόμενο website project σου." };

export default function Page() { return <ContactPage />; }
