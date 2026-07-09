"use client";

const particles = [
  { left: "8%", top: "18%", delay: "0s", duration: "7s" },
  { left: "22%", top: "65%", delay: "1s", duration: "9s" },
  { left: "38%", top: "30%", delay: "2s", duration: "8s" },
  { left: "52%", top: "75%", delay: "0.5s", duration: "10s" },
  { left: "68%", top: "22%", delay: "1.5s", duration: "7s" },
  { left: "82%", top: "55%", delay: "2.5s", duration: "11s" },
  { left: "92%", top: "12%", delay: "3s", duration: "8s" },
  { left: "15%", top: "42%", delay: "1.2s", duration: "9s" },
  { left: "45%", top: "12%", delay: "2.2s", duration: "8s" },
  { left: "74%", top: "82%", delay: "0.8s", duration: "10s" },
];

export default function Particles() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle absolute"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}