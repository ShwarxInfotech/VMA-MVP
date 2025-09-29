export interface Sponsor { name: string; logo?: string }

export interface Event {
  id: string
  title: string
  date: string // ISO
  description: string
  sponsors?: Sponsor[]
  image?: string
  gallery?: string[]
}

export interface Member {
  id: string
  name: string
  email: string
  specialization: string
  institution: string
  contact?: string
  photo: string
  location: string
}

export interface CommitteeMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
}

export interface Policy {
  id: string
  title: string
  summary: string
  url: string
}
