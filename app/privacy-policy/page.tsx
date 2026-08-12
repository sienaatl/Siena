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

export default async function PrivacyNotice() {
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
            Privacy Notice
          </h1>
          <div className="w-10 h-[2px] bg-[#e0b265] mx-auto mt-5" />
          <p className="text-white/60 text-[14px] mt-5">Updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <Heading>About This Notice</Heading>
          <Paragraph>
            Siena Restaurant (&ldquo;Siena,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects
            your privacy and is committed to protecting the personal information you provide to us.
          </Paragraph>
          <Paragraph>
            This Privacy Notice explains how Siena Restaurant collects, uses, stores, and shares information when you
            visit our website, make or modify a reservation, join a waitlist, submit an event or private dining
            inquiry, contact us, opt in to receive text messages or marketing communications, or otherwise interact
            with Siena Restaurant.
          </Paragraph>

          <Heading>1. Information We Collect</Heading>
          <Paragraph>
            Depending on how you interact with Siena Restaurant, we may collect information you voluntarily provide,
            including your name, email address, mobile or telephone number, reservation information, reservation date
            and time, party size, special requests, birthday or special occasion information you choose to provide,
            event or private dining inquiry information, communication preferences, SMS/text messaging consent
            preferences, marketing communication preferences, customer service communications, feedback, and other
            information you voluntarily provide.
          </Paragraph>
          <Paragraph>
            When you use our website, certain technical information may also be collected automatically, including IP
            address, browser type, device type, operating system, pages visited, referring website, date and time of
            access, general location derived from IP address, cookies, and website interaction or analytics data.
          </Paragraph>

          <Heading>2. How We Use Your Information</Heading>
          <Paragraph>
            We may use your information to create, confirm, manage, modify, or cancel reservations; send reservation
            confirmations and reminders; provide waitlist and table-ready notifications; respond to inquiries;
            provide customer service; process event and private dining inquiries; communicate regarding restaurant
            services; send transactional SMS messages when you have consented; send promotional SMS messages when you
            have separately consented; maintain records of communication and consent; improve our website and guest
            experience; prevent fraud and security incidents; and comply with applicable legal requirements.
          </Paragraph>

          <Heading>3. SMS/Text Messaging Program</Heading>
          <Paragraph>
            Siena Restaurant may offer text messaging programs for reservation-related, service-related, and, where
            separately authorized, promotional communications. Providing a mobile telephone number alone does not
            automatically enroll you in promotional SMS marketing.
          </Paragraph>
          <Paragraph>
            <strong className="text-white">Reservation and Service SMS.</strong> Customers who expressly opt in may
            receive reservation confirmations, reminders, modifications, cancellation confirmations, waitlist
            notifications, table-ready notifications, responses to reservation inquiries, event or private dining
            inquiry follow-ups, customer service messages, and other communications directly related to a requested
            service.
          </Paragraph>
          <Paragraph>
            <strong className="text-white">Promotional SMS.</strong> Customers who separately and expressly opt in to
            promotional SMS communications may receive recurring marketing messages regarding restaurant events,
            dining specials, special offers, promotions, happy hour, live entertainment, special menus, restaurant
            news, and other Siena Restaurant updates.
          </Paragraph>

          <Heading>4. How SMS Consent Is Obtained</Heading>
          <Paragraph>
            Siena Restaurant obtains SMS consent through affirmative opt-in methods. Customers may be presented with
            SMS consent options on reservation forms, contact forms, event or group dining forms, or other website
            forms offering text messaging.
          </Paragraph>
          <List
            items={[
              "SMS consent checkboxes are optional.",
              "The customer must affirmatively select the applicable checkbox.",
              "Consent checkboxes are not pre-selected.",
              <>SMS consent is separate from general acceptance of this Privacy Notice or our Terms &amp; Conditions.</>,
              "Customers are not required to consent to promotional text messages to purchase goods or services.",
            ]}
          />
          <Paragraph>
            Siena Restaurant may maintain records of SMS consent and opt-out requests as reasonably necessary to
            administer its messaging programs and demonstrate compliance.
          </Paragraph>

          <Heading>5. Message Frequency and Charges</Heading>
          <Paragraph>
            Message frequency varies depending on your interactions with Siena Restaurant and the messaging programs
            to which you subscribe. Message and data rates may apply. Your wireless carrier&apos;s standard messaging
            and data rates may apply. Wireless carriers are not liable for delayed or undelivered messages.
          </Paragraph>

          <Heading>6. SMS Opt-Out and Help</Heading>
          <Paragraph>
            You may withdraw consent to receive SMS messages at any time by replying STOP to a Siena Restaurant text
            message. You may receive a one-time confirmation acknowledging your opt-out request. For assistance,
            reply HELP or contact Siena Restaurant through our website.
          </Paragraph>

          <Heading>7. Consent Is Not a Condition of Purchase</Heading>
          <Paragraph>
            Your consent to receive SMS or marketing messages is voluntary. Consent to receive SMS messages is not a
            condition of purchasing any goods or services from Siena Restaurant.
          </Paragraph>

          <Heading>8. Mobile Information and SMS Consent — No Marketing Sharing</Heading>
          <Paragraph>
            Siena Restaurant does not sell, rent, share, or otherwise provide your mobile telephone number, SMS
            opt-in information, or SMS consent information to third parties or affiliates for their marketing or
            promotional purposes.
          </Paragraph>
          <Paragraph>
            We may disclose information to service providers that perform services on our behalf and require access
            solely to provide those services, such as communications technology, reservation management, website
            hosting, customer support, and SMS delivery services. Such providers may use the information only as
            necessary to perform services for Siena Restaurant and not for their own independent marketing purposes.
          </Paragraph>
          <Paragraph>
            Text messaging originator opt-in data and consent will not be shared with third parties or affiliates for
            their marketing or promotional purposes.
          </Paragraph>

          <Heading>9. How We Share Other Personal Information</Heading>
          <Paragraph>
            We do not sell personal information in the ordinary course of our business. We may share non-SMS-related
            personal information with service providers that assist with reservation management, website hosting,
            email services, payments, analytics, customer relationship management, communications, IT, security, and
            professional services, only as reasonably necessary to perform services on our behalf.
          </Paragraph>

          <Heading>10. Legal and Safety Disclosures</Heading>
          <Paragraph>
            We may disclose information when reasonably necessary to comply with law, legal process, court orders, or
            governmental requests; protect Siena Restaurant&apos;s rights or property; protect guests, employees,
            customers, or others; investigate fraud or suspected illegal activity; prevent misuse of our services; or
            enforce our terms and policies.
          </Paragraph>

          <Heading>11. Business Transfers</Heading>
          <Paragraph>
            If Siena Restaurant is involved in a merger, acquisition, financing, restructuring, sale of assets, or
            similar transaction, information may be transferred as permitted by applicable law. SMS opt-in and
            consent information remains subject to the restrictions described in this Privacy Notice and will not be
            transferred for unrelated third-party marketing or promotional use.
          </Paragraph>

          <Heading>12. Cookies and Analytics</Heading>
          <Paragraph>
            Our website may use cookies, pixels, local storage, analytics technologies, and similar tools to operate
            the website, remember preferences, analyze traffic and usage, improve performance, and support security.
            Your browser may allow you to block or delete cookies, although doing so may affect website
            functionality.
          </Paragraph>

          <Heading>13. Third-Party Services and Links</Heading>
          <Paragraph>
            Siena Restaurant may use third-party platforms for reservations, payments, communications, events,
            analytics, or other services. Information submitted directly to a third-party provider may also be
            governed by that provider&apos;s privacy policy and terms. Siena Restaurant is not responsible for the
            privacy practices or content of third-party websites.
          </Paragraph>

          <Heading>14. Data Retention</Heading>
          <Paragraph>
            We retain personal information for as long as reasonably necessary to provide requested services,
            maintain reservations and customer records, document communication preferences and consent, resolve
            disputes, maintain security, meet legitimate business needs, and comply with legal obligations. SMS
            consent and opt-out records may be retained as necessary to document compliance.
          </Paragraph>

          <Heading>15. Data Security</Heading>
          <Paragraph>
            We use reasonable administrative, technical, and organizational measures designed to protect personal
            information against unauthorized access, disclosure, alteration, misuse, or destruction. No website,
            network, electronic communication, or storage system can be guaranteed to be completely secure.
          </Paragraph>

          <Heading>16. Communication Preferences</Heading>
          <Paragraph>
            You may change your communication preferences at any time. For SMS messages, reply STOP to opt out or
            HELP for assistance. For promotional emails, use the unsubscribe option provided in the applicable email
            when available.
          </Paragraph>

          <Heading>17. Children&apos;s Privacy</Heading>
          <Paragraph>
            Our website and messaging programs are intended for a general audience and are not directed toward
            children under 13. We do not knowingly collect personal information online from children under 13
            without appropriate authorization.
          </Paragraph>

          <Heading>18. Your Privacy Rights</Heading>
          <Paragraph>
            Depending on your location and applicable law, you may have rights to request access to, correction of,
            or deletion of certain personal information, withdraw certain forms of consent, or opt out of certain
            marketing communications. These rights may be subject to legal exceptions. We may need to verify your
            identity before completing certain requests.
          </Paragraph>

          <Heading>19. Changes to This Privacy Notice</Heading>
          <Paragraph>
            We may update this Privacy Notice periodically to reflect changes in our business, website,
            communications practices, technology, or legal requirements. When changes are made, we will update the
            &ldquo;Last Updated&rdquo; date on this page. We encourage you to review this policy periodically.
          </Paragraph>

          <Heading>20. Contact Siena Restaurant</Heading>
          <Paragraph>
            If you have questions about this Privacy Notice, our privacy practices, or Siena Restaurant&apos;s SMS
            messaging program, please contact us:
          </Paragraph>
          <div className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">
            <p>Siena Restaurant</p>
            <p>{info.address}</p>
            <p>
              Phone:{" "}
              <a href={`tel:${info.phone.replace(/\D/g, "")}`} className="text-[#e0b265] underline underline-offset-2 hover:text-white">
                {info.phone}
              </a>
            </p>
            <p>
              <Link href="/contact-us" className="text-[#e0b265] underline underline-offset-2 hover:text-white">
                Contact Siena online
              </Link>
            </p>
          </div>
          <Paragraph>For SMS assistance, reply HELP. To discontinue SMS communications, reply STOP.</Paragraph>
        </div>
      </section>
    </main>
  );
}
