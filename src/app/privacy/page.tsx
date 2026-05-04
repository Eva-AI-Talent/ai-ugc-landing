export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 font-sans text-gray-700">
      <a
        href="/"
        className="inline-block font-serif text-xl text-gray-900 mb-12"
      >
        diffusr<span className="text-[#7c3aed]">.</span>
      </a>

      <h1 className="font-sans text-4xl font-medium tracking-tight text-gray-900">
        Privacy Policy
      </h1>
      <p className="mt-2 font-mono text-xs text-gray-400">
        Last updated: May 4, 2026
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            1. Introduction
          </h2>
          <p className="mt-2">
            Diffusr (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy and is committed to
            protecting the personal data you share with us. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            2. Information We Collect
          </h2>
          <p className="mt-2 font-medium text-gray-900">
            Information you provide directly:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Name, email address, and company name when you book a call or submit a form.</li>
            <li>Billing and payment information when you purchase our services.</li>
            <li>Brand assets, briefs, and communication content shared during a project.</li>
          </ul>
          <p className="mt-3 font-medium text-gray-900">
            Information collected automatically:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Device type, browser type, operating system, and IP address.</li>
            <li>Pages visited, time spent on pages, and referring URLs.</li>
            <li>Cookies and similar tracking technologies (see our Cookie Policy).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            3. How We Use Your Information
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>To provide, operate, and improve our Services.</li>
            <li>To process transactions and send related information.</li>
            <li>To communicate with you about your account, projects, and updates.</li>
            <li>To send marketing communications (with your consent, where required).</li>
            <li>To analyze usage patterns and optimize our website and services.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            4. Sharing of Information
          </h2>
          <p className="mt-2">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              <strong>Service providers</strong> who assist in operating our business (payment processors, hosting providers, analytics tools).
            </li>
            <li>
              <strong>Legal authorities</strong> when required by law, regulation, or legal process.
            </li>
            <li>
              <strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            5. Data Retention
          </h2>
          <p className="mt-2">
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which it was collected, including to satisfy
            legal, accounting, or reporting requirements. When data is no longer
            needed, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            6. Data Security
          </h2>
          <p className="mt-2">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            7. Your Rights
          </h2>
          <p className="mt-2">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>Request portability of your data.</li>
            <li>Withdraw consent at any time (where processing is based on consent).</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, contact us at{" "}
            <span className="text-[#7c3aed]">privacy@diffusr.com</span>.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            8. International Transfers
          </h2>
          <p className="mt-2">
            Your information may be transferred to and processed in countries
            other than your own. We ensure that appropriate safeguards are in
            place to protect your data in accordance with applicable data
            protection laws.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            9. Children&rsquo;s Privacy
          </h2>
          <p className="mt-2">
            Our Services are not directed to individuals under the age of 18. We
            do not knowingly collect personal data from children. If you believe
            we have collected data from a child, please contact us and we will
            take steps to delete it.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            10. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy on our website
            with a revised &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            11. Contact Us
          </h2>
          <p className="mt-2">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <span className="text-[#7c3aed]">privacy@diffusr.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
