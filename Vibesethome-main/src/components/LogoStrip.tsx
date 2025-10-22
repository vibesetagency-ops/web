export function LogoStrip() {
  const logos = [
    'HubSpot',
    'Slack', 
    'Shopify',
    'Gmail',
    'Stripe',
    'Google Ads',
    'Notion',
    'Zapier'
  ];

  return (
    <section className="py-16 lg:py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[var(--text-secondary)]">
            Integrates with 2000+ tools via APIs/Zapier
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 px-6 text-xl font-medium text-[var(--text-secondary)] grayscale hover:grayscale-0 transition-all duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}