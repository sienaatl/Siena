import Link from "next/link";
import { getRestaurantInfo } from "@/lib/restaurant";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[#58021f] text-[24px] md:text-[28px] leading-tight mt-10 mb-3 first:mt-0"
      style={{ fontFamily: "'Palmore-Light', serif" }}
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-[#030302]/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">{children}</p>;
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-[#030302]/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default async function PrivacyNotice() {
  const info = await getRestaurantInfo();

  return (
    <main>
      {/* HEADER */}
      <section className="w-full pt-[140px] pb-[60px] px-4" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[820px] mx-auto text-center">
          <h1
            className="text-[#58021f] text-[44px] md:text-[64px] leading-none tracking-[0.04em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
          >
            Privacy Notice
          </h1>
          <div className="w-10 h-[2px] bg-[#deae21] mx-auto mt-5" />
          <p className="text-[#030302]/60 text-[14px] mt-5">Updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <Heading>About This Notice</Heading>
          <Paragraph>
            This Privacy Notice applies to personal information collected through Siena Restaurant&apos;s website,
            reservation and event inquiry experiences, newsletter sign-ups, guest communications, SMS messaging, and
            in-person interactions with our restaurant.
          </Paragraph>

          <Heading>1. Information We Collect</Heading>
          <Paragraph>Depending on how you interact with Siena, we may collect:</Paragraph>
          <List
            items={[
              "Contact information such as your name, email address, and phone number.",
              "Reservation and dining information, including party size, date, time, preferences, and special requests.",
              "Event inquiry information.",
              "Communications and customer-service interactions.",
              "Website and device information collected through cookies and similar technologies.",
              "Marketing and messaging preferences, including SMS opt-in status and consent records.",
            ]}
          />

          <Heading>2. How We Use Information</Heading>
          <List
            items={[
              "Process, confirm, modify, and manage reservations.",
              "Send reservation confirmations, reminders, modifications, cancellations, waitlist, and table-ready notifications.",
              "Respond to guest questions and requests.",
              "Send promotional messages only when the guest has expressly opted in.",
              "Operate, secure, and improve our website and business.",
            ]}
          />

          <Heading>3. SMS Messaging Privacy</Heading>
          <Paragraph>
            If you provide your mobile phone number and expressly opt in to receive text messages from Siena
            Restaurant, we may use your number to send reservation confirmations, reservation reminders, reservation
            modifications, cancellation notifications, waitlist or table-ready notifications, event-related
            communications, customer-service messages, and promotional messages you have specifically agreed to
            receive.
          </Paragraph>
          <Paragraph>
            Message frequency varies. Message and data rates may apply. You may opt out at any time by replying STOP
            to any Siena text message. Reply HELP for assistance. SMS consent is not a condition of purchasing goods
            or services.
          </Paragraph>
          <Paragraph>
            Mobile phone numbers, SMS opt-in data, and SMS consent will not be sold, rented, shared, or disclosed to
            third parties or affiliates for their marketing or promotional purposes.
          </Paragraph>
          <Paragraph>
            We may share limited information with service providers that process messages on Siena&apos;s behalf only as
            necessary to provide the messaging service and subject to appropriate contractual restrictions.
          </Paragraph>

          <Heading>4. How We Share Information</Heading>
          <Paragraph>
            We may disclose personal information to service providers that help us operate Siena, such as providers
            for reservations, website hosting, communications, analytics, payments, gift cards, security, and event
            management. We may also disclose information when required by law or necessary to protect Siena, our
            guests, or others.
          </Paragraph>

          <Heading>5. Your Choices</Heading>
          <List
            items={[
              <>
                <strong>Email marketing:</strong> use the unsubscribe link in any promotional email.
              </>,
              <>
                <strong>Text messages:</strong> reply STOP to opt out and HELP for assistance.
              </>,
              <>
                <strong>Cookies:</strong> adjust your browser settings or available website controls.
              </>,
              <>
                <strong>Corrections:</strong> contact us to request correction of inaccurate information.
              </>,
            ]}
          />

          <Heading>6. Data Retention</Heading>
          <Paragraph>
            We retain personal information only as long as reasonably necessary for the purposes described in this
            notice, including maintaining appropriate consent and business records.
          </Paragraph>

          <Heading>7. Security</Heading>
          <Paragraph>
            We use reasonable administrative, technical, and physical safeguards designed to protect personal
            information. No method of transmission or storage can be guaranteed completely secure.
          </Paragraph>

          <Heading>8. Changes to This Notice</Heading>
          <Paragraph>
            We may update this Privacy Notice from time to time. When we do, we will revise the updated date at the
            top of this page.
          </Paragraph>

          <Heading>9. Contact Us</Heading>
          <div className="text-[#030302]/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">
            <p>Siena Restaurant</p>
            <p>{info.address}</p>
            <p>
              Phone:{" "}
              <a href={`tel:${info.phone.replace(/\D/g, "")}`} className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                {info.phone}
              </a>
            </p>
            <p>
              <Link href="/contact-us" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                Contact Siena online
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
