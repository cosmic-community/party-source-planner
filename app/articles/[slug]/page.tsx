// app/articles/[slug]/page.tsx
import ArticleMeta from '@/components/ArticleMeta'
import { getArticle, getMetafieldValue } from '@/lib/cosmic'

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return <div className="text-gray-600">Article not found.</div>
  }

  const heroImage = article.metadata?.hero_image?.imgix_url
  const body = article.metadata?.body || ''

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          {article.metadata?.category?.title || 'Article'}
        </p>
        <h1 className="text-3xl font-semibold">{article.title}</h1>
        <p className="text-lg text-gray-600">
          {getMetafieldValue(article.metadata?.excerpt)}
        </p>
        <ArticleMeta article={article} />
      </header>

      {heroImage && (
        <img
          src={`${heroImage}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={article.title}
          width={800}
          height={450}
          className="w-full rounded-xl object-cover"
        />
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </article>
  )
}