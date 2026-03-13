export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#d1fae5', color: '#065f46', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Build in public. Track your progress. Launch on Solana.</h1>
          <p style={{ fontSize: '1.25rem', color: '#047857' }}>Dev Studio is a real-time builder platform where developers create projects, track on-chain activity, and showcase what they are building.</p>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Live Builder Activity</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              Zedek created project &ldquo;Solana Trading Dashboard&rdquo;
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              Token SWAN launched
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              Liquidity added
            </li>
            <li style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem' }}>
              New feature: wallet connection
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>How the Platform Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1. Create a Project</h3>
              <p>Builders register and create their development project.</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2. Build in Public</h3>
              <p>Track commits, updates, and blockchain activity.</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: '#a7f3d0', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>3. Launch and Grow</h3>
              <p>Share your progress and attract users and supporters.</p>
            </div>
          </div>
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
