import { useState,useEffect } from "react";
import { getPosts } from "../services/posts";
import type { Post } from "../types/post"
import PostGrid from '../components/blog/PostGrid'
import BranchCTA from "../components/branch/BranchCTA";

export default function Blog(){
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const result = await getPosts(currentPage);

                setPosts(result.data);
                setLastPage(result.meta.last_page);

            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, [currentPage]);


    return(

        <>
        <PostGrid  posts={posts}/>
        <div className="flex justify-center items-center gap-4 my-10">

            <button
                onClick={() => setCurrentPage(prev => prev - 1)}
                disabled={currentPage === 1}
                className={`${currentPage === 1 ? "" : 'hover:cursor-pointer'} rounded-lg border px-4 py-2 disabled:opacity-50`}
            >
                Previous
            </button>

            <span>
                Page {currentPage} of {lastPage}
            </span>

            <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={currentPage === lastPage}
                className={`${currentPage === lastPage ? "" : 'hover:cursor-pointer'} rounded-lg border px-4 py-2 disabled:opacity-50`}
            >
                Next
            </button>

        </div>
        <BranchCTA />
        </>
        
    );
}