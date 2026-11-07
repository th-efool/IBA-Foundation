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
    return (
        <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
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
