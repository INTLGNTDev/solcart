// src/App.js
import React from 'react';
import './index.css'; // your Tailwind directives + global styles

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-orbitron">
      {/* Global Nav */}
      <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur z-50 p-4">
        <nav className="max-w-6xl mx-auto flex justify-between">
          <div className="text-2xl neon-text">SOL Cart</div>
          <div className="space-x-4">
            <a href="#tokenomics" className="hover:underline">Token</a>
            <a href="#game" className="hover:underline">Game</a>
            <a href="#roadmap" className="hover:underline">Roadmap</a>
            <a href="https://t.me/solcart" className="hover:underline">Telegram</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center px-4" style={{
        backgroundImage: "url('https://sdmntprwestus2.oaiusercontent.com/files/00000000-a790-61f8-a1fa-12a877b319da/raw')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'pan 40s linear infinite'
      }}>
        <div className="text-center space-y-6 max-w-xl">
          <button className="px-6 py-3 border-2 border-pink-400 neon-text hover:bg-pink-500 transition">Buy $SOL</button>
          <button className="px-6 py-3 border-2 border-cyan-400 neon-text hover:bg-cyan-500 transition">Roadmap</button>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 text-center">
        <h2 className="text-4xl mb-6 neon-text">Tokenomics</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-12">
          <div>
            <div className="text-2xl font-bold">1 B $SOL</div>
            <div>Max Supply</div>
          </div>
          <div>
            <div className="text-2xl font-bold">BondFun Curve</div>
            <div>PumpFun → Mint</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10%</div>
            <div>Treasury & Grants</div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-gray-800/50">
        <h2 className="text-4xl text-center mb-12 neon-text">Roadmap</h2>
        <ul className="max-w-4xl mx-auto space-y-8">
          <li><strong>Q2 ’25:</strong> Token launch (✅)</li>
          <li><strong>Q3 ’25:</strong> Bonding curve ends → Mint live</li>
          <li><strong>Q4 ’25:</strong> TCG alpha: trade & battle</li>
          <li><strong>Q1 ’26+:</strong> DAO governance & cross-chain</li>
        </ul>
      </section>

      {/* Cards Showcase */}
      <section id="game" className="py-20">
        <h2 className="text-4xl text-center mb-12 neon-text">Cards Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center">
          {[ 
            'https://sdmntprcentralus.oaiusercontent.com/files/00000000-94f0-61f5-8641-6c9d4daf8f4a/raw',
            'https://sdmntprcentralus.oaiusercontent.com/files/00000000-4d4c-61f5-ae99-d084a716365c/raw',
            'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-ac3c-622f-8c12-4b8671e72216/raw'  
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`SOL Cart card ${i+1}`}
              className="w-64 rounded-lg shadow-lg animate-float animation-delay-[${i*200}ms]"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900/80">
        <div className="space-x-4">
          <a href="#tokenomics" className="hover:underline">Tokenomics</a>
          <a href="#game" className="hover:underline">Game</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
        </div>
        <p className="mt-4 text-sm">© 2025 SOL Cart — Built on Solana</p>
      </footer>
    </div>
  );
}

export default App;
