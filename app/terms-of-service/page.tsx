import Link from "next/link";

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

export default function TermsOfService() {
  return (
    <main>
      {/* HEADER */}
      <section className="w-full pt-[140px] pb-[60px] px-4" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[820px] mx-auto text-center">
          <h1
            className="text-[#58021f] text-[44px] md:text-[64px] leading-none tracking-[0.04em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
          >
            Terms &amp; Conditions
          </h1>
          <div className="w-10 h-[2px] bg-[#deae21] mx-auto mt-5" />
          <p className="text-[#030302]/60 text-[14px] mt-5">Last updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 pb-[100px]" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[820px] mx-auto">
          <Paragraph>
            Agreement to Siena Restaurant Website Terms of Use. These Terms &amp; Conditions (&quot;Terms&quot;)
            apply to the Siena Restaurant website at sienaatl.com and Siena-controlled pages, features, forms, and
            online services linked from it (collectively, the &quot;Site&quot;). By using the Site, you acknowledge
            that you have read and agree to these Terms.
          </Paragraph>

          <Heading>1. Access &amp; Use</Heading>
          <Paragraph>
            Siena may update, modify, add to, or remove portions of these Terms from time to time. Your continued
            use of the Site after changes become effective constitutes acceptance of the revised Terms.
          </Paragraph>
          <Paragraph>
            Subject to these Terms, Siena grants you a personal, limited, non-exclusive and non-transferable right
            to access and use the Site for lawful personal purposes.
          </Paragraph>
          <Paragraph>
            You may not interfere with the Site&apos;s operation, attempt unauthorized access, introduce viruses or
            malicious code, overload Siena&apos;s systems, impersonate another person or entity, or use the Site for
            unlawful, fraudulent, abusive, or rights-infringing activity.
          </Paragraph>

          <Heading>2. Site Content &amp; Intellectual Property</Heading>
          <Paragraph>
            The Site may contain text, photographs, menus, graphics, logos, trademarks, artwork, videos, designs,
            layouts, software and other materials (&quot;Content&quot;). Siena&apos;s Content is owned by or
            licensed to Siena and may be protected by copyright, trademark and other intellectual-property laws.
          </Paragraph>
          <Paragraph>
            Except where Siena expressly makes materials available for personal downloading or sharing, Site Content
            may not be reproduced, republished, modified, distributed, commercially exploited, or used to create
            derivative works without appropriate permission.
          </Paragraph>
          <Paragraph>
            Menus, pricing, availability, hours, promotions, photographs and other information displayed on the Site
            may change without notice.
          </Paragraph>

          <Heading>3. Guest Submissions &amp; Feedback</Heading>
          <Paragraph>
            We welcome guest comments and feedback. Unless Siena expressly agrees otherwise in writing, unsolicited
            ideas, concepts, recipes, designs, proposals, photographs or other materials submitted to Siena should
            not be considered confidential or proprietary.
          </Paragraph>
          <Paragraph>
            By submitting content to Siena, you represent that you have the right to provide it and that doing so
            does not violate another person&apos;s rights. Siena may use general feedback to improve its restaurant,
            services, events and guest experience, subject to applicable law and our{" "}
            <Link href="/privacy-policy" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
              Privacy Notice
            </Link>
            .
          </Paragraph>

          <Heading>4. Email &amp; SMS Communications</Heading>
          <Paragraph>
            Siena may communicate with guests through the Site, email, telephone and SMS/text messaging. If you
            voluntarily opt in to promotional text messages, message frequency may vary and message and data rates
            may apply. Consent to marketing messages is not a condition of purchase.
          </Paragraph>
          <Paragraph>
            You may opt out of Siena promotional text messages by replying STOP. Transactional communications
            related to a reservation, event inquiry, waitlist, order or other requested service may still be sent
            when permitted by law.
          </Paragraph>

          <Heading>5. Reservations, Gift Cards, Events &amp; Other Services</Heading>
          <Paragraph>
            Additional terms may apply to reservations, private dining, group events, gift cards, promotions,
            contests, online ordering or other products and services available through or linked from the Site.
            Those additional terms become part of these Terms for the applicable transaction or service.
          </Paragraph>
          <Paragraph>
            Submitting a reservation or event request does not guarantee availability or acceptance. Reservations
            and events are confirmed only when Siena or the applicable reservation provider confirms them. Pricing,
            menus, minimums, deposits, cancellation terms and availability may vary and are subject to the specific
            agreement or confirmation associated with the service.
          </Paragraph>

          <Heading>6. Third-Party Websites &amp; Applications</Heading>
          <Paragraph>
            The Site may link to or use third-party services for reservations, maps, payment processing, gift cards,
            social media, delivery, marketing or other functions. Siena does not control those third-party websites
            or applications, and your use of them may be governed by separate terms and privacy policies.
          </Paragraph>
          <Paragraph>
            A link to a third-party service does not necessarily constitute Siena&apos;s endorsement of that service.
            To the extent permitted by law, Siena is not responsible for third-party content, availability, security
            practices or independent acts and omissions.
          </Paragraph>

          <Heading>7. Forms, Careers &amp; Private Dining Inquiries</Heading>
          <Paragraph>
            The Site may provide contact forms, employment applications, private dining forms, event materials,
            menus or other downloadable documents. Submission of a form does not create a contract, guarantee
            employment, reserve a date, guarantee pricing, or require Siena to accept a request.
          </Paragraph>
          <Paragraph>
            Event details, menus, pricing and availability remain subject to confirmation by Siena and may change
            before a final agreement is executed.
          </Paragraph>

          <Heading>8. Privacy</Heading>
          <Paragraph>
            Your use of the Site is also subject to Siena&apos;s{" "}
            <Link href="/privacy-policy" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
              Privacy Notice
            </Link>
            . Please review the Privacy Notice to understand how Siena may collect, use and disclose personal
            information.
          </Paragraph>
          <Paragraph>
            No internet transmission or electronic storage method can be guaranteed to be completely secure. Please
            use appropriate care when sending information online.
          </Paragraph>

          <Heading>9. Disclaimers &amp; Limitation of Liability</Heading>
          <Paragraph>
            To the fullest extent permitted by applicable law, the Site and its Content are provided on an
            &quot;as is&quot; and &quot;as available&quot; basis. Siena does not guarantee that the Site will always
            be uninterrupted, error-free, secure, current or free of harmful components.
          </Paragraph>
          <Paragraph>
            Siena may suspend, modify or discontinue any portion of the Site and may update restaurant information,
            menus, prices, hours, services, promotions or features without prior notice.
          </Paragraph>
          <Paragraph>
            To the fullest extent permitted by law, Siena and its owners, affiliates, employees, agents and service
            providers will not be liable for indirect, incidental, special, exemplary, punitive or consequential
            damages arising from or related to your use of, or inability to use, the Site.
          </Paragraph>
          <Paragraph>
            Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by
            applicable law.
          </Paragraph>

          <Heading>10. Indemnification</Heading>
          <Paragraph>
            To the extent permitted by law, you agree to indemnify and hold harmless Siena, its owners, affiliates,
            officers, employees and agents from third-party claims, losses, liabilities and reasonable expenses
            arising from your unlawful misuse of the Site, your violation of these Terms, or your infringement of
            another person&apos;s rights.
          </Paragraph>

          <Heading>11. General Terms</Heading>
          <Paragraph>
            If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions
            will remain in effect to the fullest extent permitted by law. Siena&apos;s failure to enforce a
            provision does not constitute a waiver of that provision or any other right.
          </Paragraph>
          <Paragraph>
            These Terms, together with Siena policies and any service-specific terms incorporated by reference,
            constitute the agreement governing your use of the Site.
          </Paragraph>
          <Paragraph>
            These Terms are governed by the laws of the State of Georgia, without regard to conflict-of-law
            principles. Any venue or jurisdiction provision is subject to applicable law.
          </Paragraph>

          <Heading>12. Contact Siena</Heading>
          <Paragraph>
            Questions about these Terms may be directed to Siena Restaurant through our website or restaurant contact
            information:
          </Paragraph>
          <div className="text-[#030302]/80 text-[15px] md:text-[16px] leading-[1.8] mb-4">
            <p>Siena Restaurant</p>
            <p>124 Devore Rd</p>
            <p>Alpharetta, GA 30009</p>
            <p>
              Phone:{" "}
              <a href="tel:4047775124" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                (404) 777-5124
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
