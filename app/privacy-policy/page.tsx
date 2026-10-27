import Link from "next/link";
import { getRestaurantInfo } from "@/lib/restaurant";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      id={typeof children === "string" ? children.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "") : undefined}
      className="siena-view-206"
      style={{ fontFamily: "'Palmore-Light', serif" }}
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="siena-view-207">{children}</p>;
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="siena-view-208">
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
        <div className="siena-view-209">
          <h1
            className="siena-view-210"
            style={{ fontFamily: "'Palmore-Light', serif" }}
          >
            Privacy Notice
          </h1>
          <div className="w-10 h-[2px] bg-[#e0b265] mx-auto mt-5" />
          <p className="text-white/60 text-[14px] mt-5">Updated: October 26, 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <nav aria-label="Privacy notice topics" className="border border-[#e0b265]/30 p-5 mb-8">
            <h2 className="text-[#e0b265] text-xl mb-3">Find a topic</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Use these links to find the part of this notice you need. Learn what information we collect,
              how we use it, and how to manage messages from Siena. For a question about your information
              or our text messages, go to the contact section below.
            </p>
            <ul className="siena-view-211">
              <li><a href="#1-information-we-collect">Information we collect</a></li>
              <li><a href="#2-how-we-use-your-information">How we use information</a></li>
              <li><a href="#4-how-sms-consent-is-obtained">Text message choices</a></li>
              <li><a href="#6-sms-opt-out-and-help">Stop texts or get help</a></li>
              <li><a href="#12-cookies-and-analytics">Cookies and site tools</a></li>
              <li><a href="#16-communication-preferences">Email and message preferences</a></li>
              <li><a href="#18-your-privacy-rights">Privacy rights</a></li>
              <li><a href="#20-contact-siena-restaurant">Contact Siena</a></li>
            </ul>
          </nav>
          <Heading>About This Notice</Heading>
          <Paragraph>
            Siena Restaurant respects your privacy. In this notice, &ldquo;Siena,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; mean Siena Restaurant. We work to protect the personal information you give us.
          </Paragraph>
          <Paragraph>
            This notice explains how we collect, use, store, and share your information. It covers visits to our site, bookings, waitlists, and event or private dining requests. It also covers contact with Siena, text message sign-ups, marketing sign-ups, and other visits or services.
          </Paragraph>

          <Heading>1. Information We Collect</Heading>
          <Paragraph>
            We may collect information you choose to give us. What we collect depends on how you use our services. This may include:
          </Paragraph>
          <List items={[
            "Your name, email address, and mobile or telephone number.",
            "Reservation information, including the date and time, party size, and special requests.",
            "Birthday or special occasion information you choose to provide.",
            "Event or private dining inquiry information.",
            "Communication preferences, including SMS/text messaging consent and marketing communication preferences.",
            "Customer service communications, feedback, and other information you voluntarily provide.",
          ]} />
          <Paragraph>
            Our site may also collect technical details on its own. These may include your IP address, browser, device, and operating system. We may collect the pages you visit, the site that sent you here, and the date and time of your visit. Other details may include your general location based on your IP address, cookies, and data about how you use the site.
          </Paragraph>

          <Heading>2. How We Use Your Information</Heading>
          <Paragraph>We may use your information to:</Paragraph>
          <List items={[
            "Create, confirm, manage, modify, or cancel reservations.",
            "Send reservation confirmations and reminders, and provide waitlist and table-ready notifications.",
            "Respond to inquiries and provide customer service.",
            "Process event and private dining inquiries, and communicate regarding restaurant services.",
            "Send transactional SMS messages when you have consented.",
            "Send promotional SMS messages when you have separately consented.",
            "Maintain records of communication and consent.",
            "Improve our website and guest experience.",
            "Prevent fraud and security incidents, and comply with applicable legal requirements.",
          ]} />

          <Heading>3. SMS/Text Messaging Program</Heading>
          <Paragraph>
            We may offer texts about bookings and services. We may also send marketing texts if you give separate consent. Giving us your phone number alone does not sign you up for marketing texts.
          </Paragraph>
          <Paragraph>
            <strong className="text-white">Booking and service texts.</strong> If you opt in, we may text you to confirm, remind you of, change, or cancel a booking. We may send waitlist and table-ready alerts. We may also reply to booking questions, follow up on event or private dining requests, or send help and updates about a service you asked for.
          </Paragraph>
          <Paragraph>
            <strong className="text-white">Marketing texts.</strong> You must opt in separately to get these texts. If you do, we may send recurring texts about events, dining specials, offers, deals, and happy hour. These texts may also cover live music, special menus, restaurant news, and other Siena updates.
          </Paragraph>

          <Heading>4. How SMS Consent Is Obtained</Heading>
          <Paragraph>
            You must take a clear action to sign up for texts. We may offer text sign-up choices on booking, contact, event, or group dining forms. Other site forms may also offer text messages.
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
            We may keep records of text sign-ups and stop requests. We keep them as reasonably needed to run our text programs and show that we follow the rules.
          </Paragraph>

          <Heading>5. Message Frequency and Charges</Heading>
          <Paragraph>
            How often we text depends on how you use Siena and which text programs you join. Your phone carrier&apos;s standard message and data rates may apply. Carriers are not liable for texts that arrive late or do not arrive.
          </Paragraph>

          <Heading>6. SMS Opt-Out and Help</Heading>
          <Paragraph>
            You can stop texts at any time. Reply STOP to a Siena text message. We may send one final text to confirm your request. For help, reply HELP or contact us through our site.
          </Paragraph>

          <Heading>7. Consent Is Not a Condition of Purchase</Heading>
          <Paragraph>
            Signing up for texts or marketing messages is your choice. You do not have to agree to texts to buy any goods or services from Siena.
          </Paragraph>

          <Heading>8. Mobile Information and SMS Consent — No Marketing Sharing</Heading>
          <Paragraph>
            We do not sell, rent, share, or give your mobile phone number or text sign-up and consent details to third parties or affiliates for their marketing or promotions.
          </Paragraph>
          <Paragraph>
            We may share information with providers who need it only to work for us. These services may include messaging tools, booking systems, site hosting, customer support, and text delivery. Providers may use the information only as needed to serve Siena. They may not use it for their own marketing.
          </Paragraph>
          <Paragraph>
            Text message opt-in data and consent will not be shared with third parties or affiliates for their marketing or promotions.
          </Paragraph>

          <Heading>9. How We Share Other Personal Information</Heading>
          <Paragraph>
            We do not sell personal information in our normal business. We may share personal information other than text message data with providers who work for us. Their work may include bookings, site hosting, email, payments, site analytics, guest records, messaging, IT, security, and professional services. We share it only as reasonably needed for that work.
          </Paragraph>

          <Heading>10. Legal and Safety Disclosures</Heading>
          <Paragraph>
            We may share information when reasonably needed to follow the law, legal process, court orders, or government requests. We may also share it to protect Siena&apos;s rights or property, or to protect guests, staff, customers, or others. Other reasons may include looking into fraud or suspected crime, preventing misuse of our services, or enforcing our terms and policies.
          </Paragraph>

          <Heading>11. Business Transfers</Heading>
          <Paragraph>
            Information may be transferred as the law allows if Siena merges, is bought, raises funds, changes its business structure, or sells assets. This also applies to similar deals. The limits in this notice still apply to text sign-up and consent records. Those records will not be transferred for unrelated third-party marketing or promotions.
          </Paragraph>

          <Heading>12. Cookies and Analytics</Heading>
          <Paragraph>
            Our site may use cookies, pixels, local storage, site analytics, and similar tools. These tools help the site work, remember your choices, measure visits and use, improve speed, and support security. Your browser may let you block or delete cookies. Some site features may not work if you do.
          </Paragraph>

          <Heading>13. Third-Party Services and Links</Heading>
          <Paragraph>
            We may use outside platforms for bookings, payments, messages, events, analytics, or other services. If you give information directly to an outside provider, its privacy policy and terms may also apply. Siena is not responsible for the content or privacy practices of outside sites.
          </Paragraph>

          <Heading>14. Data Retention</Heading>
          <Paragraph>
            We keep personal information as long as reasonably needed to provide the services you ask for. We may also need it to keep bookings and guest records, record your message choices and consent, resolve disputes, and protect security. We may keep it to meet valid business needs or legal duties. We may retain text consent and stop requests as needed to show compliance.
          </Paragraph>

          <Heading>15. Data Security</Heading>
          <Paragraph>
            We use reasonable safeguards in our systems, work processes, and organization to protect personal information. These measures aim to prevent access, sharing, changes, misuse, or loss without permission. No site, network, electronic message, or storage system can be fully secure.
          </Paragraph>

          <Heading>16. Communication Preferences</Heading>
          <Paragraph>
            You can change your message choices at any time. For texts, reply STOP to stop them or HELP for help. For marketing emails, use the unsubscribe link in the email when available.
          </Paragraph>

          <Heading>17. Children&apos;s Privacy</Heading>
          <Paragraph>
            Our site and text programs are for a general audience. They are not aimed at children under 13. We do not knowingly collect personal information online from children under 13 without proper permission.
          </Paragraph>

          <Heading>18. Your Privacy Rights</Heading>
          <Paragraph>
            Your rights depend on where you live and the law that applies. You may have the right to ask to see, correct, or delete some personal information. You may also be able to withdraw some consent or stop some marketing messages. Legal exceptions may apply. We may need to check your identity before we complete a request.
          </Paragraph>

          <Heading>19. Changes to This Privacy Notice</Heading>
          <Paragraph>
            We may update this notice from time to time as our business, site, messaging, tools, or legal duties change. We will change the update date on this page when we do. Please check this notice from time to time.
          </Paragraph>

          <Heading>20. Contact Siena Restaurant</Heading>
          <Paragraph>
            Contact us if you have questions about this notice, your privacy, or Siena text messages:
          </Paragraph>
          <div className="siena-view-207">
            <p>Siena Restaurant</p>
            <p>{info.address}</p>
            <p>
              Phone:{" "}
              <a href={`tel:${info.phone.replace(/\D/g, "")}`} className="siena-view-85">
                {info.phone}
              </a>
            </p>
            <p>
              <Link href="/contact-us" className="siena-view-85">
                Contact Siena online
              </Link>
            </p>
          </div>
          <Paragraph>For text help, reply HELP. To stop texts, reply STOP.</Paragraph>
        </div>
      </section>
    </main>
  );
}
