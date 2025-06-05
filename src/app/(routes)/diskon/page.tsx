"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const validNames = ["Ayu", "Budi", "Citra"];

const prizes = [
  { label: "💎 100 Juta", chance: 90, color: "#FF6384" },
  { label: "💰 10 Juta", chance: 5, color: "#36A2EB" },
  { label: "💵 2 Juta", chance: 3, color: "#FFCE56" },
  { label: "💸 1 Juta", chance: 2, color: "#4BC0C0" },
];

function getPrizeByChance() {
  const rand = Math.random() * 100;
  let cumulative = 0;
  for (const prize of prizes) {
    cumulative += prize.chance;
    if (rand <= cumulative) return prize;
  }
  return prizes[prizes.length - 1];
}

export default function Home() {
  const [name, setName] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);
  const wheelRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName && validNames.includes(storedName)) {
      setName(storedName);
      setIsAllowed(true);
    }
  }, []);

  const handleSaveName = () => {
    if (validNames.includes(name)) {
      localStorage.setItem("name", name);
      setIsAllowed(true);
    } else {
      alert("Nama tidak terdaftar.");
    }
  };

  const handleSpin = () => {
    if (!isAllowed || spinning) return;

    setSpinning(true);
    const degree = 360 * 5 + Math.floor(Math.random() * 360);
    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s ease-out";
      wheelRef.current.style.transform = `rotate(${degree}deg)`;
    }

    setTimeout(() => {
      const prize = getPrizeByChance();
      setResult(prize.label);
      setSpinning(false);
    }, 4000);
  };

  const segmentAngle = 360 / prizes.length;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-200 p-4 gap-6">
      <h1 className="text-3xl font-bold">🎡 Wheel of Fortune</h1>

      {!isAllowed && (
        <div className="flex flex-col items-center gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama Anda"
            className="border px-4 py-2 rounded"
          />
          <Button onClick={handleSaveName}>Simpan Nama</Button>
        </div>
      )}

      {isAllowed && (
        <>
          <div className="relative w-64 h-64">
            <svg
              ref={wheelRef}
              viewBox="0 0 200 200"
              className="w-full h-full rounded-full"
            >
              {prizes.map((prize, index) => {
                const rotate = index * segmentAngle;
                return (
                  <g key={index} transform={`rotate(${rotate} 100 100)`}>
                    <path
                      d="M100,100 L100,0 A100,100 0 0,1 195,50 z"
                      fill={prize.color}
                      transform="rotate(0 100 100)"
                    />
                    <text
                      x="100"
                      y="30"
                      textAnchor="middle"
                      transform="rotate(15 100 100)"
                      className="fill-white text-[8px] font-bold"
                    >
                      {prize.label}
                    </text>
                  </g>
                );
              })}
              <circle cx="100" cy="100" r="10" fill="#222" />
            </svg>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-3xl">
              🔻
            </div>
          </div>

          <Button onClick={handleSpin} disabled={spinning} className="mt-4">
            {spinning ? "Memutar..." : "Putar Roda"}
          </Button>

          {result && (
            <div className="text-xl mt-4 text-indigo-800 font-semibold">
              Kamu mendapatkan: <span className="font-bold">{result}</span>
            </div>
          )}
        </>
      )}
    </main>
  );
}
