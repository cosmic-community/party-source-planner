import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import { Theme } from '@/types'

export default function ThemeCard({ theme }: { theme: Theme }) {
  const heroImage = theme.metadata?.hero_image?.imgix_url
  const description = getMetafieldValue(theme.metadata?.description)

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {heroImage && (
        <img
          src={`${heroImage}?w=900&h=480&fit=crop&auto=format,compress`}
          alt={theme.title}
          width={450}
          height={240}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          <Link href={`/themes/${theme.slug}`}>{theme.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </article>
  )
}