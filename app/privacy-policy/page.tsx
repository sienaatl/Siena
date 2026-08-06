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
            reservation and event inquiry experiences, newsletter sign-ups, guest communications, and in-person
            interactions with our restaurant. Third-party services you choose to use may have their own privacy
            policies.
          </Paragraph>

          <Heading>1. Scope of This Notice</Heading>
          <Paragraph>
            This Privacy Notice describes the privacy practices of Siena Restaurant in connection with our website
            and related guest services. When we use the terms &quot;Siena,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our,&quot; we mean the Siena Restaurant business responsible for the personal information described
            in this notice.
          </Paragraph>
          <Paragraph>
            Our website may link to third-party websites or services, including reservation, payment, social media,
            mapping, delivery, gift card, or marketing providers. Their privacy practices are governed by their own
            policies.
          </Paragraph>

          <Heading>2. Information We Collect</Heading>
          <Paragraph>Depending on how you interact with Siena, we may collect:</Paragraph>
          <List
            items={[
              <>
                <strong>Contact information</strong>, such as your name, email address, phone number, and mailing
                address when provided.
              </>,
              <>
                <strong>Reservation and dining information</strong>, such as party size, reservation date and time,
                dining preferences, special requests, celebration details, and guest notes.
              </>,
              <>
                <strong>Event inquiry information</strong>, such as requested dates, group size, event type, menu
                preferences, and other details you provide to our events team.
              </>,
              <>
                <strong>Transaction information</strong>, such as purchase, gift card, or payment-related details
                processed by our payment and commerce providers. Siena may not directly store full payment card
                numbers.
              </>,
              <>
                <strong>Communications</strong>, including messages, feedback, reviews, survey responses, and
                customer-service interactions.
              </>,
              <>
                <strong>Website and device information</strong>, such as IP address, browser type, device
                identifiers, pages viewed, referring pages, approximate location, and interaction data collected
                through cookies and similar technologies.
              </>,
              <>
                <strong>Marketing preferences</strong>, including whether you have subscribed to emails or opted
                into text messages where offered.
              </>,
            ]}
          />

          <Heading>3. How We Use Information</Heading>
          <Paragraph>We may use personal information to:</Paragraph>
          <List
            items={[
              "Process, confirm, modify, and manage reservations and event inquiries.",
              "Provide guest service and respond to questions, requests, comments, or complaints.",
              "Send transactional messages, including reservation confirmations, updates, cancellations, and service-related communications.",
              "Send marketing communications when permitted and consistent with your preferences.",
              "Personalize guest experiences and remember preferences where appropriate.",
              "Operate, maintain, secure, and improve our website and business.",
              "Measure website performance, understand engagement, and improve advertising and promotions.",
              "Detect fraud, misuse, security incidents, or other potentially unlawful activity.",
              "Comply with legal obligations and enforce our agreements and policies.",
            ]}
          />

          <Heading>4. Cookies, Analytics &amp; Tracking Technologies</Heading>
          <Paragraph>
            Siena and service providers acting on our behalf may use cookies, pixels, analytics tools, and similar
            technologies to help the website function, remember preferences, understand website traffic, measure
            performance, and support marketing.
          </Paragraph>
          <Paragraph>
            You can generally control cookies through your browser settings. Blocking certain cookies may affect
            some website features. Where required by law, additional consent or opt-out tools may be presented.
          </Paragraph>

          <Heading>5. How We Share Information</Heading>
          <Paragraph>
            We may disclose personal information to service providers and business partners that help us operate
            Siena, such as providers for reservations, website hosting, email and SMS communications, analytics,
            payment processing, gift cards, event management, security, and marketing.
          </Paragraph>
          <Paragraph>
            We may also disclose information when reasonably necessary to comply with law, respond to lawful
            requests, protect the rights and safety of Siena, our guests, or others, investigate fraud or security
            incidents, or complete a merger, financing, sale, reorganization, or similar business transaction.
          </Paragraph>
          <Paragraph>
            We do not intend to sell personal information for money. Some advertising or analytics activities may
            be treated as a &quot;sale,&quot; &quot;sharing,&quot; or &quot;targeted advertising&quot; under certain
            U.S. state privacy laws, depending on the technologies Siena uses.
          </Paragraph>

          <Heading>6. Your Choices</Heading>
          <List
            items={[
              <>
                <strong>Email Marketing</strong> — You may unsubscribe from promotional emails using the
                unsubscribe link included in the message.
              </>,
              <>
                <strong>Text Messages</strong> — If Siena offers text messaging, you may opt out by replying STOP to
                a Siena promotional text.
              </>,
              <>
                <strong>Cookies</strong> — You may adjust browser settings or use any privacy controls presented on
                our website.
              </>,
              <>
                <strong>Corrections</strong> — You may contact us to request that inaccurate information you
                provided be corrected.
              </>,
            ]}
          />
          <Paragraph>
            Even if you opt out of marketing, we may continue sending non-promotional communications relating to
            reservations, transactions, safety, or other services you request.
          </Paragraph>

          <Heading>7. State-Specific Privacy Rights</Heading>
          <Paragraph>
            Depending on where you live and subject to applicable law, you may have rights regarding your personal
            information, which can include the right to request access, correction, deletion, portability, or
            additional information about how personal information is used or disclosed. You may also have the right
            to opt out of certain targeted advertising, sales, or sharing of personal information.
          </Paragraph>
          <Paragraph>
            We may need to verify your identity before fulfilling a request. Authorized agents may submit requests
            where permitted by law, subject to appropriate verification.
          </Paragraph>

          <Heading>8. Data Retention</Heading>
          <Paragraph>
            We retain personal information for as long as reasonably necessary for the purposes described in this
            notice, including to provide services, maintain appropriate business and transaction records, comply
            with legal obligations, resolve disputes, enforce agreements, and protect Siena and our guests.
          </Paragraph>

          <Heading>9. How We Protect Information</Heading>
          <Paragraph>
            We use reasonable administrative, technical, and physical safeguards designed to protect personal
            information. However, no internet transmission, electronic storage method, or security system can be
            guaranteed to be completely secure.
          </Paragraph>

          <Heading>10. Children&apos;s Privacy</Heading>
          <Paragraph>
            Our website and services are intended for a general audience and are not directed to children under 13.
            We do not knowingly collect personal information online from children under 13 without appropriate
            authorization.
          </Paragraph>

          <Heading>11. Changes to This Notice</Heading>
          <Paragraph>
            We may update this Privacy Notice from time to time. When we do, we will revise the &quot;Updated&quot;
            date at the top of this page. Material changes may be communicated through additional notices when
            appropriate.
          </Paragraph>

          <Heading>12. Contact Us</Heading>
          <Paragraph>
            If you have a question about this Privacy Notice or would like to submit a privacy-related request,
            please contact Siena through our website or at the restaurant:
          </Paragraph>
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
