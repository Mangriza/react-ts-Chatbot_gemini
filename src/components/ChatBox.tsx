import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  // URL foto bot dan pengguna
  const botImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7KdTr0xYwdNwnnSKZoZqp3BWqs2wbpQB5Q&s'; // Ganti dengan URL foto bot
  const userImage = 'https://wai.ijotomat.my.id/img/ijotomat.png'; // Ganti dengan URL foto pengguna

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Tambahkan pesan pengguna ke chat
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput('');

    // Kirim pesan ke Gemini API
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: input,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Tambahkan respons AI ke chat
      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { text: aiResponse, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [...prev, { text: 'Error communicating with AI.', isUser: false }]);
    }
  };

  return (
    <div style={{ width: '800px', height: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
      {/* Chat History */}
      <div style={{ flex: 1, overflowY: 'scroll', borderBottom: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            isUser={msg.isUser}
            userImage={userImage} // Foto pengguna
            botImage={botImage} // Foto bot
          />
        ))}
      </div>

      {/* Input Area */}
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;