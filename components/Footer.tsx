export function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-10">

        <div className="font-serif text-xl">
          Wood Studio
        </div>

        <div className="text-sm text-neutral-500 leading-relaxed">
          Handcrafted wooden objects<br />
          Inspired by history, culture and nature
        </div>

        <div className="text-sm text-neutral-600 space-y-2">
          <div>Instagram</div>
          <div>Email</div>
          <div>Contact</div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 text-xs text-neutral-400">
        © {new Date().getFullYear()} Wood Studio. All rights reserved.
      </div>
    </footer>
  );
}