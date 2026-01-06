import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react';

interface ApplicationFormProps {
  jobTitle: string;
  onClose: () => void;
}

export function ApplicationForm({ jobTitle, onClose }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    instagram: '',
    country: '',
    referral: '',
    age: '',
    inSchool: ''
  });

  const totalSteps = 7;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.phone && formData.email;
      case 2:
        return formData.country;
      case 3:
        return formData.referral;
      case 4:
        return formData.age;
      case 5:
        return formData.inSchool;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl text-white tracking-wide">
              {jobTitle}
            </h1>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-white/90 text-lg leading-relaxed">
                Thank you for your interest in the <span className="text-blue-300 font-semibold">{jobTitle}</span> role at Get Educate.
              </p>
              <p className="text-white/80 leading-relaxed">
                Please understand that we receive thousands of applications when opening hiring windows. To better your chances of passing through this first stage of the application process, please answer thoroughly & thoughtfully.
              </p>
            </div>
            <button
              onClick={nextStep}
              className="group mt-8 px-10 py-4 bg-white text-[#0a0a1f] rounded-lg text-lg uppercase tracking-wider hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto"
            >
              Apply Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">
                  What is your first name? <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  What is your last name? <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Doe"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  What is your phone number? <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+19568975656"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  What is your email? <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@gmail.com"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  What is your Instagram handle?
                </label>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  placeholder="@johndoe"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-white mb-4">
                Awesome! It's nice to meet you, <span className="text-blue-300">{formData.firstName || 'there'}</span>.
              </h2>
            </div>
            <div>
              <label className="block text-white text-lg mb-4">
                Keeping it simple - what country are you based out of? <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                placeholder="ex. Sweden"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 text-lg"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <label className="block text-white text-lg mb-6">
                Did someone on the Educate team refer you to this application? <span className="text-red-400">*</span>
              </label>
              <div className="space-y-4">
                <div
                  onClick={() => handleInputChange('referral', 'yes')}
                  className={`group cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 ${
                    formData.referral === 'yes'
                      ? 'border-blue-400 bg-blue-400/20 scale-105'
                      : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      formData.referral === 'yes' ? 'border-blue-400 bg-blue-400' : 'border-white/40'
                    }`}>
                      {formData.referral === 'yes' && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <div className="text-white text-lg mb-1">A</div>
                      <div className="text-white/90">Yes, someone on the team told me to apply.</div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => handleInputChange('referral', 'no')}
                  className={`group cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 ${
                    formData.referral === 'no'
                      ? 'border-blue-400 bg-blue-400/20 scale-105'
                      : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      formData.referral === 'no' ? 'border-blue-400 bg-blue-400' : 'border-white/40'
                    }`}>
                      {formData.referral === 'no' && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <div className="text-white text-lg mb-1">B</div>
                      <div className="text-white/90">No, I found this role on my own.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <label className="block text-white text-lg mb-4">
                And <span className="text-blue-300">{formData.firstName || 'there'}</span> - how old are you currently? <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="25"
                min="16"
                max="99"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 text-lg"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <label className="block text-white text-lg mb-6">
                Being <span className="text-blue-300">{formData.age || '21'}</span>, does that mean that you are enrolled in school or university? <span className="text-red-400">*</span>
              </label>
              <div className="space-y-4">
                <div
                  onClick={() => handleInputChange('inSchool', 'yes')}
                  className={`group cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 ${
                    formData.inSchool === 'yes'
                      ? 'border-blue-400 bg-blue-400/20 scale-105'
                      : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      formData.inSchool === 'yes' ? 'border-blue-400 bg-blue-400' : 'border-white/40'
                    }`}>
                      {formData.inSchool === 'yes' && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <div className="text-white text-lg mb-1">A</div>
                      <div className="text-white/90">Yes, I am still in school or university.</div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => handleInputChange('inSchool', 'no')}
                  className={`group cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 ${
                    formData.inSchool === 'no'
                      ? 'border-blue-400 bg-blue-400/20 scale-105'
                      : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      formData.inSchool === 'no' ? 'border-blue-400 bg-blue-400' : 'border-white/40'
                    }`}>
                      {formData.inSchool === 'no' && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <div className="text-white text-lg mb-1">B</div>
                      <div className="text-white/90">No, I am not in school or university.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="inline-block p-6 bg-green-500/20 rounded-full mb-4">
              <Check className="w-16 h-16 text-green-400" />
            </div>
            <h2 className="text-4xl text-white">
              Thank you, <span className="text-blue-300">{formData.firstName || 'there'}</span>!
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto leading-relaxed">
              Someone on our team will be in touch should your application be approved onto next stages.
            </p>
            <div className="pt-8">
              <button
                onClick={onClose}
                className="px-10 py-4 bg-white text-[#0a0a1f] rounded-lg text-lg uppercase tracking-wider hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-[60] bg-gradient-to-br from-[#1a1f4a] via-[#1e2657] to-[#2a3570] overflow-y-auto animate-in fade-in duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Progress Bar */}
      {currentStep > 0 && currentStep < 6 && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          {/* Step Indicator */}
          {currentStep > 0 && currentStep < 6 && (
            <div className="text-center mb-8 animate-in fade-in duration-500">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white/80 text-sm">Step {currentStep} of 5</span>
              </div>
            </div>
          )}

          {/* Main Content Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-700">
            {renderStep()}

            {/* Navigation Buttons */}
            {currentStep > 0 && currentStep < 6 && (
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-[-4px]"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg uppercase tracking-wider transition-all duration-300 ${
                    isStepValid()
                      ? 'bg-white text-[#0a0a1f] hover:bg-blue-50 hover:scale-105 hover:shadow-xl'
                      : 'bg-white/20 text-white/40 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
