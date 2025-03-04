import React from 'react';
import goblin from '../assets/goblin.png';
import christmasElfImg from '../assets/christmas-elf.png';

const Character = () => (
    <div className="flex justify-around mb-8 fade-in">
        <img
            src={goblin}
            className="w-24 h-24 object-contain pixelated animate-bounce-slow"
        />
        <div className="text-xl font-bold text-yellow-400 self-center pixel-text glow-text">
            VS
        </div>
        <img
            src={christmasElfImg}
            className="w-24 h-24 object-contain pixelated animate-bounce-slow"
            style={{ animationDelay: '0.5s' }}
        />
    </div>
);

export default Character;
