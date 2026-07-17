import { useState,useEffect } from "react";
import { getPosts } from "../services/posts";
import type { Post } from "../types/post"
import PostGrid from '../components/blog/PostGrid'

export default function Blog(){
    const [ posts, setPosts ] = useState<Post[]>([]);

    useEffect(() => {   

       const fetchPosts = async () => {
        try{
            const data = await getPosts();
            setPosts(data);
        }   catch(error){
            console.error("Failed to fetch posts:", error);
        }  
        
       };
        fetchPosts()
    }, []);


    return(

        <>
        <PostGrid  posts={posts}/>
        </>
        
    );
}