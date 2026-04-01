import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'
import ArticleCard from '@/components/ArticleCard'
import CategoryCard from '@/components/CategoryCard'
import ThemeCard from '@/components/ThemeCard'
import { getArticles, getCategories, getThemes } from '@/lib/cosmic'

export default async function HomePage() {
  const [articles, categories, themes] = await Promise.all([
    getArticles(6),
    getCategories(),
    getThemes()
  ])

  return (
    <div className="space-y-14">
      <HeroSection />

      <section className="space-y-6">
        <SectionHeading title="Featured Articles" subtitle="Fresh party planning ideas" />
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

      <section className="space-y-6">
        <SectionHeading title="Browse Categories" subtitle="Start with a party type" />
        {categories.length === 0 ? (
          <p className="text-gray-600">No categories available yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <SectionHeading title="Explore Themes" subtitle="Curated party themes" />
        {themes.length === 0 ? (
          <p className="text-gray-600">No themes available yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {themes.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}