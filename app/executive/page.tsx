import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { committee } from "@/data/committee";

export default function ExecutivePage() {
  return (
    <div className="container-max py-8">
      <SectionHeader
        title="Executive Committee"
        subtitle="Meet our leadership"
      />  
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {committee.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow-sm border p-6 text-center"
          >
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-1 ring-gray-200">
              <Image src={p.photo} alt={p.name} fill className="object-cover" />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-brand-700 font-medium">{p.role}</p>
            <p className="text-sm text-gray-600 mt-2">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
