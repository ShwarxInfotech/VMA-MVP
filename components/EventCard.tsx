import Image from 'next/image'
import { Event } from '@/data/types'

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="card p-5 flex flex-col gap-4">
      <div className="relative w-full h-48 rounded-md overflow-hidden">
        <Image 
          src="/images/pretty-full-color-logo_1017-7177.jpg" 
          alt={event.title} 
          fill 
          className="object-cover" 
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-gray-700">{event.description}</p>
      </div>
      {event.sponsors && event.sponsors.length > 0 && (
        <div className="flex items-center gap-3 mt-2">
          {event.sponsors.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
              {s.logo && (
                <span className="relative w-6 h-6 inline-block overflow-hidden rounded-full ring-1 ring-gray-200">
                  <Image src={s.logo} alt={s.name} fill className="object-cover" />
                </span>
              )}
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
