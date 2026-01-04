import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
}

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg border p-4 hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
      <p className="text-sm text-muted-foreground">{job.company}</p>
      <p className="text-sm mt-2">{job.location}</p>
      <span className="inline-block mt-3 text-xs font-medium px-2 py-1 rounded bg-secondary">
        {job.type}
      </span>
    </div>
  );
}
