import SectionHeader from '@/components/SectionHeader'
import PolicyCard from '@/components/PolicyCard'
import { policies } from '@/data/policies'

export default function PolicyPage() {
  return (
    <div className="container-max py-8">
      <SectionHeader title="Policies" subtitle="Governance, ethics, and compliance documents" />
      <div className="grid gap-4">
        {policies.map(p => (
          <PolicyCard key={p.id} policy={p} />
        ))}
      </div>
    </div>
  )
}
