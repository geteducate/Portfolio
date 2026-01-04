import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job;
}

export function JobModal({ isOpen, onClose, job }: JobModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sm text-muted-foreground"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <p className="text-sm text-muted-foreground">{job.company}</p>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Type:</strong> {job.type}
          </p>
        </div>

        <div className="mt-4">
          <p classNam
