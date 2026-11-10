export function DemoPreview({ theme }: { theme: "cafe" | "architecture" }) {
  const title = theme === "cafe" ? "Méro" : "FORMA Atelier";
  return <div className={`project-preview preview-${theme}`} aria-label={`Ενδεικτική σχεδιαστική μακέτα ${title}`}>
    <div className="preview-browser"><span /><span /><span /><i>{theme === "cafe" ? "MÉRO · CAFÉ & BRUNCH" : "FORMA ATELIER · ARCHITECTURE"}</i></div>
    <div className="preview-site">
      <div className="preview-nav"><b>{title}</b><span>{theme === "cafe" ? "MENU · ABOUT · CONTACT" : "STUDIO · PROJECTS · CONTACT"}</span><small>{theme === "cafe" ? "BOOK A TABLE ↗" : "VIEW WORK ↗"}</small></div>
      <div className="preview-copy"><small>{theme === "cafe" ? "COFFEE · BRUNCH · GOOD MOMENTS" : "ARCHITECTURE · INTERIORS · OBJECTS"}</small><strong>{theme === "cafe" ? <>Μια μικρή<br />παύση στην πόλη.</> : <>Spaces made<br />to feel like home.</>}</strong><span>{theme === "cafe" ? "Καφές, brunch και όμορφες καθημερινές στιγμές." : "Αρχιτεκτονική με καθαρές γραμμές και διαχρονικό χαρακτήρα."}</span><em>{theme === "cafe" ? "DISCOVER MÉRO" : "EXPLORE PROJECTS"}&nbsp; ↗</em></div>
      <div className="preview-orb" />
      <div className="preview-bottom"><span>{theme === "cafe" ? "COFFEE · BRUNCH · EVERYDAY" : "RESIDENTIAL · HOSPITALITY · INTERIORS"}</span><span>ATHENS · GREECE</span></div>
    </div>
    <span className="preview-caption">{theme === "cafe" ? "MÉRO CAFÉ · STARTER DEMO" : "FORMA ATELIER · BUSINESS DEMO"}</span>
  </div>;
}
