// client/src/App.jsx
import { useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = async () => {
    // Aqui futuramente será integrado com a OpenAI ou com o backend
    alert(`Mensagem enviada: ${mensagem}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">🧠 Help Chat</h1>
      <textarea
        className="w-full max-w-md p-3 border rounded shadow"
        placeholder="Digite sua mensagem em LIBRAS ou texto..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button
        onClick={enviarMensagem}
        className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Enviar
      </button>
    </div>
  );
}

export default App;
