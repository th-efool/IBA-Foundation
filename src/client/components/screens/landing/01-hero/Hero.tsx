"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";
import styles from "./Hero.module.css";

const navigation = [
    { href: "/values", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/showcase", label: "Showcase" },
    { href: "/playbooks", label: "Playbooks" },
];

export function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const query = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");
        let frame = 0, x = 0, y = 0, targetX = 0, targetY = 0;
        const animate = () => {
            x += (targetX - x) * .08;
            y += (targetY - y) * .08;
            hero.style.setProperty("--scene-x", `${x}px`);
            hero.style.setProperty("--scene-y", `${y}px`);
            frame = Math.abs(targetX - x) + Math.abs(targetY - y) > .01 ? requestAnimationFrame(animate) : 0;
        };
        const start = () => { if (!frame) frame = requestAnimationFrame(animate); };
        const reset = () => { targetX = targetY = 0; start(); };
        const move = (event: PointerEvent) => {
            if (query.matches || event.pointerType === "touch") return;
            const rect = hero.getBoundingClientRect();
            targetX = -((event.clientX - rect.left) / rect.width * 2 - 1) * 4;
            targetY = -((event.clientY - rect.top) / rect.height * 2 - 1) * 2;
            start();
        };
        hero.addEventListener("pointermove", move);
        hero.addEventListener("pointerleave", reset);
        query.addEventListener("change", reset);
        return () => { cancelAnimationFrame(frame); hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", reset); query.removeEventListener("change", reset); };
    }, []);
    return (
        <section ref={heroRef} id="hero" className={styles.hero} aria-labelledby="hero-heading">
            <div className={styles.scene} aria-hidden="true">
                <Image src="/images/hero/office.webp" alt="" fill priority sizes="100vw" className={styles.office} />
                <div className={styles.plant}>
                    <Image src="/images/hero/plant.webp" alt="" fill sizes="(max-width: 600px) 55vw, 34vw" className={styles.cutout} />
                </div>
                <div className={styles.builders}>
                    <Image src="/images/hero/builders.webp" alt="" fill priority sizes="(max-width: 600px) 110vw, (max-width: 1100px) 85vw, 76vw" className={styles.cutout} />
                </div>
            </div>
            <header className={styles.header}>
                <a className={styles.skip} href="#programmes">Skip to main content</a>
                <CommonGroundLogo href="/" size="md" theme="dark" />
                <nav className={styles.desktopNav} aria-label="Main navigation">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href}>{item.label}</Link>
                    ))}
                </nav>
                <Link className={styles.headerAction} href="/programs">Get involved <span aria-hidden="true">↗</span></Link>
                <details className={styles.mobileMenu}>
                    <summary>Menu</summary>
                    <nav aria-label="Mobile navigation">
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href}>{item.label}</Link>
                        ))}
                        <Link href="/programs">Get involved <span aria-hidden="true">↗</span></Link>
                    </nav>
                </details>
            </header>
            <div className={styles.content}>
                <p className={styles.eyebrow}><span aria-hidden="true" />An institution for emerging builders</p>
                <h1 id="hero-heading" className={styles.heading}>
                    <span>The future isn’t</span>{" "}
                    <span>something you wait for.</span>{" "}
                    <span className={styles.accent}>It’s something you build.</span>
                </h1>
                <p className={styles.description}>
                    We bring ambitious minds together to challenge convention,
                    explore new possibilities and build solutions that move the world forward.
                </p>
                <div className={styles.actions}>
                    <Link className={styles.primaryAction} href="/programs">Explore opportunities <span aria-hidden="true">↗</span></Link>
                    <Link className={styles.secondaryAction} href="/values">Discover IBA</Link>
                </div>
            </div>
        </section>
    );
}
