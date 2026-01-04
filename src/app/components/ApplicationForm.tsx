import React from 'react';

export function ApplicationForm() {
  return (
    <form className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded border px-3 py-2"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Cover Letter</label>
        <textarea
          className="w-full rounded border px-3 py-2"
          rows={4}
          placeholder="Write a short cover letter"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded bg-primary text-primary-foreground py-2 font-medium"
      >
        Submit Application
      </button>
    </form>
  );
}
