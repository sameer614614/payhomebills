import { CALL_NOW_NUMBER } from "../data/providers";
import { PhoneCall } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-6">
      <div className="glass-panel overflow-hidden rounded-4xl border border-primary-500/30 bg-gradient-to-br from-primary-500/30 via-primary-500/10 to-sky-500/10 p-10 shadow-2xl">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary-400/20 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4">
            <p className="badge bg-white/15 text-white">Toll-Free Concierge</p>
            <h2 className="section-title">Call us and start saving in minutes</h2>
            <p className="section-subtitle max-w-2xl">
              Speak with a U.S.-based specialist who compares providers, bundles your services, and locks in the 25% discount
              while you’re on the line.
            </p>
            <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              {[
                "Live plan optimization",
                "Exclusive loyalty promos",
                "Bundle bonuses",
                "No credit check required",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/30 text-xs font-semibold text-primary-100">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Call Toll-Free Now</p>
            <a
              href={`tel:${CALL_NOW_NUMBER}`}
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <PhoneCall className="h-5 w-5" />
              {CALL_NOW_NUMBER}
            </a>
            <p className="text-sm text-slate-300">
              Available Monday through Saturday, 8am – 8pm Central.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
