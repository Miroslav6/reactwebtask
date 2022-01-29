import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    const images = [
        '/Files/Images/Slideshow/P1006642.jpg',
        '/Files/Images/Slideshow/IMG_20220102_150618.jpg',
        '/Files/Images/Slideshow/IMG_20220102_150749.jpg'
    ];
    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={each} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default Slideshow;





