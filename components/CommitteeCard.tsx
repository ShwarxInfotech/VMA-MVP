import Image from 'next/image'
import { CommitteeMember } from '@/data/types'

export default function CommitteeCard({ person }: { person: CommitteeMember }) {
  return (
    <div className="card p-5 text-center">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-1 ring-gray-200">
        <Image src={person.photo} alt={person.name} fill className="object-cover" />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{person.name}</h3>
      <p className="text-sm text-brand-700 font-medium">{person.role}</p>
      <p className="text-sm text-gray-600 mt-2">{person.bio}</p>
    </div>
  )
}
