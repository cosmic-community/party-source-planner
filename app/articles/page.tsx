import ArticleCard from '@/components/ArticleCard'
import SectionHeading from '@/components/SectionHeading'
import { getArticles } from '@/lib/cosmic'

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <section className="space-y-6">
      <SectionHeading title="Articles" subtitle="All party planning guides" />
      {articles.length === 0 ? (
        <p className="text-gray-600">No articles available yet.</p>
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