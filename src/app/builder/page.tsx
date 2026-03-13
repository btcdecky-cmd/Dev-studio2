"use client";

import { useState } from 'react';

export default function Builder() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data.message || 'Project built successfully!');
    } catch (error) {
      setResult('Error building project: ' + (error as Error).message);
    }
    setLoading(false);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#d1fae5', color: '#065f46', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          Solana Project Builder
        </h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your Solana project..."
            style={{
              width: '100%',
              height: '200px',
              padding: '1rem',
              border: '2px solid #a7f3d0',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              marginBottom: '1rem',
              resize: 'vertical'
            }}
            required
            suppressHydrationWarning={true}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? '#6b7280' : '#059669',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%'
            }}
          >
            {loading ? 'Building...' : 'Build Project'}
          </button>
        </form>
        {result && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#a7f3d0',
            borderRadius: '0.5rem',
            whiteSpace: 'pre-wrap'
          }}>
            {result}
          </div>
        )}
      </div>
    </main>
  );
}