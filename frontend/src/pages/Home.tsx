import Hero from '../components/common/Hero'
import PostCard from '../components/blog/PostCard'
import PostGrid from '../components/blog/PostGrid'
import type { Post } from '../types/post'
import { useState,useEffect } from 'react'
import { getPosts } from '../services/posts'


export default function Home() {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts()
                setPosts(data)
            } catch (error) {
                console.error('Failed to fetch posts:', error)
            }
        }

        fetchPosts()
    }, [])

    return (
        <>
            <Hero />
            <PostGrid  posts={posts} limit={3}/>
        </>
    )
}