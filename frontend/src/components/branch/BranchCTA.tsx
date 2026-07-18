import { Link } from 'react-router-dom'

export default function BranchCTA() {
    return (
        <section className="bg-stone-600 py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                            Visit us
                        </p>
                        <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
                            Find a bookstore near you.
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-stone-300">
                            Explore our branches, view store information,
                            and use our interactive map to find a location
                            near you.
                        </p>
                    </div>

                    <Link
                        to="/branches"
                        className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
                    >
                        Find a Branch →
                    </Link>
                </div>
            </div>
        </section>
    )
}