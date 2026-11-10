"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Coffee,
  Compass, Globe2, Layers3, MonitorSmartphone, Paintbrush2, Search,
  ShieldCheck, Sparkles, Wrench,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { DemoPreview } from "@/components/demo-preview";
import { SiteFooter, SiteNavbar } from "@/components/site-chrome";

const services = [
  { number: "01", title: "Web Design", icon: Paintbrush2, description: "Δημιουργούμε σύγχρονες και καλαίσθητες ιστοσελίδες που εκφράζουν τη μοναδική ταυτότητα της επιχείρησής σου.", features: ["Custom UI/UX", "Responsive layouts", "Mobile-first design"] },
  { number: "02", title: "Web Development", icon: Code2, description: "Μετατρέπουμε τον σχεδιασμό σε γρήγορες, λειτουργικές και αξιόπιστες ιστοσελίδες.", features: ["Modern technologies", "Clean architecture", "Performance optimization"] },
  { number: "03", title: "SEO Optimization", icon: Search, description: "Εφαρμόζουμε τις βασικές τεχνικές βελτιστοποίησης που βοηθούν τις μηχανές αναζήτησης να κατανοούν καλύτερα την ιστοσελίδα σου.", features: ["On-page SEO", "Metadata", "Semantic structure"] },
  { number: "04", title: "Website Maintenance", icon: Wrench, description: "Προσφέρουμε δυνατότητες τεχνικής υποστήριξης και ενημερώσεων, ώστε η ιστοσελίδα σου να παραμένει σύγχρονη.", features: ["Content updates", "Technical improvements", "Optional ongoing support"] },
];

const benefits = [
  ["01", "Σχεδιασμός με ταυτότητα", "Κάθε ιστοσελίδα σχεδιάζεται με βάση τον χαρακτήρα και τις ανάγκες της επιχείρησης."],
  ["02", "Άψογη εμπειρία σε κάθε συσκευή", "Responsive σχεδιασμός για κινητά, tablets και υπολογιστές."],
  ["03", "Ταχύτητα και λειτουργικότητα", "Προτεραιότητα στην απόδοση, στην ευχρηστία και στη σωστή τεχνική υλοποίηση."],
  ["04", "Διαφάνεια στη συνεργασία", "Ξεκάθαρα πακέτα, συμφωνημένες υπηρεσίες και οργανωμένη διαδικασία."],
];

const steps = [
  ["01", "Γνωριμία", "Συζητάμε για την επιχείρησή σου, τους στόχους σου και το αποτέλεσμα που θέλεις να πετύχεις."],
  ["02", "Σχεδιασμός", "Οργανώνουμε το περιεχόμενο και δημιουργούμε την κατάλληλη σχεδιαστική προσέγγιση."],
  ["03", "Ανάπτυξη", "Υλοποιούμε την ιστοσελίδα με σύγχρονες τεχνολογίες και προσοχή στη λεπτομέρεια."],
  ["04", "Έλεγχος & Παράδοση", "Ελέγχουμε την εμφάνιση και τη λειτουργικότητα και προετοιμάζουμε το project για δημοσίευση."],
];

const faqs = [
  ["Πόσο κοστίζει η κατασκευή μιας ιστοσελίδας;", "Τα πακέτα ξεκινούν από τις ενδεικτικές τιμές που παρουσιάζονται παρακάτω. Το τελικό κόστος εξαρτάται από το περιεχόμενο, τις λειτουργίες και τις ανάγκες του project."],
  ["Πόσος χρόνος χρειάζεται για την ολοκλήρωση;", "Ο χρόνος εξαρτάται από το εύρος του έργου και τη διαθεσιμότητα του υλικού. Συμφωνούμε ένα ρεαλιστικό χρονοδιάγραμμα πριν ξεκινήσει η υλοποίηση."],
  ["Θα λειτουργεί σωστά σε κινητά;", "Ναι. Ο σχεδιασμός προσαρμόζεται σε κινητά, tablets και υπολογιστές, με έλεγχο της εμπειρίας σε διαφορετικά μεγέθη οθόνης."],
  ["Περιλαμβάνονται domain και hosting;", "Domain και hosting δεν περιλαμβάνονται στις ενδεικτικές τιμές. Οι επιλογές και το σχετικό κόστος συζητούνται ξεχωριστά."],
  ["Μπορώ να ζητήσω αλλαγές;", "Κάθε πακέτο περιλαμβάνει συγκεκριμένους κύκλους διορθώσεων. Πρόσθετες αλλαγές ή νέες απαιτήσεις μπορούν να συμφωνηθούν ξεχωριστά."],
  ["Τι γίνεται μετά την παράδοση;", "Μετά την παράδοση, μπορούμε να συζητήσουμε υποστήριξη και ενημερώσεις ανάλογα με τις ανάγκες της ιστοσελίδας σου."],
  ["Μπορώ να αναβαθμίσω την ιστοσελίδα μου αργότερα;", "Βεβαίως. Η ιστοσελίδα μπορεί να εξελιχθεί με νέες σελίδες ή λειτουργίες, κατόπιν συνεννόησης για το εύρος και το κόστος."],
];

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionLabel({ children }: { children: ReactNode }) { return <div className="section-label"><span />{children}</div>; }

export default function HomeExperience() {
  const [packageChoice, setPackageChoice] = useState("");
  const [formError, setFormError] = useState("");
  const [formHint, setFormHint] = useState("");
  const emailReady = Boolean(siteConfig.email);
  const choose = (value: string) => { setPackageChoice(value); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setFormError(""); setFormHint("");
    if (!emailReady) { setFormError("Η επικοινωνία μέσω email δεν έχει ρυθμιστεί ακόμη. Δοκίμασε ξανά αργότερα."); return; }
    const form = new FormData(event.currentTarget);
    if (!form.get("privacy")) { setFormError("Χρειάζεται να αποδεχτείς την ενημέρωση απορρήτου για να συνεχίσεις."); return; }
    const name = String(form.get("name") ?? "");
    const reply = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Νέο αίτημα από ${name} — ${service}`);
    const body = encodeURIComponent(`Ονοματεπώνυμο: ${name}\nEmail: ${reply}\nΕπιχείρηση: ${company}\nΕνδιαφέρομαι για: ${service}\n\nΜήνυμα:\n${message}`);
    setFormHint("Ανοίγει το πρόγραμμα email σου με προσυμπληρωμένο μήνυμα. Η αποστολή θα ολοκληρωθεί από εσένα.");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return <>
    <SiteNavbar />
    <main>
      <section className="hero section-wrap" id="home"><div className="hero-grid container">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={rise} className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT CREATIVE DEVELOPMENT STUDIO</motion.div>
          <motion.h1 variants={rise}>Δίνουμε μορφή<br />στις <span>ιδέες σου.</span></motion.h1>
          <motion.p variants={rise}>Σχεδιάζουμε και αναπτύσσουμε σύγχρονες ψηφιακές εμπειρίες που αναδεικνύουν την ταυτότητα κάθε επιχείρησης.</motion.p>
          <motion.div variants={rise} className="hero-actions"><a className="button button-primary" href="#contact">Ξεκίνα το Project σου <ArrowRight size={17} /></a><a className="button button-quiet" href="#work">Ανακάλυψε τα Έργα μας <ArrowDown size={16} /></a></motion.div>
          <motion.div variants={rise} className="hero-footnote"><span className="status-dot" /> Σχεδιασμός με σκοπό. Ανάπτυξη με προσοχή.</motion.div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .28, ease: [0.22, 1, .36, 1] }}>
          <div className="hero-gridlines" />
          <div className="hero-window"><div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>OPUS / SELECTED CONCEPT</span><span className="window-live"><i /> STUDIO NOTES</span></div><div className="window-content"><div className="window-nav"><b>atelier<span>.</span></b><span>STUDIO&nbsp;&nbsp;&nbsp; WORK&nbsp;&nbsp;&nbsp; CONTACT</span><div>LET&apos;S TALK <ArrowUpRight size={12} /></div></div><div className="window-body"><div className="window-text"><small>DESIGN THAT SPEAKS</small><strong>Make room<br />for <i>better.</i></strong><p>Thoughtful digital experiences<br />for ambitious businesses.</p><span>EXPLORE THE STUDIO <ArrowRight size={12} /></span></div><div className="window-photo"><div className="photo-arch"><div /><span>FORM / 01</span></div></div></div><div className="window-footer"><span>INDEPENDENT CREATIVE STUDIO</span><span>ATHENS · GREECE</span></div></div></div>
          <span className="art-index">01 / CREATIVE DEVELOPMENT</span>
        </motion.div>
      </div><a className="scroll-note" href="#trust"><span>SCROLL TO EXPLORE</span><i><ArrowDown size={14} /></i></a></section>

      <section className="trust section-wrap" id="trust"><div className="container trust-inner"><Reveal className="trust-main"><SectionLabel>ΜΙΑ ΚΑΛΥΤΕΡΗ ONLINE ΠΑΡΟΥΣΙΑ</SectionLabel><h2>Κάθε επιχείρηση αξίζει μια ιστοσελίδα που την <span>εκπροσωπεί σωστά.</span></h2><p>Συνδυάζουμε σύγχρονο σχεδιασμό, λειτουργικότητα και προσοχή στη λεπτομέρεια, δημιουργώντας ψηφιακές εμπειρίες προσαρμοσμένες στις ανάγκες κάθε επιχείρησης.</p></Reveal><Reveal className="trust-values" delay={.12}><div><span>01</span><b><Paintbrush2 size={17} /> Σύγχρονος σχεδιασμός</b></div><div><span>02</span><b><MonitorSmartphone size={17} /> Mobile-first εμπειρία</b></div><div><span>03</span><b><Compass size={17} /> Ξεκάθαρη συνεργασία</b></div></Reveal></div></section>

      <section className="services section-wrap" id="services"><div className="container"><Reveal className="section-head"><SectionLabel>WHAT WE DO</SectionLabel><div className="section-head-row"><h2>Ψηφιακές λύσεις,<br /><span>σχεδιασμένες για σένα.</span></h2><p>Από την πρώτη ιδέα μέχρι την τελική υλοποίηση, φροντίζουμε κάθε σημείο επαφής της επιχείρησής σου online.</p></div></Reveal><div className="service-grid">{services.map(({ number, title, icon: Icon, description, features }, i) => <Reveal key={number} delay={i * .06}><article className="service-card"><div className="service-card-top"><span>{number} / 04</span><div className="service-icon"><Icon size={20} strokeWidth={1.6} /></div></div><h3>{title}</h3><p>{description}</p><ul>{features.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><a href="#contact" aria-label={`Μάθε περισσότερα για ${title}`}><ArrowUpRight size={17} /></a></article></Reveal>)}</div></div></section>

      <section className="portfolio section-wrap" id="work"><div className="container"><Reveal className="section-head"><SectionLabel>STARTER & BUSINESS DEMOS</SectionLabel><div className="section-head-row"><h2>Δες τα πακέτα<br /><span>στην πράξη.</span></h2><p>Δύο πραγματικά demos, με σαφή ένδειξη για το πακέτο που παρουσιάζει το καθένα.</p></div></Reveal><div className="project-grid">{projects.map((project, i) => <Reveal key={project.id} className={`project-card project-${i + 1}`} delay={i * .08}><article><div className="project-image"><DemoPreview theme={project.theme} /><div className="demo-label"><span /> {project.package.toUpperCase()} PACKAGE</div></div><div className="project-meta"><div><span className="project-category">{project.category} · {project.package}</span><h3>{project.name}</h3></div><a href={project.demoUrl} target="_blank" rel="noreferrer">Open {project.package} Demo <ArrowUpRight size={15} /></a></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div></div></section>

      <section className="why section-wrap"><div className="container why-grid"><Reveal className="why-intro"><SectionLabel>WHY OPUS</SectionLabel><h2>Δεν δημιουργούμε απλώς ιστοσελίδες.<br /><span>Δημιουργούμε την εικόνα της επιχείρησής σου online.</span></h2><p>Μια καλή ψηφιακή παρουσία ξεκινά από την κατανόηση της επιχείρησής σου και χτίζεται με φροντίδα, βήμα προς βήμα.</p><a className="text-link" href="#process">Γνώρισε τη διαδικασία <ArrowRight size={16} /></a></Reveal><div className="benefit-list">{benefits.map(([n, title, desc], i) => <Reveal key={n} delay={i * .05}><article className="benefit"><span className="benefit-number">{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="benefit-arrow" size={17} /></article></Reveal>)}</div></div></section>

      <section className="process section-wrap" id="process"><div className="container"><Reveal className="section-head process-head"><SectionLabel>OUR PROCESS</SectionLabel><div className="section-head-row"><h2>Μια ξεκάθαρη διαδικασία,<br /><span>από την πρώτη συζήτηση μέχρι την παράδοση.</span></h2><p>Ξέρεις τι ακολουθεί σε κάθε στάδιο και πού βρισκόμαστε μαζί.</p></div></Reveal><div className="process-track">{steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * .07}><article className="process-step"><div className="step-marker"><span>{n}</span><i /></div><small>STEP {n}</small><h3>{title}</h3><p>{desc}</p></article></Reveal>)}</div></div></section>

      <section className="pricing section-wrap" id="pricing"><div className="container"><Reveal className="section-head pricing-head"><SectionLabel>OUR PACKAGES</SectionLabel><div className="section-head-row"><h2>Η σωστή ιστοσελίδα,<br /><span>στη σωστή τιμή.</span></h2><p>Διάλεξε το πακέτο που ταιριάζει στις ανάγκες της επιχείρησής σου.</p></div></Reveal><div className="pricing-grid"><Reveal><article className="price-card"><div className="price-top"><span>01 / STARTER</span><Globe2 size={18} /></div><h3>Starter</h3><p className="price-desc">Η ιδανική λύση για μια επιχείρηση που θέλει να αποκτήσει μια σύγχρονη και επαγγελματική online παρουσία.</p><div className="price-amount"><small>Από</small><strong>179€</strong><span> / project</span></div><ul>{["Ιστοσελίδα μίας σελίδας", "Responsive σχεδιασμός", "Χάρτης τοποθεσίας", "Βασικό SEO", "Στοιχεία επικοινωνίας", "1 κύκλος διορθώσεων"].map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><button className="button button-outline" onClick={() => choose("Starter Package")}>Choose Starter <ArrowRight size={16} /></button><a className="price-demo-link" href={siteConfig.demoUrls.starter} target="_blank" rel="noreferrer">See Méro Starter Demo <ArrowUpRight size={14} /></a></article></Reveal><Reveal delay={.1}><article className="price-card price-featured"><div className="featured-ribbon"><Sparkles size={13} /> ΠΙΟ ΟΛΟΚΛΗΡΩΜΕΝΗ ΕΠΙΛΟΓΗ</div><div className="price-top"><span>02 / BUSINESS</span><Layers3 size={18} /></div><h3>Business</h3><p className="price-desc">Μια πιο ολοκληρωμένη ψηφιακή παρουσία για επιχειρήσεις που χρειάζονται περισσότερες σελίδες και δυνατότητες.</p><div className="price-amount"><small>Από</small><strong>249€</strong><span> / project</span></div><ul>{["Έως 4 σελίδες", "Responsive σχεδιασμός", "Συλλογή φωτογραφιών", "Φόρμα επικοινωνίας*", "Βασικό SEO", "2 κύκλοι διορθώσεων"].map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><button className="button button-primary" onClick={() => choose("Business Package")}>Choose Business <ArrowRight size={16} /></button><a className="price-demo-link" href={siteConfig.demoUrls.business} target="_blank" rel="noreferrer">See FORMA Business Demo <ArrowUpRight size={14} /></a></article></Reveal></div><p className="pricing-note"><ShieldCheck size={16} /> Οι τιμές είναι ενδεικτικές και ενδέχεται να διαφέρουν ανάλογα με τις απαιτήσεις του έργου. Domain, hosting και πρόσθετες υπηρεσίες συμφωνούνται ξεχωριστά. <span>* Η φόρμα επικοινωνίας ενεργοποιείται μόνο αφού ρυθμιστεί πραγματικός τρόπος υποβολής.</span></p></div></section>

      <section className="faq section-wrap" id="faq"><div className="container faq-grid"><Reveal className="faq-intro"><SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel><h2>Έχεις απορίες;<br /><span>Έχουμε απαντήσεις.</span></h2><p>Όσα χρειάζεται να γνωρίζεις πριν ξεκινήσουμε.</p><a href="#contact" className="text-link">Ρώτησέ μας κάτι άλλο <ArrowRight size={16} /></a></Reveal><div className="faq-list">{faqs.map(([q, a], i) => <Reveal key={q} delay={i * .025}><details className="faq-item"><summary><span><i>{String(i + 1).padStart(2, "0")}</i>{q}</span><ChevronDown size={18} /></summary><p>{a}</p></details></Reveal>)}</div></div></section>

      <section className="contact section-wrap" id="contact"><div className="container contact-grid"><Reveal className="contact-copy"><SectionLabel>LET&apos;S WORK TOGETHER</SectionLabel><h2>Έχεις μια ιδέα;<br /><span>Ας την κάνουμε πραγματικότητα.</span></h2><p>Πες μας λίγα πράγματα για την επιχείρησή σου και θα συζητήσουμε πώς μπορούμε να σε βοηθήσουμε.</p><div className="contact-email"><span>EMAIL</span>{emailReady ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={15} /></a> : <p>Το email επικοινωνίας θα εμφανιστεί σύντομα.</p>}</div><div className="contact-note"><span className="contact-note-mark"><Coffee size={18} /></span><span>Μια πρώτη συζήτηση είναι το καλύτερο σημείο εκκίνησης.</span></div></Reveal><Reveal delay={.12}><form className="contact-form" onSubmit={submit}>
        <div className="form-intro"><span>ΠΕΣ ΜΑΣ ΓΙΑ ΤΟ PROJECT ΣΟΥ</span><p>{emailReady ? "Συμπλήρωσε τα στοιχεία και θα ετοιμάσουμε ένα προσχέδιο email για εσένα." : "Η φόρμα θα ενεργοποιηθεί μόλις ρυθμιστεί η διεύθυνση επικοινωνίας."}</p></div>
        <fieldset disabled={!emailReady}>
        <div className="form-row"><label>Ονοματεπώνυμο<input required name="name" autoComplete="name" placeholder="Το όνομά σου" /></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label></div>
        <label>Όνομα επιχείρησης <span className="optional">ΠΡΟΑΙΡΕΤΙΚΟ</span><input name="company" autoComplete="organization" placeholder="Η επιχείρησή σου" /></label>
        <label>Ενδιαφέρομαι για<select name="service" value={packageChoice} onChange={(e) => setPackageChoice(e.target.value)}><option value="">Επίλεξε υπηρεσία</option><option>Starter Package</option><option>Business Package</option><option>Προσαρμοσμένη ιστοσελίδα</option><option>Άλλη υπηρεσία</option></select></label>
        <label>Μήνυμα<textarea required name="message" rows={4} placeholder="Πες μας λίγα λόγια για αυτό που έχεις στο μυαλό σου..." /></label>
        <label className="consent"><input type="checkbox" name="privacy" required /><span>Έχω διαβάσει την <a href="/privacy">Πολιτική Απορρήτου</a> και συναινώ στη χρήση των στοιχείων μου για την απάντηση στο αίτημά μου.</span></label>
        {emailReady && <><button className="button button-primary form-submit">Σύνταξη email <ArrowRight size={16} /></button><small className="form-footnote">Δεν αποθηκεύονται στοιχεία σε αυτόν τον ιστότοπο. Το email σου θα ανοίξει με προσυμπληρωμένο κείμενο.</small></>}
        </fieldset>
        {formError && <p className="form-message error" role="alert">{formError}</p>}{formHint && <p className="form-message" role="status">{formHint}</p>}
        {!emailReady && <p className="config-notice">{process.env.NODE_ENV === "development" ? <>Ρύθμισε το <code>NEXT_PUBLIC_CONTACT_EMAIL</code> στο περιβάλλον πριν ενεργοποιήσεις την επικοινωνία.</> : "Η φόρμα επικοινωνίας δεν είναι διαθέσιμη αυτή τη στιγμή."}</p>}
      </form></Reveal></div></section>
    </main>
    <SiteFooter />
  </>;
}
