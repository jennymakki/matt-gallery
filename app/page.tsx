import Hero from "@/components/Hero";
import { CollectionSection } from "@/components/CollectionSection";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />

      <CollectionSection
        title="Jewellery"
        description="Small objects with deep meaning."
        image="/jewellery.jpg"
      />

      <CollectionSection
        title="Viking"
        description="Nordic forms and ancient traditions."
        image="/viking.jpg"
        reverse
      />

      <CollectionSection
        title="Asia"
        description="Inspired by Asian design and symbolism."
        image="/asia.jpg"
      />

      <CollectionSection
        title="Congo"
        description="Patterns and stories from Central Africa."
        image="/congo.jpg"
        reverse
      />

      <CollectionSection
        title="Chess"
        description="A handcrafted chess set where every piece is unique."
        image="/chess.jpg"
      />

      <About/>
      <Footer/>
    </main>
  );
}