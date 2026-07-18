import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] items-center bg-[#faf8f3]">
            <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Error 404
                </p>

                <h1 className="mt-4 font-serif text-5xl font-bold text-stone-950 sm:text-6xl">
                    This page seems to be missing.
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-600">
                    The page you're looking for may have been moved, removed,
                    or never existed.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/"
                        className="rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/blog"
                        className="rounded-full border border-stone-300 px-7 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-stone-100"
                    >
                        Browse Stories
                    </Link>
                </div>
            </div>
        </section>
    )
}