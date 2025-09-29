import { Event } from './types'

export const upcomingEvents: Event[] = [
  {
    id: 'e1',
    title: 'Annual Health Summit 2025',
    date: new Date(Date.now() + 1000*60*60*24*30).toISOString(),
    description: 'A gathering of healthcare professionals focusing on preventive medicine and community health.',
    sponsors: [
      { name: 'MediCare Labs', logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=80&h=80&fit=crop' },
      { name: 'Wellness Co' },
    ],
    image: 'https://images.unsplash.com/photo-1584467735871-331c176b1b1b?w=640&h=360&fit=crop'
  },
  {
    id: 'e2',
    title: 'CME: Advances in Cardiology',
    date: new Date(Date.now() + 1000*60*60*24*60).toISOString(),
    description: 'Latest updates on cardiovascular diagnostics and interventions.',
    sponsors: [
      { name: 'HeartCare Inc', logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=80&h=80&fit=crop' },
    ],
    image: 'https://images.unsplash.com/photo-1576765608590-b2a9b953a0f4?w=640&h=360&fit=crop'
  }
]

export const pastEvents: Event[] = [
  {
    id: 'p1',
    title: 'Community Health Camp 2024',
    date: '2024-08-20',
    description: 'Free health check-ups and awareness sessions for the local community.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=640&h=360&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1579154203451-0f9360978e38?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&h=450&fit=crop'
    ]
  },
  {
    id: 'p2',
    title: 'Mental Health Awareness Workshop',
    date: '2024-03-10',
    description: 'Interactive sessions with psychiatrists and counselors on mental well-being.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=640&h=360&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=450&fit=crop'
    ]
  }
]
