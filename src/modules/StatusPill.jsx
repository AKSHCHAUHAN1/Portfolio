export function StatusPill({ children = 'ONLINE', tone = 'mint' }) {
  return (
    <span className={`status-pill status-pill--${tone}`}>
      <i />
      {children}
    </span>
  );
}
