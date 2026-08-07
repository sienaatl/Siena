import Link from "next/link";
import { getRestaurantInfo } from "@/lib/restaurant";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[#e0b265] text-[24px] md:text-[28px] leading-tight mt-10 mb-3 first:mt-0"
      style={{ fontFamily: "'Palmore-Light', serif" }}
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">{children}</p>;
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-white/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default async function TermsOfService() {
  const info = await getRestaurantInfo();

  return (
    <main>
      {/* HEADER */}
      <section className="w-full pt-[140px] pb-[60px] px-4" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[820px] mx-auto text-center">
          <h1
            className="text-[#e0b265] text-[44px] md:text-[64px] leading-none tracking-[0.04em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
          >
            Terms &amp; Conditions
          </h1>
          <div className="w-10 h-[2px] bg-[#e0b265] mx-auto mt-5" />
          <p className="text-white/60 text-[14px] mt-5">Updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <Heading>1. General Terms</Heading>
          <Paragraph>
            These Terms &amp; Conditions govern your use of Siena Restaurant&apos;s website and related guest
            services, including reservations, event inquiries, email communications, and SMS messaging.
          </Paragraph>

          <Heading>2. Reservations</Heading>
          <Paragraph>
            Reservation availability is not guaranteed until confirmed. Siena may contact you about your reservation
            using the contact information you provide.
          </Paragraph>

          <Heading>3. SMS Messaging Terms</Heading>
          <Paragraph>
            Siena Restaurant offers optional SMS messaging for reservation-related and promotional communications.
          </Paragraph>
          <List
            items={[
              "Reservation messages: confirmations, modifications, cancellations, reminders, waitlist updates, and table-ready notices.",
              "Promotional messages: event announcements, offers, specials, and restaurant updates when you expressly opt in.",
              "Message frequency varies.",
              "Message and data rates may apply.",
              "Reply STOP at any time to opt out.",
              "Reply HELP for assistance.",
              "Consent is not a condition of purchase.",
            ]}
          />
          <Paragraph>
            SMS consent is collected through an affirmative, unchecked opt-in checkbox on Siena&apos;s website.
            Selecting a checkbox is optional and separate from submitting a reservation or inquiry.
          </Paragraph>
          <Paragraph>
            Mobile phone numbers, SMS opt-in information, and SMS consent are not sold, rented, or shared with third
            parties or affiliates for their marketing or promotional purposes.
          </Paragraph>

          <Heading>4. Opt-Out</Heading>
          <Paragraph>
            You may stop SMS messages at any time by replying STOP. After opting out, you may receive a final
            confirmation message. You may reply HELP for assistance.
          </Paragraph>

          <Heading>5. Privacy</Heading>
          <Paragraph>
            Your use of Siena&apos;s website and messaging services is also subject to our{" "}
            <Link href="/privacy-policy" className="text-[#e0b265] underline underline-offset-2 hover:text-white">
              Privacy Notice
            </Link>
            .
          </Paragraph>

          <Heading>6. Contact</Heading>
          <div className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">
            <p>Siena Restaurant</p>
            <p>{info.address}</p>
            <p>
              Phone:{" "}
              <a href={`tel:${info.phone.replace(/\D/g, "")}`} className="text-[#e0b265] underline underline-offset-2 hover:text-white">
                {info.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
