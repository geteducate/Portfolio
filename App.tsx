import React, { useState } from 'react';
import { Header } from './components/Header';
import { JobCard } from './components/JobCard';
import { JobModal } from './components/JobModal';
import { Footer } from './components/Footer';
import { jobsData } from './data/jobsData';

export default function App() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const handleOpenJob = (jobId: number) => {
    setSelectedJob(jobId);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const currentJob =
    selectedJob !== null
      ? jobsData.find((job) => job.id === selectedJob)
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => handleOpenJob(job.id)}
            />
          ))}
        </div>
      </main>

      <Footer />

      {currentJob && (
        <JobModal
          isOpen={selectedJob !== null}
          onClose={handleCloseModal}
          job={currentJob}
        />
      )}
    </div>
  );
}
