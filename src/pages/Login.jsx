import { useState } from 'react';
import f_logo from '../assets/f_logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in!');
  };

  return (
    <div
      className="min-h-[calc(100vh-4rem-4rem)] flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${f_logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="max-w-md w-full p-8 rounded-xl backdrop-blur-md bg-transparent border border-white/30"
        style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.1)' }}
      >
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-700 hover:bg-red-800 rounded font-semibold transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
