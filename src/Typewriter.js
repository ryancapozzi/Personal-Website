import React, {useState, useEffect} from 'react';
import './index.css';

function Typewriter ( {text, className, start, onComplete, isLast = false, speed = 100} ) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (start && index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (start && index === text.length) {
            if (onComplete) onComplete();
        }
    }, [index, text, start, speed, onComplete]);

    return (
        <div className="text-left w-full">
            <h1 className={`mt-8 ${className}`}>
                {displayedText}
                {((start && index < text.length) || isLast) && <id className="blink-cursor">|</id>}
            </h1>
        </div>
    );
}

export default Typewriter;
