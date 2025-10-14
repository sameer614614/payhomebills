import { Star } from "lucide-react";
import { CALL_NOW_NUMBER } from "../data/providers";
import type { ProviderPlan } from "../data/providers";

interface ProviderCardProps {
  plan: ProviderPlan;
}

const ProviderCard = ({ plan }: ProviderCardProps) => {
  return (
    <article className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20 text-lg font-semibold text-primary-100">
              {plan.name.slice(0, 2)}
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="text-sm text-slate-300">{plan.headline}</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-primary-100">
            <Star className="h-4 w-4 fill-current" />
            {plan.rating.toFixed(1)}
          </div>
        </div>
        <div className="rounded-2xl border border-primary-500/20 bg-primary-500/10 p-4">
          <p className="text-3xl font-semibold text-white">{plan.price}</p>
          <p className="text-sm text-primary-100">{plan.savings}</p>
        </div>
        <ul className="space-y-3 text-sm text-slate-200">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-300" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={`tel:${CALL_NOW_NUMBER}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-500/80"
      >
        Lock in 25% Off
      </a>
    </article>
  );
};

export default ProviderCard;
