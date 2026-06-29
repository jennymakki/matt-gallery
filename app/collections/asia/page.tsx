export default function asiaPage() {
  return (
    <div>
      <section className="pt-32 pb-0 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-6">
            Asia
          </p>

          <h2 className="text-6xl font-serif mb-10">
            Objects shaped by ritual, balance and everyday grace.
          </h2>

          <p className="text-xl text-neutral-600 leading-relaxed">
            A collection shaped by ritual and discipline — where the table, the
            hand and the sword all meet in the same language of balance,
            precision and presence.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src="/chopsticks.png"
            alt="Handcrafted walnut chopsticks"
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="pb-32 pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">Walnut Chopsticks</h2>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed">
            Crafted from solid walnut, these chopsticks reinterpret a
            traditional dining utensil through natural material and precise
            handwork.
          </p>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed mt-8">
            Balanced and refined, each pair carries the grain of the wood
            through every movement — turning a simple gesture into a quiet
            ritual.
          </p>
        </div>
      </section>
    </div>
  );
}
