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

export default async function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <div className="w-10 h-[2px] bg-[#deae21] mx-auto mt-5" />
          <p className="text-[#030302]/60 text-[14px] mt-5">Last updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <Paragraph>
            This Privacy Policy explains how Siena Restaurant (&quot;Siena,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) collects, uses, and protects information when you visit sienaatl.com (the
            &quot;Site&quot;) or use our reservation, event inquiry, careers, and newsletter forms. By using the
            Site, you agree to the practices described below.
          </Paragraph>

          <Heading>Information We Collect</Heading>
          <Paragraph>We collect information you choose to give us through the Site&apos;s forms, including:</Paragraph>
          <List
            items={[
              <>
                <strong>Reservations</strong> — name, email, phone number, party size, preferred date and time,
                occasion, special requests, and your text-message consent preferences. Reservation data is submitted
                to our reservations partner at reservations.sienaatl.com to confirm and manage your booking.
              </>,
              <>
                <strong>Event &amp; private dining inquiries</strong> — name, email, phone number, event date, guest
                count, occasion, and any notes you provide.
              </>,
              <>
                <strong>Contact form</strong> — name, email, phone number, subject, and message.
              </>,
              <>
                <strong>Careers applications</strong> — name, email, phone number, residence, position applied for,
                availability, work experience, cover letter, and an optional resume file (PDF or Word document).
              </>,
              <>
                <strong>Newsletter signup</strong> — email address only.
              </>,
            ]}
          />
          <Paragraph>
            We also automatically collect limited technical information — such as browser type, device type, and
            general usage patterns — through Google Tag Manager and standard web server logs, to help us understand
            how the Site is used and to keep it running reliably.
          </Paragraph>

          <Heading>How We Use Your Information</Heading>
          <List
            items={[
              "To process and confirm reservations, event inquiries, and job applications.",
              "To respond to messages sent through our contact form.",
              "To send newsletter updates about menus, events, and specials, if you've subscribed.",
              "To send reservation confirmations and reminders by email or text message, where you've opted in.",
              "To improve the Site's content, functionality, and performance.",
              "To protect the Site against spam and abuse.",
            ]}
          />

          <Heading>Text Message (SMS) Communications</Heading>
          <Paragraph>
            If you opt in on the reservation form, we may send transactional text messages (reservation
            confirmations and reminders) and, separately, marketing texts about offers and events — the two are
            optional and independent of each other. Message and data rates may apply. You can opt out of marketing
            texts at any time by replying STOP; transactional messages relate directly to a reservation you&apos;ve
            made and are not a marketing communication.
          </Paragraph>

          <Heading>Cookies &amp; Analytics</Heading>
          <Paragraph>
            We use Google Tag Manager to load analytics and marketing tags that help us understand Site traffic.
            These tools may use cookies or similar technologies. You can control cookies through your browser
            settings; disabling them may affect some Site functionality.
          </Paragraph>

          <Heading>Third-Party Services</Heading>
          <Paragraph>We share information with the following third parties strictly to provide the services you request:</Paragraph>
          <List
            items={[
              <>
                <strong>reservations.sienaatl.com</strong> — processes and confirms table reservations submitted
                through our reservation form.
              </>,
              <>
                <strong>Google reCAPTCHA</strong> — protects our contact, event inquiry, and careers forms from spam
                and automated abuse.
              </>,
              <>
                <strong>Google Tag Manager</strong> — manages analytics and marketing tags used to understand Site
                traffic.
              </>,
              <>
                <strong>Toast</strong> — processes online food orders and gift card purchases when you use our
                &quot;Order Online&quot; or &quot;Gift Card&quot; links, which take you to Toast&apos;s own platform.
              </>,
              <>
                <strong>OpenTable, Google, and social platforms</strong> — linked from the Site (for reviews, maps,
                and social media) and governed by their own privacy policies.
              </>,
            ]}
          />
          <Paragraph>
            We do not sell your personal information. We only share it as described above, or when required by law.
          </Paragraph>

          <Heading>Data Retention &amp; Security</Heading>
          <Paragraph>
            We retain the information you submit for as long as needed to fulfill the purpose it was collected for
            (such as honoring a reservation or responding to an inquiry), and take reasonable technical and
            organizational measures to protect it. No method of transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </Paragraph>

          <Heading>Children&apos;s Privacy</Heading>
          <Paragraph>
            The Site is not directed to children under 13, and we do not knowingly collect personal information from
            children under 13.
          </Paragraph>

          <Heading>Your Choices</Heading>
          <List
            items={[
              "Unsubscribe from our newsletter at any time using the link in any email we send.",
              "Reply STOP to opt out of marketing text messages.",
              "Contact us using the details below to request access to, correction of, or deletion of your personal information.",
            ]}
          />

          <Heading>Changes to This Policy</Heading>
          <Paragraph>
            We may update this Privacy Policy from time to time. Changes take effect when posted on this page, and
            the &quot;Last updated&quot; date above will reflect the most recent revision.
          </Paragraph>

          <Heading>Contact Us</Heading>
          <Paragraph>
            If you have questions about this Privacy Policy or how we handle your information, contact us at{" "}
            <a href={`mailto:${info.email}`} className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
              {info.email}
            </a>
            , by phone at{" "}
            <a href={`tel:${info.phone.replace(/\D/g, "")}`} className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
              {info.phone}
            </a>
            , or by mail at {info.address}.
          </Paragraph>
        </div>
      </section>
    </main>
  );
}
