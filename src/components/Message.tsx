import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean;
  userImage?: string; // URL foto pengguna
  botImage?: string; // URL foto bot
}

const Message: React.FC<MessageProps> = ({ text, isUser, userImage, botImage }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        margin: '10px',
        alignItems: 'flex-end',
      }}
    >
      {/* Foto Profil Bot (kiri) */}
      {!isUser && (
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
            overflow: 'hidden', // Biar gambar tidak keluar dari lingkaran
          }}
        >
          <img
            src={botImage || 'https://via.placeholder.com/40'} // Default foto bot
            alt="Bot"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Bubble Chat */}
      <div
        style={{
          maxWidth: '70%',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: isUser ? '#007bff' : '#f1f1f1',
          color: isUser ? 'white' : 'black',
        }}
      >
        {text}
      </div>

      {/* Foto Profil User (kanan) */}
      {isUser && (
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginLeft: '10px',
            overflow: 'hidden', // Biar gambar tidak keluar dari lingkaran
          }}
        >
          <img
            src={userImage || 'https://via.placeholder.com/40'} // Default foto pengguna
            alt="User"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
};

export default Message;