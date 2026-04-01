import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import { Subcategory } from '@/types'

export default function SubcategoryCard({ subcategory }: { subcategory: Subcategory }) {
  const heroImage = subcategory.metadata?.hero_image?.imgix_url
  const description = getMetafieldValue(subcategory.metadata?.description)

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {heroImage && (
        <img
          src={`${heroImage}?w=900&h=480&fit=crop&auto=format,compress`}
          alt={subcategory.title}
          width={450}
          height={240}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          <Link href={`/subcategories/${subcategory.slug}`}>{subcategory.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </article>
  )
}