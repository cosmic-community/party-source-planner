import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Party Source Planner
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
          <Link href="/articles" className="hover:text-gray-900">
            Articles
          </Link>
          <Link href="/categories" className="hover:text-gray-900">
            Categories
          </Link>
          <Link href="/subcategories" className="hover:text-gray-900">
            Subcategories
          </Link>
          <Link href="/themes" className="hover:text-gray-900">
            Themes
          </Link>
        </nav>
      </div>
    </header>
  )
}