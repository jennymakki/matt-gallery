export default function artifactsPage() {
  return (
    <div>
      <section className="pt-32 pb-0 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-6">
            Artifacts
          </p>

          <h2 className="text-6xl font-serif mb-10">
            Objects shaped by craft, play and tradition.
          </h2>

          <p className="text-xl text-neutral-600 leading-relaxed">
            Every piece in the Artifacts collection is handmade in wood,
            inspired by timeless games, ancient rituals and the beauty of
            craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <img
            src="/chess.png"
            alt="Handcrafted chess set"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="pb-24 pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">Chess Set</h2>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed">
            A modern interpretation of a timeless game. Each piece is
            hand-carved from solid hardwood — walnut for the dark army and birch
            for the light — allowing the natural character of every piece of
            wood to shine through.
          </p>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed mt-8">
            The board is crafted from matching hardwoods, framed by solid pine
            and finished with a smooth resin surface that highlights the beauty
            of the grain while creating a refined playing experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <img
            src="/dice.png"
            alt="Handcrafted walnut dice"
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="pb-32 pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">Walnut Dice</h2>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed">
            Handmade from solid walnut, these dice celebrate the beauty of
            natural materials. Carefully shaped and finished by hand, each die
            reveals its own unique grain and character.
          </p>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed mt-8">
            Simple in form yet rich in detail, they transform a familiar object
            into a small artifact of craftsmanship—designed to be held, played
            with and appreciated for years to come.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <img
            src="/vessel.png"
            alt="Handcrafted wooden vessel"
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="pb-32 pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">The Vessel</h2>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed">
            Crafted in solid pine, The Vessel is designed to hold the objects of
            play — dice, pieces and small artifacts — gathering them into a
            single, quiet form.
          </p>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed mt-8">
            Simple in expression, it reflects the same philosophy as the objects
            it contains: honest materials, careful proportions and a sense of
            calm utility elevated into ritual.
          </p>
        </div>
      </section>
    </div>
  );
}
