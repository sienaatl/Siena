"use client";
import EventsSlider from "@/components/EventsSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import SliderAbout from "@/components/SliderAbout";
import VideosSection from "@/components/VideosSection";

const slides = [
  "/assets/slider_about1.webp",
  "/assets/slider_about2.webp",
];

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero_video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <img
            src="/assets/logo_hero.webp"
            alt="Logo"
            className="w-[280px] md:w-[470px] mb-5 hero-fadein"
          />

          <div className="flex gap-4 hero-fadein">
            <a
              href="/order-online"
              className="group bg-[#f5efdd] text-[#58021f] px-[20px] py-[10px] justify-center font-semibold text-[18px] md:text-[20px] flex items-center gap-2 border border-[#58021f] hover:bg-[#58021f] hover:text-[#f5efdd] transition"
            >
              Order Online
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z"
                  className="fill-[#58021f] group-hover:fill-[#f5efdd] transition-colors duration-300"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Barra inferior — ubicación e Instagram */}
        <div className="w-full max-w-[1280px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10 py-4 px-4 hidden md:flex items-center justify-between">
          {/* Ubicación */}
          <a
            href="https://maps.app.goo.gl/qAEv8rdegv8rYr1c8"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/80 text-[14px] md:text-[16px] tracking-wide hover:text-[#DEAE21] transition text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70 group-hover:opacity-100 flex-shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>124 Devore Rd, Alpharetta, GA 30009</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sienaatl/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/80 text-[14px] md:text-[16px] tracking-wide hover:text-[#DEAE21] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-[18px] h-[18px] opacity-70 group-hover:opacity-100 flex-shrink-0"
              fill="currentColor"
            >
              <path d="M8.67699 0H21.2437C26.031 0 29.9206 3.88968 29.9206 8.67699V21.2437C29.9206 23.5449 29.0065 25.752 27.3792 27.3792C25.752 29.0065 23.5449 29.9206 21.2437 29.9206H8.67699C3.88968 29.9206 0 26.031 0 21.2437V8.67699C0 6.37571 0.91418 4.16868 2.54143 2.54143C4.16868 0.91418 6.37571 0 8.67699 0ZM8.37778 2.99206C6.9494 2.99206 5.57952 3.55949 4.5695 4.5695C3.55949 5.57952 2.99206 6.9494 2.99206 8.37778V21.5429C2.99206 24.52 5.40067 26.9286 8.37778 26.9286H21.5429C22.9712 26.9286 24.3411 26.3612 25.3511 25.3511C26.3612 24.3411 26.9286 22.9712 26.9286 21.5429V8.37778C26.9286 5.40067 24.52 2.99206 21.5429 2.99206H8.37778ZM22.8145 5.23611C23.3105 5.23611 23.7861 5.43313 24.1368 5.78383C24.4875 6.13453 24.6845 6.61019 24.6845 7.10615C24.6845 7.60212 24.4875 8.07777 24.1368 8.42847C23.7861 8.77917 23.3105 8.97619 22.8145 8.97619C22.3185 8.97619 21.8429 8.77917 21.4922 8.42847C21.1415 8.07777 20.9444 7.60212 20.9444 7.10615C20.9444 6.61019 21.1415 6.13453 21.4922 5.78383C21.8429 5.43313 22.3185 5.23611 22.8145 5.23611ZM14.9603 7.48016C16.9442 7.48016 18.8468 8.26825 20.2496 9.67105C21.6524 11.0738 22.4405 12.9765 22.4405 14.9603C22.4405 16.9442 21.6524 18.8468 20.2496 20.2496C18.8468 21.6524 16.9442 22.4405 14.9603 22.4405C12.9765 22.4405 11.0738 21.6524 9.67105 20.2496C8.26825 18.8468 7.48016 16.9442 7.48016 14.9603C7.48016 12.9765 8.26825 11.0738 9.67105 9.67105C11.0738 8.26825 12.9765 7.48016 14.9603 7.48016ZM14.9603 10.4722C13.77 10.4722 12.6284 10.9451 11.7868 11.7868C10.9451 12.6284 10.4722 13.77 10.4722 14.9603C10.4722 16.1506 10.9451 17.2922 11.7868 18.1339C12.6284 18.9756 13.77 19.4484 14.9603 19.4484C16.1506 19.4484 17.2922 18.9756 18.1339 18.1339C18.9756 17.2922 19.4484 16.1506 19.4484 14.9603C19.4484 13.77 18.9756 12.6284 18.1339 11.7868C17.2922 10.9451 16.1506 10.4722 14.9603 10.4722Z" />
            </svg>

            @sienarestaurant
          </a>

        </div>

      </section>

      {/* CARRUSEL INFINITO */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 20s linear infinite;
    }
  `}</style>

        <div className="marquee-track">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex items-center">

              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                MEDI-TALIAN CUISINE
              </span>
              <img src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                CHEF-DRIVEN EXPERIENCE
              </span>
              <img src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                ELEVATED SHARED PLATES
              </span>
              <img src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                REFINED YET INVITING ATMOSPHERE
              </span>
              <img src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

            </div>
          ))}
        </div>

      </section>

      {/* ABOUT US */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/fondo_findus.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto py-12 md:py-20 px-4">
          <div className="flex flex-col items-center text-center">
            {/* Icono arriba centrado */}
            <img
              src="/assets/icono_about1.svg"
              alt="icono1"
              className="w-[60px] md:w-[75px]"
            />

            <div className="relative inline-block">
              {/* Título */}
              <h2
                className="text-[#58021f] text-[60px] md:text-[80px] lg:text-[95px] leading-[0.9] tracking-tight uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                A Taste of the Mediterranean
              </h2>

              {/* Reimagined superpuesto */}
              <span
                className="absolute left-1/2 top-[105%] md:top-[115%] -translate-x-1/2 -translate-y-1/2 text-[#deae21] text-[40px] md:text-[60px] lg:text-[85px] leading-none"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: `2px 2px 0 #f5efdd, -2px -2px 0 #f5efdd, 2px -2px 0 #f5efdd, -2px 2px 0 #f5efdd`
                }}
              >
                reimagined
              </span>
            </div>

            <p className="text-[#030302]/80 text-lg md:text-[34px] lg:text-xl leading-[140%] max-w-[1280px] mt-12 md:mt-25">
              At Siena, every detail is guided by a creative vision rooted in Mediterranean warmth and Italian soul.
            </p>
          </div>
        </div>

        <VideosSection />
      </section>


      <section
        className="relative w-full h-[58px] bg-repeat-x"
        style={{
          backgroundImage: "url('/assets/divisor_beige.svg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
      />

      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#f5efdd" }}
      >

        <div className="w-full max-w-[1280px] mx-auto px-4 mt-[80px]">
          <div className="flex flex-col items-center text-center">

            <img
              src="/assets/icon_menu.svg"
              alt="Menu icon"
              className="w-[60px] md:w-[75px]"
            />

            <div className="relative inline-block">
              <h2
                className="text-[#58021f] text-[60px] md:text-[80px] lg:text-[95px] leading-[0.9] tracking-tight uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                Enjoy the Flavors
              </h2>

              <span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[60px] lg:text-[85px] leading-none whitespace-nowrap" style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: `
            2px 2px 0 #f5efdd,
            -2px -2px 0 #f5efdd,
            2px -2px 0 #f5efdd,
            -2px 2px 0 #f5efdd
          `,
                }}
              >
                inspired
              </span>
            </div>

            <p className="text-[#030302]/80 text-lg md:text-[34px] lg:text-xl leading-[140%] max-w-[1280px] mt-12 md:mt-25">           From handcrafted pasta to fresh Mediterranean plates. <br className="hidden md:block" />
              Every dish tells a story worth savoring.
            </p>
            <a

              href="https://www.toasttab.com/invoice/lead?rx=399f3374-7dde-4df3-9c3a-c49fed50b565&ot=675642f1-f873-4b8f-afcd-cca9b93a185c"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 group bg-[#58021f] text-[#f5efdd] px-[28px] mt-[30px] py-[10px] font-semibold text-[20px] flex items-center gap-2 border border-transparent hover:bg-[#030302] hover:text-[#f5efdd] hover:border-[#030302] transition"
            >
              Full Menu

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z"
                  className="fill-[#f5efdd] group-hover:fill-[#f5efdd] transition-colors duration-300"
                />
              </svg>
            </a>

          </div>
        </div>

        <div className="absolute inset-0 " />
        <div className="w-full max-w-[1280px] mx-auto mt-10 mb-[80px] px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:[grid-template-rows:280px_280px]">

            {/* Card grande izquierda - Dinner */}
            <a href="/menu/dinner" className="group relative overflow-hidden shadow-lg md:row-span-2 h-[220px] md:h-auto">
              <img src="/assets/menu1.webp" alt="Dinner" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

              <div className="absolute inset-4 border border-[#deae21]">
                <div className="flex flex-col justify-end h-full p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-[42px] font-semibold">DINNER</h3>
                      <p className="text-white/80 text-[18px] mt-1">
                        Chef-crafted Mediterranean plates
                      </p>
                    </div>
                    <div className="w-9 h-9 border border-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Card top centro - Brunch */}
            <a href="/menu/brunch" className="group relative overflow-hidden shadow-lg h-[220px] md:h-auto">
              <img src="/assets/about1.webp" alt="Brunch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

              <div className="absolute inset-4 border border-[#deae21]">
                <div className="flex flex-col justify-end h-full p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-[42px] font-semibold">BRUNCH</h3>
                      <p className="text-white/80 text-[18px] mt-1">Weekend mornings done right</p>
                    </div>
                    <div className="w-9 h-9 border border-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Card top derecha - Happy Hour */}
            <a href="/menu/happy-hour" className="group relative overflow-hidden shadow-lg h-[220px] md:h-auto">
              <img src="/assets/about3.webp" alt="Happy Hour" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

              <div className="absolute inset-4 border border-[#deae21]">
                <div className="flex flex-col justify-end h-full p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-[42px] font-semibold whitespace-nowrap">HAPPY HOUR</h3>
                      <p className="text-white/80 text-[18px] mt-1">Deals and drinks from 4 to 7pm</p>
                    </div>
                    <div className="w-9 h-9 border border-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Card ancha abajo - Beverages */}
            <a href="/menu/beverages" className="group relative overflow-hidden shadow-lg md:col-span-2 h-[220px] md:h-auto">
              <img src="/assets/menu4.webp" alt="Beverages" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

              <div className="absolute inset-4 border border-[#deae21]">
                <div className="flex flex-col justify-end h-full p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-[42px] font-semibold">BEVERAGES</h3>
                      <p className="text-white/80 text-[18px] mt-1">Cocktails, wines and craft drinks</p>
                    </div>
                    <div className="w-9 h-9 border border-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>

      </section>

      <section className="relative w-full h-[58px]">
        <img
          src="/assets/divisor_beige.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* EVENTS */}
      <section
        className="relative w-full pt-[80px] pb-[80px] overflow-hidden"
        style={{ backgroundImage: "url('/assets/fondo_menu.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >

        <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col items-center text-center pb-[30px]">

            {/* Icono arriba centrado */}
            <img
              src="/assets/icon6.svg"
              alt="icono1"
              className="w-[60px] md:w-[75px]"
            />

            <div className="relative inline-block">

              {/* Título */}
              <h2
                className="text-[#58021f] text-[60px] md:text-[80px] lg:text-[95px] leading-[0.9] tracking-tight uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                Something Special
              </h2>

              {/* Reimagined superpuesto correctamente */}
              <span
                className="absolute left-1/2 top-[115%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] text-[#deae21] text-[40px] md:text-[60px] lg:text-[85px] leading-none"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: `
            2px 2px 0 #f5efdd,
            -2px -2px 0 #f5efdd,
            2px -2px 0 #f5efdd,
            -2px 2px 0 #f5efdd
          `,
                }}
              >
                every day
              </span>

            </div>

            <p className="text-[#030302]/80 text-lg md:text-[34px] lg:text-xl leading-[140%] max-w-[1280px] mt-12 md:mt-25">
              Designed for celebration, connection, and unforgettable meals.

            </p>

            <a
              href="https://www.toasttab.com/invoice/lead?rx=399f3374-7dde-4df3-9c3a-c49fed50b565&ot=675642f1-f873-4b8f-afcd-cca9b93a185c"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#58021f] text-[#f5efdd] px-[28px] mt-[30px] py-[10px] font-semibold text-[20px] flex items-center gap-2 border border-transparent hover:bg-[#030302] hover:text-[#f5efdd] hover:border-[#030302] transition"
            >
              Book an Event

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z"
                  className="fill-[#f5efdd] group-hover:fill-[#f5efdd] transition-colors duration-300"
                />
              </svg>
            </a>

          </div>

        </div>


        {/* Slider */}
        <div className="w-full max-w-[1280px] mx-auto">
          <EventsSlider />
        </div>

      </section>

      <section className="relative w-full h-[58px]">
        <img
          src="/assets/divisor_negro.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>


      {/* TESTIMONIALS */}
      <section
        className="relative w-full py-20 overflow-hidden"
        style={{ backgroundImage: "url('/assets/fondo_testimonials.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >

        <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col items-center text-center pb-[30px]">

            {/* Icono arriba centrado */}
            <img
              src="/assets/icono_testimonios.svg"
              alt="icono1"
              className="w-[60px] md:w-[172px]"
            />

            <div className="relative inline-block mb-[30px]">

              {/* Título */}
              <h2
                className="text-[#f5efdd] text-[60px] md:text-[80px] lg:text-[95px] leading-[0.9] tracking-tight uppercase mb-[10px]"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                From the food to the atmosphere, <br></br>
              </h2>

              <span
                className="text-[#deae21] text-[60px] md:text-[80px] lg:text-[95px] leading-[0.9] tracking-tight "
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive"
                }}
              >
                unforgettable
              </span>

            </div>



          </div>

        </div>

        {/* Slider */}
        <TestimonialsSlider />

      </section>

      <section className="relative w-full h-[28px] overflow-hidden">
        <img
          src="/assets/divisor_estrella3.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover scale-y-110"
        />
      </section>

      {/* FIND US */}
      <section
        className="relative w-full py-12 md:py-20 overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/fondo_rojizo.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >

        {/* Card */}
        <div
          className="relative w-full max-w-[1000px] mx-4 md:mx-6 overflow-hidden p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
          style={{ backgroundImage: "url('/assets/fondo_findus.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Borde decorativo */}
          <div className="absolute inset-3 border border-[#58021f]/20 pointer-events-none" />

          {/* Columna izquierda */}
          <div className="flex-1 flex flex-col gap-3 md:gap-5 relative z-10 w-full">

            <img src="/assets/icono_findus.svg" alt="Find Us" className="w-[55px] md:w-[68px] h-auto" />

            <h2
              className="text-[#58021f] text-[52px] md:text-[72px] font-bold tracking-wide leading-none"
              style={{ fontFamily: "'Palmore-Light', serif" }}
            >
              FIND US
            </h2>

            {/* Location */}
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[#58021f] font-bold text-[16px] md:text-[18px]">Location</span>
              <a
                href="https://maps.app.goo.gl/qAEv8rdegv8rYr1c8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-[#2b0a0a] text-[16px] md:text-[18px] leading-[1.5] hover:text-[#030302] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    className="fill-[#58021f] group-hover:fill-[#030302] transition-colors duration-300" />
                </svg>
                124 Devore Rd, Alpharetta, GA 30009
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[#58021f] font-bold text-[16px] md:text-[18px]">Phone</span>
              <a
                href="tel:4044883399"
                className="group flex items-center gap-2 text-[#2b0a0a] text-[16px] md:text-[18px] hover:text-[#030302] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    className="fill-[#58021f] group-hover:fill-[#030302] transition-colors duration-300" />
                </svg>
                404-488-3399
              </a>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[#58021f] font-bold text-[16px] md:text-[18px]">Opening Hours</span>
              <p className="text-[#2b0a0a] text-[16px] md:text-[18px]">
                <span className="font-semibold">Monday to Saturday</span> 5 pm to 10 pm
              </p>
              <p className="text-[#2b0a0a] text-[16px] md:text-[18px]">
                <span className="font-semibold">Sunday</span> 5 pm to 9 pm
              </p>
            </div>

            {/* Botón */}
            <a
              href="https://maps.app.goo.gl/qAEv8rdegv8rYr1c8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#58021f] text-[#f5efdd] px-6 py-3 font-semibold text-[16px] flex items-center gap-2 w-fit border border-transparent hover:bg-[#030302] hover:text-[#f5efdd] hover:border-[#030302] transition mt-1 md:mt-2"
            >
              Open In Map

              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z"
                  className="fill-[#f5efdd] group-hover:fill-[#f5efdd] transition-colors duration-300"
                />
              </svg>
            </a>

          </div>

          {/* Mapa */}
          <div className="flex-1 overflow-hidden shadow-lg relative z-10 w-full min-h-[240px] md:min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.051868613463!2d-84.2991249!3d34.06818459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575f4dbde006b%3A0x8a505a045593f782!2sSiena%20Restaurant!5e0!3m2!1ses-419!2scr!4v1777903381535!5m2!1ses-419!2scr"
              className="w-full h-full absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div >
      </section >

      <section className="relative w-full h-[28px]">
        <img
          src="/assets/divisor_estrella3.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/*<section className="w-full overflow-hidden">
        <style>{`
    @keyframes carrusel {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .carrusel-track {
      display: flex;
      width: max-content;
      animation: carrusel 30s linear infinite;
    }
  `}</style>

        <div className="carrusel-track">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex-shrink-0 h-[320px] w-[320px]">
                  <img
                    src={`/assets/carrusel${i + 1}.webp`}
                    alt={`carrusel ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>*/}

    </main >
  );
}