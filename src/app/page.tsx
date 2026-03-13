export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#d1fae5', color: '#065f46', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Next.js</h1>
          <p style={{ fontSize: '1.25rem', color: '#047857' }}>A minimal starter template with modern tools</p>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Features</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              <strong>Next.js 16</strong> - Latest React framework with App Router
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              <strong>TypeScript</strong> - Type-safe development
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              <strong>Tailwind CSS 4</strong> - Utility-first styling
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              <strong>ESLint</strong> - Code quality and consistency
            </li>
          </ul>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Get Started</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>Start building your application with this clean foundation.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/builder" style={{ backgroundColor: '#059669', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}>
              Use AI Builder
            </a>
            <button style={{ backgroundColor: '#047857', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', cursor: 'pointer' }}>
              Explore Features
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
