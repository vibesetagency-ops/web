import { Badge } from './ui/badge';

const proofBadges = [
  "No-code Handover",
  "BYO Keys", 
  "SOC2-Pathway",
  "GDPR-friendly",
  "SLA options",
  "99.9% uptime"
];

export function ProofBand() {
  return (
    <section className="py-12 bg-gradient-to-r from-surface/50 to-surface/80 border-y border-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {proofBadges.map((badge, index) => (
            <Badge 
              key={index}
              variant="outline" 
              className="px-4 py-2 text-sm font-medium bg-surface/80 border-lines text-text-secondary hover:text-text-primary transition-colors"
            >
              {badge}
            </Badge>
          ))}
        </div>
        
        {/* KPI Pills */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-secondary">Hours saved:</span>
            <span className="gradient-text font-semibold">15-25/week</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-secondary">Avg ROI:</span>
            <span className="gradient-text font-semibold">&lt;30 days</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-secondary">Uptime:</span>
            <span className="gradient-text font-semibold">99.9%</span>
          </div>
        </div>
      </div>
    </section>
  );
}