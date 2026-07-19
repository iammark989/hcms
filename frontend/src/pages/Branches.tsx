import { useEffect, useState } from 'react'
import { getBranches } from '../services/branches'
import BranchCard from '../components/branch/BranchCard'
import type { Branch } from '../types/branch'
import BranchMap from '../components/branch/BranchMap'
import { Search } from 'lucide-react'

export default function Branches() {
    const [branches, setBranches] = useState<Branch[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [ search, setSearch ] = useState('')

    const filteredBranches = branches.filter((branch) => {
        const searchTerm = search.toLowerCase()

        return (
            branch.branch_name.toLowerCase().includes(searchTerm) ||
            branch.city.toLowerCase().includes(searchTerm) ||
            branch.province.toLowerCase().includes(searchTerm) ||
            branch.address.toLowerCase().includes(searchTerm)
        )
    })

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const data = await getBranches()
                setBranches(data)
            } catch (error) {
                console.error('Failed to fetch branches:', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchBranches()
            }, [])

            if (loading) {
                return (
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <p className="text-stone-500">
                            Loading branches...
                        </p>
                    </div>
                )
            }

            if (error) {
                return (
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <p className="text-stone-500">
                            Unable to load branches.
                        </p>
                    </div>
                )
            }

        

    return (
        <>
            <section className="mb-12  border border-stone-200 bg-stone-50 p-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                            Find a Branch
                        </p>

                        <h2 className="mt-3 font-serif text-3xl font-bold text-stone-900">
                            Visit Chapter & Co. Near You
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                            Search by branch name, city, province, or address to quickly locate
                            the nearest Chapter & Co. bookstore.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-2xl">
                        <label
                            htmlFor="branch-search"
                            className="mb-2 block text-sm font-medium text-stone-700"
                        >
                            Search branches
                        </label>
                        <div className="relative">
                            <Search
                                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
                            />
                            <input

                            id="branch-search"
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setSelectedBranch(null);
                            }}
                            placeholder="e.g. Pampanga, Bulacan, SM Clark..."
                            className="w-full rounded-2xl border border-stone-300 bg-white py-3 pl-12 pr-5"
                        />
                        </div>
                       {branches.length === 0 ? (
                            <div className="rounded-2xl py-2 text-center">
                                <h3 className="font-serif text-xl font-semibold text-stone-900">
                                    No branches available
                                </h3>

                                <p className="mt-2 text-stone-600">
                                    There are currently no active branches to display.
                                </p>
                            </div>
                        ) : filteredBranches.length === 0 ? (
                            <div className="rounded-2xl py-2 text-center">
                                <h3 className="font-serif text-xl font-semibold text-stone-900">
                                    No branches found
                                </h3>

                                <p className="mt-2 text-stone-600">
                                    Try searching with another city, province, or branch name.
                                </p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </section>

            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <BranchMap
                        branches={filteredBranches}
                        selectedBranch={selectedBranch}
                    />
                </div>
            </section>
            
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {filteredBranches.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredBranches.map((branch) => (
                                <BranchCard
                                    key={branch.id}
                                    branch={branch}
                                    onSelect={() => setSelectedBranch(branch)}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-stone-500">
                            No branches are currently available.
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}