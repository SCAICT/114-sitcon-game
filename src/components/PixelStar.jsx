import React from 'react';

const PixelStar = () => (
    <>
        <div className="pixel-corner top-left"></div>
        <div className="pixel-corner top-right"></div>
        <div className="pixel-corner bottom-left"></div>
        <div className="pixel-corner bottom-right"></div>
        {Array(5)
            .fill()
            .map((_, i) => (
                <div
                    key={`star-${i}`}
                    className="pixel-star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                ></div>
            ))}
    </>
);

export default PixelStar;
