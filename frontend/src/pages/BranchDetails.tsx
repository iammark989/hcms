import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBranch } from '../services/branches'
import type { Branch } from '../types/branch'

export default function BranchDetails() {
    const { slug } = useParams<{ slug: string }>()

    const [branch, setBranch] = useState<Branch | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchBranch = async () => {
            if (!slug) return

            try {
                const data = await getBranch(slug)
                setBranch(data)
            } catch (error) {
                console.error('Failed to fetch branch:', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchBranch()
    }, [slug])

    if (loading) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <p className="text-stone-500">
                    Loading branch...
                </p>
            </div>
        )
    }

    if (error || !branch) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
                <h1 className="font-serif text-4xl font-bold text-stone-950">
                    Branch not found
                </h1>

                <Link
                    to="/branches"
                    className="mt-6 inline-block font-semibold text-amber-700"
                >
                    ← Back to Branches
                </Link>
            </div>
        )
    }

    return (
        <article>
            {/* Branch Header */}
            <section className="bg-[#faf8f3]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Our Branch
                    </p>

                    <h1 className="mt-3 font-serif text-5xl font-bold text-stone-950">
                        {branch.branch_name}
                    </h1>

                    <p className="mt-5 text-lg text-stone-600">
                        {branch.city}, {branch.province}
                    </p>
                </div>
            </section>

            {/* Branch Details */}
            <section className="bg-white py-16">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

                    {/* Image */}
                    <div>
                        {branch.featured_image ? (
                            <img
                                src={branch.featured_image}
                                alt={branch.branch_name}
                                className="h-full max-h-[500px] w-full rounded-2xl object-cover"
                            />
                        ) : (
                            <div className="flex h-80 items-center justify-center rounded-2xl bg-stone-100 text-stone-400">
                                No branch image available
                            </div>
                        )}
                    </div>

                    {/* Information */}
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-stone-950">
                            Branch Information
                        </h2>

                        <div className="mt-8 space-y-6">
                            <div>
                                <p className="text-sm font-semibold text-stone-900">
                                    Address
                                </p>

                                <p className="mt-1 text-stone-600">
                                    {branch.address},
                                    {' '}
                                    {branch.city},
                                    {' '}
                                    {branch.province}
                                    {branch.postal_code &&
                                        ` ${branch.postal_code}`}
                                </p>
                            </div>

                            {branch.business_hours && (
                                <div>
                                    <p className="text-sm font-semibold text-stone-900">
                                        Business Hours
                                    </p>

                                    <p className="mt-1 text-stone-600">
                                        {branch.business_hours}
                                    </p>
                                </div>
                            )}

                            {branch.contact_number && (
                                <div>
                                    <p className="text-sm font-semibold text-stone-900">
                                        Contact Number
                                    </p>

                                    <p className="mt-1 text-stone-600">
                                        {branch.contact_number}
                                    </p>
                                </div>
                            )}

                            {branch.email && (
                                <div>
                                    <p className="text-sm font-semibold text-stone-900">
                                        Email
                                    </p>

                                    <p className="mt-1 text-stone-600">
                                        {branch.email}
                                    </p>
                                </div>
                            )}
                        </div>

                        {branch.description && (
                            <div className="mt-10 border-t border-stone-200 pt-8">
                                <h2 className="font-serif text-2xl font-bold text-stone-950">
                                    About this branch
                                </h2>

                                <p className="mt-4 whitespace-pre-line leading-7 text-stone-600">
                                    {branch.description}
                                </p>
                            </div>
                        )}

                        <div className="mt-10">
                            <Link
                                to="/branches"
                                className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                            >
                                ← Back to all branches
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}