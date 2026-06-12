import { createFileRoute } from "@tanstack/react-router";
import heroTable from "@/assets/hero-table.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import qrScan from "@/assets/qr-scan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelian — The ritual of dining, perfectly timed" },
      { name: "description", content: "Pre-book your table, pre-order your meal, and scan to order at the table. Zero wait. 100% accuracy." },
      { property: "og:title", content: "Aurelian — The ritual of dining, perfectly timed" },
      { property: "og:description", content: "Pre-book, pre-order, and scan-to-order. Zero wait. 100% accuracy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-charcoal selection:bg-sepia/20">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-charcoal/5 bg-ivory/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="font-serif text-lg font-medium tracking-tight sm:text-xl">Aurelian</div>
          <div className="hidden space-x-8 text-sm font-medium md:flex">
            {["The Experience", "Menu", "Reservations"].map((label) => (
              <a key={label} href="#" className="group relative py-1 transition-colors hover:text-sepia">
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-sepia transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <button className="ring-charcoal bg-charcoal shrink-0 rounded-full px-4 py-2 text-xs font-medium text-ivory ring-1 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:px-5 sm:text-sm">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-24 sm:pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="z-10">
            <h1 className="animate-reveal font-serif text-4xl leading-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl lg:leading-none">
              The ritual of dining, <span className="italic text-sepia">perfectly timed.</span>
            </h1>
            <p className="animate-reveal delay-100 mt-6 max-w-[40ch] text-pretty text-base text-charcoal/70 sm:mt-8 sm:text-lg">
              Orchestrate your evening before you arrive. Pre-book your favorite table, select your course in advance, and scan to flow through service without interruption.
            </p>
            <div className="animate-reveal delay-200 mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <button className="ring-charcoal bg-charcoal rounded-full px-5 py-3 text-sm font-medium text-ivory ring-1 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-charcoal/10 sm:px-6">
                Reserve a Table
              </button>
              <button className="ring-charcoal/10 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-charcoal ring-1 transition-all hover:bg-charcoal/5 hover:ring-charcoal/30 sm:px-6">
                View Signature Menu
              </button>
            </div>
          </div>
          <div className="animate-reveal delay-300 relative aspect-[4/5] w-full overflow-hidden rounded-xl lg:aspect-square">
            <img
              src={heroTable}
              alt="A beautifully set fine-dining table with soft morning light"
              width={1200}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-linen py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Pre-Book Table", d: "Secure your preferred corner. Our floor plan is yours to navigate, ensuring the perfect view for your occasion." },
              { n: "02", t: "Pre-Order Food", d: "Browse the kitchen's daily arrivals and curate your meal in advance. We prepare for your arrival, not just your order." },
              { n: "03", t: "Scan at Table", d: "A discrete QR code at your setting allows for instant ordering, routed straight to the kitchen — table-tagged, error-free." },
            ].map((p) => (
              <div
                key={p.n}
                className="group flex flex-col rounded-2xl bg-ivory p-6 ring-1 ring-black/5 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-charcoal/5 hover:ring-sepia/20 sm:p-8"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-sepia/10 text-sepia transition-colors group-hover:bg-sepia group-hover:text-ivory">
                  <span className="text-xs font-semibold">{p.n}</span>
                </div>
                <h3 className="font-serif text-xl font-medium transition-colors group-hover:text-sepia sm:text-2xl">{p.t}</h3>
                <p className="mt-4 max-w-[35ch] text-pretty text-sm leading-relaxed text-charcoal/60">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Menu */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-sepia">Selected Offerings</span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-balance sm:text-4xl">Signature Menu</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              {[
                { name: "Cured Highland Venison", desc: "Juniper berry, smoked emulsion, pickled shallot", price: 28 },
                { name: "Roasted Salt-Marsh Lamb", desc: "Fermented honey, wild garlic, heritage carrots", price: 42 },
                { name: "Hand-Dived Scallops", desc: "Sea buckthorn, hazelnut, burnt butter", price: 34 },
                { name: "Heritage Tomato Tartine", desc: "Whipped ricotta, basil oil, aged balsamic", price: 22 },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative flex cursor-pointer items-start justify-between gap-4 border-b border-charcoal/5 pb-6 pt-2 transition-all hover:pl-4"
                >
                  <div className="absolute inset-y-0 left-0 -z-10 w-0 bg-linen transition-all duration-300 group-hover:w-full" />
                  <div className="min-w-0">
                    <h4 className="font-medium text-charcoal transition-colors group-hover:text-sepia">{item.name}</h4>
                    <p className="mt-1 text-sm text-charcoal/50">{item.desc}</p>
                  </div>
                  <span className="shrink-0 text-sm font-medium">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={signatureDish}
                alt="Artfully plated signature dish"
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-neutral-900 py-20 text-ivory sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <img
                src={qrScan}
                alt="Guest scanning a QR code at a beautifully set table"
                loading="lazy"
                width={1000}
                height={1200}
                className="aspect-[3/4] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-white/5"
              />
              <div className="animate-floatY absolute -right-8 -bottom-8 hidden h-48 w-48 rounded-2xl bg-sepia p-6 shadow-2xl lg:block">
                <div className="font-serif text-3xl text-charcoal">100%</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-charcoal/80">Order Accuracy Guaranteed</div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Elegance in the details.</h2>
              <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
                {[
                  { n: "01", t: "Digital Concierge", d: "Select your table and course via our intuitive booking engine. Your preferences are saved to your profile." },
                  { n: "02", t: "The Welcome", d: "Arrive to a table already set to your specifications. Your first course begins the moment you are ready." },
                  { n: "03", t: "Fluid Service", d: "Add a vintage or a second dessert with a simple scan. Zero wait time, zero miscommunication." },
                ].map((s) => (
                  <div key={s.n} className="group flex gap-4 sm:gap-6">
                    <span className="shrink-0 font-serif text-2xl italic text-sepia transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl">
                      {s.n}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-lg font-medium">{s.t}</h4>
                      <p className="mt-2 max-w-[35ch] text-pretty text-sm text-ivory/60">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + Stats */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <p className="font-serif text-xl italic leading-relaxed text-charcoal/80 text-pretty sm:text-2xl">
                "The first time I truly felt in control of the evening flow. No waiting for the bill, no errors in the order. Just pure hospitality."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-sepia/20" />
                <div>
                  <div className="text-sm font-medium">Julian Vane</div>
                  <div className="text-xs text-charcoal/50">Culinary Critic</div>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-charcoal/5 lg:h-full lg:w-px" />
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {[
                { v: "0%", l: "Order Errors" },
                { v: "15m", l: "Average Time Saved" },
                { v: "4.9", l: "Guest Satisfaction" },
                { v: "120+", l: "Partner Hotels" },
              ].map((s) => (
                <div key={s.l} className="group">
                  <div className="font-serif text-3xl transition-colors group-hover:text-sepia sm:text-4xl">{s.v}</div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-sepia">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Band */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-32">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-linen px-6 py-12 text-center ring-1 ring-black/5 transition-all duration-500 hover:ring-sepia/20 sm:gap-8 sm:px-12 sm:py-16 lg:flex-row lg:text-left">
          <div>
            <h2 className="font-serif text-2xl font-medium sm:text-3xl">Experience the future of dining.</h2>
            <p className="mt-2 text-charcoal/60">Reserve a table, pre-order your meal, or scan at your seat.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="ring-charcoal bg-charcoal rounded-full px-5 py-3 text-sm font-medium text-ivory ring-1 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-charcoal/10 sm:px-6">
              Book a Table
            </button>
            <button className="ring-charcoal/10 rounded-full bg-ivory px-5 py-3 text-sm font-medium text-charcoal ring-1 transition-all hover:scale-[1.02] hover:bg-white sm:px-6">
              Contact House
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal/5 bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-12">
            <div className="max-w-[30ch]">
              <div className="font-serif text-2xl font-medium">Aurelian</div>
              <p className="mt-4 text-sm text-charcoal/50 text-pretty">
                Elevating the hospitality experience through precision, timing, and digital intuition.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 sm:gap-20">
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-sepia">Explore</div>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li><a href="#" className="transition-colors hover:text-charcoal">Our Story</a></li>
                  <li><a href="#" className="transition-colors hover:text-charcoal">Partnership</a></li>
                  <li><a href="#" className="transition-colors hover:text-charcoal">Careers</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-sepia">Legal</div>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li><a href="#" className="transition-colors hover:text-charcoal">Privacy</a></li>
                  <li><a href="#" className="transition-colors hover:text-charcoal">Terms</a></li>
                  <li><a href="#" className="transition-colors hover:text-charcoal">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-2 border-t border-charcoal/5 pt-8 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/30 sm:mt-20 sm:flex-row sm:justify-between">
            <span>© 2024 Aurelian Hospitality Group</span>
            <span>Crafted for Distinguishable Tastes</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
