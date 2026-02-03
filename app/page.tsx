"use client";

import React, { useState } from "react";
import { Send, Github, Linkedin, Twitter, Code2 } from "lucide-react";

export default function PortfolioComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Background Gradient Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Navigation / Brand Header */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Code2 className="text-blue-500" size={28} />
          {/* UPDATED: Name in Logo area */}
          <span>
            Harshit Shinde<span className="text-blue-500">.</span>
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          System Upgrade in Progress
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 max-w-4xl mx-auto">
          Crafting Digital <br className="hidden sm:block" />
          <span className="text-white">Experiences.</span>
        </h1>

        {/* UPDATED: Name in Intro Text */}
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm <span className="text-white font-medium">Harshit Shinde</span>. I
          am currently rebuilding my portfolio to showcase my latest work in
          full-stack development. Stay tuned for something special.
        </p>

        {/* Notify Form */}
        <div className="w-full max-w-md mx-auto mb-12">
          {isSubmitted ? (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center gap-2">
              <span>You're on the list! We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 pl-6 pr-14 rounded-full bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-white placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 h-10 w-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                aria-label="Notify me"
              >
                <Send size={18} />
              </button>
            </form>
          )}
          <p className="text-xs text-gray-500 mt-4">
            No spam. Just an update when I launch.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <SocialLink
            href="https://github.com"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://twitter.com"
            icon={<Twitter size={20} />}
            label="Twitter"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center text-sm text-gray-600">
        {/* UPDATED: Name in Footer */}
        <p>
          &copy; {new Date().getFullYear()} Harshit Shinde. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
      aria-label={label}
    >
      <span className="group-hover:scale-110 block transition-transform">
        {icon}
      </span>
    </a>
  );
}
