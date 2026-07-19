import Hero from '../components/common/Hero'
import PostGrid from '../components/blog/PostGrid'
import type { Post } from '../types/post'
import { useState,useEffect } from 'react'
import { getPosts } from '../services/posts'
import type { Category } from '../types/category'
import { getCategories } from '../services/categories'
import CategoryList from '../components/common/CategoryList'
import BranchCTA from '../components/branch/BranchCTA'



export default function Home() {

    const [ categories,setCategories ] = useState<Category[]>([])

    useEffect(() => {
    const fetchHomeData = async () => {
        try {
            const [postsResult, categoriesData] = await Promise.all([
                getPosts(),
                getCategories(),
            ]);

            setPosts(postsResult.data);
            setCategories(categoriesData);

        } catch (error) {
            console.error("Failed to fetch home data:", error);
        }
    };

    fetchHomeData();
}, []);

    const [posts, setPosts] = useState<Post[]>([])


    return (
        <>
            <Hero />
            <PostGrid  
            posts={posts} limit={3}
            />
            <CategoryList
            categories={categories}
            />
            <BranchCTA />
        </>
    )
}