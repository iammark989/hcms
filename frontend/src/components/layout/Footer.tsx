import { Link } from "react-router-dom";
import { BookOpen, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-stone-400 text-stone-300">
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-amber-500" />
                            <h2 className="font-serif text-2xl font-bold text-white">
                                Chapter & Co.
                            </h2>
                        </div>

                        <p className="mt-4 leading-7 text-stone-700">
                            Discover stories, explore new ideas, and visit one
                            of our branches to find your next great read.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Explore
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-stone-700 hover:text-amber-400">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog" className="text-stone-700 hover:text-amber-400">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/branches" className="text-stone-700 hover:text-amber-400">
                                    Branch Locator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Connect
                        </h3>

                        <div className="space-y-3">
                            <p className="text-stone-700 flex items-center gap-2">
                                <Mail size={18} />
                                hello@chapterandco.com
                            </p>

                            <div className="flex gap-4 pt-2">
                                <FaGithub className="cursor-pointer text-stone-700 hover:text-amber-400" />
                                <FaLinkedin className="cursor-pointer text-stone-700 hover:text-amber-400" />
                                <FaFacebook className="cursor-pointer text-stone-700 hover:text-amber-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 border-t border-stone-800 pt-5 text-center text-sm text-stone-500">
                    © {new Date().getFullYear()} Chapter & Co. Turning pages, one chapter at a time.
                </div>
            </div>
        </footer>
    );
}