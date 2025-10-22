import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <main id="main-content" className="pt-20">
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-[var(--text-secondary)]">
              Last updated: October 19, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="mb-4">Introduction</h2>
              <p className="text-[var(--text-secondary)]">
                At VibeSet ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our AI automation platform and services.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Information We Collect</h2>
              <h3 className="mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Account information (name, email, company details)</li>
                <li>Payment and billing information</li>
                <li>Content and data you upload to use our services</li>
                <li>Communication preferences and support inquiries</li>
              </ul>

              <h3 className="mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">How We Use Your Information</h2>
              <p className="text-[var(--text-secondary)] mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new features and services</li>
                <li>Protect against fraudulent or illegal activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Data Sharing and Disclosure</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Data Security</h2>
              <p className="text-[var(--text-secondary)]">
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Your Rights and Choices</h2>
              <p className="text-[var(--text-secondary)] mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Data Retention</h2>
              <p className="text-[var(--text-secondary)]">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete or anonymize your data within 90 days, except where we are required to retain it by law.
              </p>
            </section>

            <section>
              <h2 className="mb-4">International Data Transfers</h2>
              <p className="text-[var(--text-secondary)]">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Children's Privacy</h2>
              <p className="text-[var(--text-secondary)]">
                Our services are not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Changes to This Policy</h2>
              <p className="text-[var(--text-secondary)]">
                We may update this privacy policy from time to time. We will notify you of significant changes by email or through our service. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Contact Us</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-[var(--surface)] border border-[var(--lines)] rounded-lg p-6">
                <p className="text-[var(--text-primary)]">
                  <strong>Email:</strong> privacy@vibeset.ai<br />
                  <strong>Address:</strong> VibeSet, Inc., San Francisco, CA
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block mt-4 text-[var(--accent-primary)] hover:underline"
                >
                  Contact Form →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
