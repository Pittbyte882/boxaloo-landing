"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToEmailCapture = () => {
    document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/boxaloo-logo.png" alt="Boxaloo - Box Truck & Cargo Van Loads" className="h-8 w-auto" />
        </Link>
        <Button onClick={scrollToEmailCapture} className="bg-green-500 hover:bg-green-600">
          Get Early Access
        </Button>
      </div>
    </header>
  )
}
