"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export function HeroBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | null = null;
        const hlsSrc = "/videos/hls/hero.m3u8";

        if (Hls.isSupported()) {
            hls = new Hls({
                autoStartLoad: true,
                startPosition: -1,
                capLevelToPlayerSize: true,
            });
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => {});
            });
            hls.on(Hls.Events.ERROR, (_event, data) => {
                if (data.fatal && hls) {
                    hls.destroy();
                    hls = null;
                    video.src = "/videos/hero.mp4";
                    video.play().catch(() => {});
                }
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Layer 1: Oversized (-inset-[18px]) Background Video Wrapper for Subpixel-Smooth 1:1 GPU Translation */}
            <div
                id="hero-bg-video-layer"
                className="absolute -inset-[18px] will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d]"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/hero-poster.webp"
                    onEnded={(e) => {
                        const v = e.currentTarget;
                        v.currentTime = 0;
                        v.play().catch(() => {});
                    }}
                    className="
                        w-full
                        h-full
                        object-cover
                        object-center
                        [backface-visibility:hidden]
                    "
                >
                    <source src="/videos/hero.webm" type="video/webm" />
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Left Reading Gradient — calibrated to match FinaLook.png's rich architectural contrast */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,rgba(10,9,8,0.68)_0%,rgba(10,9,8,0.48)_26%,rgba(10,9,8,0.18)_48%,transparent_72%)]
                "
            />

            {/* Top Subtle Atmospheric Fade */}
            <div
                className="
                    absolute inset-x-0 top-0 h-36
                    bg-gradient-to-b
                    from-black/35
                    via-black/10
                    to-transparent
                "
            />

            {/* Bottom Grounding Fade for Scroll Indicator & Motto */}
            <div
                className="
                    absolute inset-x-0 bottom-0 h-48
                    bg-gradient-to-t
                    from-black/65
                    via-black/25
                    to-transparent
                "
            />

            {/* Subtle Edge Vignette */}
            <div
                className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.18)_82%,rgba(0,0,0,0.42)_100%)]
                "
            />
        </div>
    );
}
