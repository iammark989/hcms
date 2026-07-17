import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="bg-[#faf8f3]">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="max-w-3xl">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Stories worth reading
                    </p>

                    <h1 className="font-serif text-5xl font-bold leading-tight text-stone-950 sm:text-6xl lg:text-7xl">
                        Discover stories that stay with you.
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600">
                        Explore thoughtful articles, inspiring authors, and
                        stories selected for readers who are always looking
                        for their next great discovery.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/blog"
                            className="rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                        >
                            Explore Stories
                        </Link>

                        <Link
                            to="/branches"
                            className="rounded-full border border-stone-300 px-7 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-stone-100"
                        >
                            Find a Branch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}