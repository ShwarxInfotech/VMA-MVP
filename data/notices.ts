export interface Notice { id: string; title: string; date: string; link?: string }

export const notices: Notice[] = [
  { id: 'n1', title: 'VMA General Body Meeting scheduled on 20 Oct 2025 at 6:00 PM', date: '2025-10-05', link: '/events' },
  { id: 'n2', title: 'Call for nominations: Executive Committee 2025–26', date: '2025-10-01', link: '/executive' },
  { id: 'n3', title: 'CME credits available for upcoming Cardiology CME', date: '2025-09-30', link: '/events' },
  { id: 'n4', title: 'Membership renewal window open until 31 Dec 2025', date: '2025-09-28', link: '/members' },
]
