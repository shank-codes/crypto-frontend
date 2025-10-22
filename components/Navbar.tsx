"use client"

import Link from "next/link"
import ModeToggle from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/60 px-6 py-3 backdrop-blur-md">
      <Link href="/" className="text-lg font-semibold hover:opacity-80">
        Crypto Dashboard
      </Link>

      <nav className="flex items-center space-x-4">
        <Link href="/market" className="text-sm font-medium hover:text-primary">
          Market
        </Link>
        <Link href="/portfolio" className="text-sm font-medium hover:text-primary">
          Portfolio
        </Link>
        <Link href="/news" className="text-sm font-medium hover:text-primary">
          News
        </Link>

        <ModeToggle />
      </nav>
    </header>
  )
}