import React, {useState} from 'react'


export default function Next() {
    const [isCurrentN, setCurrent] = 
    useState(null);
    
    return(
        <div>
            <button onClick={() =>
                setCurrent(isCurrentN = true)}>
            {'>'}
            </button> 
        </div>
    )
}
