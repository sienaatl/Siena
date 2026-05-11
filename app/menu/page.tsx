"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import { supabase, supabaseClientId } from "@/lib/supabase";

/* ─── Types ─────────────────────────────────────────────── */
interface MenuItem {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface SubSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface TabData {
  id: string;
  label: string;
  subsections: SubSection[];
}

type MenuRow = { id: string; name: string; sort_order: number };
type CategoryRow = { id: string; menu_id: string; name: string; description: string | null; sort_order: number };
type ItemRow = {
  id: string;
  category_id: string;
  name: string;
  description: string | null;
  base_price: number | null;
  base_price_max: number | null;
  base_is_price_range: boolean | null;
  image_url: string | null;
  sort_order: number;
  price_variants: { name: string; price: string | number }[] | null;
};

/* ─── Helpers ────────────────────────────────────────────── */
function formatPrice(item: ItemRow): string {
  if (item.price_variants && item.price_variants.length > 0) {
    return item.price_variants.map((v) => `${v.name}  ${v.price}`).join("\n");
  }
  if (item.base_price === null || item.base_price === 0) return "";
  if (item.base_is_price_range && item.base_price_max !== null) {
    return `${item.base_price} – ${item.base_price_max}`;
  }
  return String(item.base_price);
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

/* ─── MenuItemCard ───────────────────────────────────────── */
function MenuItemCard({ item }: { item: MenuItem }) {
  const hasImage = !!item.image;

  return (
    <div className="bg-white shadow-sm border border-[#e8dfc8] py-6 px-5 flex flex-col items-center justify-center text-center gap-3">
      {hasImage && (
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <h4
        className="text-[26px] md:text-[32px] leading-tight uppercase text-[#58021f]"
        style={{ fontFamily: "'Palmore-Light', serif" }}
      >
        {item.name}
      </h4>
      {item.description && (
        <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#030302]/65 whitespace-pre-line">
          {item.description}
        </p>
      )}
      {item.price && (
        <p className="text-[14px] md:text-[15px] font-semibold text-[#030302]/80 whitespace-pre-line mt-auto pt-1">
          {item.price}
        </p>
      )}
    </div>
  );
}

/* ─── SubSectionBlock ────────────────────────────────────── */
function SubSectionBlock({ title, subtitle, items }: SubSection) {
  return (
    <div className="w-full py-[40px] md:py-[60px]">
      <div className="flex flex-col items-center text-center mb-[30px] md:mb-[40px] px-4">
        <div className="relative inline-flex flex-col items-center">
          <img
            src="/assets/icono_123.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[90%] w-[80px] h-auto pointer-events-none z-0 opacity-15"
          />
          <h3
            className="relative z-10 text-[44px] md:text-[60px] leading-tight uppercase text-[#58021f]"
            style={{ fontFamily: "'Palmore-Light', serif" }}
          >
            {title}
          </h3>
        </div>
        {subtitle && (
          <p className="text-[14px] md:text-[16px] text-[#030302]/60 mt-2 uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        <div className="flex items-center gap-3 mt-3">
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-[#deae21]/60" />
          <span className="text-[#deae21] text-[10px] tracking-[0.4em]">✦</span>
          <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-[#deae21]/60" />
        </div>
      </div>

      {items.length > 0 ? (
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, i) => (
              <MenuItemCard key={i} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-[#030302]/40 italic px-4 text-sm">
          Coming soon…
        </div>
      )}
    </div>
  );
}

/* ─── MenuContent ────────────────────────────────────────── */
function MenuContent() {
  const searchParams = useSearchParams();
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [headerHeight, setHeaderHeight] = useState(80);
  const [menuError, setMenuError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  /* ── Fetch data from Supabase ── */
  useEffect(() => {
    let isMounted = true;

    async function loadMenu() {
      const { data: menus, error: menusError } = await supabase
        .from("menus")
        .select("id, name, sort_order")
        .eq("restaurant_id", supabaseClientId)
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (menusError || !menus?.length) {
        if (isMounted) { setMenuError("Menu unavailable"); setLoading(false); }
        return;
      }

      const menuIds = menus.map((m) => m.id);

      const { data: categories, error: catError } = await supabase
        .from("menu_categories")
        .select("id, menu_id, name, description, sort_order")
        .in("menu_id", menuIds)
        .order("sort_order", { ascending: true });

      if (catError) {
        if (isMounted) { setMenuError("Menu unavailable"); setLoading(false); }
        return;
      }

      const categoryIds = (categories ?? []).map((c) => c.id);

      const { data: items, error: itemsError } = await supabase
        .from("menu_items")
        .select("id, category_id, name, description, base_price, base_price_max, base_is_price_range, image_url, sort_order, price_variants")
        .in("category_id", categoryIds)
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (itemsError) {
        if (isMounted) { setMenuError("Menu unavailable"); setLoading(false); }
        return;
      }

      const itemsByCatId = new Map<string, ItemRow[]>();
      for (const item of (items ?? []) as ItemRow[]) {
        const group = itemsByCatId.get(item.category_id) ?? [];
        group.push(item);
        itemsByCatId.set(item.category_id, group);
      }

      const tabOrder = ["main menu", "weekend brunch"];
      const sortedMenus = [...(menus as MenuRow[])].sort((a, b) => {
        const ai = tabOrder.indexOf(a.name.toLowerCase());
        const bi = tabOrder.indexOf(b.name.toLowerCase());
        if (ai !== -1 && bi !== -1) return ai - bi;
        if (ai !== -1) return -1;
        if (bi !== -1) return 1;
        return a.sort_order - b.sort_order;
      });

      const tabData: TabData[] = sortedMenus.map((menu) => {
        const menuCats = (categories ?? []).filter((c) => c.menu_id === menu.id) as CategoryRow[];
        const subsections: SubSection[] = menuCats.map((cat) => ({
          title: cat.name,
          subtitle: cat.description || undefined,
          items: (itemsByCatId.get(cat.id) ?? []).map((item) => ({
            image: item.image_url || "",
            name: item.name,
            description: item.description || "",
            price: formatPrice(item),
          })),
        }));
        return { id: slugify(menu.name), label: menu.name, subsections };
      });

      if (isMounted) {
        setTabs(tabData);
        setActiveTab(tabData[0]?.id ?? "");
        setLoading(false);
      }
    }

    loadMenu();
    return () => { isMounted = false; };
  }, []);

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

  /* ── Deep-link via ?tab= ── */
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (!tab || !tabs.length) return;
    const timer = setTimeout(() => {
      const section = document.getElementById(tab);
      if (section) {
        const offset = headerHeight + 80;
        window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
        setActiveTab(tab);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchParams, tabs, headerHeight]);

  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = headerHeight + 80;
      window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#f5efdd]">
      {/* HERO */}
      <section className="relative w-full h-[400px] md:h-[45vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/assets/Siena_20.03.26-PS-NarissaChickenLolipapas.webp"
            alt="Menu at Siena"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-10 md:pt-12">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#deae21]/80" />
            <span className="text-[#deae21] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#deae21]/80" />
          </motion.div>
          <motion.h1
            className="text-[#f5efdd] text-[52px] md:text-[82px] lg:text-[104px] leading-none tracking-tight uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            MENU
          </motion.h1>
          <motion.div
            className="flex items-center gap-3 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#deae21]/80" />
            <span className="text-[#deae21] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#deae21]/80" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-menu { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-menu { display:flex; width:max-content; animation:mq-menu 24s linear infinite; }
        `}</style>
        <div className="mq-menu">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">MEDITERRANEAN CUISINE</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">SIENA RESTAURANT</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">ALPHARETTA, GEORGIA</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">CRAFTED WITH PASSION</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* STICKY TABS */}
      {tabs.length > 0 && (
        <div
          className="sticky z-40 transition-all duration-300 bg-[#f5efdd]"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="max-w-[1180px] mx-auto">
            <div ref={tabsContainerRef} className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-6 md:gap-10 px-6 md:px-10 pt-4 pb-0 whitespace-nowrap justify-start md:justify-center">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      data-tab-id={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`relative text-[13px] md:text-[16px] tracking-[0.12em] uppercase cursor-pointer pb-3 md:pb-4 transition-colors duration-200 ${
                        isActive ? "text-[#59021e] font-semibold" : "text-[#030203] font-normal hover:text-[#030203]"
                      }`}
                    >
                      <span className="relative inline-block">
                        {tab.label}
                        {isActive && (
                          <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#59021e]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="px-6 md:px-10">
                <div className="h-px bg-[#030302]/15" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MENU SECTIONS */}
      <div className="max-w-[1180px] mx-auto pb-16 px-4 md:px-8 pt-8">
        {loading && (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-[#deae21] border-t-transparent rounded-full animate-spin" />
              <p className="text-[#030302]/50 text-sm tracking-widest uppercase">Loading menu…</p>
            </div>
          </div>
        )}
        {menuError && (
          <div className="text-center py-16 text-[#030302]/50 italic text-sm">{menuError}</div>
        )}
        {!loading && !menuError && (
          <div className="bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] rounded-sm overflow-hidden">
            {tabs.map((tab) => (
              <section
                key={tab.id}
                id={tab.id}
                className="w-full scroll-mt-[180px] md:scroll-mt-[200px] border-b border-[#e8dfc8] last:border-b-0"
              >
                {/* Tab section header */}
                <div className="w-full py-[50px] md:py-[70px] flex flex-col items-center text-center px-4 bg-white">
                  <motion.img
                    src="/assets/icon_menus.svg"
                    alt=""
                    className="w-[55px] md:w-[70px] mb-2 opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="relative inline-block">
                    <motion.h2
                      className="text-[#58021f] text-[52px] md:text-[72px] lg:text-[88px] leading-[0.9] tracking-tight uppercase"
                      style={{ fontFamily: "'Palmore-Light', serif" }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                      {tab.label}
                    </motion.h2>
                    <motion.span
                      className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[24px] md:text-[50px] lg:text-[68px] leading-none whitespace-nowrap"
                      style={{
                        fontFamily: "'AguafinaScript-Regular', cursive",
                        textShadow: "2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                      at Siena
                    </motion.span>
                  </div>
                </div>

                {/* Subsections */}
                {tab.subsections.map((sub, i) => (
                  <SubSectionBlock key={i} {...sub} />
                ))}
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
