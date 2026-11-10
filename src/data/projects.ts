export type Project = {
  id: string;
  name: string;
  package: "Starter" | "Business";
  category: string;
  description: string;
  tags: string[];
  theme: "cafe" | "architecture";
  demoUrl: string;
};

export const projects: Project[] = [
  {
    id: "cafe",
    name: "Méro Café",
    package: "Starter",
    category: "Καφέ & Φιλοξενία",
    description: "Το Starter demo: μια ζεστή, ολοκληρωμένη online παρουσία για ένα σύγχρονο café.",
    tags: ["Starter", "Responsive", "Web design"],
    theme: "cafe",
    demoUrl: siteConfig.demoUrls.starter,
  },
  {
    id: "forma",
    name: "FORMA Atelier",
    package: "Business",
    category: "Αρχιτεκτονική & Interior Design",
    description: "Το Business demo: μια πολυσέλιδη παρουσίαση για αρχιτεκτονικό και interior design studio.",
    tags: ["Business", "Portfolio", "Web design"],
    theme: "architecture",
    demoUrl: siteConfig.demoUrls.business,
  },
];
import { siteConfig } from "@/config/site";

