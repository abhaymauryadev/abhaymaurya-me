"use client";

import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export function useLenis() {
    return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false,
        });

        setLenis(lenisInstance);

        const raf = (time) => {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
}
