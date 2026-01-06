import { DownloadIcon } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Propel Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-lg font-semibold text-gray-900">Propel</span>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </a>
            <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6 py-2 text-sm font-medium transition-colors">
              Download
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">A project-first developer workspace.</h1>

          <p className="text-lg text-gray-600 mb-8">
            Propel is a desktop workspace designed for focused project development, with optional AI assistance for
            routine tasks.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://github.com/Irfanlegend/propel-website/releases/download/propel/Propel.exe"
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6 py-6 text-base flex items-center gap-2 font-medium transition-colors"
            >
              <DownloadIcon className="h-5 w-5" />
              Download for Windows
            </a>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg px-6 py-6 text-base font-medium transition-colors">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-2">Current version: v0.1 (Prototype)</p>
          <p className="text-sm text-gray-500">Prototype version for Windows.</p>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project-First Workflow</h3>
            <p className="text-gray-600">
              Organize your work around projects, not files. Keep everything related in one place.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Distraction-Free</h3>
            <p className="text-gray-600">A clean, minimal interface designed to help you focus on what matters.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Native</h3>
            <p className="text-gray-600">Built as a native desktop app for maximum performance and responsiveness.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Optional AI Assistant</h2>
          <p className="text-lg text-gray-600 mb-4">
            Propel includes an optional AI agent that can help with simple tasks like file organization, basic code
            formatting, and project setup. The assistant is there when you need it, but never required.
          </p>
          <p className="text-base text-gray-500">
            Note: AI features are experimental and work best for straightforward tasks. Complex work still requires your
            expertise and judgment.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Propel</h2>
          <p className="text-lg text-gray-600 mb-6">
            Propel is designed for developers who need a dedicated workspace for their projects. Whether you're building
            a web app, mobile app, or working on multiple projects simultaneously, Propel keeps everything organized and
            accessible.
          </p>
          <p className="text-lg text-gray-600">
            Built with modern technologies and optimized for developer workflows, Propel helps you stay focused and
            productive throughout your development journey.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="max-w-3xl">
          <h3 className="text-lg font-medium text-gray-900 mb-3">System Requirements</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Windows 10 or later</li>
            <li>• 64-bit system</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 bg-white/80 backdrop-blur-sm mt-24">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-sm text-gray-500 text-center mb-2">Contact: founder@propel.dev</p>
          <p className="text-sm text-gray-600 text-center">© 2026 Propel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
