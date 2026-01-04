import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ApplicationForm } from '../components/ApplicationForm';

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Apply for a Job</h1>
        <ApplicationForm />
      </main>

      <Footer />
    </div>
  );
}
