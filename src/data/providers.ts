export type ProviderCategory = "internet" | "home" | "tv" | "electric";

export interface ProviderPlan {
  id: string;
  name: string;
  headline: string;
  price: string;
  perks: string[];
  savings: string;
  rating: number;
}

export interface CategoryConfig {
  id: ProviderCategory;
  label: string;
  description: string;
  gradient: string;
  icon: string;
}

export const CALL_NOW_NUMBER = "1-800-555-9999";

export const categories: CategoryConfig[] = [
  {
    id: "internet",
    label: "Internet Bills",
    description: "Gig-speed, fiber, and budget-friendly plans from top nationwide ISPs.",
    gradient: "from-sky-500/40 via-blue-500/10 to-sky-500/10",
    icon: "wifi",
  },
  {
    id: "home",
    label: "Home Services",
    description: "Smart security, maintenance bundles, and connected home perks.",
    gradient: "from-emerald-500/40 via-teal-500/10 to-emerald-500/10",
    icon: "home",
  },
  {
    id: "tv",
    label: "TV & Cable",
    description: "Premium channel packages and sports add-ons at a fraction of the price.",
    gradient: "from-violet-500/40 via-purple-500/10 to-violet-500/10",
    icon: "tv",
  },
  {
    id: "electric",
    label: "Electric Bills",
    description: "Lock-in low energy rates and renewable credits across deregulated markets.",
    gradient: "from-amber-500/40 via-yellow-500/10 to-amber-500/10",
    icon: "bolt",
  },
];

export const providerPlans: Record<ProviderCategory, ProviderPlan[]> = {
  internet: [
    {
      id: "comcast",
      name: "Xfinity",
      headline: "Gigabit Extra • Wi-Fi equipment included",
      price: "$74.99/mo",
      perks: ["1200 Mbps download", "Unlimited data upgrade", "Free Flex 4K streaming box"],
      savings: "Save $540 annually with auto-pay",
      rating: 4.8,
    },
    {
      id: "att",
      name: "AT&T Fiber",
      headline: "Fiber 1 Gig • Whole-Home Wi-Fi",
      price: "$80.00/mo",
      perks: ["Symmetrical 1 Gbps speeds", "Smart Home Manager app", "No annual contract"],
      savings: "25% off installation + $200 gift card",
      rating: 4.9,
    },
    {
      id: "verizon",
      name: "Verizon Fios",
      headline: "1 Gig Streaming Bundle",
      price: "$89.99/mo",
      perks: ["Disney+ & ESPN+ on us", "Router rental included", "Price guarantee for 4 years"],
      savings: "Waived setup fees + 25% loyalty credit",
      rating: 4.7,
    },
  ],
  home: [
    {
      id: "vivint",
      name: "Vivint Smart Home",
      headline: "Total Smart Security",
      price: "$59.99/mo",
      perks: ["24/7 monitoring", "Indoor & outdoor camera kit", "Professional installation"],
      savings: "3 free smart sensors + 25% equipment credit",
      rating: 4.6,
    },
    {
      id: "adt",
      name: "ADT Home",
      headline: "Advanced Home Protection",
      price: "$52.99/mo",
      perks: ["Security & automation app", "Google Nest integration", "Lifetime equipment warranty"],
      savings: "Free video doorbell + $200 Visa card",
      rating: 4.4,
    },
    {
      id: "frontdoor",
      name: "Frontdoor",
      headline: "Premium Home Maintenance",
      price: "$39.99/mo",
      perks: ["Same-day pro dispatch", "Unlimited virtual visits", "HVAC & appliance coverage"],
      savings: "First month free with 25% bundle",
      rating: 4.5,
    },
  ],
  tv: [
    {
      id: "directv",
      name: "DIRECTV",
      headline: "Choice Package + Sports Pack",
      price: "$84.99/mo",
      perks: ["105+ channels", "Regional sports networks", "NFL Sunday Ticket upgrade"],
      savings: "Save 25% on first-year price lock",
      rating: 4.6,
    },
    {
      id: "spectrum",
      name: "Spectrum TV",
      headline: "Spectrum Select + Streaming Apps",
      price: "$64.99/mo",
      perks: ["150+ HD channels", "Cloud DVR included", "No contracts"],
      savings: "Free HBO® Max for 12 months",
      rating: 4.3,
    },
    {
      id: "youtube-tv",
      name: "YouTube TV",
      headline: "Family Streaming Bundle",
      price: "$57.99/mo",
      perks: ["100+ live channels", "4K Plus add-on savings", "Unlimited DVR"],
      savings: "25% off base plan for 12 months",
      rating: 4.8,
    },
  ],
  electric: [
    {
      id: "reliant",
      name: "Reliant Energy",
      headline: "Secure Advantage 12",
      price: "$109/mo avg",
      perks: ["Fixed-rate protection", "100% renewable option", "Smart home thermostat"],
      savings: "$150 bill credit + 25% autopay savings",
      rating: 4.5,
    },
    {
      id: "green-mountain",
      name: "Green Mountain",
      headline: "Pollution Free e-Plus",
      price: "$102/mo avg",
      perks: ["Wind-powered energy", "Weekly usage insights", "Carbon offset rewards"],
      savings: "25% off kWh for first 6 months",
      rating: 4.7,
    },
    {
      id: "txu",
      name: "TXU Energy",
      headline: "Free Nights & Solar Days",
      price: "$115/mo avg",
      perks: ["Free overnight charging", "Solar credits", "App-based usage control"],
      savings: "Stack 25% off with loyalty bonus",
      rating: 4.4,
    },
  ],
};

export const faqs = [
  {
    question: "How does the 25% savings work?",
    answer:
      "We negotiate promotional pricing directly with providers. When you enroll through our concierge team, we apply the 25% savings to your monthly statement for the duration of the agreement.",
  },
  {
    question: "Can I keep my current provider?",
    answer:
      "Yes! In most cases we can optimize your existing plan, uncover hidden loyalty discounts, or bundle services so you can keep the provider you already trust while lowering the bill.",
  },
  {
    question: "Is there any cost to get started?",
    answer:
      "No upfront fees. You only pay your adjusted bill with the guaranteed savings after our agents lock in the new rate.",
  },
  {
    question: "What information do I need when I call?",
    answer:
      "Have a recent copy of your bill, your service address, and the account holder name ready so we can fast-track verification during the call.",
  },
];
