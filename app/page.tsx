import Hero from "@/components/Hero";
import { CollectionSection } from "@/components/CollectionSection";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />

      <section className="pt-32 bg-10 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-serif leading-none mb-8">
            A curated world of handcrafted stories
          </h2>

          <p className="text-xl text-neutral-700 max-w-lg mx-auto">
            {" "}
            Each collection explores material, culture and form — from ancient
            symbolism to modern craft.
          </p>
        </div>
      </section>

      <CollectionSection
        title="Artifacts"
        description="Handcrafted objects exploring play, ritual and form."
        image="/chess.png"
      />

      <CollectionSection
        title="Asia"
        description="Inspired by Asian design and symbolism."
        image="/asia.png"
        reverse
      />

      <CollectionSection
        title="Congo"
        description="Patterns and stories from Central Africa."
        image="/congo.png"
      />

      <CollectionSection
        title="Jewellery"
        description="Small objects with deep meaning."
        image="/jewellery.png"
        reverse
      />

      <CollectionSection
        title="Upcycled"
        description="Handcrafted objects created from carefully selected wood offcuts, giving each piece a second life."
        image="/upcycled.png"
      />

      <CollectionSection
        title="Viking"
        description="Nordic forms and ancient traditions."
        image="/viking.png"
        reverse
      />

      <About />
      <Footer />
    </main>
  );
}
