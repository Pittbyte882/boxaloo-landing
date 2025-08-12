"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail } from "lucide-react"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !userType) return

    setIsLoading(true)

    // Simulate API call - replace with actual Mailchimp integration
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <section id="email-capture" className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">You're on the list!</h2>
                <p className="text-gray-600 mb-6">
                  Thanks for joining the Boxaloo early access list. We'll notify you as soon as we launch.
                </p>
                <p className="text-sm text-gray-500">
                  Keep an eye on your inbox for updates and exclusive early access features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="email-capture" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mx-auto mb-6">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Get Early Access to Boxaloo
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be among the first to experience the load board built specifically for box trucks and cargo vans.
          </p>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-lg py-3"
                  />
                </div>

                <div>
                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    required
                    className="w-full px-3 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">I am a...</option>
                    <option value="carrier">Carrier</option>
                    <option value="broker">Broker</option>
                    <option value="dispatcher">Dispatcher</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || !email || !userType}
                  className="w-full bg-green-500 hover:bg-green-600 text-lg py-3"
                >
                  {isLoading ? "Joining..." : "Get Early Access"}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4">We'll never spam you. Unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
