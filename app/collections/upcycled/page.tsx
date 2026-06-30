export default function upcycledPage() {
  return (
    <div>
      <section className="pt-32 pb-0 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-6">
            Upcycled
          </p>

          <h2 className="text-5xl font-serif mb-10">
            Objects reassembled from what remains.
          </h2>

          <p className="text-xl px-3 text-neutral-600 leading-relaxed">
            A collection exploring reuse and transformation — where fragments of
            wood are joined into new forms, revealing beauty through
            recomposition rather than perfection.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <img
            src="/upcycled.png"
            alt="Upcycled wooden cutting board made from mixed wood pieces"
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="pb-32 pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">Upcycled Cutting Board</h2>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed">
            Crafted from assembled offcuts of different hardwoods, this cutting
            board brings together contrasting tones and grain structures in a
            single layered surface.
          </p>

          <p className="text-lg px-10 text-neutral-600 leading-relaxed mt-8">
            The fragments are pressed and joined into a unified form, where
            seams and transitions remain visible as part of the object’s
            identity rather than being hidden.
          </p>
        </div>
      </section>
      <section className="pt-10 pb-40 bg-white">
        <div className="max-w-2xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-6">
            Philosophy
          </p>

          <h2 className="text-5xl font-serif mb-8">Nothing is wasted.</h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Every offcut carries its own grain, colour and history. By bringing
            these fragments together, new objects emerge that celebrate
            resourcefulness, craftsmanship and the belief that beauty is often
            found in what remains.
          </p>
        </div>
      </section>
    </div>
  );
}
