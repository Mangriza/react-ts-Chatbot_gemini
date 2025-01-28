import React from 'react';
import ChatBox from './components/ChatBox';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#000080',
          color: 'white',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Efek shadow biar keren
        }}
      >
        {/* Logo dan Nama Brand */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://wai.ijotomat.my.id/img/ijotomat.png" // Ganti dengan URL logo Anda
            alt="Logo WAI"
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
          />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 ,color: 'white' }}>WAI</h1>
        </div>

        {/* Menu */}
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '20px' }}>
              <a href="#home" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
            </li>
            <li>
              <a href="#kontak" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Kontak</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', padding: '20px' }}>
        {/* Bagian Kiri: Foto Model AI */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1', marginRight: '10px', borderRadius: '10px' }}>
          <img
            src="https://static.promediateknologi.id/crop/0x257:1440x1374/0x0/webp/photo/p2/45/2024/07/12/Xaviera-Clash-of-Champions-Mahasiswa-KAIST-Double-Major-Computer-Science-dan-Business-Tech-Management-Instagram-xavieraaputri-2451094070.jpg" // Ganti dengan URL gambar AI Anda
            alt="AI Model"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>

        {/* Bagian Kanan: ChatBox */}
        <div style={{ flex: 1 }}>
          <ChatBox />
        </div>
      </main>

      {/* Footer */}
      <footer style={{  backgroundColor: '#000080', padding: '10px 20px', textAlign: 'center' ,color: 'white' }}>
        <p>© 2023 WAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;