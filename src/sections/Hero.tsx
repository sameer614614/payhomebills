import { CALL_NOW_NUMBER } from "../data/providers";
import { ArrowRight, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 sm:py-28 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <span className="badge w-fit bg-white/10 text-primary-200">
            Save 25% every month
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pay Your Monthly Bills the Smart Way
          </h1>
          <p className="max-w-xl text-lg text-slate-300 sm:text-xl">
            Unlock concierge-level savings on Internet, Home, TV, and Electric bills. Our experts negotiate your rate so you
            enjoy top providers with guaranteed 25% monthly savings.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${CALL_NOW_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400"
            >
              <PhoneCall className="h-5 w-5" />
              Call {CALL_NOW_NUMBER}
            </a>
            <a
              href="#providers"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-lg font-semibold text-white/80 transition hover:border-primary-400 hover:text-white"
            >
              See Providers
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 text-left text-sm text-slate-300 sm:text-base">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10">
              <p className="text-3xl font-semibold text-white">15k+</p>
              <p>Households enrolled nationwide with verified savings.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10">
              <p className="text-3xl font-semibold text-white">4.8/5</p>
              <p>Average satisfaction rating from families and small businesses.</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="glass-panel relative rounded-3xl p-8 shadow-2xl">
            <div className="absolute -top-16 right-6 hidden h-32 w-32 rounded-full bg-primary-500/30 blur-3xl md:block" />
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Concierge Enrollment</h2>
              <p className="text-slate-300">
                We compare leading carriers, bundle your services, and lock in exclusive 25% discounts in one quick call.
              </p>
              <ul className="space-y-4 text-sm text-slate-200">
                {[
                  "Internet, TV, home, and electric plans",
                  "Verified promos from Comcast, AT&T, Verizon, and more",
                  "Zero paperwork — just confirm and save",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-primary-400/30 bg-primary-500/10 p-6 text-sm text-primary-100">
                <p className="font-semibold text-white">Ready to start saving?</p>
                <p>Call now and have your latest bill handy. Our U.S.-based team takes care of the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
