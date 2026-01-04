import React from 'react';

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Educate</h1>
        <nav className="space-x-4">
          <a href="#" className="text-sm font-medium hover:underline">
            Jobs
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Apply
          </a>
        </nav>
      </div>
    </header>
  );
}
