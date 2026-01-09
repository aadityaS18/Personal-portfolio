import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const CustomCursor = () => {
    const { darkMode } = useTheme();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.onclick || 
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.closest('a') ||
                target.closest('button');
            
            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <div
                className={`fixed pointer-events-none z-[9999] transition-transform duration-150 ${
                    isPointer ? 'scale-75' : 'scale-100'
                }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className={`w-3 h-3 rounded-full ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-600'
                } ${isPointer ? 'opacity-70' : 'opacity-100'}`}></div>
            </div>

            {/* Outer ring */}
            <div
                className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
                    isPointer ? 'scale-150' : 'scale-100'
                }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className={`w-8 h-8 rounded-full border-2 ${
                    darkMode ? 'border-blue-400/50' : 'border-blue-600/50'
                } ${isPointer ? 'opacity-100' : 'opacity-50'}`}></div>
            </div>
        </>
    );
};

export default CustomCursor;
