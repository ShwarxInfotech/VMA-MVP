import { useState } from 'react';
import Image from 'next/image';
import { Member } from '@/data/types';

export default function MemberCard({ member }: { member: Member }) {
  const [imgSrc, setImgSrc] = useState(member.photo);
  const [imgError, setImgError] = useState(false);

  // Fallback to a placeholder image if the image fails to load
  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      // Fallback to a placeholder image
      setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=200`);
    }
  };

  return (
    <div className="card p-5 flex gap-4">
      <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-1 ring-gray-200">
        <Image 
          src={imgSrc}
          alt={member.name}
          fill 
          className="object-cover"
          onError={handleImageError}
          unoptimized={imgError} // Don't optimize the fallback image
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.specialization} · {member.institution}</p>
        <p className="text-sm text-gray-600">{member.location}</p>
        <div className="mt-2 text-sm">
          <a className="text-brand-700 hover:underline" href={`mailto:${member.email}`}>
            {member.email}
          </a>
          {member.contact && <span className="mx-2 text-gray-400">·</span>}
          {member.contact && (
            <a className="text-gray-600 hover:underline" href={`tel:${member.contact.replace(/\s+/g, '')}`}>
              {member.contact}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
