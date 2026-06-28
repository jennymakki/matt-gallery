export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="relative z-10 text-center px-8">

        <h1 className="text-6xl md:text-7xl font-serif leading-none mb-8">
          Wood that<br />
          tells stories.
        </h1>

        <p className="text-xl text-neutral-600 max-w-lg mx-auto leading-relaxed">
          Inspired by history, cultures and nature. Each piece is handcrafted with care, patience and respect for the material.
        </p>

      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-neutral-200 opacity-40 flex items-center justify-center">
          
          <span className="text-neutral-400 text-sm tracking-widest uppercase">
            Tree symbol
          </span>

        </div>
      </div>

    </section>
  );
} 