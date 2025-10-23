"use client";

import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/60 px-12 py-3 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-80">
        <Image
          src={"/crypto-dash-icon.jpg"}
          alt="Crypto dashboard icon"
          width={40}
          height={40}
        />
        Crypto Dashboard
      </Link>

      <nav className="flex items-center space-x-4">
        <Link href="/market" className="text-sm font-medium hover:text-primary">
          Market
        </Link>
        <Link
          href="/portfolio"
          className="text-sm font-medium hover:text-primary"
        >
          Portfolio
        </Link>
        <Link href="/news" className="text-sm font-medium hover:text-primary">
          News
        </Link>

        <ModeToggle />
      </nav>
    </header>
  );
}
