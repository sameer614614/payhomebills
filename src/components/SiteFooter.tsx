import { CALL_NOW_NUMBER } from "../data/providers";

const footerLinks = [
  { label: "Internet", href: "#providers" },
  { label: "Home", href: "#providers" },
  { label: "TV & Cable", href: "#providers" },
  { label: "Electric", href: "#providers" },
  { label: "FAQs", href: "#faq" },
];

const SiteFooter = () => {
  return (
    <footer className="mt-32 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-display font-semibold text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/30 text-primary-100">
              PB
            </span>
            PayBillsWithUs
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            U.S.-based concierge saving you up to 25% every month on Internet, Home, TV, and Electric bills.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-slate-400">
          Call us at <a href={`tel:${CALL_NOW_NUMBER}`}>{CALL_NOW_NUMBER}</a>
          <p>© {new Date().getFullYear()} PayBillsWithUs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
