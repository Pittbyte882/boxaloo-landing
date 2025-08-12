"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Truck, MapPin, Clock, DollarSign, User } from "lucide-react"

export function HeroSection() {
  const scrollToEmailCapture = () => {
    document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })
  }

  const mockLoads = [
    {
      id: 1001,
      origin: "Chicago, IL",
      destination: "Detroit, MI",
      rate: 850,
      distance: 350,
      type: "Box Truck",
      status: "Available",
      postedBy: "ABC Logistics",
      messages: 2,
    },
    {
      id: 1002,
      origin: "Atlanta, GA",
      destination: "Nashville, TN",
      rate: 650,
      distance: 250,
      type: "Cargo Van",
      status: "Pending",
      postedBy: "Quick Freight",
      messages: 0,
    },
    {
      id: 1003,
      origin: "Dallas, TX",
      destination: "Houston, TX",
      rate: 450,
      distance: 240,
      type: "Box Truck",
      status: "Available",
      postedBy: "Metro Shipping",
      messages: 1,
    },
    {
      id: 1004,
      origin: "Phoenix, AZ",
      destination: "Las Vegas, NV",
      rate: 750,
      distance: 300,
      type: "Cargo Van",
      status: "Available",
      postedBy: "Desert Express",
      messages: 3,
    },
    {
      id: 1005,
      origin: "Miami, FL",
      destination: "Orlando, FL",
      rate: 380,
      distance: 235,
      type: "Box Truck",
      status: "Booked",
      postedBy: "Sunshine Freight",
      messages: 0,
    },
    {
      id: 1006,
      origin: "Seattle, WA",
      destination: "Portland, OR",
      rate: 520,
      distance: 173,
      type: "Cargo Van",
      status: "Available",
      postedBy: "Pacific Logistics",
      messages: 2,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Load Board Built for <span className="text-green-600">Box Trucks & Cargo Vans</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">Carriers, Brokers, and Dispatchers Welcome</p>
          <p className="mt-4 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
            Local, regional, and OTR loads in one place. Direct messaging between carriers, brokers, and dispatchers. No
            MC number required for dispatchers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={scrollToEmailCapture}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3"
            >
              Join the Early Access List
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 sm:mt-24">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
              <div className="relative rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
                <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-green-300 via-green-300/70 to-green-300 opacity-10" />

                {/* Dashboard Header */}
                <div className="relative px-4 py-4 sm:px-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Truck className="h-6 w-6 text-green-600" />
                      <span className="font-semibold text-lg">Load Board Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">5 new messages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-600">John Dispatcher</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="relative px-4 py-6 sm:px-6">
                  {/* Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">24</div>
                      <div className="text-xs text-gray-600">Available Loads</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">8</div>
                      <div className="text-xs text-gray-600">Active Bids</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-600">3</div>
                      <div className="text-xs text-gray-600">In Transit</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-600">12</div>
                      <div className="text-xs text-gray-600">Completed</div>
                    </div>
                  </div>

                  {/* Load Cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mockLoads.map((load) => (
                      <div
                        key={load.id}
                        className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-sm font-medium text-green-600">Load #{load.id}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              load.status === "Available"
                                ? "bg-green-100 text-green-800"
                                : load.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {load.status}
                          </span>
                        </div>

                        <div className="space-y-2 mb-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            {load.origin} → {load.destination}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              {load.distance} miles
                            </div>
                            <div className="flex items-center font-semibold text-gray-900">
                              <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                              {load.rate}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-2">
                          <span>{load.type}</span>
                          <div className="flex items-center space-x-2">
                            <span>by {load.postedBy}</span>
                            {load.messages > 0 && (
                              <div className="flex items-center text-green-600">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                {load.messages}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Messaging Panel Preview */}
                  <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">Recent Messages</h3>
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-green-500">
                        <div>
                          <div className="text-sm font-medium">ABC Logistics</div>
                          <div className="text-xs text-gray-600">Load #1001: Rate confirmed at $850</div>
                        </div>
                        <div className="text-xs text-gray-500">2m ago</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-blue-500">
                        <div>
                          <div className="text-sm font-medium">Desert Express</div>
                          <div className="text-xs text-gray-600">Can you do pickup tomorrow at 8 AM?</div>
                        </div>
                        <div className="text-xs text-gray-500">5m ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
