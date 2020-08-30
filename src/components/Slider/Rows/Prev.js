import React, {useState} from 'react'


export default function Prev() {
    const [isCurrentP, setCurrent] = 
    useState(null);
    
    return(
        <div>
            <button onClick={() =>
                setCurrent(isCurrentP = true)}>
            {'<'}
            </button> 
        </div>
    )
}
