import { Link } from 'react-router-dom'
import type { Category } from '../../types/category'

interface CategoryListProps {
    categories: Category[]
}

export default function CategoryList({
    categories,
}: CategoryListProps) {
    return (
        <section className="bg-[#faf8f3] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 mx-auto">
                        Browse by category
                    </p>

                    <h2 className="mt-3 font-serif text-4xl font-bold text-stone-950 mx-auto">
                        Find your next story
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-stone-600 mx-auto">
                        Explore stories and articles based on the topics
                        that interest you.
                    </p>
                </div>

                {categories.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/categories/${category.slug}`}
                                className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                            >
                                <h3 className="font-serif text-2xl font-bold text-stone-900 transition group-hover:text-amber-700">
                                    {category.name}
                                </h3>

                                {category.description && (
                                    <p className="mt-3 line-clamp-2 leading-7 text-stone-600">
                                        {category.description}
                                    </p>
                                )}

                                <p className="mt-6 text-sm font-semibold text-amber-700">
                                    Explore category →
                                </p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-stone-500">
                        No categories are currently available.
                    </p>
                )}
            </div>
        </section>
    )
}