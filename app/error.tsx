'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Something went wrong.</h2>
      <button
        onClick={() => reset()}
        className="rounded bg-gray-900 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  )
}