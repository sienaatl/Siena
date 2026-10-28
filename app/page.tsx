"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
const MotionLink = motion(Link);
import { motion } from "motion/react";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";
import {
  fetchHours,
  getClosedWeekdays,
  getWeekdaySchedule,
  getTimeSlotsForDay,
  FALLBACK_CLOSED_WEEKDAYS,
  FALLBACK_WEEKDAY_SCHEDULE,
  parseLocalDate,
  type WeekdaySchedule,
} from "@/lib/hours";
import { ReservationDatePicker } from "@/components/ReservationDatePicker";
import { ORDER_ONLINE_URL } from "@/lib/order-menu";
import LazyVideo from "@/components/LazyVideo";
import { preload } from "react-dom";

const PARTY_SIZES = Array.from({ length: 14 }, (_, i) => i + 1);

const EventsSlider = dynamic(() => import("@/components/EventsSlider"), { ssr: false });
// SSR enabled (unlike the other two below) so the 9 real Google reviews it
// renders exist in server HTML for crawlers, instead of only appearing after
// client JS mounts.
const TestimonialsSlider = dynamic(() => import("@/components/TestimonialsSlider"));
const VideosSection = dynamic(() => import("@/components/VideosSection"), { ssr: false });

const slides = [
  "/assets/slider_about1.webp",
  "/assets/slider_about2.webp",
];

export default function Home() {
  // The hero poster is the LCP element. A <video poster> is found by the
  // preload scanner but not prioritised, so ask for it explicitly.
  preload("/assets/hero_poster.webp", { as: "image", fetchPriority: "high" });

  const router = useRouter();
  const [info, setInfo] = useState<RestaurantInfo>(RESTAURANT_FALLBACK);
  useEffect(() => { getRestaurantInfo().then(setInfo); }, []);

  const [weekdaySchedule, setWeekdaySchedule] = useState<WeekdaySchedule>(FALLBACK_WEEKDAY_SCHEDULE);
  const [closedWeekdays, setClosedWeekdays] = useState<number[]>(FALLBACK_CLOSED_WEEKDAYS);
  useEffect(() => {
    fetchHours()
      .then((entries) => {
        setWeekdaySchedule(getWeekdaySchedule(entries));
        setClosedWeekdays(getClosedWeekdays(entries));
      })
      .catch(() => {
        setWeekdaySchedule(FALLBACK_WEEKDAY_SCHEDULE);
        setClosedWeekdays(FALLBACK_CLOSED_WEEKDAYS);
      });
  }, []);

  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [bookPartySize, setBookPartySize] = useState("2");

  // Same per-day slot logic the reservations page itself uses, so a time
  // offered here is guaranteed to still be valid once the user lands there.
  const bookTimeOptions = useMemo(() => {
    if (!bookDate) return [];
    const weekday = parseLocalDate(bookDate).getDay();
    return getTimeSlotsForDay(weekdaySchedule[weekday]);
  }, [bookDate, weekdaySchedule]);

  // Derived rather than stored: if the chosen date turns out to be closed
  // (or hours change under us), a stale time just stops being "current"
  // instead of needing a separate effect to go correct the state for it.
  const effectiveBookTime = bookTimeOptions.includes(bookTime) ? bookTime : "";

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookDate || !effectiveBookTime) return;
    const params = new URLSearchParams({ date: bookDate, time: effectiveBookTime, partySize: bookPartySize });
    // Handing the picks off via the URL — the reservations page reads
    // these same params and prefills step 1 of the form with them.
    router.push(`/reservations?${params.toString()}`);
  };

  return (
    <main>
      {/* HERO + BANNER wrapper = 100vh en mobile */}
      <div className="siena-view-140">

      {/* HERO */}
      <section className="siena-view-141">
        {/* The poster is the hero still, so this one element covers both what
            used to be a separate <Image> and the video, and it is what LCP
            measures. See eagerPoster in LazyVideo for why that matters. */}
        <LazyVideo
          src="/assets/hero_video_v2.mp4"
          mobileSrc="/assets/hero_video_mobile_v2.mp4"
          poster="/assets/hero_poster.webp"
          eagerPoster
          className="siena-view-28"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="siena-view-142">
          {/* Above the fold, so it competes with the LCP poster. next/image
              serves AVIF at the size actually rendered instead of the full
              746px original; eager because the default here would be lazy. */}
          <Image
            src="/assets/logo_hero.webp"
            alt="Logo"
            width={746}
            height={440}
            sizes="(max-width: 767px) 280px, 400px"
            loading="eager"
            className="w-[280px] md:w-[400px] h-auto mb-5 hero-fadein"
          />

          <form
            onSubmit={handleBookNow}
            className="hero-fadein w-full max-w-[760px] flex flex-col sm:flex-row items-stretch bg-black/35 backdrop-blur-md border border-white/25 divide-y sm:divide-y-0 sm:divide-x divide-white/20"
          >
            <div className="flex-1 min-w-0">
              <ReservationDatePicker
                value={bookDate}
                onChange={setBookDate}
                closedWeekdays={closedWeekdays}
                placeholder="Date"
                buttonClassName="w-full flex items-center justify-between gap-2.5 px-4 py-3 bg-transparent text-white text-[13px] md:text-[14px] tracking-wide text-left cursor-pointer"
              />
            </div>

            <div className="siena-view-143">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e0b265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              <select
                required
                disabled={!bookDate}
                value={effectiveBookTime}
                onChange={(e) => setBookTime(e.target.value)}
                className="siena-view-144"
                aria-label="Reservation time"
              >
                <option value="" style={{ backgroundColor: "#152C29", color: "#fff" }}>
                  {!bookDate ? "Time" : bookTimeOptions.length ? "Time" : "Closed"}
                </option>
                {bookTimeOptions.map((t) => (
                  <option key={t} value={t} style={{ backgroundColor: "#152C29", color: "#fff" }}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="siena-view-143">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e0b265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><use href="/assets/siena-ui-icons.svg#siena-icon-10" /></svg>
              <select
                value={bookPartySize}
                onChange={(e) => setBookPartySize(e.target.value)}
                className="siena-view-145"
                aria-label="Party size"
              >
                {PARTY_SIZES.map((n) => (
                  <option key={n} value={n} style={{ backgroundColor: "#152C29", color: "#fff" }}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={!bookDate || !effectiveBookTime}
              className="siena-view-146 group"
            >
              Book Now
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-147" /></svg>
            </button>
          </form>

          <Link
            href={ORDER_ONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-fadein group mt-4 inline-flex items-center gap-2 text-white/85 text-[13px] md:text-[14px] tracking-wide hover:text-[#e0b265] transition-colors"
          >
            <span className="siena-view-148">
              Or order online for pickup
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none" className="siena-view-64"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-149" /></svg>
          </Link>
        </div>

        {/* Barra inferior — ubicación e Instagram */}
        <div className="siena-view-150">
          {/* Ubicación */}
          <a
            href={info.maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="siena-view-151 group"
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
              className="siena-view-31"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>{info.address}</span>
          </a>

          {/* Teléfono */}
          <a
            href={`tel:${info.phone.replace(/\D/g, '')}`}
            className="siena-view-152 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="siena-view-31"><use href="/assets/siena-ui-icons.svg#siena-icon-11" /></svg>
            <span>{info.phone}</span>
          </a>

        </div>

      </section>

      {/* CARRUSEL INFINITO */}
      <section className="siena-view-32">
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
          {[...Array(4)].map((_, repeat) => (
            <div key={repeat} className="flex items-center">

              <span className="siena-view-93">
                MEDI-TALIAN CUISINE
              </span>
              <img width={29} height={29} src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

              <span className="siena-view-93">
                CHEF-DRIVEN EXPERIENCE
              </span>
              <img width={29} height={29} src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

              <span className="siena-view-93">
                ELEVATED SHARED PLATES
              </span>
              <img width={29} height={29} src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

              <span className="siena-view-93">
                REFINED YET INVITING ATMOSPHERE
              </span>
              <img width={29} height={29} src="/assets/star.svg" alt="star" className="w-5 h-5 flex-shrink-0" />

            </div>
          ))}
        </div>

      </section>

      </div>{/* fin hero+banner 100vh */}


      {/* ABOUT US */}
      <section
        className="relative w-full overflow-hidden"
        data-bg="/assets/dark-green-wall-backdrop-grunge-background-texture.jpg"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="siena-view-153">
          <div className="flex flex-col items-center text-center">

            {/* Icono arriba centrado */}
            <motion.img width={132} height={98} loading="lazy"
              src="/assets/icono_123.svg"
              alt="icono1"
              className="w-[60px] md:w-[75px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
              animate={{ y: [0, -7, 0] }}
            />

            <div className="relative inline-block">
              {/* The homepage heading identifies Siena and its location. */}
              <motion.h1
                className="siena-view-154"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.08, ease: "easeOut" }}
              >
                Siena Restaurant, Alpharetta
              </motion.h1>

              {/* Cuisine subtitle stays in normal flow so it cannot overlap the copy. */}
              <motion.span
                className="siena-view-155"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: "3px 3px 0 #1b312e,-3px -3px 0 #1b312e,3px -3px 0 #1b312e,-3px 3px 0 #1b312e,0 3px 0 #1b312e,0 -3px 0 #1b312e,3px 0 0 #1b312e,-3px 0 0 #1b312e"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.16, ease: "easeOut" }}
              >
                Mediterranean &amp; Italian
              </motion.span>
            </div>

            <motion.div
              className="siena-view-156"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: 0.24, ease: "easeOut" }}
            >
              <p>
                Looking for restaurants in Alpharetta? Siena Restaurant &amp; Bar serves
                Mediterranean and Italian food at 124 Devore Rd in Alpharetta. Choose handmade
                pasta, seafood or small plates to share. Pair your meal with a signature
                crafted cocktail such as the Monaco or Lady Godiva. Plan your dining experience
                with the current menu and online reservations.
              </p>
              <p>
                Join us for Friday live music from 7 to 10 PM. Happy hour runs Tuesday
                through Thursday from 4 to 6 PM. Free parking is available, and walk-ins
                are welcome when space allows. For special occasions, ask our team about
                group dining and your preferred date.
              </p>
            </motion.div>

            <nav aria-label="Plan dinner at Siena" className="siena-view-157">
              <Link href="/reservations">Reserve a table</Link>
              <Link href="/live-music-fridays">Friday live music</Link>
              <Link href="/cocktail-bar-alpharetta">Signature cocktails</Link>
              <Link href="/menus">Dinner and drinks menu</Link>
              <Link href="/happy-hour-alpharetta">Happy hour</Link>
              <Link href="/gallery">Siena restaurant photos</Link>
            </nav>

          <MotionLink
          href="/about-us"
          className="siena-view-158 group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.28, ease: "easeOut" }}
        >
          <span>ABOUT US</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          ><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-159" /></svg>
        </MotionLink>
          </div>
        </div>

        <VideosSection />
      </section>


      <section className="siena-view-160">
        <img width={1512} height={58} loading="lazy"
          src="/assets/divisor_beige.svg"
          alt="divider"
          className="siena-view-28"
        />
      </section>



      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#1b312e" }}
      >

        <div className="siena-view-161">
          <div className="flex flex-col items-center text-center">

            <motion.img width={59} height={45} loading="lazy"
              src="/assets/icon_menu.svg"
              alt="Menu icon"
              className="w-[60px] md:w-[75px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
              animate={{ y: [0, -7, 0] }}
            />

            <div className="relative inline-block">
              <motion.h2
                className="siena-view-162"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.08, ease: "easeOut" }}
              >
                Enjoy the Flavors
              </motion.h2>

              <motion.span
                className="siena-view-163"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: `
            2px 2px 0 #1b312e,
            -2px -2px 0 #1b312e,
            2px -2px 0 #1b312e,
            -2px 2px 0 #1b312e
          `,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.16, ease: "easeOut" }}
              >
                inspired
              </motion.span>
            </div>

            <motion.p
              className="siena-view-164"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: 0.24, ease: "easeOut" }}
            >
              From handcrafted pasta to fresh Mediterranean plates. <br className="hidden md:block" />
              Every dish tells a story worth savoring .
            </motion.p>

                  <MotionLink
          href="/menus"
          className="siena-view-158 group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.28, ease: "easeOut" }}
        >
          <span>FULL MENU</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          ><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-159" /></svg>
        </MotionLink>

          </div>
        </div>

        <div className="absolute inset-0 " />
        <div className="siena-view-165">
          <div className="siena-view-166">

            {/* Card grande izquierda - Dinner */}
            <motion.a
              href="/menus?tab=main-menu"
              className="siena-view-167 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.38, delay: 0, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <Image src="/assets/pages/Home/ETF-Dinner.jpg" alt="Dinner" fill quality={65} sizes="(max-width: 767px) 100vw, 390px" loading="lazy" className="siena-view-41" />
              <div className="siena-view-168" />

              <div className="siena-view-42">
                <div className="siena-view-43">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="siena-view-169">DINNER</h3>
                      <p className="siena-view-170">
                        Chef-crafted Mediterranean plates
                      </p>
                    </div>
                    <div className="siena-view-171">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Card top centro - Brunch */}
            <motion.a
              href="/menus?tab=weekend-brunch"
              className="siena-view-172 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.38, delay: 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <Image src="/assets/pages/Home/ETF-Brunch.jpg" alt="Brunch" fill quality={65} sizes="(max-width: 767px) 100vw, 390px" loading="lazy" className="siena-view-41" />
              <div className="siena-view-168" />

              <div className="siena-view-42">
                <div className="siena-view-43">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="siena-view-169">BRUNCH</h3>
                      <p className="siena-view-170">Call to confirm availability</p>
                    </div>
                    <div className="siena-view-171">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Card top derecha - Happy Hour */}
            <motion.a
              href="/menus?tab=happy-hour"
              className="siena-view-172 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.38, delay: 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <Image src="/assets/pages/Home/ETF-HappyHour.jpg" alt="Happy Hour" fill sizes="(max-width: 767px) 100vw, 390px" loading="lazy" className="siena-view-41" />
              <div className="siena-view-168" />

              <div className="siena-view-42">
                <div className="siena-view-43">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="siena-view-173">HAPPY HOUR</h3>
                      <p className="siena-view-170">Tuesday–Thursday, 4–6pm · Drinks and small plates</p>
                    </div>
                    <div className="siena-view-171">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Card ancha abajo - Beverages */}
            <motion.a
              href="/menus?tab=libations"
              className="siena-view-174 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.38, delay: 0.18, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <Image src="/assets/pages/Home/ETF-Beverages-2-landscape.jpg" alt="Beverages" fill sizes="(max-width: 767px) 100vw, 66vw" loading="lazy" className="siena-view-41" />
              <div className="siena-view-168" />

              <div className="siena-view-42">
                <div className="siena-view-43">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="siena-view-169">BEVERAGES</h3>
                      <p className="siena-view-170">Cocktails, wines and craft drinks</p>
                    </div>
                    <div className="siena-view-171">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>


          </div>
        </div>

      </section>

      <section className="siena-view-160">
        <img width={1512} height={58} loading="lazy"
          src="/assets/divisor_beige.svg"
          alt="divider"
          className="siena-view-28"
        />
      </section>

      {/* EVENTS */}
      <section
        className="siena-view-175"
        data-bg="/assets/update_homepage_something_esp.webp"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >

        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="siena-view-176">

            {/* Icono arriba centrado */}
            <motion.img width={59} height={54} loading="lazy"
              src="/assets/icon6.svg"
              alt="icono1"
              className="w-[60px] md:w-[75px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
              animate={{ y: [0, -7, 0] }}
            />

            <div className="relative inline-block">

              {/* Título */}
              <motion.h2
                className="siena-view-177"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.08, ease: "easeOut" }}
              >
                Something Special
              </motion.h2>

              {/* "every day" superpuesto */}
              <motion.span
                className="siena-view-178"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: "3px 3px 0 #1b312e,-3px -3px 0 #1b312e,3px -3px 0 #1b312e,-3px 3px 0 #1b312e,0 3px 0 #1b312e,0 -3px 0 #1b312e,3px 0 0 #1b312e,-3px 0 0 #1b312e",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.16, ease: "easeOut" }}
              >
                every day
              </motion.span>

            </div>

            <motion.p
              className="siena-view-164"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: 0.24, ease: "easeOut" }}
            >
              Designed for celebration, connection, and unforgettable meals.
            </motion.p>

            <motion.a
              href="/event-inquiry"
              className="siena-view-179 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.28, ease: "easeOut" }}
            >
              BOOK AN EVENT

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-159" /></svg>
            </motion.a>
          </div>

        </div>


        {/* Slider */}
        <div className="w-full max-w-[1180px] mx-auto">
          <EventsSlider />
        </div>

      </section>

      <section className="relative w-full h-[58px]">
        <img width={1512} height={58} loading="lazy"
          src="/assets/divisor_negro.svg"
          alt="divider"
          className="siena-view-28"
        />
      </section>

      {/* SOCIAL MEDIA */}
      <section className="w-full py-[80px] px-4 overflow-hidden" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[1180px] mx-auto">
          <div className="siena-view-94">
            <motion.img width={132} height={98} loading="lazy"
              src="/assets/icono_123.svg"
              alt=""
              className="w-[60px] md:w-[75px] mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="relative inline-block">
              <motion.h2
                className="siena-view-162"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.08, ease: "easeOut" }}
              >
                Follow Us
              </motion.h2>
              <motion.span
                className="siena-view-163"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: "2px 2px 0 #1b312e,-2px -2px 0 #1b312e,2px -2px 0 #1b312e,-2px 2px 0 #1b312e",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.16, ease: "easeOut" }}
              >
                on social
              </motion.span>
            </div>
            <motion.p
              className="siena-view-180"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: 0.24, ease: "easeOut" }}
            >
              Stay connected with Siena. Follow along for daily specials, events, and behind-the-scenes moments.
            </motion.p>
          </div>

          <div className="siena-view-181">
            {[
              {
                platform: "Instagram",
                handle: "@sienaatl",
                href: "https://www.instagram.com/sienaatl/",
                img: "/assets/gallery11_original.webp",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-13" /></svg>
                ),
              },
              {
                platform: "Facebook",
                handle: "Siena ATL",
                href: "https://www.facebook.com/sienaatl/",
                img: "/assets/gallery16_original.webp",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-14" /></svg>
                ),
              },
              {
                platform: "TikTok",
                handle: "@sienaatl",
                href: "https://www.tiktok.com/@sienaatl",
                img: "/assets/gallery21_original.webp",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-15" /></svg>
                ),
              },
            ].map(({ platform, handle, href, img, icon }, i) => (
              <motion.a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
              >
                <Image
                  src={img}
                  alt={platform}
                  fill
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="siena-view-25"
                />
                <div className="siena-view-182" />
                <div className="siena-view-183">
                  <span className="siena-view-184">{icon}</span>
                  <span className="siena-view-185">{platform}</span>
                  <span className="siena-view-186" style={{ fontFamily: "'Palmore-Light', serif" }}>{handle}</span>
                  <div className="siena-view-187">
                    <span>Follow</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-16" /></svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="relative w-full py-20 overflow-hidden"
        data-bg="/assets/fondo_testimonials.webp"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >

        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="siena-view-176">

            {/* Icono arriba centrado */}
            <motion.img width={323} height={103} loading="lazy"
              src="/assets/icono_testimonios.svg"
              alt="icono1"
              className="w-[130px] md:w-[172px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
            />

            <div className="relative inline-block mb-[30px]">

              {/* Título */}
              <motion.h2
                className="siena-view-188"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.08, ease: "easeOut" }}
              >
                From the food to the atmosphere, <br></br>
              </motion.h2>

              <motion.span
                className="siena-view-189"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.38, delay: 0.16, ease: "easeOut" }}
              >
                unforgettable
              </motion.span>

            </div>

          </div>

        </div>

        {/* Slider */}
        <div className="mt-8 md:mt-15">
          <TestimonialsSlider />
        </div>

      </section>

      <section className="siena-view-190">
        <img width={1512} height={27} loading="lazy"
          src="/assets/divisor_estrella3.svg"
          alt="divider"
          className="siena-view-191"
        />
      </section>

      {/* FIND US */}
      <section
        className="siena-view-192"
        data-bg="/assets/dark-green-wall-backdrop-grunge-background-texture.jpg"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="siena-view-193">
          <div
            className="siena-view-194"
            data-bg="/assets/pattern-dark.png"
            style={{ backgroundColor: "#1e3833", backgroundSize: "160px", backgroundRepeat: "repeat" }}
          >
            <div className="siena-view-195" />

            {/* Columna izquierda */}
            <div className="siena-view-196">
              <img width={61} height={51} loading="lazy" src="/assets/icono_findus.svg" alt="Find Us" className="w-[55px] md:w-[68px] h-auto" />

              <h2
                className="siena-view-197"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                FIND US
              </h2>

              <a
                href={info.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="siena-view-198 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0"><use href="/assets/siena-ui-icons.svg#siena-icon-17" className="siena-view-199" /></svg>
                {info.address}
              </a>

              <a
                href={`tel:${info.phone.replace(/\D/g, '')}`}
                className="siena-view-200 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-18" className="siena-view-199" /></svg>
                {info.phone}
              </a>

              <div className="flex flex-col gap-2 mt-2">
                <p
                  className="siena-view-201"
                  style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                  Opening Hours
                </p>
                <div className="w-8 h-[2px] bg-[#e0b265]/40 mb-1" />
                {info.hours.map(({ label, value }) => (
                  <p key={label} className="siena-view-202">
                    <span className="font-semibold">{label}</span>: {value}
                  </p>
                ))}
              </div>

              <div className="siena-view-203">
                <a
                  href={info.maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="siena-view-204 group"
                >
                  OPEN IN MAP
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-159" /></svg>
                </a>

                <Link
                  href={ORDER_ONLINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="siena-view-204 group"
                >
                  ORDER ONLINE
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none"><use href="/assets/siena-ui-icons.svg#siena-icon-3" className="siena-view-159" /></svg>
                </Link>
              </div>
            </div>

            {/* Mapa */}
            <div className="siena-view-205">
              <iframe
                title="Siena Restaurant location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.051868613463!2d-84.2991249!3d34.06818459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575f4dbde006b%3A0x8a505a045593f782!2sSiena%20Restaurant!5e0!3m2!1ses-419!2scr!4v1777903381535!5m2!1ses-419!2scr"
                className="w-full h-full absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="siena-view-190">
        <img width={1512} height={27} loading="lazy"
          src="/assets/divisor_estrella3.svg"
          alt="divider"
          className="siena-view-191"
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
                  <img loading="lazy"
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
