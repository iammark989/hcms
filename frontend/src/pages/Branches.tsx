import { useState,useEffect } from "react";
import { getBranches } from "../services/branches";
import type { Branch } from "../types/branch"

export default function Blog(){
    const [ branches, setBranches ] = useState<Branch[]>([]);

    useEffect(() => {   

       const fetchBranches = async () => {
        try{
            const data = await getBranches();
            setBranches(data);
        }   catch(error){
            console.error("Failed to fetch posts:", error);
        }  
        
       };
        fetchBranches()
    }, []);


    return(

        <div>
            <h2>Blog</h2>
         {branches.map((branch) => (
            <div key={branch.id}>
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
        ))}
        </div>
        
    );
}