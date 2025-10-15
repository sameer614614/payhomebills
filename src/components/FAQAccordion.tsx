import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/providers";
import { clsx } from "clsx";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto mt-24 max-w-4xl px-6" id="faq">
      <div className="space-y-4 text-center">
        <p className="badge mx-auto w-fit bg-white/10">FAQs</p>
        <h2 className="section-title">Everything you need to know</h2>
        <p className="section-subtitle">
          Quick answers about our concierge enrollment and the guaranteed 25% savings across all bill categories.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={faq.question} className="glass-panel overflow-hidden rounded-3xl">
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </div>
                <span
                  className={clsx(
                    "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 transition",
                    isOpen && "rotate-180 bg-primary-500/20 text-primary-100"
                  )}
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>
              <div
                className={clsx(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden px-6 pb-6 text-sm text-slate-200">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQAccordion;
