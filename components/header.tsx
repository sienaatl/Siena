"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const mobileLinks = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/events", label: "Events" },
        { href: "/gift-card", label: "Gift Card" },
        { href: "/contact-us", label: "Gallery" },
        { href: "/careers", label: "Careers" },
        { href: "/about", label: "Contact Us" },
    ];

    return (
        <>
            <header className={`w-full h-[72px] md:h-[92px] fixed top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#F5EFDD] shadow-sm"
                : "backdrop-blur-md border-white/10"
                }`}>
                <div className="max-w-[1180px] mx-auto h-full flex items-center justify-between px-4 md:px-0 md:py-6 relative">

                    <Link href="/" className="block">
                        <div className="w-[70px] h-[40px] md:w-[90px] md:h-[50px]">
                            <img
                                src={scrolled ? "/assets/logo_siena.svg" : "/assets/logo_beige.png"}
                                alt="logo"
                                className="w-full h-full object-contain cursor-pointer transition-all duration-300"
                            />
                        </div>
                    </Link>

                    {/* Nav Desktop */}
                    <nav className="hidden md:flex items-center gap-4 text-[16px] font-semibold uppercase absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className={`px-3 flex justify-center relative ${scrolled ? (pathname === "/" ? "text-black after:w-full" : "text-gray-700") : "text-[#F5EFDD]"
                            } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            Home
                        </Link>
                        <Link href="/menu" className={`px-3 flex justify-center relative ${scrolled ? (pathname === "/menu" ? "text-black after:w-full" : "text-gray-700") : "text-[#F5EFDD]"
                            } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            Menu
                        </Link>
                        <Link href="/events" className={`px-3 whitespace-nowrap flex justify-center relative ${scrolled ? "text-gray-700" : "text-[#F5EFDD]"
                            } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            Events
                        </Link>
                        <Link href="/gift-card" className={`px-3 whitespace-nowrap flex justify-center relative ${scrolled ? (pathname === "/gift-card" ? "text-black after:w-full" : "text-gray-700") : "text-[#F5EFDD]"
                            } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            Gift Card
                        </Link>

                        <div className="relative group inline-block z-[50]">
                            <div className={`px-3 flex items-center gap-1 justify-center relative cursor-pointer ${scrolled ? "text-gray-700" : "text-[#F5EFDD]"
                                } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                                More
                                <img
                                    src="/assets/Arrow_Down.svg"
                                    alt="arrow"
                                    className={`w-[16px] h-[16px] transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
                                />
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[280px] bg-[#F5EFDD] l shadow-xl p-4 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <Link href="/contact-us" className="flex items-center justify-center gap-4 p-3 hover:bg-[#59021F] hover:text-[#F5EFDD] transition text-gray-700">
                                    <span className="text-[16px] font-semibold uppercase text-center">Gallery</span>
                                </Link>
                                <Link href="/careers" className="flex items-center justify-center gap-4 p-3 hover:bg-[#59021F] hover:text-[#F5EFDD] transition text-gray-700">
                                    <span className="text-[16px] font-semibold uppercase text-center">Careers</span>
                                </Link>
                                <Link href="/about" className="flex items-center justify-center gap-4 p-3 hover:bg-[#59021F] hover:text-[#F5EFDD] transition text-gray-700">
                                    <span className="text-[16px] font-semibold uppercase text-center">Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link href="/order_online">
                            <button className="cursor-pointer px-4 md:px-9 py-2 font-semibold text-[14px] md:text-lg leading-[20px] md:leading-[24px] border transition bg-[#58021F] text-[#F5EFDD] border-transparent hover:bg-[#F5EFDD] hover:text-[#59021F] hover:border-[#59021F]">
                                ORDER ONLINE
                            </button>
                        </Link>

                        {/* Instagram - solo desktop */}
                        <a
                            href="https://www.instagram.com/sienaatl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex group p-2 cursor-pointer items-center justify-center transition-colors duration-300 border border-[#58021F] bg-[#58021F] hover:bg-[#F5EFDD]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[24px] h-[24px]" fill="none">
                                <path
                                    d="M8.67699 0H21.2437C26.031 0 29.9206 3.88968 29.9206 8.67699V21.2437C29.9206 23.5449 29.0065 25.752 27.3792 27.3792C25.752 29.0065 23.5449 29.9206 21.2437 29.9206H8.67699C3.88968 29.9206 0 26.031 0 21.2437V8.67699C0 6.37571 0.91418 4.16868 2.54143 2.54143C4.16868 0.91418 6.37571 0 8.67699 0ZM8.37778 2.99206C6.9494 2.99206 5.57952 3.55949 4.5695 4.5695C3.55949 5.57952 2.99206 6.9494 2.99206 8.37778V21.5429C2.99206 24.52 5.40067 26.9286 8.37778 26.9286H21.5429C22.9712 26.9286 24.3411 26.3612 25.3511 25.3511C26.3612 24.3411 26.9286 22.9712 26.9286 21.5429V8.37778C26.9286 5.40067 24.52 2.99206 21.5429 2.99206H8.37778ZM22.8145 5.23611C23.3105 5.23611 23.7861 5.43313 24.1368 5.78383C24.4875 6.13453 24.6845 6.61019 24.6845 7.10615C24.6845 7.60212 24.4875 8.07777 24.1368 8.42847C23.7861 8.77917 23.3105 8.97619 22.8145 8.97619C22.3185 8.97619 21.8429 8.77917 21.4922 8.42847C21.1415 8.07777 20.9444 7.60212 20.9444 7.10615C20.9444 6.61019 21.1415 6.13453 21.4922 5.78383C21.8429 5.43313 22.3185 5.23611 22.8145 5.23611ZM14.9603 7.48016C16.9442 7.48016 18.8468 8.26825 20.2496 9.67105C21.6524 11.0738 22.4405 12.9765 22.4405 14.9603C22.4405 16.9442 21.6524 18.8468 20.2496 20.2496C18.8468 21.6524 16.9442 22.4405 14.9603 22.4405C12.9765 22.4405 11.0738 21.6524 9.67105 20.2496C8.26825 18.8468 7.48016 16.9442 7.48016 14.9603C7.48016 12.9765 8.26825 11.0738 9.67105 9.67105C11.0738 8.26825 12.9765 7.48016 14.9603 7.48016ZM14.9603 10.4722C13.77 10.4722 12.6284 10.9451 11.7868 11.7868C10.9451 12.6284 10.4722 13.77 10.4722 14.9603C10.4722 16.1506 10.9451 17.2922 11.7868 18.1339C12.6284 18.9756 13.77 19.4484 14.9603 19.4484C16.1506 19.4484 17.2922 18.9756 18.1339 18.1339C18.9756 17.2922 19.4484 16.1506 19.4484 14.9603C19.4484 13.77 18.9756 12.6284 18.1339 11.7868C17.2922 10.9451 16.1506 10.4722 14.9603 10.4722Z"
                                    className="fill-[#F5EFDD] group-hover:fill-[#59021F] transition-colors duration-300"
                                />
                            </svg>
                        </a>

                        {/* Botón hamburguesa - solo mobile */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            className="md:hidden flex items-center justify-center w-[42px] h-[42px] border border-[#59021F] bg-transparent cursor-pointer transition-colors duration-300"
                        >
                            <div className="relative w-[20px] h-[16px] flex flex-col justify-between">
                                <span className="block h-[2px] w-full bg-[#59021F]"></span>
                                <span className="block h-[2px] w-full bg-[#59021F]"></span>
                                <span className="block h-[2px] w-full bg-[#59021F]"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay del menú móvil */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`md:hidden fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Menú lateral móvil - completo desde arriba */}
            <aside
                className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-[#F5EFDD] z-[70] shadow-2xl transition-transform duration-300 overflow-y-auto ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header interno del menú */}
                <div className="flex items-center justify-between px-4 h-[72px] border-b border-[#59021F]/10">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="block">
                        <div className="w-[70px] h-[40px]">
                            <img
                                src="/assets/logo_siena.svg"
                                alt="logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>

                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="flex items-center justify-center w-[42px] h-[42px] bg-[#59021F] cursor-pointer transition-colors duration-300 hover:bg-[#F5EFDD] hover:border hover:border-[#59021F] group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-[18px] h-[18px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" className="stroke-[#F5EFDD] group-hover:stroke-[#59021F]" />
                            <line x1="6" y1="6" x2="18" y2="18" className="stroke-[#F5EFDD] group-hover:stroke-[#59021F]" />
                        </svg>
                    </button>
                </div>

                {/* Lista de links */}
                <nav className="flex flex-col p-4 gap-1">
                    {mobileLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center justify-center px-4 py-4 text-[16px] font-semibold uppercase transition-colors duration-200 ${isActive
                                    ? "bg-[#59021F]/15 text-[#59021F]"
                                    : "text-gray-800 hover:bg-[#59021F]/15 hover:text-[#59021F]"
                                    }`}
                            >
                                <span className="text-center">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
