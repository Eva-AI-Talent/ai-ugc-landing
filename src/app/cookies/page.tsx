export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 font-sans text-gray-700">
      <a
        href="/"
        className="inline-block font-serif text-xl text-gray-900 mb-12"
      >
        diffusr<span className="text-[#7c3aed]">.</span>
      </a>

      <h1 className="font-sans text-4xl font-medium tracking-tight text-gray-900">
        Cookie Policy
      </h1>
      <p className="mt-2 font-mono text-xs text-gray-400">
        Last updated: May 4, 2026
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            1. What Are Cookies
          </h2>
          <p className="mt-2">
            Cookies are small text files that are stored on your device when you
            visit a website. They are widely used to make websites work more
            efficiently, provide a better user experience, and supply
            information to site owners.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            2. How We Use Cookies
          </h2>
          <p className="mt-2">Diffusr uses cookies for the following purposes:</p>
          <div className="mt-3 space-y-4">
            <div>
              <p className="font-medium text-gray-900">Essential Cookies</p>
              <p className="mt-1">
                These cookies are necessary for the website to function
                properly. They enable core features such as page navigation and
                access to secure areas. The website cannot function properly
                without these cookies.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Analytics Cookies</p>
              <p className="mt-1">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. This
                helps us improve our website and services.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Marketing Cookies</p>
              <p className="mt-1">
                These cookies are used to track visitors across websites. The
                intention is to display ads that are relevant and engaging for
                individual users.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            3. Cookies We Use
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="pb-2 pr-4 font-medium text-gray-900">Cookie</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">Type</th>
                  <th className="pb-2 pr-4 font-medium text-gray-900">Duration</th>
                  <th className="pb-2 font-medium text-gray-900">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                  <td className="py-2 pr-4">Analytics</td>
                  <td className="py-2 pr-4">2 years</td>
                  <td className="py-2">Distinguishes unique users for Google Analytics</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">_ga_*</td>
                  <td className="py-2 pr-4">Analytics</td>
                  <td className="py-2 pr-4">2 years</td>
                  <td className="py-2">Maintains session state for Google Analytics</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">_fbp</td>
                  <td className="py-2 pr-4">Marketing</td>
                  <td className="py-2 pr-4">3 months</td>
                  <td className="py-2">Used by Meta for ad delivery and measurement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            4. Third-Party Cookies
          </h2>
          <p className="mt-2">
            Some cookies are placed by third-party services that appear on our
            pages. We do not control these third-party cookies. Please refer to
            the respective third party&rsquo;s privacy policy for more
            information on how they use cookies.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            5. Managing Cookies
          </h2>
          <p className="mt-2">
            Most web browsers allow you to control cookies through their
            settings. You can set your browser to refuse cookies or to alert you
            when cookies are being sent. Please note that disabling cookies may
            affect the functionality of our website.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              <strong>Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies
            </li>
            <li>
              <strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Cookies
            </li>
            <li>
              <strong>Edge:</strong> Settings &rarr; Privacy &rarr; Cookies
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            6. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Cookie Policy from time to time to reflect
            changes in technology, regulation, or our business practices. Any
            updates will be posted on this page with a revised &ldquo;Last
            updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-medium text-gray-900">
            7. Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about our use of cookies, please contact us at{" "}
            <span className="text-[#7c3aed]">privacy@diffusr.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
