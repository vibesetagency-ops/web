import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <main id="main-content" className="pt-20">
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-[var(--text-secondary)]">
              Last updated: October 19, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="mb-4">Agreement to Terms</h2>
              <p className="text-[var(--text-secondary)]">
                By accessing or using VibeSet's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Description of Service</h2>
              <p className="text-[var(--text-secondary)]">
                VibeSet provides AI-powered automation solutions including lead generation, content writing, email outreach, and voice automation services (collectively, the "Service"). We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Account Registration</h2>
              <p className="text-[var(--text-secondary)] mb-4">To use our Service, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Acceptable Use Policy</h2>
              <p className="text-[var(--text-secondary)] mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Send spam, unsolicited communications, or violate anti-spam laws</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the Service to harass, abuse, or harm others</li>
                <li>Reverse engineer or copy our technology</li>
                <li>Resell or redistribute the Service without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Subscription and Payment</h2>
              <h3 className="mb-3">Billing</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                <li>You authorize us to charge your payment method automatically</li>
                <li>Prices are subject to change with 30 days notice</li>
                <li>All fees are non-refundable except as required by law</li>
              </ul>

              <h3 className="mb-3 mt-6">Free Trials</h3>
              <p className="text-[var(--text-secondary)]">
                We may offer free trials. You will be charged when the trial ends unless you cancel before the trial period expires. Trial eligibility is determined at our sole discretion.
              </p>

              <h3 className="mb-3 mt-6">Cancellation</h3>
              <p className="text-[var(--text-secondary)]">
                You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. You remain responsible for charges incurred before cancellation.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Data and Content</h2>
              <h3 className="mb-3">Your Content</h3>
              <p className="text-[var(--text-secondary)]">
                You retain ownership of all content you upload or create using our Service. You grant us a license to use, store, and process your content solely to provide the Service.
              </p>

              <h3 className="mb-3 mt-6">AI-Generated Content</h3>
              <p className="text-[var(--text-secondary)]">
                You are responsible for reviewing and validating all AI-generated content before use. We do not guarantee the accuracy, completeness, or quality of AI-generated content. You assume all risks and liability for using AI-generated content.
              </p>

              <h3 className="mb-3 mt-6">Data Processing</h3>
              <p className="text-[var(--text-secondary)]">
                We process your data in accordance with our <Link to="/privacy" className="text-[var(--accent-primary)] hover:underline">Privacy Policy</Link>. You are responsible for ensuring you have proper rights and consents for any data you provide to the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Intellectual Property</h2>
              <p className="text-[var(--text-secondary)]">
                The Service, including all software, designs, text, graphics, and other content, is owned by VibeSet and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Disclaimers and Limitations</h2>
              <h3 className="mb-3">Service Availability</h3>
              <p className="text-[var(--text-secondary)]">
                The Service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service. We may suspend or modify the Service for maintenance or updates.
              </p>

              <h3 className="mb-3 mt-6">Limitation of Liability</h3>
              <p className="text-[var(--text-secondary)]">
                To the maximum extent permitted by law, VibeSet shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Indemnification</h2>
              <p className="text-[var(--text-secondary)]">
                You agree to indemnify and hold harmless VibeSet from any claims, damages, or expenses arising from your use of the Service, violation of these Terms, or infringement of third-party rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Termination</h2>
              <p className="text-[var(--text-secondary)]">
                We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the Service ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Changes to Terms</h2>
              <p className="text-[var(--text-secondary)]">
                We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Continued use after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Governing Law</h2>
              <p className="text-[var(--text-secondary)]">
                These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Contact Information</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[var(--surface)] border border-[var(--lines)] rounded-lg p-6">
                <p className="text-[var(--text-primary)]">
                  <strong>Email:</strong> legal@vibeset.ai<br />
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
