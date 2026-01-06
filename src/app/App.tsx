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

  const currentJob = selectedJob !== null ? jobsData.find(job => job.id === selectedJob) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#0d1137] to-[#1a1f5c] flex flex-col">
      <Header />
      
      <main className="pt-32 pb-20 px-6 flex-grow">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-white text-center text-5xl tracking-wider mb-16">
            OPEN ROLES
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobsData.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                imageUrl={job.imageUrl}
                location={job.location}
                jobType={job.jobType}
                onClick={() => handleOpenJob(job.id)}
              />
            ))}
          </div>
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
