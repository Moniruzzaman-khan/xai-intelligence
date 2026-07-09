"use client";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({ end, suffix = "" }: CounterProps) {
  return (
    <span>
      {end}
      {suffix}
    </span>
  );
}