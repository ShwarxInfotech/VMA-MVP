import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import SectionHeader from "@/components/SectionHeader";
import EventCarousel from "@/components/EventCarousel";
import { upcomingEvents } from "@/data/events";
import { notices } from "@/data/notices";
import { presidentMessage, partners, contactInfo } from "@/data/site";
import PartnersMarquee from "@/components/PartnersMarquee";
import PresidentMessage from "@/components/PresidentMessage";

export default function HomePage() {
  const teaserList = upcomingEvents.slice(0, 3);
  return (
    <div>
      {/* Hero */}
      <HeroBanner
        title="Varachcha Medical Association (VMA)"
        subtitle="United for clinical excellence, continuous medical education, and community service."
        ctaText="Become a Member"
        ctaHref="/members"
      />

      {/* Featured Events Carousel */}
      <EventCarousel events={teaserList} />

      {/* Notices & President Message */}
      <div className="container-max py-16 grid lg:grid-cols-3 gap-8 mt-16">
        <aside className="lg:col-span-1">
          <SectionHeader title="Notices & Announcements" />
          <div className="bg-white rounded-lg shadow-sm border divide-y">
            {notices.map((n) => (
              <div key={n.id} className="p-4">
                <p className="text-sm text-gray-500">
                  {new Date(n.date).toLocaleDateString()}
                </p>
                <Link
                  href="/policy"
                  className="block mt-1 font-medium text-gray-900 hover:text-brand-700"
                >
                  {n.title}
                </Link>
              </div>
            ))}
          </div>
        </aside>
        <section className="lg:col-span-2">
          <SectionHeader title="President's Message" />
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <PresidentMessage
              name={presidentMessage.name}
              title={presidentMessage.role}
              message={presidentMessage.message}
              image={presidentMessage.photo}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              {presidentMessage.message}
            </p>
          </div>
        </section>
      </div>

      {/* Partners Marquee */}
      <div className="py-20">
        <div className="container-max mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600">
            We thank our supporting organizations
          </p>
        </div>
        <PartnersMarquee items={partners} />
      </div>
    </div>
  );
}
