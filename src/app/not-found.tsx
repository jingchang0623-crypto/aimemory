import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 700, marginBottom: '0.5rem', color: '#6366f1' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '2rem', color: '#a1a1aa' }}>Page Not Found</h2>
      <p style={{ fontSize: '1rem', color: '#71717a', marginBottom: '2rem', textAlign: 'center', maxWidth: '400px' }}>
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#6366f1',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
