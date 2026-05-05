import { useCursorTracking } from '../hooks/useCursorTracking';

export function CrosshairCursor() {
  const { elementRef, active, hidden, disabled } = useCursorTracking();
  if (disabled || hidden) return null;

  return (
    <div ref={elementRef} className={`crosshair-cursor ${active ? 'is-active' : ''}`} aria-hidden="true">
      <span />
      <span />
    </div>
  );
}
