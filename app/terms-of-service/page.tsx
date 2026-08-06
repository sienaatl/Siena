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

export default async function TermsOfService() {
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
            Terms of Service
          </h1>
          <div className="w-10 h-[2px] bg-[#deae21] mx-auto mt-5" />
          <p className="text-[#030302]/60 text-[14px] mt-5">Last updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <Paragraph>
            These Terms of Service (&quot;Terms&quot;) govern your use of sienaatl.com (the &quot;Site&quot;),
            operated by Siena Restaurant (&quot;Siena,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            By visiting the Site or submitting any of its forms, you agree to these Terms. If you do not agree,
            please do not use the Site.
          </Paragraph>

          <Heading>Use of This Website</Heading>
          <Paragraph>
            You may browse the Site and use its forms to make reservations, submit inquiries, subscribe to our
            newsletter, or apply for a job with us. You agree to provide accurate information and not to misuse the
            Site, including attempting to interfere with its normal operation or submitting fraudulent or malicious
            content through any form.
          </Paragraph>

          <Heading>Reservations</Heading>
          <List
            items={[
              "Reservations submitted through the Site are processed by our reservations partner at reservations.sienaatl.com and are subject to table availability.",
              "A submitted reservation is held for a limited time (currently 15 minutes) and is not guaranteed until you receive a confirmation.",
              "Special requests noted on a reservation (seating, accessibility, allergies, etc.) are accommodated on a best-effort basis and are not guaranteed.",
              "For parties of 14 or more, please contact us directly or use our Private & Group Dining Inquiry Form; these requests are not booked automatically.",
              "We reserve the right to cancel or modify a reservation in cases of unavailability, unforeseen circumstances, or suspected misuse of the booking system.",
            ]}
          />

          <Heading>Online Ordering &amp; Gift Cards</Heading>
          <Paragraph>
            Our &quot;Order Online&quot; and &quot;Gift Card&quot; links direct you to Toast, a third-party
            platform that processes food orders and gift card purchases on our behalf. Purchases made through Toast
            are subject to Toast&apos;s own terms and privacy policy, and Siena is not responsible for the
            availability, performance, or security of that third-party platform.
          </Paragraph>

          <Heading>Job Applications</Heading>
          <Paragraph>
            Submitting an application through our careers form does not guarantee an interview or offer of
            employment. Information you provide, including any resume file, is used solely to evaluate your
            application and will be handled in accordance with our{" "}
            <a href="/privacy-policy" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
              Privacy Policy
            </a>
            .
          </Paragraph>

          <Heading>Newsletter &amp; Communications</Heading>
          <Paragraph>
            By subscribing to our newsletter or opting in on the reservation form, you consent to receive email or
            text communications from us. You may unsubscribe from the newsletter at any time via the link in any
            email, and opt out of marketing text messages by replying STOP. Message and data rates may apply to
            text messages.
          </Paragraph>

          <Heading>Intellectual Property</Heading>
          <Paragraph>
            All content on the Site — including text, photography, menus, logos, and design — is owned by Siena
            Restaurant or its licensors and is protected by applicable intellectual property laws. You may not
            reproduce, distribute, or use this content for commercial purposes without our prior written consent.
          </Paragraph>

          <Heading>Third-Party Links</Heading>
          <Paragraph>
            The Site links to third-party services, including Toast, Google Maps, and social media platforms
            (Instagram, Facebook, TikTok). We do not control and are not responsible for the content, policies, or
            practices of these third-party sites.
          </Paragraph>

          <Heading>Disclaimer of Warranties</Heading>
          <Paragraph>
            The Site is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind,
            whether express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or
            that reservation availability displayed will always be accurate.
          </Paragraph>

          <Heading>Limitation of Liability</Heading>
          <Paragraph>
            To the fullest extent permitted by law, Siena Restaurant shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the Site or reliance on information
            provided through it, including delays or errors originating from third-party services we rely on.
          </Paragraph>

          <Heading>Changes to These Terms</Heading>
          <Paragraph>
            We may update these Terms from time to time. Changes take effect when posted on this page, and the
            &quot;Last updated&quot; date above will reflect the most recent revision. Continued use of the Site
            after changes are posted constitutes acceptance of the revised Terms.
          </Paragraph>

          <Heading>Governing Law</Heading>
          <Paragraph>These Terms are governed by the laws of the State of Georgia, without regard to its conflict of law principles.</Paragraph>

          <Heading>Contact Us</Heading>
          <Paragraph>
            If you have questions about these Terms, contact us at{" "}
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
