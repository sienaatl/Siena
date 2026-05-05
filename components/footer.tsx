"use client";
import Link from "next/link";
import NewsletterForm from "../components/newsletterform";


export default function Footer() {

    return (

        <footer className="font-sans w-full bg-[url('/assets/fondomenu.webp')] bg-cover bg-center bg-no-repeat">
            <NewsletterForm />

            <div className="relative w-full h-[58px]">
                <img
                    src="/assets/divisor_negro.svg"
                    alt="divider"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[40px] lg:gap-[60px] py-[40px] lg:py-[60px] px-6 lg:px-0">

                {/* Izquierda - Logo + info */}
                <div className="flex flex-col gap-4 max-w-[580px] items-center lg:items-start text-center lg:text-left">
                    <img src="/assets/logofooter.webp" alt="Siena" className="w-[200px] lg:w-[261px] mb-[10px] lg:mb-[20px]" />

                    <p className="text-white text-[22px] lg:text-[28px] leading-[110%] lg:leading-[100%] font-bold mt-2">
                        Your taste of Siena, anytime.
                    </p>
                    <p className="text-white text-[15px] lg:text-[16px] leading-[22px] lg:leading-[24px] max-w-[540px]">
                        From handcrafted dishes to unforgettable moments, enjoy Siena favorites fresh, easy, and ready when you are.
                    </p>
                    <p className="text-[#979797] leading-[20px] text-[15px] lg:text-[16px] hover:text-[#ddae21] cursor-pointer">
                        124 Devore Rd, Alpharetta, GA 30009
                    </p>

                    {/* Botón */}
                    <a
                        href="/order-online"
                        className="bg-[#f5efdd] text-[#58021f] px-[20px] py-[10px] h-[42px] font-semibold text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-2"
                    >
                        Order Online
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="#58021f" />
                        </svg>
                    </a>
                </div>

                {/* Wrapper de columnas para mobile/tablet - dos columnas en mobile */}
                <div className="flex flex-row lg:contents gap-12 sm:gap-20 w-full justify-center lg:w-auto lg:justify-start">

                    {/* Columna Restaurant */}
                    <div className="flex flex-col gap-3 items-start">
                        <p className="text-[#ddae21] font-bold text-[18px] leading-[100%] mb-2">Restaurant</p>
                        {[
                            { label: "Home", href: "/" },
                            { label: "Menu", href: "/menu" },
                            { label: "Happenings", href: "/happenings" },
                            { label: "Private Events", href: "/private-events" },
                        ].map(({ label, href }) => (
                            <Link key={label} href={href} className={`text-[#f5efdd] text-[16px] leading-[21px] hover:text-[#ddae21] transition`}>
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Columna More */}
                    <div className="flex flex-col gap-3 items-start">
                        <p className="text-[#ddae21] font-bold text-[18px] leading-[100%] mb-2">More</p>
                        {[
                            { label: "Gallery", href: "/contact-us" },
                            { label: "Careers", href: "/careers" },
                            { label: "Contact Us", href: "/happenings" },
                        ].map(({ label, href }) => (
                            <Link key={label} href={href} className="text-[#f5efdd] text-[16px] leading-[21px] hover:text-[#ddae21] transition">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Columna Social + Phone */}
                {/* En mobile/tablet: bloque destacado con fondo, centrado. En desktop: columna normal */}
                <div className="flex flex-col gap-4 w-full lg:w-auto bg-black/25 lg:bg-transparent p-6 lg:p-0 items-center lg:items-start text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-[#ddae21] font-bold text-[18px] leading-[100%] mb-3">Social Media</p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group hover:opacity-70 transition"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                                        className="fill-[#f5efdd] group-hover:fill-[#ddae21] transition-colors duration-300"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group hover:opacity-100 transition"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                                        className="fill-[#f5efdd] group-hover:fill-[#ddae21] transition-colors duration-300"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group hover:opacity-70 transition"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M16.5 2C16.8 4.1 18.4 5.7 20.5 6V9C18.9 8.95 17.4 8.45 16 7.6V14.5C16 18.1 13.1 21 9.5 21C5.9 21 3 18.1 3 14.5C3 10.9 5.9 8 9.5 8C10 8 10.5 8.05 11 8.15V11.2C10.5 11.05 10 11 9.5 11C7.6 11 6 12.6 6 14.5C6 16.4 7.6 18 9.5 18C11.4 18 13 16.4 13 14.5V2H16.5Z"
                                        className="fill-[#f5efdd] group-hover:fill-[#ddae21] transition-colors duration-300"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-[#ddae21] font-bold text-[18px] leading-[100%] mb-1">Phone</p>
                        <a href="tel:4044883399" className="text-[#f5efdd] text-[16px] hover:text-[#ddae21] transition">
                            404-488-3399
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="w-full bg-white py-4 px-6">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-3 lg:gap-0">

                    {/* Powered by */}
                    <div className="flex items-center gap-2">
                        <a href="https://restoexp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition">
                            <img src="/assets/restoexplogo.webp" alt="Resto Experience" className="h-auto w-[240px] lg:w-[307px]" />
                        </a>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-4 text-[13px] lg:text-[14px] leading-[20px] lg:leading-[30px] text-[#5c5c5c] text-center">
                        <span>Restaurant Marketing, Content & Web Design</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none" className="hidden lg:block">
                            <rect width="2" height="40" fill="url(#paint0_radial_2448_639)" />
                            <defs>
                                <radialGradient id="paint0_radial_2448_639" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1 20) rotate(90) scale(20 1)">
                                    <stop stopColor="#7C7C7C" stopOpacity="0.486275" />
                                    <stop offset="1" stopColor="#7C7C7C" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <span>2026</span>
                    </div>

                </div>
            </div>

        </footer>

    );
}