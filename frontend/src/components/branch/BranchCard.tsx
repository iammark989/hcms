import { Link } from 'react-router-dom'
import type { Branch } from '../../types/branch'
import { Phone, MapPin, Clock3 } from 'lucide-react'


interface BranchCardProps {
     branch: Branch;
    onSelect?: () => void;
}

export default function BranchCard({ branch, onSelect, }: BranchCardProps) {
  
    return (
        <article  onClick={onSelect} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
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

                <div className="space-y-3">

                <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 mt-0.5 text-amber-600 shrink-0" />
                    <p className="text-sm text-stone-600 leading-6">
                        {branch.address}
                    </p>
                </div>

                {branch.contact_number && (
                    <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-amber-600 shrink-0" />
                        <a
                            href={`tel:${branch.contact_number}`}
                            className="text-sm text-stone-500 hover:text-amber-600"
                        >
                            {branch.contact_number}
                        </a>
                    </div>
                )}

                {branch.business_hours && (
                    <div className="flex items-center gap-2">
                        <Clock3 className="h-5 w-5 text-amber-600 shrink-0" />
                        <span className="text-sm text-stone-500">
                            {branch.business_hours}
                        </span>
                    </div>
                )}

            </div>

                
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