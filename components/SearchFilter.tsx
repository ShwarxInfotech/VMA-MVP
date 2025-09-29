"use client";
import { useMemo, useState } from "react";

export interface SearchFilterProps<T> {
  data: T[];
  onFilter: (results: T[]) => void;
  fields: {
    search?: (item: T) => string;
    filters?: Record<string, (item: T) => string>;
  };
}

export default function SearchFilter<T>({
  data,
  onFilter,
  fields,
}: SearchFilterProps<T>) {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Record<string, string>>({});

  const uniqueValues = useMemo(() => {
    const res: Record<string, string[]> = {};
    if (fields.filters) {
      for (const key of Object.keys(fields.filters)) {
        const getter = fields.filters[key];
        const set = new Set<string>();
        data.forEach((d) => set.add(getter(d)));
        res[key] = Array.from(set);
      }
    }
    return res;
  }, [data, fields.filters]);

  const apply = () => {
    let results = data;
    if (q && fields.search) {
      const query = q.toLowerCase();
      results = results.filter((item) =>
        fields.search!(item).toLowerCase().includes(query)
      );
    }
    if (fields.filters) {
      for (const [key, getter] of Object.entries(fields.filters)) {
        const val = selected[key];
        if (val && val !== "All") {
          results = results.filter((item) => getter(item) === val);
        }
      }
    }
    onFilter(results);
  };

  return (
    <div className="card p-4 grid gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
        <input
          className="rounded-lg border-gray-300 focus:ring-brand-600 focus:border-brand-600"
          placeholder="Search by name..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {fields.filters &&
          Object.entries(fields.filters).map(([key]) => (
            <select
              key={key}
              className="rounded-lg border-gray-300 focus:ring-brand-600 focus:border-brand-600"
              value={selected[key] ?? "All"}
              onChange={(e) =>
                setSelected((prev) => ({ ...prev, [key]: e.target.value }))
              }
            >
              <option>All</option>
              {uniqueValues[key]?.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          ))}
        <div className="sm:col-span-1 flex justify-end">
          <button className="btn btn-primary px-8" onClick={apply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
