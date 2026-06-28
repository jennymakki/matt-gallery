"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-white/80 backdrop-blur border-neutral-200"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <div className="font-serif text-xl tracking-tight">
            Wood Studio
          </div>

          <nav className="hidden md:flex gap-8 text-sm tracking-wide text-neutral-700">
            <a href="#jewellery" className="hover:text-black transition">Jewellery</a>
            <a href="#viking" className="hover:text-black transition">Viking</a>
            <a href="#asia" className="hover:text-black transition">Asia</a>
            <a href="#congo" className="hover:text-black transition">Congo</a>
            <a href="#chess" className="hover:text-black transition">Chess</a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-sm tracking-wide text-neutral-700"
          >
            Menu
          </button>

        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-50 bg-white transition-all duration-500
          flex flex-col justify-center items-center
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >

        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-sm text-neutral-500"
        >
          Close
        </button>

        <nav className="flex flex-col items-center gap-8 text-2xl font-serif">
          <a onClick={() => setOpen(false)} href="#jewellery">
            Jewellery
          </a>
          <a onClick={() => setOpen(false)} href="#viking">
            Viking
          </a>
          <a onClick={() => setOpen(false)} href="#asia">
            Asia
          </a>
          <a onClick={() => setOpen(false)} href="#congo">
            Kongo
          </a>
          <a onClick={() => setOpen(false)} href="#chess">
            Chess
          </a>
        </nav>

        <div className="absolute bottom-10 text-sm text-neutral-400">
          Wood Studio · Handcrafted Objects
        </div>

      </div>
    </>
  );
}