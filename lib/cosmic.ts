import { createBucketClient } from '@cosmicjs/sdk'
import {
  Article,
  Category,
  CosmicResponse,
  Subcategory,
  Theme
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getArticles(limit?: number): Promise<Article[]> {
  try {
    const response: CosmicResponse<Article> = await cosmic.objects
      .find({ type: 'articles' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
      .limit(limit || 100)

    return (response.objects || []).sort((a, b) => {
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch articles')
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'articles', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    return response.object as Article
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch article')
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response: CosmicResponse<Category> = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Category
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch category')
  }
}

export async function getSubcategories(): Promise<Subcategory[]> {
  try {
    const response: CosmicResponse<Subcategory> = await cosmic.objects
      .find({ type: 'subcategories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch subcategories')
  }
}

export async function getSubcategory(slug: string): Promise<Subcategory | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'subcategories', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Subcategory
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch subcategory')
  }
}

export async function getThemes(): Promise<Theme[]> {
  try {
    const response: CosmicResponse<Theme> = await cosmic.objects
      .find({ type: 'themes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch themes')
  }
}

export async function getTheme(slug: string): Promise<Theme | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'themes', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Theme
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch theme')
  }
}

export async function getArticlesByCategory(categoryId: string): Promise<Article[]> {
  try {
    const response: CosmicResponse<Article> = await cosmic.objects
      .find({ type: 'articles', 'metadata.category': categoryId })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch category articles')
  }
}

export async function getArticlesBySubcategory(subcategoryId: string): Promise<Article[]> {
  try {
    const response: CosmicResponse<Article> = await cosmic.objects
      .find({ type: 'articles', 'metadata.subcategory': subcategoryId })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch subcategory articles')
  }
}

export async function getArticlesByTheme(themeId: string): Promise<Article[]> {
  try {
    const response: CosmicResponse<Article> = await cosmic.objects
      .find({ type: 'articles', 'metadata.theme': themeId })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch theme articles')
  }
}