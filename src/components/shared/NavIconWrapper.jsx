import React, { useState, useEffect, useRef } from 'react';

const NavIconWrapper = ({
    Icon, handler, custom = '', tooltip = '', delay = 0,
    incSize = false, footer = false,
}) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltipContent, setShowTooltipContent] = useState(false);
    const tooltipRef = useRef(null);
    const [colors, setColors] = useState('');

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
        const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let tooltipX = clientX + 12;
        let tooltipY = clientY + (footer ? -50 : 12);

        if (tooltipX + tooltipWidth > viewportWidth) {
            tooltipX = clientX - tooltipWidth - 10;
        }

        if (tooltipY + tooltipHeight > viewportHeight) {
            tooltipY = viewportHeight - tooltipHeight - 10;
        }

        setTooltipPosition({ x: tooltipX, y: tooltipY });
    };

    const handleMouseEnter = () => {
        setTooltipVisible(true);
        setShowTooltipContent(false);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };

    useEffect(() => {
        let timeoutId;

        if (isTooltipVisible) {
            timeoutId = setTimeout(() => {
                setShowTooltipContent(true);
            }, delay);
        } else {
            setShowTooltipContent(false);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isTooltipVisible, delay]);

    useEffect(() => {
        if (isTooltipVisible) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isTooltipVisible]);

    return (
        <div
            className={`group relative transition-all select-none cursor-pointer p-2 max-md-500:p-1 max-md-300:p-0 
                ${custom} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handler}
        >
            <Icon className={`transition-all duration-100 ${incSize ? 'text-[28px]' : 'text-2xl'} text-white group-hover:text-sky-500 group-active:translate-y-1`} />

            {isTooltipVisible && (
                <div
                    ref={tooltipRef}
                    className={`fixed p-2 text-sm text-white bg-black/50 rounded shadow-lg transition-opacity duration-200 ease-in-out ${showTooltipContent ? 'opacity-100' : 'opacity-0'} border border-neutral-700`}
                    style={{
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                        zIndex: '2147483647',
                    }}
                >
                    {tooltip}
                </div>
            )}
        </div>
    );
};

export default NavIconWrapper;
