"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Layer 2 — Cohesive Multi-Plane 3D Spatial Parallax Engine
 *
 * Physical depth hierarchy (from farthest to closest):
 * 1. Layer 1 (Background Video): Farthest architectural hall — gentle base camera pan (-5px X, -2.5px Y).
 * 2. Layer 2B (Drafting Plane): Deep mid-ground glass blueprint — floats in front of the pillars (-9.5px X, -4.5px Y).
 * 3. Layer 2A (Architectural Frames): Closer suspended ceiling structure — stronger horizontal parallax (-14px X, -5.5px Y).
 * 4. Layer 2C (Engineered Sculpture): Heavy foreground anchor right in front of the lens — mostly static (-1.2px X, -0.5px Y).
 *
 * Uses frame-rate-independent (dt) double-smoothed fluid tripod damping so velocity never
 * jumps instantaneously on mouse movement, eliminating jitter/stepping on the video and PNG layers.
 */
export function HeroParallaxLayers() {
    const layer2ARef = useRef<HTMLDivElement>(null);
    const layer2BRef = useRef<HTMLDivElement>(null);
    const layer2CRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heroSection = document.getElementById("hero");
        if (!heroSection) return;

        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

        if (reducedMotionQuery.matches || coarsePointerQuery.matches) {
            return;
        }

        const bgVideoLayer = document.getElementById("hero-bg-video-layer");

        // Raw normalized cursor target in [-1, 1]
        let rawTargetX = 0;
        let rawTargetY = 0;

        // Stage 1 smoothed target (eliminates instantaneous velocity spikes / jerk on mouse move)
        let smoothTargetX = 0;
        let smoothTargetY = 0;

        // Stage 2 rendered camera position
        let currentX = 0;
        let currentY = 0;

        let rafId: number | null = null;
        let lastTime = performance.now();

        // Cohesive unidirectional 3D camera parallax multipliers (in px)
        // Moving cursor right/down shifts the scene left/up proportionally to each plane's depth:
        const multVideo = { x: -5.0, y: -2.5 };   // Farthest: Background laboratory hall
        const mult2B = { x: -9.5, y: -4.5 };      // Mid-background: Translucent drafting plane
        const mult2A = { x: -14.0, y: -5.5 };     // Mid-foreground: Suspended ceiling frames
        const mult2C = { x: -1.2, y: -0.5 };      // Near foreground anchor: Brass armillary sphere (mostly static)

        const applyTransforms = (x: number, y: number) => {
            if (bgVideoLayer) {
                const dx = (x * multVideo.x).toFixed(4);
                const dy = (y * multVideo.y).toFixed(4);
                bgVideoLayer.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
            }

            if (layer2BRef.current) {
                const dx = (x * mult2B.x).toFixed(4);
                const dy = (y * mult2B.y).toFixed(4);
                layer2BRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
            }

            if (layer2ARef.current) {
                const dx = (x * mult2A.x).toFixed(4);
                const dy = (y * mult2A.y).toFixed(4);
                layer2ARef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
            }

            if (layer2CRef.current) {
                const dx = (x * mult2C.x).toFixed(4);
                const dy = (y * mult2C.y).toFixed(4);
                layer2CRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
            }
        };

        const updateTransforms = (now: number) => {
            // Frame-rate independent delta time (clamped to avoid jumps after tab switch)
            const dt = Math.min((now - lastTime) / 1000, 0.05);
            lastTime = now;

            // Critically damped 2-stage fluid filter (time-constant independent of 60Hz/120Hz/144Hz)
            const inputAlpha = 1 - Math.exp(-10 * dt);
            const cameraAlpha = 1 - Math.exp(-4.5 * dt);

            smoothTargetX += (rawTargetX - smoothTargetX) * inputAlpha;
            smoothTargetY += (rawTargetY - smoothTargetY) * inputAlpha;

            currentX += (smoothTargetX - currentX) * cameraAlpha;
            currentY += (smoothTargetY - currentY) * cameraAlpha;

            applyTransforms(currentX, currentY);

            const isSettled =
                Math.abs(rawTargetX - currentX) < 0.0004 &&
                Math.abs(rawTargetY - currentY) < 0.0004 &&
                Math.abs(rawTargetX - smoothTargetX) < 0.0004 &&
                Math.abs(rawTargetY - smoothTargetY) < 0.0004;

            if (isSettled) {
                currentX = rawTargetX;
                currentY = rawTargetY;
                smoothTargetX = rawTargetX;
                smoothTargetY = rawTargetY;
                applyTransforms(currentX, currentY);
                rafId = null;
            } else {
                rafId = requestAnimationFrame(updateTransforms);
            }
        };

        const ensureLoopRunning = () => {
            if (rafId === null) {
                lastTime = performance.now();
                rafId = requestAnimationFrame(updateTransforms);
            }
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerType === "touch") return;
            const rect = heroSection.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            // Normalize cursor to [-1, 1] relative to hero container center
            const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

            rawTargetX = Math.max(-1, Math.min(1, nx));
            rawTargetY = Math.max(-1, Math.min(1, ny));
            ensureLoopRunning();
        };

        const handlePointerLeave = () => {
            rawTargetX = 0;
            rawTargetY = 0;
            ensureLoopRunning();
        };

        heroSection.addEventListener("pointermove", handlePointerMove, { passive: true });
        heroSection.addEventListener("pointerleave", handlePointerLeave, { passive: true });

        return () => {
            heroSection.removeEventListener("pointermove", handlePointerMove);
            heroSection.removeEventListener("pointerleave", handlePointerLeave);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 z-10 overflow-hidden pointer-events-none select-none"
        >
            {/* Layer 2B — Drafting Plane (Translucent Technical Panel behind Headline) */}
            <div
                ref={layer2BRef}
                className="
                    absolute
                    left-[12%] sm:left-[15.1%]
                    top-[6.8%]
                    w-[32%] sm:w-[21.2%]
                    aspect-[711/1185]
                    will-change-transform
                    [backface-visibility:hidden]
                    opacity-80
                "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <Image
                    src="/images/hero/layer-2b.webp"
                    alt=""
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 35vw, 23vw"
                    className="object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                />
            </div>

            {/* Layer 2A — Architectural Frames (Suspended Black-and-Gold Geometric Frames at Top Center) */}
            <div
                ref={layer2ARef}
                className="
                    absolute
                    left-[46%] sm:left-[48.8%]
                    -top-[1.5%]
                    w-[34%] sm:w-[26.2%]
                    aspect-[1001/790]
                    will-change-transform
                    [backface-visibility:hidden]
                "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <Image
                    src="/images/hero/layer-2a.webp"
                    alt=""
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 35vw, 27vw"
                    className="object-contain object-top drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
                />
            </div>

            {/* Layer 2C — Engineered Foreground Sculpture (Brass Armillary Sphere in Lower-Left Foreground) */}
            <div
                ref={layer2CRef}
                className="
                    absolute
                    -left-[5%] sm:-left-[2.2%]
                    bottom-[1%] sm:bottom-[1.5%]
                    w-[40%] sm:w-[26.5%]
                    aspect-[929/1041]
                    will-change-transform
                    [backface-visibility:hidden]
                "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
                <Image
                    src="/images/hero/layer-2c.webp"
                    alt=""
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 40vw, 28vw"
                    className="object-contain object-left-bottom blur-[2.2px] brightness-[0.88] contrast-[1.04]"
                />
            </div>
        </div>
    );
}
