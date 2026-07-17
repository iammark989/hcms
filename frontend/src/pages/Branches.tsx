import { useEffect, useState } from 'react'
import { getBranches } from '../services/branches'
import BranchCard from '../components/branch/BranchCard'
import type { Branch } from '../types/branch'
import BranchMap from '../components/branch/BranchMap'

export default function Branches() {
    const [branches, setBranches] = useState<Branch[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

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
            <section className="bg-[#faf8f3]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Visit us
                    </p>

                    <h1 className="mt-3 font-serif text-5xl font-bold text-stone-950">
                        Find a branch
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                        Discover our bookstore locations and find the branch
                        nearest to you.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <BranchMap branches={branches} />
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {branches.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {branches.map((branch) => (
                                <BranchCard
                                    key={branch.id}
                                    branch={branch}
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