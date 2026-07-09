"use client";

export default function LineChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          Revenue Analytics
        </h3>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          Last 6 Months
        </span>
      </div>

      <svg
        viewBox="0 0 600 260"
        className="h-72 w-full"
      >
        {/* Grid */}

        <line x1="40" y1="40" x2="560" y2="40" stroke="#233046" />
        <line x1="40" y1="90" x2="560" y2="90" stroke="#233046" />
        <line x1="40" y1="140" x2="560" y2="140" stroke="#233046" />
        <line x1="40" y1="190" x2="560" y2="190" stroke="#233046" />

        {/* Line */}

        <polyline
          fill="none"
          stroke="#22d3ee"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="
            40,190
            120,160
            200,170
            280,110
            360,130
            440,80
            520,50
          "
        />

        {/* Points */}

        <circle cx="40" cy="190" r="6" fill="#22d3ee" />
        <circle cx="120" cy="160" r="6" fill="#22d3ee" />
        <circle cx="200" cy="170" r="6" fill="#22d3ee" />
        <circle cx="280" cy="110" r="6" fill="#22d3ee" />
        <circle cx="360" cy="130" r="6" fill="#22d3ee" />
        <circle cx="440" cy="80" r="6" fill="#22d3ee" />
        <circle cx="520" cy="50" r="6" fill="#22d3ee" />

      </svg>

    </div>
  );
}