import { Card, CardContent } from "@/components/ui/card"
import { Truck, Building2, Users } from "lucide-react"

export function WhoItsFor() {
  const audiences = [
    {
      icon: Truck,
      title: "Carriers",
      description:
        "Find box truck and cargo van loads that match your equipment and routes. Connect directly with brokers and shippers.",
      benefits: ["Direct load access", "No bidding wars", "Instant messaging"],
    },
    {
      icon: Building2,
      title: "Brokers",
      description:
        "Post loads specifically for box trucks and cargo vans. Connect with qualified carriers in your network.",
      benefits: ["Targeted posting", "Verified carriers", "Streamlined communication"],
    },
    {
      icon: Users,
      title: "Dispatchers",
      description: "Manage loads for your fleet without needing an MC number. Full access to post and book loads.",
      benefits: ["No MC required", "Fleet management", "Multi-driver coordination"],
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Everyone in the Box Truck Industry
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're hauling loads, posting freight, or managing a fleet, Boxaloo has you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <Card key={audience.title} className="relative overflow-hidden border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                  <audience.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{audience.title}</h3>
                <p className="text-gray-600 mb-6">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
