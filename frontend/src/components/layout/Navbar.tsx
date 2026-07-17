import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium transition-colors ${
            isActive
                ? 'text-amber-700'
                : 'text-stone-600 hover:text-stone-950'
        }`

    return (
        <header className="border-b border-stone-200 bg-[#faf8f3]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                <NavLink
                    to="/"
                    className="font-serif text-xl font-bold tracking-wide text-stone-900"
                >
                    CHAPTER & CO.
                </NavLink>

                <div className="flex items-center gap-8">
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/blog" className={linkClass}>
                        Blog
                    </NavLink>

                    <NavLink to="/branches" className={linkClass}>
                        Branches
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}