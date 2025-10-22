export function Integrations() {
  const integrations = [
    'Google Workspace',
    'Microsoft 365', 
    'Slack',
    'Teams',
    'HubSpot',
    'Salesforce',
    'Shopify',
    'WooCommerce',
    'Stripe',
    'QuickBooks',
    'Zendesk',
    'Notion'
  ];

  return (
    <section 
      id="integrations" 
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Integrations</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Works seamlessly with your existing tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--lines)] flex items-center justify-center h-20 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-center font-medium text-[var(--text-primary)]">
                {integration}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[var(--text-secondary)]">
            Don't see your tool?{' '}
            <span className="text-[var(--accent-primary)] font-medium">
              We'll connect it via API or Zapier.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}