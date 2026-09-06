"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PreviewGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.refresh();
      window.location.href = "/";
    } else {
      setError("Incorrect password");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight mb-2">
              TEXANS FIRST<span className="text-red-600">*</span>
            </h1>
            <p className="text-sm text-stone-500">
              Editorial Preview — Not for Public Distribution
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Preview Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Enter password"
                required
                autoFocus
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-900 text-white py-3 rounded-md font-medium hover:bg-stone-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Access Preview"}
            </button>
          </form>

          <p className="mt-6 text-xs text-stone-400 text-center">
            This is a pre-publication preview for authorized reviewers only.
            <br />
            Do not share this URL or password.
          </p>
        </div>
      </div>
    </div>
  );
}
