"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplicationForm from '@/components/Careers/ApplicationForm';
import Assessment from '@/components/Careers/Assessment';
import SuccessScreen from '@/components/Careers/SuccessScreen';
import VacancyCard from '@/components/Careers/VacancyCard';

const vacancies = [
  {
    id: 'TM-001',
    title: 'Terminal Manager',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead terminal operations, ensure safety & efficiency...',
  },
  // Add more vacancies here
];

export default function CareersPage() {
  const [step, setStep] = useState<'list' | 'form' | 'assessment' | 'success'>('list');
  const [applicationData, setApplicationData] = useState<any>(null);
  const [candidateId, setCandidateId] = useState('');
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'passed' | 'failed'>('failed');

  const handleApply = (vacancy: any) => {
    setApplicationData({ ...vacancy, experienceYears: 0 });
    setStep('form');
  };

  const handleFormSubmit = (data: any) => {
    setApplicationData(data);
    setStep('assessment');
  };

  const handleAssessmentComplete = (finalScore: number, finalCandidateId: string) => {
    setScore(finalScore);
    setCandidateId(finalCandidateId);
    setStatus(finalScore >= 70 ? 'passed' : 'failed');
    setStep('success');
  };

  const handleBack = () => {
    if (step === 'form') setStep('list');
    if (step === 'assessment') setStep('form');
  };

  return (
    <div className="min-h-screen bg-[#0d1e20] text-white overflow-hidden">
      {/* HERO SECTION - Only shown on the list view */}
      {step === 'list' && (
        <div className="pt-32 md:pt-40 lg:pt-48 pb-20 border-b border-white/10 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-unbounded font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Careers at Flowvim
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-tight">
                Join our team and help bridge strategy with execution across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      )}

      <main data-careers="true" className="container mx-auto px-6 max-w-6xl py-16">
        <AnimatePresence mode="wait">
          {/* Vacancy List Step */}
          {step === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-4xl font-unbounded tracking-tight">Open Positions</h2>
                  <p className="text-gray-400 mt-2">Find your next challenge</p>
                </div>
                <div className="text-sm text-gray-500 hidden md:block">
                  {vacancies.length} opportunity{vacancies.length !== 1 ? 's' : ''}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {vacancies.map((vac) => (
                  <VacancyCard 
                    key={vac.id} 
                    vacancy={vac} 
                    onApply={handleApply} 
                  />
                ))}
              </div>

              {vacancies.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                  No open positions at the moment. Check back soon!
                </div>
              )}
            </motion.div>
          )}

          {/* Application Form Step */}
          {step === 'form' && applicationData && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={handleBack}
                className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                ← Back to positions
              </button>
              <ApplicationForm 
                vacancy={applicationData} 
                onSubmit={handleFormSubmit} 
              />
            </motion.div>
          )}

          {/* Assessment Step */}
          {step === 'assessment' && applicationData && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={handleBack}
                className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                ← Back to application
              </button>
              <Assessment 
                experienceYears={applicationData.experienceYears} 
                onComplete={handleAssessmentComplete} 
                applicantData={applicationData}
              />
            </motion.div>
          )}

          {/* Success Screen Step */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="min-h-[70vh] flex items-center justify-center"
            >
              <SuccessScreen 
                candidateId={candidateId} 
                score={score} 
                status={status} 
                applicantData={applicationData} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}