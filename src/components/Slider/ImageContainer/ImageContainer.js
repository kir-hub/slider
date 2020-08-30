import React from 'react'
import Image from '../imges/Image'
import Image2 from '../imges/Image2'
import Image3 from '../imges/Image3'
import Next from '../Rows/Next'
import Prev from '../Rows/Prev'




export default function ImageContainer() {
    return (
        <div>
            <span className={'styles.prevRow'}>
            <Prev />
        </span>
            <div className={'styles.prevImage'}>
                <Image/>
            </div>
            <div className={'styles.currentImage'}>
                <Image2/>
            </div>
            <div className={"styles.nextImage"}>
                <Image3/>
            </div>
            <span className={"styles.nextRow"}>
            <Next/>
        </span>
        </div>
    )
}
