import { LucideIcon } from 'lucide-react';

interface IntegrationItemProps {
  icon: LucideIcon;
  name: string;
  status?: 'connected' | 'not-connected';
  authType?: string;
  style?: 'mono' | 'brand';
  brandColor?: string;
}

export function IntegrationItem({ 
  icon: Icon, 
  name, 
  status, 
  authType = 'OAuth',
  style = 'mono',
  brandColor = '#3B82F6'
}: IntegrationItemProps) {
  const isConnected = status === 'connected';
  
  return (
    <div className="group h-20 p-4 flex items-center gap-3 rounded-xl border border-lines bg-surface hover:border-accent-primary/30 transition-all duration-200 hover:shadow-sm">
      {/* Icon Badge */}
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 bg-canvas border border-lines"
        style={{
          ...(style === 'brand' && {
            backgroundColor: `${brandColor}1F`,
            borderColor: brandColor
          })
        }}>
        <Icon 
          size={20} 
          strokeWidth={1.5}
          className={style === 'mono' ? 'text-text-secondary' : 'text-white'}
        />
      </div>
      
      {/* Text Stack */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <h4 
          className="truncate text-sm text-text-primary"
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            fontWeight: 600,
            lineHeight: '20px'
          }}>
          {name}
        </h4>
        {status && (
          <p 
            className="text-text-secondary"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              fontSize: '11px',
              lineHeight: '16px'
            }}>
            {isConnected ? `Connected • ${authType}` : 'Not connected'}
          </p>
        )}
      </div>
    </div>
  );
}