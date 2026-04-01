// app/subcategories/[slug]/page.tsx
import ArticleCard from '@/components/ArticleCard'
import SectionHeading from '@/components/SectionHeading'
import { getArticlesBySubcategory, getMetafieldValue, getSubcategory } from '@/lib/cosmic'

export default async function SubcategoryPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const subcategory = await getSubcategory(slug)

  if (!subcategory) {
    return <div className="text-gray-600">Subcategory not found.</div>
  }

  const articles = await getArticlesBySubcategory(subcategory.id)
  const heroImage = subcategory.metadata?.hero_image?.imgix_url

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <SectionHeading
          title={subcategory.title}
          subtitle={getMetafieldValue(subcategory.metadata?.description)}
        />
        {heroImage && (
          <img
            src={`${heroImage}?w=1600&h=700&fit=crop&auto=format,compress`}
            alt={subcategory.title}
            width={800}
            height={350}
            className="w-full rounded-xl object-cover"
          />
        )}
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-600">No articles in this subcategory yet.</p>
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