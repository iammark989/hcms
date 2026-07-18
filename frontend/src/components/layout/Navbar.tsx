import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
                <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/logo.jpg"
                            alt="Chapter & Co."
                            className="h-12 w-12 rounded-full object-cover"
                        />

                        <div>
                            <h1 className="font-serif text-xl font-bold tracking-wide text-stone-900">
                                Chapter & Co.
                            </h1>

                            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                                Bookstore & Journal
                            </p>
                        </div>
                    </Link>

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