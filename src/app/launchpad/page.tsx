"use client";

import '@solana/wallet-adapter-react-ui/styles.css';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo, useState } from 'react';
import { BagsSDK } from '@bagsfm/bags-sdk';

function LaunchpadContent() {
  const [launchStatus, setLaunchStatus] = useState('');
  const [liquidityStatus, setLiquidityStatus] = useState('');

  const handleLaunch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const symbol = formData.get('symbol') as string;

    try {
      // TODO: Integrate Bags.fm API
      // const sdk = new BagsSDK(process.env.NEXT_PUBLIC_BAGS_API_KEY, { network: 'mainnet' });
      // const result = await sdk.launch({ name, symbol });
      setLaunchStatus(`Token "${name}" (${symbol}) launch simulated successfully!`);
    } catch (error) {
      setLaunchStatus('Error launching token: ' + (error as Error).message);
    }
  };

  const handleLiquidity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mint = formData.get('mint') as string;
    const amount = formData.get('amount') as string;

    try {
      // TODO: Integrate Meteora DAMM v2
      // Use @solana/web3.js to interact with program cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG
      setLiquidityStatus(`Liquidity added for ${mint}: ${amount} tokens simulated successfully!`);
    } catch (error) {
      setLiquidityStatus('Error adding liquidity: ' + (error as Error).message);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#d1fae5', color: '#065f46', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          Solana Launchpad
        </h1>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <WalletMultiButton />
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Launch Token with Bags.fm</h2>
          <form onSubmit={handleLaunch} style={{ backgroundColor: '#a7f3d0', padding: '1rem', borderRadius: '0.5rem' }}>
            <input name="name" type="text" placeholder="Token Name" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
            <input name="symbol" type="text" placeholder="Token Symbol" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
            <button type="submit" style={{ backgroundColor: '#059669', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none' }}>
              Launch Token
            </button>
          </form>
          {launchStatus && <p style={{ marginTop: '1rem', color: launchStatus.includes('Error') ? 'red' : 'green' }}>{launchStatus}</p>}
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Add Liquidity on Meteora DAMM v2</h2>
          <form onSubmit={handleLiquidity} style={{ backgroundColor: '#a7f3d0', padding: '1rem', borderRadius: '0.5rem' }}>
            <input name="mint" type="text" placeholder="Token Mint" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
            <input name="amount" type="number" placeholder="Amount" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
            <button type="submit" style={{ backgroundColor: '#059669', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none' }}>
              Add Liquidity
            </button>
          </form>
          {liquidityStatus && <p style={{ marginTop: '1rem', color: liquidityStatus.includes('Error') ? 'red' : 'green' }}>{liquidityStatus}</p>}
        </section>
      </div>
    </main>
  );
}

export default function Launchpad() {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <LaunchpadContent />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}