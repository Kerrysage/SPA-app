import React from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
    let { id } = useParams();

    return(
        <div>

        <h1>Hello user {id}</h1>
        <p>User Profile Page</p>

        </div>
    ) 
}