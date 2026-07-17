import { useState,useEffect } from "react";
import { getBranch } from "../services/branches";
import type { Branch } from "../types/branch"
import { useParams } from "react-router-dom";

export default function BlogDetails(){
    const { slug } = useParams<{ slug: string }>()
    const [ branch, setBranch ] = useState<Branch| null>(null);

    useEffect(() => {   

       const fetchBranch = async () => {
         if (!slug) return
        try{
            const data = await getBranch(slug);
            setBranch(data);
        }   catch(error){
            console.error("Failed to fetch posts:", error);
        }  
        
       };
        fetchBranch()
    }, [slug]);

     if (!branch) {
        return <p>Loading...</p>
    }
    return(

        <div>
            <h2>Branch</h2>
                <h2>{branch.branch_name}</h2>
                <p>{branch.slug}</p>
                <p>{branch.branch_code}</p>
                <p>{branch.address}</p>
                <p>{branch.city}</p>
                <p>{branch.province}</p>
                <p>{branch.postal_code}</p>
                <p>{branch.contact_number}</p>
                <p>{branch.email}</p>
                <p>{branch.latitude}</p>
                <p>{branch.longitude}</p>
                <p>{branch.business_hours}</p>
                <p>{branch.description}</p>
                <p>{branch.featured_image}</p>
        </div>
        
    );
}