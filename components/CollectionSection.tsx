import { Reveal } from "./Reveal";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
};

export function CollectionSection({
  title,
  description,
  image,
  href,
  reverse = false,
}: Props) {
  return (
    <Reveal>
      <section className="py-1 bg-white">
        <div className="max-w-7xl py-20 mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-15 items-center">
            <div className={reverse ? "lg:order-1" : "lg:order-2"}>
              <div
                className={`max-w-md ${
                  reverse ? "lg:ml-auto lg:text-right" : ""
                }`}
              >
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-4">
                  Collection
                </p>

                <h2 className="text-5xl font-serif mb-6">{title}</h2>

                <p className="text-lg text-neutral-600 leading-relaxed mb-10">
                  {description}
                </p>

                <Link
                  href={href}
                  className="inline-block border border-black px-8 py-4 hover:bg-black hover:text-white transition"
                >
                  View collection →
                </Link>
              </div>
            </div>

            <div className={reverse ? "lg:order-2" : "lg:order-1"}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}