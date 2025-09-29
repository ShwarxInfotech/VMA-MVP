import Image from "next/image";

export default function PartnersMarquee({
  items,
}: {
  items: { name: string; logo: string }[];
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div className="flex gap-16 whitespace-nowrap animate-marquee will-change-transform">
        {loop.map((p, i) => (
          <div key={i} className="inline-flex items-center gap-1 px-2">
            <div className="relative w-40 h-36">
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
