"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NewsletterForm from "../components/newsletterform";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";
import { fetchGroupedHours, FALLBACK_HOURS, type GroupedHourEntry } from "@/lib/hours";
import { ORDER_ONLINE_URL } from "@/lib/order-menu";

// Re-fetch the live hours on this interval so the footer picks up changes
// made on the reservations backend without needing a page reload.
const HOURS_POLL_INTERVAL_MS = 5 * 60 * 1000;

export default function Footer() {
    const pathname = usePathname();
    const [info, setInfo] = useState<RestaurantInfo>(RESTAURANT_FALLBACK);
    useEffect(() => { getRestaurantInfo().then(setInfo); }, []);

    const [hours, setHours] = useState<GroupedHourEntry[] | null>(FALLBACK_HOURS);

    useEffect(() => {
        let cancelled = false;

        const loadHours = () => {
            fetchGroupedHours()
                .then((grouped) => {
                    if (cancelled) return;
                    setHours(grouped);
                })
                .catch(() => {
                    if (cancelled) return;
                    setHours(FALLBACK_HOURS);
                });
        };

        loadHours();
        const interval = setInterval(loadHours, HOURS_POLL_INTERVAL_MS);
        return () => {
            cancelled = true;
            clearInterval(interval);
        };
    }, []);

    return (

        <footer data-bg="/assets/footer-bg-siena.webp" className="relative font-sans w-full bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/80 pointer-events-none" />

            <div className="relative z-10">
                <NewsletterForm />
            </div>

            <div className="relative z-10 w-full h-[40px] md:h-[58px]">
                <img width={1512} height={58} loading="lazy"
                    src="/assets/divisor_negro.svg"
                    alt="divider"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* ── Main grid ──────────────────────────────────────── */}
            <div className="siena-ui-12">

                {/* Left — Logo + info */}
                <div className="siena-ui-13">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#e0b265]/20 blur-3xl rounded-full" />
                        <img
                            width={730} height={422}
                            loading="lazy"
                            src="/assets/logofooter.webp"
                            alt="Siena"
                            className="relative w-[160px] md:w-[200px] lg:w-[261px] mb-2 lg:mb-[20px]"
                        />
                    </div>

                    <p className="siena-ui-14">
                        Your taste of Siena, anytime.
                    </p>
                    <p className="siena-ui-15">
                        From handcrafted dishes to unforgettable moments, enjoy Siena favorites fresh, easy, and ready when you are.
                    </p>

                    {/* Address */}
                    <a
                        href={info.maps_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="siena-ui-16 group"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0"><use href="/assets/siena-ui-icons.svg#siena-icon-2" className="fill-current" /></svg>
                        <span className="siena-ui-17">
                            {info.address}
                        </span>
                    </a>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        <a
                            href="/reservations"
                            className="siena-ui-18 group"
                        >
                            <span className="siena-ui-19" />
                            <span className="siena-ui-20">Reservations</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" className="siena-ui-21"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-ui-22" /></svg>
                        </a>

                        <a
                            href={ORDER_ONLINE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="siena-ui-23 group"
                        >
                            <span>Order Online</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform duration-300"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-ui-24" /></svg>
                        </a>
                    </div>
                </div>

                {/* Nav columns — side by side on all sizes */}
                <div className="siena-ui-25">

                    {/* Restaurant column */}
                    <div className="flex flex-col gap-2.5 items-start lg:relative lg:pl-8">
                        <div className="siena-ui-26" />
                        <div className="flex flex-col mb-1">
                            <p className="siena-ui-27" style={{ fontFamily: "'Palmore-Light', serif" }}>
                                Restaurant
                            </p>
                            <div className="w-8 h-[2px] bg-[#e0b265] mt-2" />
                        </div>
                        {[
                            { label: "Home", href: "/" },
                            { label: "Menu", href: "/menus" },
                            { label: "Events", href: "/events" },
                            { label: "Gift Card", href: "/gift-card" },
                            { label: "Live Music Fridays", href: "/live-music-fridays" },
                        ].map(({ label, href }) => {
                            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={`text-[13px] md:text-[15px] leading-[21px] uppercase whitespace-nowrap hover:text-[#e0b265] hover:translate-x-1 transition-all duration-200 inline-block ${isActive ? "text-[#e0b265] border-b border-[#e0b265]" : "text-white"}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* More column */}
                    <div className="flex flex-col gap-2.5 items-start lg:relative lg:pl-8">
                        <div className="siena-ui-26" />
                        <div className="flex flex-col mb-1">
                            <p className="siena-ui-27" style={{ fontFamily: "'Palmore-Light', serif" }}>
                                More
                            </p>
                            <div className="w-8 h-[2px] bg-[#e0b265] mt-2" />
                        </div>
                        {[
                            { label: "About Us", href: "/about-us" },
                            { label: "Gallery", href: "/gallery" },
                            { label: "Careers", href: "/careers" },
                            { label: "Contact Us", href: "/contact-us" },
                        ].map(({ label, href }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={`text-[13px] md:text-[15px] leading-[21px] uppercase whitespace-nowrap hover:text-[#e0b265] hover:translate-x-1 transition-all duration-200 inline-block ${isActive ? "text-[#e0b265] border-b border-[#e0b265]" : "text-white"}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Social + Phone + Hours */}
                <div className="siena-ui-28">
                    <div className="siena-ui-26" />

                    {/* Social */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex flex-col mb-2">
                            <p className="siena-ui-27" style={{ fontFamily: "'Palmore-Light', serif" }}>
                                Social Media
                            </p>
                            <div className="w-8 h-[2px] bg-[#e0b265] mt-2 mx-auto lg:mx-0" />
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="https://www.instagram.com/sienaatl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="siena-ui-29 group">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-4" className="fill-white group-hover:fill-[#1b312e] transition-colors duration-300" /></svg>
                            </a>
                            <a href="https://www.facebook.com/sienaatl/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="siena-ui-29 group">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-5" className="fill-white group-hover:fill-[#1b312e] transition-colors duration-300" /></svg>
                            </a>
                            <a href="https://www.tiktok.com/@sienaatl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="siena-ui-29 group">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-6" className="fill-white group-hover:fill-[#1b312e] transition-colors duration-300" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex flex-col mb-2">
                            <p className="siena-ui-27" style={{ fontFamily: "'Palmore-Light', serif" }}>
                                Phone
                            </p>
                            <div className="w-8 h-[2px] bg-[#e0b265] mt-2 mx-auto lg:mx-0" />
                        </div>
                        <a href={`tel:${info.phone.replace(/\D/g, '')}`} className="siena-ui-30 group">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0"><use href="/assets/siena-ui-icons.svg#siena-icon-7" className="fill-current" /></svg>
                            {info.phone}
                        </a>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex flex-col mb-2">
                            <p className="siena-ui-27" style={{ fontFamily: "'Palmore-Light', serif" }}>
                                Hours
                            </p>
                            <div className="w-8 h-[2px] bg-[#e0b265] mt-2 mx-auto lg:mx-0" />
                        </div>
                        <div className="siena-ui-31">
                            {hours === null && (
                                <p className="whitespace-nowrap text-white/60">Loading hours…</p>
                            )}
                            {hours?.map(({ label, value }) => (
                                <p key={label} className="whitespace-nowrap">
                                    <span className="text-white/60">{label}</span> {value}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Legal */}
            <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 lg:px-0">
                <div className="siena-ui-32" />
            </div>
            <div className="relative z-10 w-full py-5 px-6">
                <div className="siena-ui-33">
                    <Link href="/privacy-policy" className="hover:text-[#e0b265] transition">
                        Privacy Notice
                    </Link>
                    <span className="hidden sm:inline text-white/30">|</span>
                    <Link href="/terms-of-service" className="hover:text-[#e0b265] transition">
                        Terms of Service
                    </Link>
                </div>
            </div>

        </footer>

    );
}
