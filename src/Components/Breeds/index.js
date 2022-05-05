import React from 'react';
import data from "../../data.json"


export default function Example3() {
    return (
        <div>
            {(data.Breeds || []).map((breed) => {
                return (
                    <div>
                        <h4>{breed.Area}</h4>
                        <ul>
                            {(breed.Kind || []).map((breedDetail) => {
                                return (
                                    <li>
                                        {breedDetail.Name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}