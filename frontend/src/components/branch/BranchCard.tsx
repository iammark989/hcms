import { Link } from 'react-router-dom'
import type { Branch } from '../../types/branch'

interface BranchCardProps {
    branch: Branch
}

export default function BranchCard({ branch }: BranchCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            {branch.featured_image && (
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                        src={branch.featured_image}
                        alt={branch.branch_name}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                </div>
            )}

            <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    {branch.city}, {branch.province}
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-stone-950">
                    {branch.branch_name}
                </h2>

                <p className="mt-3 leading-7 text-stone-600">
                    {branch.address}
                </p>

                {branch.business_hours && (
                    <p className="mt-3 text-sm text-stone-500">
                        {branch.business_hours}
                    </p>
                )}

                <div className="mt-6 border-t border-stone-100 pt-5">
                    <Link
                        to={`/branches/${branch.slug}`}
                        className="text-sm font-semibold text-stone-900 transition hover:text-amber-700"
                    >
                        View Branch →
                    </Link>
                </div>
            </div>
        </article>
    )
}