import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ImageGallery from "@/components/ImageGallery";
import { pastEvents } from "@/data/events";

export default function EventGalleryPage({
  params,
}: {
  params: { id: string };
}) {
  const event = pastEvents.find((e) => e.id === params.id);

  if (!event) {
    return (
      <div className="container-max py-12">
        <SectionHeader title="Event Not Found" />
        <p className="text-gray-600">
          We couldn't find the requested past event.
        </p>
        <div className="mt-6">
          <Link href="/events" className="btn btn-outline">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-max py-12">
      <SectionHeader
        title={event.title}
        subtitle={`Held on ${new Date(event.date).toLocaleDateString()}`}
      />
      {event.description && (
        <p className="text-gray-700 mb-6">{event.description}</p>
      )}
      <ImageGallery images={event.gallery ?? []} />
      <div className="mt-8">
        <Link href="/events" className="btn btn-outline">
          Back to Events
        </Link>
      </div>
    </div>
  );
}
