"use client";

import { useState } from 'react';
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { committee } from "@/data/committee";

function CommitteeMember({ member }: { member: typeof committee[0] }) {
  const [imgSrc, setImgSrc] = useState(member.photo);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc('/images/32.jpg');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-1 ring-gray-200">
        <Image 
          src={imgSrc} 
          alt={member.name} 
          fill 
          className="object-cover"
          onError={handleImageError}
          unoptimized={imgError}
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-brand-700 font-medium">{member.role}</p>
      <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
    </div>
  );
}

export default function ExecutivePage() {
  return (
    <div className="container-max py-8">
      <SectionHeader
        title="Executive Committee"
        subtitle="Meet our leadership"
      />  
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {committee.map((member) => (
          <CommitteeMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
