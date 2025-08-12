import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account as a carrier, broker, or dispatcher. No MC number required for dispatchers.",
    },
    {
      number: "02",
      title: "Browse or Post",
      description: "Search available loads or post your freight. Use filters specific to box trucks and cargo vans.",
    },
    {
      number: "03",
      title: "Connect Directly",
      description: "Message other users directly through our built-in messaging system. No more phone tag.",
    },
    {
      number: "04",
      title: "Book & Haul",
      description: "Confirm your loads and get moving. Track everything through your dashboard.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How Boxaloo Works</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Simple, straightforward, and built for your workflow.</p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto mb-6">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
