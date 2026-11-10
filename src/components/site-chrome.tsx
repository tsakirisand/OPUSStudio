"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const nav = [
  ["Αρχική", "/"],
  ["Υπηρεσίες", "/services"],
  ["Έργα", "/work"],
  ["Πακέτα", "/pricing"],
  ["Επικοινωνία", "/contact"],
] as const;

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="nav-wrap container">
      <Link className="wordmark" href="/" aria-label="OPUS Studio, αρχική" onClick={close}>
        <span className="logo-word">OPUS<sup>®</sup></span>
        <span className="logo-descriptor">CREATIVE<br />DEVELOPMENT STUDIO</span>
      </Link>
      <nav className="desktop-nav" aria-label="Κύρια πλοήγηση">
        {nav.map(([label, href]) => <Link className={isActive(href) ? "active" : ""} href={href} key={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/contact">Ζήτησε Προσφορά <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Κύρια πλοήγηση">
      {nav.map(([label, href]) => <Link href={href} key={href} aria-current={isActive(href) ? "page" : undefined} onClick={close}>{label}<ArrowUpRight size={16} /></Link>)}
      <Link className="mobile-cta" href="/contact" onClick={close}>Ζήτησε Προσφορά <ArrowRight size={16} /></Link>
    </nav>}
  </header>;
}

export function SiteFooter() {
  const emailReady = Boolean(siteConfig.email);
  return <footer className="footer"><div className="container">
    <div className="footer-main">
      <div className="footer-brand"><Link className="wordmark footer-logo" href="/" aria-label="OPUS Studio, αρχική"><span className="logo-word">OPUS<sup>®</sup></span><span className="logo-descriptor">CREATIVE<br />DEVELOPMENT STUDIO</span></Link><p>Σύγχρονες ψηφιακές εμπειρίες για επιχειρήσεις που θέλουν να ξεχωρίζουν.</p><Link className="footer-contact-link" href="/contact">Ας μιλήσουμε <ArrowUpRight size={15} /></Link></div>
      <div className="footer-col"><span>ΠΛΟΗΓΗΣΗ</span>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
      <div className="footer-col"><span>ΥΠΗΡΕΣΙΕΣ</span><Link href="/services">Web Design</Link><Link href="/services">Web Development</Link><Link href="/services">SEO</Link><Link href="/services">Maintenance</Link></div>
      <div className="footer-col"><span>ΕΠΙΚΟΙΝΩΝΙΑ</span>{emailReady ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <span className="footer-muted">Email υπό ρύθμιση</span>}<Link href="/privacy">Πολιτική Απορρήτου</Link>{siteConfig.socialLinks.instagram && <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}{siteConfig.socialLinks.linkedin && <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} OPUS Studio. Με επιφύλαξη παντός δικαιώματος.</span><Link href="/">Αρχική ↑</Link></div>
    <div className="footer-wordmark" aria-hidden="true">OPUS</div>
  </div></footer>;
}
