import SiteHeader from "./components/SiteHeader";
import Hero from "./sections/Hero";
import ProvidersShowcase from "./sections/ProvidersShowcase";
import CallToAction from "./sections/CallToAction";
import FAQAccordion from "./components/FAQAccordion";
import SiteFooter from "./components/SiteFooter";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <Hero />
        <ProvidersShowcase />
        <div id="cta">
          <CallToAction />
        </div>
        <FAQAccordion />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
