// app/categories/[slug]/page.tsx
import ArticleCard from '@/components/ArticleCard'
import SectionHeading from '@/components/SectionHeading'
import { getArticlesByCategory, getCategory, getMetafieldValue } from '@/lib/cosmic'

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return <div className="text-gray-600">Category not found.</div>
  }

  const articles = await getArticlesByCategory(category.id)
  const heroImage = category.metadata?.hero_image?.imgix_url

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <SectionHeading
          title={category.title}
          subtitle={getMetafieldValue(category.metadata?.description)}
        />
        {heroImage && (
          <img
            src={`${heroImage}?w=1600&h=700&fit=crop&auto=format,compress`}
            alt={category.title}
            width={800}
            height={350}
            className="w-full rounded-xl object-cover"
          />
        )}
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-600">No articles in this category yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  )
}