import React from 'react';

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Educate</h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:underline">
            Jobs
          </a>
          <a href="/apply" className="hover:underline">
            Apply
          </a>
        </nav>
      </div>
    </header>
  );
}
