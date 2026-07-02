export default function TermsPage() {
  return (
    <section className="bg-cream pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-label mb-4">Legal</p>
        <h1 className="font-serif text-green-900 text-5xl font-normal mb-12">Terms &amp; Conditions</h1>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-600 leading-relaxed">
          <p className="text-stone-400 text-sm">Last updated: July 2026</p>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Overview</h2>
            <p>
              Orange Path Landscaping (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; operated by
              Clearview Landscapes) provides landscape design, construction, and property care services in
              South Orange County, California. Use of our website, phone lines, or contact forms is subject
              to these terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Phone Answering &amp; SMS Notifications</h2>
            <p>
              Calls to our business line that go unanswered may be handled by an automated assistant, which
              greets the caller, answers basic questions about our services, hours, and service area, and
              collects the caller&apos;s name, callback number, and reason for calling.
            </p>
            <p className="mt-3">
              After such a call, our system sends a single text message to the business owner&apos;s own
              phone number summarizing the call. This is an internal, single-recipient notification &mdash;
              we do not send marketing or promotional text messages to customers or any third party, and no
              phone number other than the business owner&apos;s is ever texted by this system.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">No Warranty</h2>
            <p>
              Our automated phone system is provided as a convenience and may occasionally be unavailable,
              provide incomplete information, or misroute a call. It does not replace direct communication
              with us for time-sensitive or emergency matters.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-green-900 text-2xl font-normal mb-3">Contact Us</h2>
            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:gavin@orangepathlandscaping.com" className="text-orange-brand hover:underline">
                gavin@orangepathlandscaping.com
              </a>{' '}
              or call{' '}
              <a href="tel:9493716356" className="text-orange-brand hover:underline">
                (949) 371-6356
              </a>
              .
            </p>
            <p className="mt-3">
              See also our{' '}
              <a href="/privacy" className="text-orange-brand hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
