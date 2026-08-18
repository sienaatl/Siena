"use client";
import { useEffect, useRef, useState } from "react";
import { DayPicker, type DayButtonProps } from "react-day-picker";
import { dateToISO, parseLocalDate } from "@/lib/hours";

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDisplayDate(dateStr: string) {
  if (!dateStr) return "";
  return parseLocalDate(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Custom day-cell renderer so disabled dates (past days, days the restaurant is closed) are
// genuinely unclickable in the calendar UI itself, styled to match Siena's
// palette — rather than relying on a native <input type="date">'s `min`
// attribute, which Safari (macOS and iOS) doesn't consistently enforce.
function CalendarDayButton({ day, modifiers, className, ...buttonProps }: DayButtonProps) {
  const { selected, disabled, today, outside } = modifiers;
  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={[
        "w-9 h-9 mx-auto flex items-center justify-center text-[13px] rounded-full transition",
        disabled
          ? "text-[#777] line-through cursor-not-allowed"
          : "text-[#222] cursor-pointer hover:bg-[#1b312e]/10",
        selected ? "bg-[#1b312e] text-white hover:bg-[#1b312e]" : "",
        today && !selected && !disabled ? "font-bold text-[#1b312e] ring-1 ring-inset ring-[#1b312e]/40" : "",
        outside && !disabled ? "text-[#ccc]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

// The reservations form's own date picker, shared here so anywhere else on
// the site that wants "pick a reservation date" (the homepage booking
// widget, e.g.) gets the exact same calendar, disabled-day rules, and look —
// one implementation instead of two that can quietly drift apart.
export function ReservationDatePicker({
  value,
  onChange,
  closedWeekdays,
  buttonClassName,
  placeholder = "Select a date",
  ariaLabel = "Reservation date",
}: {
  value: string;
  onChange: (isoDate: string) => void;
  closedWeekdays: number[];
  buttonClassName: string;
  placeholder?: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const fieldRef = useRef<HTMLDivElement | null>(null);

  // Close the calendar popover on an outside click or Escape.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: MouseEvent) {
      if (fieldRef.current && !fieldRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={fieldRef}>
      <button type="button" onClick={() => setOpen((o) => !o)} className={buttonClassName} aria-label={ariaLabel}>
        <span className={value ? "text-white" : "text-white/40"}>
          {value ? formatDisplayDate(value) : placeholder}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0b265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 bg-white border border-[#1b312e]/15 shadow-xl p-3">
          <DayPicker
            mode="single"
            selected={value ? parseLocalDate(value) : undefined}
            defaultMonth={value ? parseLocalDate(value) : new Date()}
            disabled={[{ before: startOfToday() }, { dayOfWeek: closedWeekdays }]}
            onSelect={(d) => {
              if (!d) return;
              onChange(dateToISO(d));
              setOpen(false);
            }}
            components={{ DayButton: CalendarDayButton }}
            // "around" puts the prev/next buttons as normal in-flow
            // siblings of the caption (flex-wrapped below), instead of the
            // default single <nav> absolutely positioned over the caption —
            // that overlap was swallowing clicks on the next-month button.
            navLayout="around"
            classNames={{
              months: "flex flex-col",
              month: "flex flex-wrap items-center gap-y-1",
              month_caption: "flex-1 flex justify-center items-center h-9 text-[14px] font-semibold text-[#222] order-2",
              button_previous: "order-1 p-1.5 hover:bg-[#1b312e]/10 rounded-full transition cursor-pointer flex-shrink-0",
              button_next: "order-3 p-1.5 hover:bg-[#1b312e]/10 rounded-full transition cursor-pointer flex-shrink-0",
              chevron: "fill-[#1b312e] w-4 h-4",
              month_grid: "w-full basis-full border-collapse mt-1 order-4",
              weekdays: "flex",
              weekday: "text-[11px] font-semibold text-[#999] uppercase w-9 h-9 flex items-center justify-center",
              week: "flex w-full mt-1",
              // Fixed width/height so empty cells for days outside the
              // month (before the 1st, after the last) still reserve their
              // column's space in the flex row — without this they collapse
              // to zero width and every later cell shifts left, breaking the
              // Sun-Sat alignment with the weekday header.
              day: "w-9 h-9 p-0 flex items-center justify-center flex-shrink-0",
            }}
          />
        </div>
      )}
    </div>
  );
}
