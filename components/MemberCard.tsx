import Image from 'next/image'
import { Member } from '@/data/types'

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="card p-5 flex gap-4">
      <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-1 ring-gray-200">
        <Image src={member.photo} alt={member.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.specialization} · {member.institution}</p>
        <p className="text-sm text-gray-600">{member.location}</p>
        <div className="mt-2 text-sm">
          <a className="text-brand-700" href={`mailto:${member.email}`}>{member.email}</a>
          {member.contact && <span className="ml-2 text-gray-600">· {member.contact}</span>}
        </div>
      </div>
    </div>
  )
}
