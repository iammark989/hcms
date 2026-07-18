import type { Post } from '../../types/post'
import PostCard from './PostCard'

interface LatestPostsProps {
    posts: Post[]
    limit?: number
}

export default function PostGrid({ posts,limit, }: LatestPostsProps) {
   
    const displayedPosts = limit
        ? posts.slice(0, limit)
        : posts

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-10 mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 mx-auto">
                        From the journal
                    </p>

                    <h2 className="mt-3 font-serif text-4xl font-bold text-stone-950 mx-auto">
                        Latest stories
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-stone-600 mx-auto">
                        Explore our latest stories, recommendations, and
                        insights from the world of books and literature.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}