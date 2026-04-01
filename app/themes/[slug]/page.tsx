// app/themes/[slug]/page.tsx
import ArticleCard from '@/components/ArticleCard'
import SectionHeading from '@/components/SectionHeading'
import { getArticlesByTheme, getMetafieldValue, getTheme } from '@/lib/cosmic'

export default async function ThemePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const theme = await getTheme(slug)

  if (!theme) {
    return <div className="text-gray-600">Theme not found.</div>
  }

  const articles = await getArticlesByTheme(theme.id)
  const heroImage = theme.metadata?.hero_image?.imgix_url

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <SectionHeading
          title={theme.title}
          subtitle={getMetafieldValue(theme.metadata?.description)}
        />
        {heroImage && (
          <img
            src={`${heroImage}?w=1600&h=700&fit=crop&auto=format,compress`}
            alt={theme.title}
            width={800}
            height={350}
            className="w-full rounded-xl object-cover"
          />
        )}
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-600">No articles in this theme yet.</p>
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