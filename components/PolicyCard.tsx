import Link from 'next/link'
import { Policy } from '@/data/types'

export default function PolicyCard({ policy }: { policy: Policy }) {
  return (
    <div className="card p-5 flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{policy.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{policy.summary}</p>
      </div>
      <Link href={policy.url} target="_blank" className="btn btn-outline">View / Download</Link>
    </div>
  )
}
