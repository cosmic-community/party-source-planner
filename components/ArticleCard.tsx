import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import { Article } from '@/types'

export default function ArticleCard({ article }: { article: Article }) {
  const heroImage = article.metadata?.hero_image?.imgix_url
  const excerpt = getMetafieldValue(article.metadata?.excerpt)

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {heroImage && (
        <img
          src={`${heroImage}?w=800&h=480&fit=crop&auto=format,compress`}
          alt={article.title}
          width={400}
          height={240}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {article.metadata?.category?.title || 'Article'}
        </p>
        <h3 className="text-lg font-semibold text-gray-900">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    </article>
  )
}