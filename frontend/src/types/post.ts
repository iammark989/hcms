import type { Author } from './author'
import type { Category } from './category'

export interface Post {
    id: number
    category: Category
    author: Author
    title: string
    slug: string
    excerpt: string
    content: string
    featured_image: string | null
    published_at: string | null
}