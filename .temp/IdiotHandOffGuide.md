# Hero redesign: implementation handoff

## A. Execution contract

**READY — specified for execution, not yet implemented or visually tested.**

Replace the homepage hero with a reference-inspired composition using **all three supplied `.temp` assets**. Keep actual HTML typography over a layered scene: office behind, plant at left, builders prominent at right. Use white sans-serif type, blue accents, simplified navigation and two actions. This guide is the sole deliverable; do not interpret it as a request to apply changes or deploy.

Root: `D:\OneDrive - officeplus\Documents\GitHub\IBA-Foundation`. Shell: PowerShell. Paths below are relative to root. Observed branch `main`, revision `61964029e5cfb6866ab7b03190dc45662926d86e`. Before authoring, only `.temp/` was untracked, containing Layer2A.png, Layer2B.png and Layer2C.png. Preserve them. Node v24.17.0, npm 11.18.0, existing package-lock.json and node_modules. Next 16.2.10, React 19.2.4, TypeScript 5 and Tailwind 4. No AGENTS.md found in repository or immediate parent.

Observed: Hero is mounted by `src/app/(landing)/page.tsx`, followed by ProgrammesSection (`#programmes`), ValuesSection (`#values`) and InstitutionalFooter. Current hero uses video, architecture cutouts, serif heading and gold accents. Its `#competitions` and `#about` actions have no matching landing targets. `/programs`, `/values`, `/showcase` and `/playbooks` exist. Global sans font is Geist. The shared CommonGroundLogo is the current real brand mark.

Design decisions: retain the real logo instead of drawing the reference's substitute white L mark. Replace only the rendered hero; preserve later sections and global gold tokens. Use static layers rather than carrying architectural parallax into the new scene. No new dependencies, animation, video or client component state. Keep the old hero helper source/media available for rollback, unmounted by the new Hero. The supplied screenshot is a visual reference, not a background asset, because it contains baked-in text.

Executor sequence:
1. Check baseline and all S1 assets before editing; save the current Hero.tsx outside the repository for recovery.
2. Apply S1–S3 in order, using exact payloads.
3. Run V1–V5 and compare actual behavior with acceptance criteria.
4. Report changed paths, checks and unresolved failures.

Stop dependent steps if a target is missing or the baseline checksum differs. Report the exact path and mismatch; never overwrite unrelated work. If partially applied, compare existing files to full payloads and S1 outputs, verify matching postconditions and resume at the first unapplied step. Report unfamiliar failures with exact error and step ID. No commit, push or deployment is included.

## B. Requirements and acceptance map

| ID | Observable requirement | Steps | Checks |
| --- | --- | --- | --- |
| R1 | All three supplied assets form the scene; builders right, plant left, office behind | S1–S3 | V2,V3,V5 |
| R2 | White sans heading, blue final sentence, reference copy and two actions | S2,S3 | V1,V3 |
| R3 | Real logo, compact desktop navigation, usable mobile navigation | S2,S3 | V3,V4 |
| R4 | Working CTA destinations; existing sections and routes preserved | S2 | V3,V4 |
| R5 | Responsive readable layout, keyboard focus, no overflow or motion | S2,S3 | V3,V4,V5 |
| R6 | Local optimized assets; no new dependencies or hero video/parallax | S1,S2 | V1,V5 |

No missing design inputs remain after inspection of `.temp`. Coverage below is proposed, not already executed.

## C. File-change manifest

| Path | Operation | Step |
| --- | --- | --- |
| `public/images/hero/builders.webp` | Generate from `.temp/Layer2A.png` | S1 |
| `public/images/hero/plant.webp` | Generate from `.temp/Layer2B.png` | S1 |
| `public/images/hero/office.webp` | Generate from `.temp/Layer2C.png` | S1 |
| `src/client/components/screens/landing/01-hero/Hero.tsx` | Replace entire file | S2 |
| `src/client/components/screens/landing/01-hero/Hero.module.css` | Create | S3 |
| `.next/**`, `tsconfig.tsbuildinfo` if emitted | Local verification output, do not commit | V1,V2 |

No dependency/lockfile/global CSS/shared brand modifications. Do not delete or overwrite `.temp` sources or existing `layer-2*.webp`, hero poster or videos. Old helper files remain unused by Hero; removing them or shared hls.js is outside scope.

## D. Ordered implementation steps

### S1 — Generate production assets

Prerequisite: the three PNG files exist in `.temp` and visually match the inspected sources: A = group/table/laptop cutout; B = potted plant with soft edges; C = full office background. Do not infer their roles from the old hero's layer numbering.

Verified source metadata and SHA256 (check with `Get-ChildItem .temp/*.png | Get-FileHash -Algorithm SHA256`):

| Source | Dimensions | Alpha | SHA256 |
| --- | --- | --- | --- |
| `.temp/Layer2A.png` | 1671×941 | yes | `7D2D468DCB94175C6E7D66B41EF705E7B982BFF5972C4D8756C04ACAC838016B` |
| `.temp/Layer2B.png` | 1024×1536 | yes | `85FBC4E21187F9703FDEF85B8F5221D08923487CC7A191677D9CAF63D7B069E1` |
| `.temp/Layer2C.png` | 1670×941 | no | `3D6BC39CA9E0F9CB012DD503F160876CF7E05125D98515A985E61D5D37786697` |

Stop S1 if these differ; a changed source needs fresh inspection before using the fixed composition.

Run from repository root in PowerShell. The installed `sharp` package is resolved from this checkout, not downloaded. Lossless WebP preserves transparency and source detail; no image editing/generation is required. If sharp cannot resolve, stop and report the prerequisite instead of changing dependencies.

```powershell
node -e 'const sharp=require("sharp"); console.log("sharp",sharp.versions.sharp);'
@'
const fs = require("fs");
const sharp = require("sharp");
const pairs = [
  [".temp/Layer2A.png", "public/images/hero/builders.webp"],
  [".temp/Layer2B.png", "public/images/hero/plant.webp"],
  [".temp/Layer2C.png", "public/images/hero/office.webp"],
];
(async () => {
  for (const [source, target] of pairs) {
    if (!fs.existsSync(source)) throw new Error("Missing " + source);
    const input = await sharp(source).metadata();
    const expected = await sharp(source).webp({ lossless: true }).toBuffer();
    if (fs.existsSync(target)) {
      if (!fs.readFileSync(target).equals(expected)) throw new Error("Existing target differs: " + target);
    } else {
      fs.writeFileSync(target, expected, { flag: "wx" });
    }
    const output = await sharp(target).metadata();
    if (output.format !== "webp" || input.width !== output.width || input.height !== output.height || input.hasAlpha !== output.hasAlpha) {
      throw new Error("Metadata mismatch: " + target);
    }
    console.log(target, output.width, output.height, "alpha=" + output.hasAlpha, expected.length + " bytes");
  }
})().catch(error => { console.error(error); process.exit(1); });
'@ | node
```

Postcondition: all three WebP outputs exist, have original dimensions and alpha flags, and match repeat generation byte-for-byte under the same installed sharp. Visually inspect outputs; people, plant edges and office must remain intact. Existing `public/images/hero` directory was observed. Source PNGs remain untouched. Record sharp version and sizes in report. If a generation failure leaves partial outputs, rerunning verifies completed files before continuing.

### S2 — Replace Hero.tsx

Prerequisite: S1 passes. Verify baseline:

```powershell
Get-FileHash -Algorithm SHA256 'src/client/components/screens/landing/01-hero/Hero.tsx'
```

Expected SHA256: `83537715DC958CBD6DAD59617C11F6B7271ED5A788E8DDFA97A13A5A1CAA07CD`. Replace entire `src/client/components/screens/landing/01-hero/Hero.tsx` with:

```tsx
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
```

Postcondition: named Hero export remains compatible with existing index/caller. One h1; decorative scene ignored by assistive technology. No old hero component imports, effects or video. All links use existing routes; skip goes beyond hero to existing programmes. Mobile menu uses native disclosure; no new state or runtime library.

### S3 — Create Hero.module.css

Prerequisite: S2 applied. Create `src/client/components/screens/landing/01-hero/Hero.module.css`; target must not exist unless identical to this payload:

```css
.hero {
    position: relative;
    isolation: isolate;
    min-height: max(760px, 100svh);
    overflow: hidden;
    background: #10191d;
    color: #fff;
    font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}
.scene { position: absolute; inset: 0; z-index: -2; pointer-events: none; }
.office { object-fit: cover; object-position: center; filter: brightness(.7) saturate(.75); }
.plant { position: absolute; left: -4%; top: -5%; width: 34%; height: 110%; opacity: .65; }
.builders { position: absolute; right: -5%; bottom: 0; width: 76%; aspect-ratio: 1671 / 941; }
.cutout { object-fit: contain; object-position: bottom; }
.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: linear-gradient(90deg, rgba(9,17,21,.95), rgba(9,17,21,.88) 30%, rgba(9,17,21,.57) 48%, rgba(9,17,21,.05) 76%),
        linear-gradient(180deg, rgba(6,13,17,.55), transparent 30%, transparent 80%, rgba(6,13,17,.18));
}
.header { position: relative; z-index: 3; display: flex; align-items: center; gap: 36px; width: min(100%, 1920px); margin-inline: auto; padding: 30px clamp(24px, 4.5vw, 88px); }
.desktopNav { display: flex; align-items: center; gap: clamp(24px, 2.4vw, 44px); margin-left: auto; }
.desktopNav a { font-size: 17px; font-weight: 500; text-decoration: none; }
.desktopNav a:hover { color: #a8ceff; }
.headerAction, .primaryAction, .secondaryAction { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 60px; padding: 16px 24px; border-radius: 8px; font-size: 18px; font-weight: 600; line-height: 1.4; text-decoration: none; text-align: center; }
.headerAction, .primaryAction { color: #0b1720; background: #e2edff; border: 1px solid #f1f6ff; }
.headerAction { min-height: 44px; padding: 10px 16px; font-size: 16px; }
.headerAction:hover, .primaryAction:hover { background: #fff; }
.secondaryAction { color: #fff; border: 1px solid #ffffffcc; background: #08101540; }
.secondaryAction:hover { background: #ffffff20; }
.content { width: min(100%, 1920px); margin-inline: auto; padding: clamp(64px, 8vh, 100px) clamp(24px, 4.5vw, 88px) 120px; }
.eyebrow { display: flex; align-items: center; gap: 12px; max-width: 720px; margin: 0 0 30px; color: #acd4ff; font-size: 16px; line-height: 1.5; letter-spacing: .035em; text-transform: uppercase; }
.eyebrow span { width: 12px; height: 12px; flex: 0 0 12px; border-radius: 50%; background: #69aaff; }
.heading { max-width: 790px; margin: 0; font-size: clamp(44px, 3.55vw, 64px); font-weight: 500; line-height: 1.08; letter-spacing: -.035em; }
.heading > span { display: block; }
.accent { color: #8fbfff; }
.description { max-width: 520px; margin: 36px 0 0; color: #f0f3f5; font-size: 20px; line-height: 1.55; }
.actions { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 34px; }
.mobileMenu { display: none; }
.hero a:focus-visible, .hero summary:focus-visible { outline: 3px solid #a8ceff; outline-offset: 5px; }
.skip { position: absolute; top: 12px; left: 24px; padding: 12px 16px; color: #10191d; background: #fff; transform: translateY(-200%); }
.skip:focus { transform: translateY(0); z-index: 5; }
@media (max-width: 1100px) {
    .header { gap: 24px; }
    .desktopNav { gap: 20px; }
    .desktopNav a { font-size: 15px; }
    .headerAction { font-size: 14px; }
    .heading { max-width: 670px; font-size: 52px; }
    .builders { width: 85%; right: -15%; }
    .hero::before { background: linear-gradient(90deg, #091115f2, #091115d9 45%, #09111540); }
}
@media (max-width: 900px) {
    .desktopNav, .headerAction { display: none; }
    .mobileMenu { display: block; margin-left: auto; position: relative; }
    .mobileMenu summary { cursor: pointer; min-height: 44px; padding: 10px 14px; border: 1px solid #ffffff99; border-radius: 6px; }
    .mobileMenu nav { position: absolute; right: 0; top: calc(100% + 12px); display: grid; width: 220px; padding: 12px; border: 1px solid #536673; border-radius: 8px; background: #101b24; box-shadow: 0 16px 40px #0006; }
    .mobileMenu nav a { display: block; padding: 12px; min-height: 44px; text-decoration: none; border-radius: 4px; }
    .mobileMenu nav a:hover { background: #263c4a; }
}
@media (max-width: 600px) {
    .hero { min-height: 100svh; }
    .header { padding: 24px; gap: 16px; }
    .plant { width: 55%; left: -15%; opacity: .3; }
    .builders { width: 110%; right: -18%; opacity: .8; }
    .hero::before { background: linear-gradient(180deg, #091115b8, #091115eb 34%, #091115eb 67%, #09111566); }
    .content { padding: 58px 24px 220px; }
    .eyebrow { font-size: 12px; gap: 10px; margin-bottom: 24px; }
    .eyebrow span { width: 9px; height: 9px; flex-basis: 9px; }
    .heading { font-size: clamp(34px, 8.8vw, 50px); line-height: 1.12; letter-spacing: -.03em; }
    .heading > span { display: inline; }
    .description { margin-top: 26px; font-size: 17px; line-height: 1.6; }
    .actions { flex-direction: column; gap: 12px; margin-top: 28px; }
    .primaryAction, .secondaryAction { width: 100%; min-height: 54px; font-size: 16px; }
}
```

Postcondition: office fills background, plant adds left environmental depth, builders are grounded at bottom right. Overlay is above all image layers and below UI. At reference width 1774px, builders occupy roughly right 76% with their left transparent area under the reading gradient; copy starts ~80px from left. At phone widths a 220px bottom reserve shows the group below actions. Desktop hero has minimum 760px height; short viewports scroll naturally. Mobile menu replaces header links at <=900px. No animation or global CSS changes.

## E. Verification and failure handling

### V1 — Static checks (R2,R5,R6)

PowerShell, repository root, after S1–S3:

```powershell
npx tsc --noEmit
npx eslint src/client/components/screens/landing/01-hero/Hero.tsx
git diff --check
git diff -- package.json package-lock.json
```

Expected: first three exit 0; dependency diff empty. Record exact failures; compare pre-change baseline before attributing unrelated errors. No automated visual test framework is needed for this scoped change.

### V2 — Production build (R1,R6)

```powershell
npm run build
npm run start
```

Expected: build exits 0 and production homepage renders at `http://localhost:3000/`. Start stays running until stopped. If port is occupied use `npm run start -- --port 3001`. Font download/network failures are environmental blockers: report them, do not alter global fonts. S1 must pass before visual testing.

### V3 — Visual acceptance (R1–R5)

Inspect 1774×887, 1440×900, 1024×768, 768×1024, 390×844 and 320×568. At reference size expect compact top header, actual IBA logo left, four links and pale CTA right; eyebrow around 175–220px down; three-line sans heading, final sentence blue; paragraph and two horizontal actions. Builders must be visible on right, grounded with their table at the bottom, plant subdued at left and office behind. No old sculpture, drafting panel, ticker or video. Layer edges must not appear as opaque boxes. Do not require the reference's alternate logo or whiteboard, neither is supplied as a production asset.

At phone size, text wraps naturally, CTAs stack, group remains visible in reserved bottom area and Menu fits alongside logo. All widths: no horizontal scrollbar, no text/control overlap, one h1, readable copy. At 200% browser zoom verify controls fit and mobile header replaces links before collision. Vertical scrolling is intentional on short viewports. Programmes, Values and footer remain reachable and unchanged. Any unreadable text, clipped control or obvious compositing seam blocks signoff; report screenshot and viewport rather than inventing a different composition.

### V4 — Links and accessibility (R3–R5)

Tab from page top: skip link appears; Enter jumps beyond hero to programmes. Tab through logo, navigation and actions; visible focus required. About/Discover IBA -> `/values`; Programs/Get involved/Explore opportunities -> `/programs`; remaining links -> matching routes, all without 404. At <=900px Enter/Space opens/closes Menu; Tab reaches all five mobile links. Native details does not promise Escape dismissal. Test touch operation too.

Use accessibility inspection: one h1, named section, decorative images ignored and descriptive link names. Measure contrast on rendered image: 4.5:1 normal text, 3:1 large text. Static colors alone cannot prove contrast over imagery. Any failure needs exact location and viewport. Do not claim conformance without this check.

### V5 — Media, fallback and scope (R1,R4–R6)

Hard reload with Network open: office and builders load successfully; scroll hero into view and confirm plant loads. Requests may use Next optimized URLs. No old hero video/HLS/layer asset requests originate from Hero. Pointer movement causes no scene movement; reduced motion changes nothing. Disable JavaScript: HTML links and native disclosure still work. Block all three new images and reload: dark base keeps text/actions usable; unblock and verify recovery.

```powershell
git status --short
git diff -- src/client/components/screens/landing/01-hero/Hero.tsx
```

Expected only manifest application changes, this guide and pre-existing untracked `.temp` sources. Inspect new CSS and images separately since untracked files do not appear in ordinary diff. No changes to later sections, global tokens, shared logo, package files or routes.

Recovery: restore only Hero.tsx from the pre-execution saved copy, after preserving any newer unrelated edits; remove only generated WebPs and CSS created by this guide if they have no subsequent edits. Keep supplied PNGs and other `.temp` files. Never reset/clean the whole tree or recursively delete directories. Old helpers/media make rollback possible. No remote actions or migrations occur.

## F. Completion report contract

Report applied S IDs, changed paths, sharp version/output dimensions/alpha/sizes, V results, desktop/mobile screenshots or observations, exact failures and skipped checks. Complete means S1–S3 and V1–V5 pass; otherwise explicitly report incomplete work and its blocker.

Author validation: read current hero and helpers, caller, globals, logo, routes, manifests and configuration; inspected all three supplied PNGs visually and the reference; verified image metadata/source checksums, Hero checksum and Git baseline. Installed sharp resolves successfully. Existing-source `npx tsc --noEmit` passed. Extracted proposed TSX passed TypeScript transpile syntax diagnostics (zero); all seven code fences are paired and sections A–F are present. Proposed source has not been applied; generated outputs, production build and browser rendering remain unexecuted. This handoff reuses existing Image/Link/logo conventions and adds no external library API requiring research.
