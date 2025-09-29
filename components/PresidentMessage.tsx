"use client";

import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface PresidentMessageProps {
  message: string;
  name: string;
  title: string;
  image: string;
}

export default function PresidentMessage({
  message,
  name,
  title,
  image,
}: PresidentMessageProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <SectionHeader title="President's Message" />
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 flex-shrink-0">
          <Image
            src={image}
            alt={`${name}, ${title}`}
            fill
            className="rounded-full object-cover border-4 border-brand-100"
          />
        </div>
        <div className="flex-1">
          <blockquote className="text-gray-700 italic mb-4">
            "{message}"
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
