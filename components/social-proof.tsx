import { Users, TrendingUp, Clock } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-green-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join 600+ Carriers, Brokers, and Dispatchers
          </h2>
          <p className="mt-6 text-lg leading-8 text-green-100">
            Already on the waitlist and ready for launch. Don't miss out on early access.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">600+</div>
              <div className="text-green-100">Users Waiting</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-green-100">Daily Signups</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">Q3 2025</div>
              <div className="text-green-100">Launch Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
