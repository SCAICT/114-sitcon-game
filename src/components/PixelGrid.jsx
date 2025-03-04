import React from 'react';

const PixelGrid = () => (
    <div className="absolute inset-0 z-0 opacity-20">
        {Array(30)
            .fill()
            .map((_, i) => (
                <div key={`h-${i}`} className="grid-line-h" style={{ top: `${i * 3.33}%` }}></div>
            ))}
        {Array(30)
            .fill()
            .map((_, i) => (
                <div key={`v-${i}`} className="grid-line-v" style={{ left: `${i * 3.33}%` }}></div>
            ))}
    </div>
);

export default PixelGrid;
