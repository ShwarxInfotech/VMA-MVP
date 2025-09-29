"use client";

import { useState } from 'react';
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

export default function PartnersMarquee({ items }: { items: Partner[] }) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const loop = [...items, ...items];
  
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="overflow-hidden py-2">
      <div className="flex gap-16 whitespace-nowrap animate-marquee will-change-transform">
        {loop.map((p, i) => (
          <div key={i} className="inline-flex items-center justify-center px-2">
            <div className="relative w-40 h-36 flex items-center justify-center">
              {imageErrors[i] ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                  <span className="text-gray-400 text-sm text-center">{p.name}</span>
                </div>
              ) : (
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                  onError={() => handleImageError(i)}
                  unoptimized={p.logo.endsWith('.svg')} // Disable optimization for SVG files
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
