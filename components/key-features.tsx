import { MessageSquare, Target, MapPin, Plus } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      description: "Skip the phone tag. Message carriers, brokers, and dispatchers directly within the platform.",
    },
    {
      icon: Target,
      title: "Targeted Load Matching",
      description: "Specialized filters for box trucks and cargo vans. Find exactly what you need, when you need it.",
    },
    {
      icon: MapPin,
      title: "All Distance Types",
      description: "Local deliveries, regional routes, and over-the-road loads all in one place.",
    },
    {
      icon: Plus,
      title: "Easy Posting",
      description: "Post loads in seconds with our streamlined interface designed for the box truck industry.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features That Actually Matter</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built specifically for the box truck and cargo van industry, not adapted from big rig platforms.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-lg mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
