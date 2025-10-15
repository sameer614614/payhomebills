import { CALL_NOW_NUMBER } from "../data/providers";
import { PhoneCall } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-display font-semibold text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/20 text-primary-100">
            PB
          </span>
          PayBillsWithUs
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#providers" className="hover:text-white">
            Providers
          </a>
          <a href="#faq" className="hover:text-white">
            FAQs
          </a>
          <a href="#cta" className="hover:text-white">
            Call Now
          </a>
        </nav>
        <a
          href={`tel:${CALL_NOW_NUMBER}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-400"
        >
          <PhoneCall className="h-4 w-4" />
          {CALL_NOW_NUMBER}
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
