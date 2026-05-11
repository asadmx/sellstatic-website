"use client";

type ImageItem = {
  title: string;
  tag: string;
  image: string;
};

const imageGallery: ImageItem[] = [
  {
    title: "Cinematic Launch",
    tag: "Image Ad",
    image: "/ads/ai-ad-cinematic-ai-cinematic-1778520282867.png",
  },
  {
    title: "Minimalist Concept",
    tag: "Image Ad",
    image: "/ads/ai-ad-minimalist-ai-minimalist-1778517857899.png",
  },
  {
    title: "Performance Creative",
    tag: "Image Ad",
    image: "/ads/WhatsApp Image 2026-05-11 at 12.50.46 PM.jpeg",
  },
  {
    title: "Feed Variation",
    tag: "Image Ad",
    image: "/ads/WhatsApp Image 2026-05-11 at 12.50.43 PM.jpeg",
  },
  {
    title: "Social Campaign",
    tag: "Image Ad",
    image: "/ads/WhatsApp Image 2026-05-11 at 12.49.54 PM.jpeg",
  },
  {
    title: "Brand Variant",
    tag: "Image Ad",
    image: "/ads/car.png",
  },
];

export function AdShowcase() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            Image Ad Gallery
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            Static campaigns, <span className="italic text-primary">ready to publish</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {imageGallery.map((item) => (
            <div
              key={item.image}
              className="group relative overflow-hidden rounded-2xl border bg-[#0b0b1d] shadow-lg transition-all hover:shadow-xl"
            >
              <div className="aspect-square w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {item.tag}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-wider opacity-80">SellStatic</div>
                <div className="mt-1 text-xl font-semibold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
