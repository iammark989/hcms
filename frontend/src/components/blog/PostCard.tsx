import { Link } from 'react-router-dom'
import type { Post } from '../../types/post'
import { formatDate } from '../utils/formatDate'

interface PostCardProps {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    
    return (
        <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white">
            {post.featured_image && (
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="p-6">
                <Link
                    to={`/categories/${post.category.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-amber-700"
                >
                    {post.category.name}
                </Link>

                <h3 className="mt-3 font-serif text-2xl font-bold text-stone-900">
                    <Link
                        to={`/blog/${post.slug}`}
                        className="transition hover:text-amber-700"
                    >
                        {post.title}
                    </Link>
                </h3>

                <p className="mt-3 line-clamp-3 leading-7 text-stone-600">
                    {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-5">
                    <span className="text-sm text-stone-500">
                        By {post.author.name} • {post.published_at && formatDate(post.published_at)}
                        
                    </span>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-stone-900 hover:text-amber-700"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </article>
    )
}