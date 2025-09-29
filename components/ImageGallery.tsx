import Image from 'next/image'

export default function ImageGallery({ images }: { images: string[] }) {
  if (!images?.length) return null
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {images.map((src, i) => (
        <div key={i} className="relative w-full aspect-video overflow-hidden rounded-md ring-1 ring-gray-200">
          <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
