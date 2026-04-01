export interface CosmicImage {
  url: string
  imgix_url: string
}

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata?: Record<string, unknown>
  type?: string
  created_at?: string
  modified_at?: string
}

export type DifficultyLevel = 'easy' | 'medium' | 'elaborate'
export type BudgetRange = 'budget' | 'mid-range' | 'luxury'
export type ArticleTag = 'decor' | 'games' | 'food' | 'invitations' | 'activities' | 'themes'

export interface Category extends CosmicObject {
  type?: 'categories'
  metadata?: {
    title?: string
    description?: string
    hero_image?: CosmicImage
    seo_title?: string
    seo_description?: string
  }
}

export interface Subcategory extends CosmicObject {
  type?: 'subcategories'
  metadata?: {
    title?: string
    description?: string
    hero_image?: CosmicImage
    seo_title?: string
    seo_description?: string
    parent_category?: Category
  }
}

export interface Theme extends CosmicObject {
  type?: 'themes'
  metadata?: {
    title?: string
    description?: string
    hero_image?: CosmicImage
    seo_title?: string
    seo_description?: string
    parent_subcategory?: Subcategory
  }
}

export interface Article extends CosmicObject {
  type?: 'articles'
  metadata?: {
    title?: string
    excerpt?: string
    hero_image?: CosmicImage
    body?: string
    difficulty?: DifficultyLevel
    budget_range?: BudgetRange
    guest_count?: number
    tags?: ArticleTag[]
    category?: Category
    subcategory?: Subcategory
    theme?: Theme
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}