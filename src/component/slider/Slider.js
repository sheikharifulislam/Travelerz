import React, { useEffect, useRef, useState } from 'react';
import './slider.css';

const Slider = () => {
    
    const [sliderData, setSliderData] = useState([]);
    const [count, setCount] = useState(0);
    const timeOutRef = useRef(null);

    useEffect(() => {
        fetch('/sliderData.json')
        .then((response) => response.json())
        .then((data) => setSliderData(data))
        .catch((error) => console.log(error.message));
    }, []);

    const resetTimeout = () => {
        if(timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout()
        timeOutRef.current = setTimeout(() => {
            if(count < 4) {
                setCount((previous) => previous + 1);
                                   
            }
            else {
                setCount(0);
            }
        }, 5000);

        return () => {
            resetTimeout()
        }
    }, [count])

    return (
        <section id="image-section">
            <div className="image-container">                
                <div className="video-container" style={{
                    position: 'relative',
                    top: '0',
                    right: count * 100 + '%',
                }}>
                    {
                        sliderData.map((data) => (
                            <div className="single-image" key={data.id} >
                                <image src={data?.imageLink} id="image-slider" />
                            </div>
                        ))
                    }
                </div>
                <div className="content">
                    <h1>adventure is worthwhile</h1>
                    <p>dicover new places with us, adventure awaits</p>
                    <button>discover more</button>
                </div>
                <div className="change-button">
                    <span className="vid-change-btn"></span>
                </div>
            </div>
        </section>
    );
};

export default Slider;