interface SectionHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export default function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="container-max mt-12 mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
