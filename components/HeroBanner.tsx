import Image from 'next/image'

interface HeroBannerProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function HeroBanner({ title, subtitle, ctaText, ctaHref }: HeroBannerProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/360_F_645689490_Fzwptjq0YLCW8JZpC6lASo1KJcAgzZPj.jpg" 
          alt="Medical background" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-6 text-xl sm:text-2xl font-light">{subtitle}</p>}
          {ctaText && ctaHref && (
            <a href={ctaHref} className="inline-block mt-8 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">{ctaText}</a>
          )}
        </div>
      </div>
    </section>
  )
}
