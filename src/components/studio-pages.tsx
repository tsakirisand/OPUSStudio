"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Code2, Compass, Globe2, Layers3, Paintbrush2, Search, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { DemoPreview } from "@/components/demo-preview";
import { SiteFooter, SiteNavbar } from "@/components/site-chrome";

const services = [
  { number: "01", title: "Web Design", icon: Paintbrush2, description: "Σχεδιάζουμε σύγχρονες ιστοσελίδες που εκφράζουν την ταυτότητα της επιχείρησής σου.", features: ["Custom UI/UX", "Responsive layouts", "Mobile-first design"] },
  { number: "02", title: "Web Development", icon: Code2, description: "Υλοποιούμε γρήγορες, λειτουργικές και αξιόπιστες ιστοσελίδες.", features: ["Modern technologies", "Clean architecture", "Performance optimization"] },
  { number: "03", title: "SEO Optimization", icon: Search, description: "Βοηθάμε τις μηχανές αναζήτησης να κατανοούν καλύτερα το περιεχόμενο της ιστοσελίδας σου.", features: ["On-page SEO", "Metadata", "Semantic structure"] },
  { number: "04", title: "Website Maintenance", icon: Wrench, description: "Υποστηρίζουμε την ιστοσελίδα σου με ενημερώσεις και τεχνική φροντίδα.", features: ["Content updates", "Technical improvements", "Optional ongoing support"] },
];

const steps = [
  ["01", "Γνωριμία", "Συζητάμε για την επιχείρηση, τους στόχους και το αποτέλεσμα που θέλεις."],
  ["02", "Σχεδιασμός", "Οργανώνουμε το περιεχόμενο και σχεδιάζουμε την κατάλληλη εμπειρία."],
  ["03", "Ανάπτυξη", "Υλοποιούμε την ιστοσελίδα με σύγχρονες τεχνολογίες και προσοχή στη λεπτομέρεια."],
  ["04", "Έλεγχος & Παράδοση", "Ελέγχουμε εμφάνιση και λειτουργία και προετοιμάζουμε το project για δημοσίευση."],
];

function PageIntro({ label, title, accent, description }: { label: string; title: string; accent: string; description: string }) {
  return <section className="subpage-intro container"><div className="section-label"><span />{label}</div><h1>{title}<br /><span>{accent}</span></h1><p>{description}</p></section>;
}

function PageLayout({ children }: { children: ReactNode }) {
  return <><SiteNavbar /><main className="subpage section-wrap">{children}</main><SiteFooter /></>;
}

export function ServicesPage() {
  return <PageLayout>
    <PageIntro label="WHAT WE DO" title="Ψηφιακές λύσεις," accent="σχεδιασμένες για σένα." description="Από την πρώτη ιδέα μέχρι την τελική υλοποίηση, φροντίζουμε κάθε σημείο επαφής της επιχείρησής σου online." />
    <section className="subpage-content container"><div className="service-grid subpage-service-grid">{services.map(({ number, title, icon: Icon, description, features }) => <article className="service-card" key={number}><div className="service-card-top"><span>{number} / 04</span><div className="service-icon"><Icon size={20} strokeWidth={1.6} /></div></div><h2>{title}</h2><p>{description}</p><ul>{features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul></article>)}</div></section>
    <section className="subpage-content container service-outcomes"><div className="service-outcomes-intro"><div className="section-label"><span />PROJECT HANDOFF</div><h2>Τι παίρνεις<br /><span>στο τέλος.</span></h2><p>Ορίζουμε από την αρχή τι περιλαμβάνει το έργο, ώστε να ξέρεις τι παραδίδεται και τι χρειάζεται για να ξεκινήσει η λειτουργία του.</p></div><div className="service-outcomes-list"><article><span>01</span><div><h3>Έτοιμη ιστοσελίδα</h3><p>Προσαρμοσμένη σε κινητό, tablet και υπολογιστή.</p></div></article><article><span>02</span><div><h3>Βασική βελτιστοποίηση</h3><p>Καθαρή δομή σελίδων και βασικά metadata.</p></div></article><article><span>03</span><div><h3>Παράδοση υλικού</h3><p>Οργανωμένα αρχεία και σύντομη καθοδήγηση για το επόμενο βήμα.</p></div></article></div></section>
    <section className="subpage-content container subpage-process"><div className="section-label"><span />OUR PROCESS</div><h2>Μια ξεκάθαρη διαδικασία,<br /><span>από την πρώτη συζήτηση μέχρι την παράδοση.</span></h2><div className="process-track">{steps.map(([number, title, description]) => <article className="process-step" key={number}><div className="step-marker"><span>{number}</span><i /></div><small>STEP {number}</small><h3>{title}</h3><p>{description}</p></article>)}</div><Link className="button button-primary" href="/contact">Συζήτησε το project σου <ArrowRight size={16} /></Link></section>
  </PageLayout>;
}

export function WorkPage() {
  return <PageLayout>
    <PageIntro label="STARTER & BUSINESS DEMOS" title="Δες τα πακέτα" accent="στην πράξη." description="Δύο πραγματικά demos, με καθαρή ένδειξη για το πακέτο που παρουσιάζει το καθένα." />
    <section className="subpage-content container"><div className="project-grid subpage-project-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.id}><div className="project-image"><DemoPreview theme={project.theme} /><div className="demo-label"><span />{project.package.toUpperCase()} PACKAGE</div></div><div className="project-meta"><div><span className="project-category">{project.category} · {project.package}</span><h2>{project.name}</h2></div><a href={project.demoUrl} target="_blank" rel="noreferrer">Open {project.package} Demo <ArrowUpRight size={15} /></a></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
    <section className="subpage-content container demo-focus"><div className="section-label"><span />WHAT TO LOOK FOR</div><h2>Δύο demos,<br /><span>δύο διαφορετικές ανάγκες.</span></h2><div className="demo-focus-grid"><article><span>STARTER / MÉRO</span><h3>Απλή παρουσία, ξεκάθαρη δράση.</h3><p>Παρατήρησε πώς μια μικρή επιχείρηση μπορεί να παρουσιάσει την ταυτότητα, τις βασικές πληροφορίες και την επόμενη ενέργεια του επισκέπτη σε μία συγκεντρωμένη εμπειρία.</p></article><article><span>BUSINESS / FORMA ATELIER</span><h3>Περισσότερος χώρος για το portfolio.</h3><p>Δες πώς μια επαγγελματική ομάδα μπορεί να οργανώσει υπηρεσίες, έργα και πληροφορίες στούντιο σε μια πιο αναλυτική παρουσίαση.</p></article></div></section>
    <section className="subpage-cta container"><p>Θέλεις μια ιστοσελίδα προσαρμοσμένη στη δική σου επιχείρηση;</p><Link className="button button-primary" href="/contact">Ας μιλήσουμε <ArrowRight size={16} /></Link></section>
  </PageLayout>;
}

const packages = [
  { id: "starter", number: "01 / STARTER", title: "Starter", price: "179€", icon: Globe2, description: "Η ιδανική λύση για μια επιχείρηση που θέλει να αποκτήσει σύγχρονη και επαγγελματική online παρουσία.", features: ["Ιστοσελίδα μίας σελίδας", "Responsive σχεδιασμός", "Χάρτης τοποθεσίας", "Βασικό SEO", "Στοιχεία επικοινωνίας", "1 κύκλος διορθώσεων"] },
  { id: "business", number: "02 / BUSINESS", title: "Business", price: "249€", icon: Layers3, description: "Μια ολοκληρωμένη ψηφιακή παρουσία για επιχειρήσεις που χρειάζονται περισσότερες σελίδες και δυνατότητες.", features: ["Έως 4 σελίδες", "Responsive σχεδιασμός", "Συλλογή φωτογραφιών", "Φόρμα επικοινωνίας*", "Βασικό SEO", "2 κύκλοι διορθώσεων"] },
];

export function PricingPage() {
  return <PageLayout>
    <PageIntro label="OUR PACKAGES" title="Η σωστή ιστοσελίδα," accent="στη σωστή τιμή." description="Διάλεξε το πακέτο που ταιριάζει στις ανάγκες της επιχείρησής σου." />
    <section className="subpage-content container"><div className="pricing-grid subpage-pricing-grid">{packages.map(({ id, number, title, price, icon: Icon, description, features }) => <article className={`price-card ${id === "business" ? "price-featured" : ""}`} key={id}>{id === "business" && <div className="featured-ribbon"><Sparkles size={13} /> ΠΙΟ ΟΛΟΚΛΗΡΩΜΕΝΗ ΕΠΙΛΟΓΗ</div>}<div className="price-top"><span>{number}</span><Icon size={18} /></div><h2>{title}</h2><p className="price-desc">{description}</p><div className="price-amount"><small>Από</small><strong>{price}</strong><span> / project</span></div><ul>{features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><Link className={`button ${id === "business" ? "button-primary" : "button-outline"}`} href={`/contact?package=${title}`}>Choose {title} <ArrowRight size={16} /></Link><Link className="price-demo-link" href={id === "starter" ? siteConfig.demoUrls.starter : siteConfig.demoUrls.business} target="_blank">See {id === "starter" ? "Méro Starter" : "FORMA Business"} Demo <ArrowUpRight size={14} /></Link></article>)}</div><p className="pricing-note"><ShieldCheck size={16} /> Οι τιμές είναι ενδεικτικές και ενδέχεται να διαφέρουν ανάλογα με τις απαιτήσεις του έργου. Domain, hosting και πρόσθετες υπηρεσίες συμφωνούνται ξεχωριστά. <span>* Η φόρμα επικοινωνίας ενεργοποιείται αφού ρυθμιστεί τρόπος υποβολής.</span></p></section>
    <section className="subpage-content container package-guide"><div className="section-label"><span />CHOOSE YOUR STARTING POINT</div><h2>Ποιο πακέτο ταιριάζει<br /><span>στη φάση της επιχείρησής σου;</span></h2><div className="package-guide-grid"><article><small>STARTER</small><h3>Ξεκίνα με τα απαραίτητα.</h3><p>Ταιριάζει όταν χρειάζεσαι μια δυνατή πρώτη online παρουσία και οι βασικές πληροφορίες χωρούν σε μία σελίδα.</p><Link href="/work">Δες το Méro demo <ArrowUpRight size={15} /></Link></article><article><small>BUSINESS</small><h3>Οργάνωσε περισσότερα.</h3><p>Επίλεξέ το όταν θέλεις να παρουσιάσεις διαφορετικές υπηρεσίες, έργα ή ενότητες με ξεχωριστή πλοήγηση.</p><Link href="/work">Δες το FORMA Atelier demo <ArrowUpRight size={15} /></Link></article></div></section>
  </PageLayout>;
}

function ContactForm() {
  const [packageChoice, setPackageChoice] = useState("");
  const [message, setMessage] = useState("");
  const emailReady = Boolean(siteConfig.email);

  useEffect(() => {
    const selectedPackage = new URLSearchParams(window.location.search).get("package");
    if (selectedPackage === "Starter" || selectedPackage === "Business") setPackageChoice(`${selectedPackage} Package`);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailReady) return;
    const form = new FormData(event.currentTarget);
    if (!form.get("privacy")) { setMessage("Χρειάζεται να αποδεχτείς την ενημέρωση απορρήτου για να συνεχίσεις."); return; }
    const name = String(form.get("name") ?? "");
    const reply = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const service = String(form.get("service") ?? "");
    const details = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Νέο αίτημα από ${name} — ${service}`);
    const body = encodeURIComponent(`Ονοματεπώνυμο: ${name}\nEmail: ${reply}\nΕπιχείρηση: ${company}\nΕνδιαφέρομαι για: ${service}\n\nΜήνυμα:\n${details}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-intro"><span>ΠΕΣ ΜΑΣ ΓΙΑ ΤΟ PROJECT ΣΟΥ</span><p>{emailReady ? "Συμπλήρωσε τα στοιχεία και θα ετοιμάσουμε ένα προσχέδιο email για εσένα." : "Η φόρμα θα ενεργοποιηθεί μόλις ρυθμιστεί η διεύθυνση επικοινωνίας."}</p></div>
    <fieldset disabled={!emailReady}>
      <div className="form-row"><label>Ονοματεπώνυμο<input required name="name" autoComplete="name" placeholder="Το όνομά σου" /></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label></div>
      <label>Όνομα επιχείρησης <span className="optional">ΠΡΟΑΙΡΕΤΙΚΟ</span><input name="company" autoComplete="organization" placeholder="Η επιχείρησή σου" /></label>
      <label>Ενδιαφέρομαι για<select name="service" value={packageChoice} onChange={(event) => setPackageChoice(event.target.value)}><option value="">Επίλεξε υπηρεσία</option><option>Starter Package</option><option>Business Package</option><option>Προσαρμοσμένη ιστοσελίδα</option><option>Άλλη υπηρεσία</option></select></label>
      <label>Μήνυμα<textarea required name="message" rows={4} placeholder="Πες μας λίγα λόγια για αυτό που έχεις στο μυαλό σου..." /></label>
      <label className="consent"><input type="checkbox" name="privacy" required /><span>Έχω διαβάσει την <Link href="/privacy">Πολιτική Απορρήτου</Link> και συναινώ στη χρήση των στοιχείων μου για την απάντηση στο αίτημά μου.</span></label>
      {emailReady && <><button className="button button-primary form-submit">Σύνταξη email <ArrowRight size={16} /></button><small className="form-footnote">Δεν αποθηκεύονται στοιχεία. Το email θα ανοίξει με προσυμπληρωμένο κείμενο.</small></>}
    </fieldset>
    {message && <p className="form-message" role="status">{message}</p>}
    {!emailReady && <p className="config-notice">Η φόρμα επικοινωνίας δεν είναι διαθέσιμη αυτή τη στιγμή.</p>}
  </form>;
}

export function ContactPage() {
  return <PageLayout>
    <PageIntro label="LET'S WORK TOGETHER" title="Έχεις μια ιδέα;" accent="Ας τη συζητήσουμε." description="Πες μας λίγα πράγματα για την επιχείρησή σου και θα συζητήσουμε πώς μπορούμε να βοηθήσουμε." />
    <section className="subpage-content container contact-prep"><div className="section-label"><span />BEFORE WE TALK</div><h2>Για να ξεκινήσουμε,<br /><span>σκέψου αυτά τα τέσσερα.</span></h2><div className="contact-prep-grid"><article><span>01</span><p>Τι κάνει η επιχείρησή σου και σε ποιους απευθύνεται;</p></article><article><span>02</span><p>Ποιος είναι ο βασικός στόχος της νέας ιστοσελίδας;</p></article><article><span>03</span><p>Έχεις λογότυπο, φωτογραφίες ή κείμενα που θέλεις να αξιοποιήσουμε;</p></article><article><span>04</span><p>Πότε θα ήθελες να είναι έτοιμο το project;</p></article></div></section>
    <section className="subpage-content container contact-grid subpage-contact-grid"><div className="contact-copy"><div className="contact-email"><span>EMAIL</span>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={15} /></a> : <p>Το email επικοινωνίας θα εμφανιστεί σύντομα.</p>}</div><div className="contact-note"><span className="contact-note-mark"><Compass size={18} /></span><span>Μια πρώτη συζήτηση είναι το καλύτερο σημείο εκκίνησης.</span></div><Link className="text-link" href="/work">Δες τα demos <ArrowRight size={16} /></Link></div><ContactForm /></section>
  </PageLayout>;
}
