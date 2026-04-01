import SectionHeading from '@/components/SectionHeading'
import ThemeCard from '@/components/ThemeCard'
import { getThemes } from '@/lib/cosmic'

export default async function ThemesPage() {
  const themes = await getThemes()

  return (
    <section className="space-y-6">
      <SectionHeading title="Themes" subtitle="Party theme inspiration" />
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
  )
}