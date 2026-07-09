"use client";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

export default function StatCard({
  title,
  value,
  change,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
      "
    >
      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-4xl font-bold">
        {value}
      </h3>

      <p className="mt-3 text-sm font-medium text-green-400">
        ▲ {change}
      </p>
    </div>
  );
}