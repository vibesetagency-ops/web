import { Shield, Lock, FileText, Eye } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Data minimization & least-privilege access',
    description: 'We only access the data needed for your specific automation workflows'
  },
  {
    icon: Lock,
    title: 'Encryption in transit & at rest',
    description: 'All data is encrypted using industry-standard protocols and security measures'
  },
  {
    icon: FileText,
    title: 'Audit logs on critical actions',
    description: 'Complete visibility into all automated actions with detailed logging and monitoring'
  },
  {
    icon: Eye,
    title: 'Practices aligned with GDPR/PIPEDA',
    description: 'Privacy-first approach compliant with international data protection regulations'
  }
];

export function Security() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)] p-[0px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">Security & Compliance</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Enterprise-grade security built into every automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 transition-colors duration-200 text-sm border-b border-[var(--accent-primary)]/30 hover:border-[var(--accent-primary)]">
            View our security overview →
          </button>
        </div>
      </div>
    </section>
  );
}