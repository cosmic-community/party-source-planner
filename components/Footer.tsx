export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Party Source Planner. Built with Cosmic.
      </div>
    </footer>
  )
}