import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-20 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        <div className="font-serif text-2xl tracking-tight">
          Matt's Gallery
          </div>

        <div className="text-sm text-neutral-500 leading-relaxed">
          <Image
            src="/hero.png"
            alt="Tree"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        <div className="text-sm text-neutral-600 space-y-2">
          <a
            href="https://instagram.com/mattjordon88"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition"
         >
         Instagram
    </a>
</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 text-xs text-center text-neutral-600">
        © {new Date().getFullYear()} Matt's Gallery. All rights reserved.
      </div>
    </footer>
  );
}
