# Party Source Planner
![App Preview](https://imgix.cosmicjs.com/9f952ed0-2d6f-11f1-978c-c5f34edf2919-photo-1494173853739-c21f58b16055-1775009286593.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A themed party planning site that highlights categories, subcategories, themes, and articles from your Cosmic bucket. Built with Next.js 16 and Tailwind CSS for fast, editorial-style browsing.

## Features
- Category, subcategory, and theme hub pages
- Article listing and detail pages with rich content
- Difficulty, budget, guest count, and tags display
- Responsive card grids with optimized images
- Cosmic-powered content relationships with depth queries

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69cc78be6bcd4c00f1a666ed&clone_repository=69cc7eca6bcd4c00f1a66758)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "The Party Source is a content and affiliate marketing website focused on themed party planning. The site covers three main categories — Baby Showers, Birthday Parties, and Life Events (bridal showers, graduations, retirement, etc.) — each with multiple subcategories (e.g. Baby Showers → Girl, Boy, Neutral, Mystery, Boho, Safari).
The content model needs three object types:
Categories — top-level party types (Baby Showers, Birthdays, Life Events) with a title, description, hero image, and SEO fields.
Subcategories — themes that belong to a parent category (e.g. "Girl Baby Shower" belongs to "Baby Showers"), with a title, description, hero image, and SEO fields.
Articles — party planning guides that belong to a category and optionally a subcategory. Each article has a title, excerpt, hero image, rich text body, and metadata including: difficulty level (easy/medium/elaborate), budget range (budget/mid-range/luxury), estimated guest count, and tags."

### Code Generation Prompt

> "I have a NextJS site I would like to use with this"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16
- React 19
- Tailwind CSS
- Cosmic SDK
- TypeScript

## Getting Started

### Prerequisites
- Bun installed
- Cosmic bucket with the provided content model

### Installation
```bash
bun install
bun dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

const { objects: articles } = await cosmic.objects
  .find({ type: 'articles' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration
This app uses the [Cosmic](https://www.cosmicjs.com) API to fetch categories, subcategories, themes, and articles. See the Cosmic docs: https://www.cosmicjs.com/docs.

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify (static builds)
- Any Node-compatible host

Set the Cosmic environment variables in your hosting dashboard:
- COSMIC_BUCKET_SLUG
- COSMIC_READ_KEY
- COSMIC_WRITE_KEY
<!-- README_END -->