"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import { upcomingEvents, pastEvents } from "@/data/events";
import Link from "next/link";

export default function EventsPage() {
  const [tab, setTab] = useState<"Upcoming" | "Past">("Upcoming");
  const data = tab === "Upcoming" ? upcomingEvents : pastEvents;
  return (
    <div className="container-max py-8">
      <SectionHeader
        title="Events"
        subtitle="Stay updated with our upcoming and past events"
      />
      <div className="flex gap-2 mb-6">
        {(["Upcoming", "Past"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`btn ${tab === t ? "btn-primary" : "btn-outline"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((ev) =>
          tab === "Past" ? (
            <Link
              key={ev.id}
              href={`/events/${ev.id}`}
              className="grid gap-3 group"
            >
              <EventCard event={ev} />
              <span className="text-sm text-brand-700 group-hover:underline">
                View Gallery →
              </span>
            </Link>
          ) : (
            <div key={ev.id} className="grid gap-3">
              <EventCard event={ev} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
