'use client';

import { useEffect, useRef, useState } from 'react';

const ColorResolver = ({ colorVar, onResolved }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const color = getComputedStyle(ref.current).color;
        onResolved(color);
    }, [colorVar, onResolved]);

    return (
        <div ref={ref} style={{ color: colorVar, display: 'none' }} aria-hidden="true" />
    );
};

export default ColorResolver;
