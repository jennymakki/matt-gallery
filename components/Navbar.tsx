"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <Image
              src="/logo.png"
              alt="Matt's Gallery logo"
              width={70}
              height={70}
              className="object-contain"
            />

            <span className="font-serif text-2xl tracking-tight">
              Matt's Gallery
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm tracking-wide text-neutral-700">
            <a href="#artifacts" className="hover:text-black transition">
              Artifacts
            </a>
            <a href="#asia" className="hover:text-black transition">
              Asia
            </a>
            <a href="#congo" className="hover:text-black transition">
              Congo
            </a>
            <a href="#jewellery" className="hover:text-black transition">
              Jewellery
            </a>
            <a href="#upcycled" className="hover:text-black transition">
              Upcycled
            </a>
            <a href="#viking" className="hover:text-black transition">
              Viking
            </a>
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
          <a onClick={() => setOpen(false)} href="#artifacts">
            Artifacts
          </a>
          <a onClick={() => setOpen(false)} href="#asia">
            Asia
          </a>
          <a onClick={() => setOpen(false)} href="#congo">
            Congo
          </a>
          <a onClick={() => setOpen(false)} href="#jewellery">
            Jewellery
          </a>
          <a onClick={() => setOpen(false)} href="#upcycled">
            Upcycled
          </a>
          <a onClick={() => setOpen(false)} href="#viking">
            Viking
          </a>
        </nav>

        <div className="absolute bottom-10 text-sm text-neutral-400">
          Matt's Gallery · Handcrafted Objects
        </div>
      </div>
    </>
  );
}
