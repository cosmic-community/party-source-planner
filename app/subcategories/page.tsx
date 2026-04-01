import SectionHeading from '@/components/SectionHeading'
import SubcategoryCard from '@/components/SubcategoryCard'
import { getSubcategories } from '@/lib/cosmic'

export default async function SubcategoriesPage() {
  const subcategories = await getSubcategories()

  return (
    <section className="space-y-6">
      <SectionHeading title="Subcategories" subtitle="Browse by party themes" />
      {subcategories.length === 0 ? (
        <p className="text-gray-600">No subcategories available yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {subcategories.map((subcategory) => (
            <SubcategoryCard key={subcategory.id} subcategory={subcategory} />
          ))}
        </div>
      )}
    </section>
  )
}