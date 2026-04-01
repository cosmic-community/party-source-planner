import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import { Category } from '@/types'

export default function CategoryCard({ category }: { category: Category }) {
  const heroImage = category.metadata?.hero_image?.imgix_url
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {heroImage && (
        <img
          src={`${heroImage}?w=900&h=480&fit=crop&auto=format,compress`}
          alt={category.title}
          width={450}
          height={240}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          <Link href={`/categories/${category.slug}`}>{category.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </article>
  )
}