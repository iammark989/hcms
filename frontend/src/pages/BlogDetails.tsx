import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../services/posts'
import type { Post } from '../types/post'

export default function BlogDetails() {
    const { slug } = useParams<{ slug: string }>()
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return

            try {
                const data = await getPost(slug)
                setPost(data)
            } catch (error) {
                console.error('Failed to fetch post:', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    if (loading) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <p className="text-stone-500">Loading article...</p>
            </div>
        )
    }

    if (error || !post) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
                <h1 className="font-serif text-4xl font-bold text-stone-950">
                    Article not found
                </h1>

                <Link
                    to="/blog"
                    className="mt-6 inline-block text-sm font-semibold text-amber-700"
                >
                    ← Back to Blog
                </Link>
            </div>
        )
    }

    return (
        <article>
            <header className="bg-[#faf8f3]">
                <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
                    <Link
                        to={`/categories/${post.category.slug}`}
                        className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700"
                    >
                        {post.category.name}
                    </Link>

                    <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
                        {post.title}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                        {post.excerpt}
                    </p>

                    <div className="mt-8 text-sm text-stone-500">
                        <span>By {post.author.name}</span>

                        {post.published_at && (
                            <span>
                                {' • '}
                                {new Date(post.published_at).toLocaleDateString()}
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {post.featured_image && (
                <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="max-h-[600px] w-full rounded-2xl object-cover"
                    />
                </div>
            )}

            <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
                <div className="whitespace-pre-line text-lg leading-8 text-stone-700">
                    {post.content}
                </div>

                <div className="mt-16 border-t border-stone-200 pt-8">
                    <Link
                        to="/blog"
                        className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                    >
                        ← Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    )
}