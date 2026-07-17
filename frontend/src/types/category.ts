import type { Post } from './post'

export interface Category {
    id: number
    name: string
    slug: string
    description: string | null
}

export interface CategoryDetails extends Category {
    posts: Post[]
}