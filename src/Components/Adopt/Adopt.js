import React from 'react';
import data from "../../data.json"


const adoptingMediasList = data.adoptingMediasSite;

export default function Example1() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "Right",
                    alignItems: "Right",
                    height: "10vh",
                    color: "blue"
                }}
                >
                    <h2> Adopting adorable pups</h2>
                    <ul>
                        {(adoptingMediasList || []).map(s => (<li>{s}</li>))}
                    </ul>
                </div>
           
        )
    }