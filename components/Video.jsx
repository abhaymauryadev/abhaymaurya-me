'use client';
import { useRef, useEffect, useState } from 'react';

const Video = ({ src, poster, className, ...props }) => {
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Start loading 200px before viewport
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {shouldLoad ? (
                <video
                    src={src}
                    poster={poster}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    loop
                    autoPlay
                    {...props}
                />
            ) : poster ? (
                <img
                    src={poster}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            ) : (
                <div className="w-full h-full bg-gray-900" />
            )}
        </div>
    );
};

export default Video;
