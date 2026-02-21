"use client";

import Link from "next/link";

const TopBar = () => {
  return (
    <header
      className="w-full"
      style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
            style={{ background: "rgba(255,255,255,0.9)", color: "var(--color-primary)" }}
          >
            R
          </div>
          <div>
            <div className="text-lg font-semibold text-white">Recipe Finder</div>
            <div className="text-xs text-white/80">Discover delicious recipes</div>
          </div>
        </Link>

      </div>
    </header>
  );
};

export default TopBar;
