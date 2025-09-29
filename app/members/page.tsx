"use client";
import { useMemo, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import SearchFilter from "@/components/SearchFilter";
import MemberCard from "@/components/MemberCard";
import { members as allMembers } from "@/data/members";
import { Member } from "@/data/types";

export default function MembersPage() {
  const [results, setResults] = useState<Member[]>(allMembers);

  const fields = useMemo(
    () => ({
      search: (m: Member) => m.name,
      filters: {
        specialization: (m: Member) => m.specialization,
        location: (m: Member) => m.location,
      },
    }),
    []
  );

  return (
    <div className="container-max py-8">
      <div className="w-[90%] mx-auto">
        <SectionHeader
          title="Membership"
          subtitle="Register and explore our professional directory"
        />

        <div className="card p-6">
          <h3 className="text-lg font-semibold">Member Registration</h3>
          <form
            className="mt-4 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Demo: do nothing, or show a toast in future
            }}
          >
            <label className="grid gap-1">
              <span className="text-sm text-gray-700">Full name</span>
              <input
                name="fullName"
                required
                className="rounded-lg border-gray-300"
                placeholder="Enter your full name"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border-gray-300"
                placeholder="name@example.com"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-gray-700">Specialization</span>
              <input
                name="specialization"
                className="rounded-lg border-gray-300"
                placeholder="e.g., Cardiology"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-gray-700">Institution</span>
              <input
                name="institution"
                className="rounded-lg border-gray-300"
                placeholder="e.g., VMA Hospital"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-gray-700">Contact number</span>
              <input
                name="phone"
                type="tel"
                className="rounded-lg border-gray-300"
                placeholder="e.g., +91 98765 43210"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-gray-700">Location / City</span>
              <input
                name="location"
                className="rounded-lg border-gray-300"
                placeholder="e.g., Surat"
              />
            </label>
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  disabled
                  className="rounded-lg border-gray-300"
                />
                <span className="text-sm text-gray-600">
                  Photo upload placeholder (disabled for demo)
                </span>
              </div>
            </div>
            <div className="sm:col-span-2 flex gap-3">
              <button type="submit" className="btn btn-primary">
                Submit (Demo)
              </button>
              <button type="reset" className="btn btn-outline">
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10" />
        <SectionHeader
          title="Members Directory"
          subtitle="Search and filter registered members"
        />
        <div className="w-full mx-auto">
          <SearchFilter<Member>
            data={allMembers}
            onFilter={setResults}
            fields={fields}
          />
        </div>

        <div className="mt-6 w-full mx-auto grid md:grid-cols-2 gap-6">
          {results.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
