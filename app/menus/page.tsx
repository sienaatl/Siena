"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import siteData from "@/lib/site-data.json";

/* ─── Types ─────────────────────────────────────────────── */
interface MenuItem {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface SubSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface TabData {
  id: string;
  label: string;
  subsections: SubSection[];
  footnote?: string;
}


/* ─── MenuItemCard ───────────────────────────────────────── */
function MenuItemCard({ item }: { item: MenuItem }) {
  const hasImage = !!item.image;

  return (
    <div className="siena-menu-1">
      {hasImage && (
        <div className="siena-menu-2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <h4
        className="siena-menu-3 siena-menu-item-title"
      >
        {item.name}
      </h4>
      {item.description && (
        <p className="siena-menu-4">
          {item.description}
        </p>
      )}
      {item.price && (
        <p className="siena-menu-5">
          {item.price}
        </p>
      )}
    </div>
  );
}

/* ─── SubSectionBlock ────────────────────────────────────── */
function SubSectionBlock({ id, title, subtitle, items }: SubSection) {
  return (
    <div id={id} className="w-full py-[40px] md:py-[60px]">
      <div className="siena-menu-6">
        <div className="siena-menu-7">
          <img
            src="/assets/icono_123.svg"
            alt=""
            aria-hidden="true"
            className="siena-menu-8"
          />
          <h3
            className="siena-menu-9 siena-menu-heading"
          >
            {title}
          </h3>
        </div>
        {subtitle && (
          <p className="siena-menu-10">
            {subtitle}
          </p>
        )}
        <div className="flex items-center gap-3 mt-3">
          <div className="siena-menu-11" />
          <span className="siena-menu-12">✦</span>
          <div className="siena-menu-13" />
        </div>
      </div>

      {items.length > 0 ? (
        <div className="px-4 md:px-8">
          <div className="siena-menu-14">
            {items.map((item, i) => (
              <MenuItemCard key={i} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="siena-menu-15">
          Coming soon…
        </div>
      )}
    </div>
  );
}

/* ─── MenuDeepLink ───────────────────────────────────────────
   Handles ?tab= deep links from the homepage. Kept in its own component with its
   own Suspense boundary on purpose: useSearchParams makes the nearest boundary
   render its fallback on the server, and when that boundary wrapped the whole
   page, Google received an empty document. Confining it here lets the menu
   itself server-render while the deep-link behaviour still works. */
function MenuDeepLink({
  tabs,
  headerHeight,
  onSelect,
}: {
  tabs: TabData[];
  headerHeight: number;
  onSelect: (id: string) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (!tab || !tabs.length) return;
    const timer = setTimeout(() => {
      const section = document.getElementById(tab);
      if (section) {
        const offset = headerHeight + 80;
        window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
        const isTab = tabs.some((t) => t.id === tab);
        if (isTab) {
          onSelect(tab);
        } else {
          const parentTab = tabs.find((t) => t.subsections.some((s) => s.id === tab));
          if (parentTab) onSelect(parentTab.id);
        }
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchParams, tabs, headerHeight, onSelect]);

  return null;
}

/* ─── MenuContent ────────────────────────────────────────── */
function MenuContent() {
  const [tabs] = useState<TabData[]>(siteData.menuTabs as TabData[]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "");
  const [headerHeight, setHeaderHeight] = useState(80);
  const loading = false;
  const menuError: string | null = null;
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  /* ── Header shrink on scroll ── */
  useEffect(() => {
    const handleScroll = () => setHeaderHeight(window.scrollY > 10 ? 60 : 80);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── IntersectionObserver for active tab ── */
  useEffect(() => {
    if (!tabs.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: "-220px 0px -60% 0px", threshold: 0 }
    );
    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tabs]);

  /* ── Auto-scroll active tab button into view ── */
  useEffect(() => {
    const btn = tabsContainerRef.current?.querySelector(
      `[data-tab-id="${activeTab}"]`
    ) as HTMLElement | null;
    const container = tabsContainerRef.current;
    if (btn && container) {
      const scrollLeft = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeTab]);


  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = headerHeight + 80;
      window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#1b312e]">
      <Suspense fallback={null}>
        <MenuDeepLink tabs={tabs} headerHeight={headerHeight} onSelect={setActiveTab} />
      </Suspense>
      {/* HERO */}
      <section className="siena-menu-16">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/assets/pages/Menu/menu-hero.webp"
            alt="Menu at Siena"
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="siena-menu-17">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="siena-menu-18" />
            <span className="siena-menu-19">✦</span>
            <div className="siena-menu-20" />
          </motion.div>
          <motion.h1
            className="siena-menu-21 siena-menu-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            SIENA RESTAURANT MENU
          </motion.h1>
          <motion.div
            className="flex items-center gap-3 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="siena-menu-18" />
            <span className="siena-menu-19">✦</span>
            <div className="siena-menu-20" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="siena-menu-22">
        <style>{`
          @keyframes mq-menu { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-menu { display:flex; width:max-content; animation:mq-menu 24s linear infinite; }
        `}</style>
        <div className="mq-menu">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="siena-menu-23">MEDITERRANEAN CUISINE</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-menu-23">SIENA RESTAURANT</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-menu-23">ALPHARETTA, GEORGIA</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-menu-23">CRAFTED WITH PASSION</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* STICKY TABS */}
      {tabs.length > 0 && (
        <div
          className="siena-menu-24"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="siena-menu-25">
            <div ref={tabsContainerRef} className="overflow-x-auto scrollbar-hide">
              <div className="siena-menu-26">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      data-tab-id={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`px-4 md:px-5 py-[7px] text-[11px] md:text-[12px] tracking-[0.14em] uppercase cursor-pointer transition-all duration-200 border font-medium ${
                        isActive
                          ? "bg-[#e0b265] text-[#1b312e] border-[#e0b265]"
                          : "bg-transparent text-white/55 border-white/20 hover:border-[#e0b265]/50 hover:text-[#e0b265]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MENU SECTIONS */}
      <div className="siena-menu-27">
        <div className="siena-menu-28">
          <p>
            Browse the Siena Restaurant menu for Mediterranean and Italian dining in
            Alpharetta. Use the tabs above to view dinner, happy hour and drinks.
            Start with hummus or crispy cauliflower with sweet chili aioli, then
            explore pasta, seafood and grilled dishes below.
          </p>
          <p>
            Each dish lists its ingredients and price. Happy hour runs Tuesday
            through Thursday, 4–6 PM. Ask our team about dietary needs before ordering.
          </p>
        </div>
        {loading && (
          <div className="siena-menu-29">
            <div className="siena-menu-30">
              <div className="siena-menu-31" />
              <p className="siena-menu-32">Loading menu…</p>
            </div>
          </div>
        )}
        {menuError && (
          <div className="siena-menu-33">{menuError}</div>
        )}
        {!loading && !menuError && (
          <div className="bg-transparent overflow-hidden">
            {tabs.map((tab) => (
              <section
                key={tab.id}
                id={tab.id}
                className="siena-menu-34"
              >
                {/* Tab section header */}
                <div className="siena-menu-35">
                  <motion.img
                    src="/assets/icon_menus.svg"
                    alt=""
                    className="siena-menu-36"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="relative inline-block">
                    <motion.h2
                      className="siena-menu-37 siena-menu-heading"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                      {tab.label}
                    </motion.h2>
                    <motion.span
                      className="siena-menu-38"
                      style={{
                        fontFamily: "'AguafinaScript-Regular', cursive",
                        textShadow: "3px 3px 0 #1b312e,-3px -3px 0 #1b312e,3px -3px 0 #1b312e,-3px 3px 0 #1b312e,0 3px 0 #1b312e,0 -3px 0 #1b312e,3px 0 0 #1b312e,-3px 0 0 #1b312e",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                      at Siena
                    </motion.span>
                  </div>
                  {tab.id === "happy-hour" && (
                    <p className="siena-menu-39">
                      Tuesday–Thursday · 4–6 PM
                    </p>
                  )}
                </div>

                {/* Subsections */}
                {tab.subsections.map((sub, i) => (
                  <SubSectionBlock key={i} {...sub} />
                ))}

                {tab.footnote && (
                  <div className="siena-menu-40">
                    {tab.footnote.split("\n").map((line, i) => (
                      <p key={i} className="siena-menu-41">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

/* ─── Page export ────────────────────────────────────────── */
export default function MenuPage() {
  return (
    <Suspense>
      <MenuContent />
    </Suspense>
  );
}
