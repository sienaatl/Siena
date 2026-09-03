"use client";
import { useEffect } from "react";

/**
 * Applies CSS background images only once their element nears the viewport.
 *
 * A `background-image` has no lazy-loading equivalent to `loading="lazy"`, so
 * every decorative section background downloads during the initial load and
 * competes with the LCP image. Elements opt in with `data-bg="/path.webp"`
 * instead of setting `backgroundImage` directly; sizing/position/repeat stay in
 * CSS, so nothing about layout depends on when the file actually arrives.
 *
 * Mounted once from the root layout.
 */
export default function LazyBackgrounds() {
    useEffect(() => {
        const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-bg]"));
        if (!targets.length) return;

        const apply = (el: HTMLElement) => {
            const url = el.dataset.bg;
            if (!url) return;
            el.style.backgroundImage = `url('${url}')`;
            delete el.dataset.bg;
            el.removeAttribute("data-bg");
        };

        if (!("IntersectionObserver" in window)) {
            targets.forEach(apply);
            return;
        }

        // Generous margin: these sit behind content, so they should already be
        // painted by the time the section scrolls into view.
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (!e.isIntersecting) continue;
                    io.unobserve(e.target);
                    apply(e.target as HTMLElement);
                }
            },
            { rootMargin: "400px" }
        );

        targets.forEach((t) => io.observe(t));
        return () => io.disconnect();
    }, []);

    return null;
}
