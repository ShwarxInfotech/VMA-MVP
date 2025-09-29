"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/data/types";

export default function EventCarousel({ events }: { events: Event[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  if (!events.length) return null;

  const event = events[current];

  return (
    <div className="relative bg-gray-50 min-h-[500px] flex items-center">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 my-16">
          Events
        </h2>
        <div className="w-full grid md:grid-cols-2">
          <div className="relative h-[500px]">
            <Image
              src="/images/pretty-full-color-logo_1017-7177.jpg"
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {event.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {event.description} We welcome all clinicians to participate,
              share cases, and engage in peer learning. Certificates will be
              provided for eligible participants.
            </p>
            <div className="flex gap-4">
              <Link
                href="/events"
                className="btn btn-primary text-lg px-6 py-3"
              >
                Register Now
              </Link>
              <Link
                href="/events"
                className="btn btn-outline text-lg px-6 py-3"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-brand-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
