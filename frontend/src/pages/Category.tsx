import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategory } from '../services/categories'
import PostGrid from '../components/blog/PostGrid'
import type { CategoryDetails } from '../types/category'

export default function Category() {
    const { slug } = useParams<{ slug: string }>()

    const [category, setCategory] =
        useState<CategoryDetails | null>(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchCategory = async () => {
            if (!slug) return

            try {
                const data = await getCategory(slug)
                setCategory(data)
            } catch (error) {
                console.error(
                    'Failed to fetch category:',
                    error
                )

                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchCategory()
    }, [slug])

    if (loading) {
        return <p>Loading category...</p>
    }

    if (error || !category) {
        return <p>Category not found.</p>
    }

    return (
        <>
            <section className="bg-[#faf8f3]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Category
                    </p>

                    <h1 className="mt-3 font-serif text-5xl font-bold text-stone-950">
                        {category.name}
                    </h1>

                    {category.description && (
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                            {category.description}
                        </p>
                    )}
                </div>
            </section>

            {category.posts.length > 0 ? (
                <PostGrid posts={category.posts} />
            ) : (
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <p className="text-stone-500">
                        No published stories are available in this category yet.
                    </p>
                </div>
            )}
        </>
    )
}