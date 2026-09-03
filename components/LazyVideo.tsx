"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
    src: string;
    /** Smaller encode served below 768px. Falls back to `src` when omitted. */
    mobileSrc?: string;
    poster?: string;
    /**
     * Load the poster immediately instead of with the video.
     *
     * Set this on an above-the-fold video. A `<video>` is an LCP candidate, so a
     * deferred one paints late and becomes a *new*, larger LCP candidate — which
     * is worse than no deferral at all. An eager poster makes the element paint
     * early; later frames land in the same element at the same size, so nothing
     * larger ever appears and LCP stays put.
     */
    eagerPoster?: boolean;
    className?: string;
};

/**
 * Decorative background video that stays off the network until the page has
 * loaded and the element is near the viewport.
 *
 * `preload="none"` does nothing on its own here: `autoPlay` makes the browser
 * fetch the file immediately, so the only way to hold the bytes back is to keep
 * `src` off the element until we actually want them.
 */
export default function LazyVideo({ src, mobileSrc, poster, eagerPoster, className }: Props) {
    const ref = useRef<HTMLVideoElement>(null);
    const [armed, setArmed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let io: IntersectionObserver | undefined;

        // Wait for load so the video never competes with the LCP image for
        // bandwidth, then only fetch once it's actually close to being seen.
        const arm = () => {
            io = new IntersectionObserver(
                (entries) => {
                    if (entries.some((e) => e.isIntersecting)) {
                        io?.disconnect();
                        setArmed(true);
                    }
                },
                { rootMargin: "200px" }
            );
            io.observe(el);
        };

        if (document.readyState === "complete") {
            arm();
            return () => io?.disconnect();
        }

        window.addEventListener("load", arm, { once: true });
        return () => {
            window.removeEventListener("load", arm);
            io?.disconnect();
        };
    }, []);

    // Resolved on the client so a phone never pulls the desktop encode.
    const resolved = armed
        ? mobileSrc && window.matchMedia("(max-width: 767px)").matches
            ? mobileSrc
            : src
        : undefined;

    useEffect(() => {
        const el = ref.current;
        if (!el || !resolved) return;
        // The src attribute alone restarts resource selection, but calling load()
        // makes that explicit, and autoPlay takes over once enough has buffered.
        el.load();
    }, [resolved]);

    return (
        <video
            ref={ref}
            src={resolved}
            poster={eagerPoster || armed ? poster : undefined}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            className={className}
        />
    );
}
