import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Boxaloo. All rights reserved.</p>
          <p className="mt-2">The load board built for box trucks & cargo vans.</p>
        </div>
      </div>
    </footer>
  )
}
