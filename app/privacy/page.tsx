export default function PrivacyPage() {
  return (
    <section className="bg-cream pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-label mb-4">Legal</p>
        <h1 className="font-serif text-green-900 text-5xl font-normal mb-12">Privacy Policy</h1>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-600 leading-relaxed">
          <p className="text-stone-400 text-sm">Last updated: June 2025</p>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Overview</h2>
            <p>
              Orange Path Landscaping (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
              orangepathlandscaping.com. This page informs you of our policies regarding the collection,
              use, and disclosure of personal information when you use our website or contact us.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Information We Collect</h2>
            <p>
              When you fill out our contact form or reach out to us directly, we may collect your name,
              email address, phone number, and any details about your project that you choose to share.
              We use this information solely to respond to your inquiry and provide our landscaping services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To respond to your quote requests and inquiries</li>
              <li>To schedule consultations and service appointments</li>
              <li>To send you information about our services if you have requested it</li>
            </ul>
            <p className="mt-3">
              We do not sell, trade, or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Advertising</h2>
            <p>
              We may run ads on platforms such as Facebook and Instagram to promote our services. These
              platforms may use cookies and similar technologies to show our ads to people who may be
              interested in landscaping services in Orange County, CA. You can manage your ad preferences
              through your Facebook or Instagram account settings.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Data Deletion</h2>
            <p>
              To request deletion of any personal data we hold about you, please contact us at{' '}
              <a href="mailto:gavin@orangepathlandscaping.com" className="text-orange-brand hover:underline">
                gavin@orangepathlandscaping.com
              </a>{' '}
              or call{' '}
              <a href="tel:9493716356" className="text-orange-brand hover:underline">
                (949) 371-6356
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:gavin@orangepathlandscaping.com" className="text-orange-brand hover:underline">
                gavin@orangepathlandscaping.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
