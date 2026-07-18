import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="bg-[#faf8f3]">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Stories worth reading
                    </p>

                    <h1 className="font-serif text-5xl font-bold leading-tight text-stone-950 sm:text-6xl lg:text-7xl">
                        Discover stories that stay with you.
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">
                        Explore thoughtful articles, inspiring authors, and stories
                        selected for readers who are always looking for their next
                        great discovery.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/blog"
                            className="rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                        >
                            Explore Stories
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}