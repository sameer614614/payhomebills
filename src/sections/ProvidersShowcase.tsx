import { useState } from "react";
import CategoryTabs from "../components/CategoryTabs";
import ProviderCard from "../components/ProviderCard";
import { providerPlans, ProviderCategory } from "../data/providers";

const ProvidersShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProviderCategory>("internet");
  const plans = providerPlans[selectedCategory];

  return (
    <section className="mx-auto mt-24 max-w-6xl px-6" id="providers">
      <div className="space-y-4 text-center">
        <p className="badge mx-auto w-fit bg-white/10">Top Providers</p>
        <h2 className="section-title">Choose from America’s best networks</h2>
        <p className="section-subtitle">
          Compare featured offers from trusted providers across Internet, Home, TV, and Electric services — all with a 25%
          savings guarantee when you enroll with us.
        </p>
      </div>
      <div className="mt-12 space-y-10">
        <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <ProviderCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersShowcase;
