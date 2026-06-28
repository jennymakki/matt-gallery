import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[180vh] relative bg-white">

  <div className="sticky top-0 min-h-screen flex flex-col items-center">

    <div className="pt-32 text-center px-8 z-10">
      <h1 className="text-6xl md:text-7xl font-serif leading-none mb-8">
        Wood that
        <br />
        tells stories.
      </h1>

      <p className="text-xl text-neutral-700 max-w-lg mx-auto">
        Inspired by history, cultures and nature. Each piece is handcrafted with care, patience and respect for the material.
      </p>
    </div>

    <div className="relative w-full flex justify-center mt-5">
      <Image
        src="/hero.png"
        alt="Tree"
        width={700}
        height={1400}
        className="object-contain"
        priority
      />
    </div>

  </div>

</section>
  );
}