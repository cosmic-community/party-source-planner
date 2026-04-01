import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="rounded-3xl bg-gray-50 px-6 py-12 text-center md:px-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        The Party Source
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
        Plan unforgettable themed parties with Cosmic-powered guides
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Explore festive categories, subcategories, and themes curated for every celebration.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link
          href="/articles"
          className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Explore Articles
        </Link>
        <Link
          href="/categories"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700"
        >
          Browse Categories
        </Link>
      </div>
    </section>
  )
}