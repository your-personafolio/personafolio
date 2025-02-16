"use client";
import { useState } from "react";

export default function SubdomainChecker() {
  const [subdomain, setSubdomain] = useState("");
  const [loading, setLoading] = useState(false);

  const checkAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subdomain) return alert("Masukkan subdomain!");

    setLoading(true);
    try {
      const res = await fetch("/api/check-subdomain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subdomain }),
      });

      const data = await res.json();
      if (data.available) {
        alert(`Subdomain "${subdomain}.personafolio.com" tersedia!`);
      } else {
        alert(`Subdomain "${subdomain}.personafolio.com" sudah digunakan!`);
      }
    } catch (error) {
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Cek Ketersediaan Subdomain</h2>
      <form onSubmit={checkAvailability} className="space-y-4">
        <input
          type="text"
          value={subdomain}
          onChange={(e) => setSubdomain(e.target.value)}
          placeholder="Masukkan subdomain"
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Memeriksa..." : "Cek Sekarang"}
        </button>
      </form>
    </div>
  );
}
