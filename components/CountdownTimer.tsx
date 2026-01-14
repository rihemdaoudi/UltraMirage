"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({
  targetDate,
  className = "",
}: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  function calculateTimeLeft(): TimeLeft {
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted || !timeLeft) return null;

  const blocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {blocks.map((block) => (
        <div
          key={block.label}
          className="
            w-32 h-32 rounded-2xl
            bg-white/10 backdrop-blur-md
            border border-white/15
            flex flex-col items-center justify-center
            transition-all duration-300
            hover:scale-105 hover:bg-white/15
          "
        >
          <span className="font-display text-5xl text-white leading-none">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="mt-3 text-xs tracking-widest text-white/70">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
