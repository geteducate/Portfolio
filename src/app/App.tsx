import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { JobCard } from './components/JobCard';
import { JobModal } from './components/JobModal';
import { jobs } from './data/jobsData';

export default function App() {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Open Positions</h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => setSelectedJob(job)}
            />
          ))}
        </div>
      </main>

      <Footer />

      {selectedJob && (
        <JobModal
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          job={selectedJob}
        />
      )}
    </div>
  );
}
