import * as React from "react";

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [isListening, setIsListening] = React.useState(false);
    const [circles, setCircles] = React.useState<Array<{
      id: number;
      x: number;
      y: number;
      color: string;
      fadeState: "in" | "out" | null;
    }>>([]);
    const lastAddedRef = React.useRef(0);

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0;
      const xPos = x / buttonWidth;
      const color = `linear-gradient(to right, var(--hover-circle-start) ${xPos * 100}%, var(--hover-circle-end) ${
        xPos * 100
      }%)`;

      setCircles((prev) => [
        ...prev,
        { id: Date.now(), x, y, color, fadeState: null },
      ]);
    }, []);

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return;
        
        const currentTime = Date.now();
        if (currentTime - lastAddedRef.current > 100) {
          lastAddedRef.current = currentTime;
          const rect = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          createCircle(x, y);
        }
      },
      [isListening, createCircle]
    );

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true);
    }, []);

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false);
    }, []);

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "in" } : c
              )
            );
          }, 0);

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "out" } : c
              )
            );
          }, 1000);

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id));
          }, 2200);
        }
      });
    }, [circles]);

    const combinedRef = React.useCallback(
      (node: HTMLButtonElement) => {
        buttonRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <button
        ref={combinedRef}
        className={`relative isolate px-6 py-4 rounded-full cursor-pointer overflow-hidden transition-transform duration-300 active:scale-[0.975] ${className || ''}`}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          background: 'var(--hover-button-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: `
            inset 0 0 0 1px var(--hover-button-border),
            inset 0 0 16px 0 var(--hover-button-glow-1),
            inset 0 -3px 12px 0 var(--hover-button-glow-2),
            0 1px 3px 0 var(--hover-button-shadow-1),
            0 4px 12px 0 var(--hover-button-shadow-2)
          `,
          color: 'var(--hover-button-text)',
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: '1.5',
          '--hover-circle-start': 'var(--hover-circle-from)',
          '--hover-circle-end': 'var(--hover-circle-to)',
        } as React.CSSProperties}
        {...props}
      >
        {circles.map(({ id, x, y, color, fadeState }) => (
          <div
            key={id}
            className={`absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg pointer-events-none z-[-1] transition-opacity duration-300 ${
              fadeState === "in" ? "opacity-75" : ""
            } ${
              fadeState === "out" ? "opacity-0 duration-[1.2s]" : ""
            } ${
              !fadeState ? "opacity-0" : ""
            }`}
            style={{
              left: x,
              top: y,
              background: color,
            }}
          />
        ))}
        {children}
      </button>
    );
  }
);

HoverButton.displayName = "HoverButton";

export { HoverButton };