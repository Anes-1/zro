import React from 'react';

export default function Info() {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto text-white">
      {/* About Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-2">About ZRØ</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          ZRØ is more than a clothing brand — it's a movement. Founded by a group of creatives who believe in bold expression, we design unique streetwear that stands out. Every piece reflects our passion for art, identity, and raw authenticity.
        </p>
        <p className="text-lg mt-4 text-gray-400">
          Based in Kosovo, we ship globally and support local artists through collaboration and community.
        </p>
      </div>

      {/* Contact Us */}
      <div>
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-2">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input type="text" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-zinc-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input type="email" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-zinc-500" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-zinc-500" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-6 rounded shadow">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
