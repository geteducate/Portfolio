import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface JobCardProps {
  title: string;
  imageUrl: string;
  location: string;
  jobType: string;
  onClick: () => void;
}

export function JobCard({ title, imageUrl, location, jobType, onClick }: JobCardProps) {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
      onClick={onClick}
    >
      <ImageWithFallback
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/70 to-blue-950/80"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <h3 className="text-white text-xl uppercase tracking-wide">
          {title}
        </h3>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-white text-sm">
            <Clock className="w-4 h-4" />
            <span>{jobType}</span>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
    </div>
  );
}
