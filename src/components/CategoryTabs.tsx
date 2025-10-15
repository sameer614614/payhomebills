import { categories, ProviderCategory } from "../data/providers";
import { Bolt, Home, Tv, Wifi } from "lucide-react";
import { clsx } from "clsx";

const icons = {
  wifi: Wifi,
  home: Home,
  tv: Tv,
  bolt: Bolt,
};

interface CategoryTabsProps {
  selected: ProviderCategory;
  onSelect: (category: ProviderCategory) => void;
}

const CategoryTabs = ({ selected, onSelect }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => {
        const Icon = icons[category.icon as keyof typeof icons];
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={clsx(
              "flex min-w-[200px] flex-1 items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-primary-400/60 hover:bg-white/10",
              selected === category.id && "border-primary-400/80 bg-primary-500/10 shadow-lg shadow-primary-500/20"
            )}
          >
            <span className="mt-1 inline-flex rounded-full bg-primary-500/20 p-2 text-primary-200">
              <Icon className="h-5 w-5" />
            </span>
            <span className="space-y-1">
              <span className="block font-semibold text-white">{category.label}</span>
              <span className="text-sm text-slate-300">{category.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
