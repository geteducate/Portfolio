import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ApplicationForm } from './ApplicationForm';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    title: string;
    imageUrl: string;
    location: string;
    jobType: string;
    date: string;
    department: string;
    summary: string;
    role: {
      title: string;
      description: string;
    };
    idealCandidate: {
      description: string;
      points: string[];
    };
    requirements: {
      title: string;
      description: string;
    }[];
    shouldntApply: string[];
  };
}

export function JobModal({ isOpen, onClose, job }: JobModalProps) {
  const [showApplication, setShowApplication] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleApplyClick = () => {
    setShowApplication(true);
  };

  const handleCloseApplication = () => {
    setShowApplication(false);
  };

  if (!isOpen) return null;

  if (showApplication) {
    return <ApplicationForm jobTitle={job.title} onClose={handleCloseApplication} />;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-300">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#0a0a1f] via-[#0d1137] to-[#1a1f5c] rounded-lg shadow-2xl my-8 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors hover:rotate-90 duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 rounded-t-lg overflow-hidden">
            <ImageWithFallback
              src={job.imageUrl}
              alt={job.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1f]/90"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 animate-in slide-in-from-bottom-8 duration-700 delay-100">
              <h2 className="text-white text-3xl uppercase tracking-wide mb-4">
                {job.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-white/90">{job.date}</span>
                <span className="text-white/90">{job.department}</span>
                <span className="text-white/90">{job.location}</span>
                <span className="text-white/90">{job.jobType}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8 animate-in slide-in-from-bottom-8 duration-700 delay-200">
            {/* Job Summary */}
            <section className="animate-in slide-in-from-left-4 duration-500 delay-300">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 border-b border-white/20 pb-2">
                Job Summary
              </h3>
              <p className="text-white/80 leading-relaxed">
                {job.summary}
              </p>
            </section>

            {/* Your Role */}
            <section className="animate-in slide-in-from-left-4 duration-500 delay-[400ms]">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 border-b border-white/20 pb-2">
                Your Role
              </h3>
              <div className="space-y-3">
                <h4 className="text-white uppercase tracking-wide">
                  {job.role.title}
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {job.role.description}
                </p>
              </div>
            </section>

            {/* Ideal Candidate */}
            <section className="animate-in slide-in-from-left-4 duration-500 delay-[500ms]">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 border-b border-white/20 pb-2">
                Ideal Candidate
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {job.idealCandidate.description}
              </p>
              <ul className="space-y-2">
                {job.idealCandidate.points.map((point, index) => (
                  <li key={index} className="text-white/80 leading-relaxed flex">
                    <span className="mr-3">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="animate-in slide-in-from-left-4 duration-500 delay-[600ms]">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 border-b border-white/20 pb-2">
                Requirements
              </h3>
              <div className="space-y-6">
                {job.requirements.map((req, index) => (
                  <div key={index}>
                    <h4 className="text-white uppercase tracking-wide mb-2">
                      {req.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* You Shouldn't Apply If */}
            <section className="animate-in slide-in-from-left-4 duration-500 delay-[700ms]">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 border-b border-white/20 pb-2">
                You Shouldn't Apply If
              </h3>
              <ul className="space-y-2">
                {job.shouldntApply.map((point, index) => (
                  <li key={index} className="text-white/80 leading-relaxed flex">
                    <span className="mr-3">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="text-center pt-8 pb-4 animate-in zoom-in-95 duration-500 delay-[800ms]">
              <h3 className="text-white text-2xl mb-6">
                Think you're a fit? Apply Today.
              </h3>
              <button 
                onClick={handleApplyClick}
                className="bg-white text-[#0a0a1f] px-8 py-3 rounded uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
