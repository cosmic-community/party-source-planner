import { getMetafieldValue } from '@/lib/cosmic'
import { Article } from '@/types'

export default function ArticleMeta({ article }: { article: Article }) {
  const difficulty = getMetafieldValue(article.metadata?.difficulty)
  const budget = getMetafieldValue(article.metadata?.budget_range)
  const guestCount = article.metadata?.guest_count
  const tags = article.metadata?.tags || []

  return (
    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
      {difficulty ? <span>Difficulty: {difficulty}</span> : null}
      {budget ? <span>Budget: {budget}</span> : null}
      {guestCount ? <span>Guests: {guestCount}</span> : null}
      {tags.length > 0 ? <span>Tags: {tags.join(', ')}</span> : null}
    </div>
  )
}