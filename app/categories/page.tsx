import CategoryCard from '@/components/CategoryCard'
import SectionHeading from '@/components/SectionHeading'
import { getCategories } from '@/lib/cosmic'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <section className="space-y-6">
      <SectionHeading title="Categories" subtitle="Top-level party planning hubs" />
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
  )
}