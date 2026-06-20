"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
];

export default function CareersPage() {
  const [step, setStep] = useState<'list' | 'form' | 'assessment' | 'success'>('list');
  const [applicationData, setApplicationData] = useState<any>(null);
  const [candidateId, setCandidateId] = useState('');
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'passed' | 'failed'>('failed');

  const handleApply = (vacancy: any) => {
    setApplicationData({ ...vacancy, experienceYears: 0 }); // Will be updated in form
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

  return (
    <div className="min-h-screen bg-[#0d1e20] text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-unbounded tracking-tighter mb-4">Careers at Flowvim</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our team and help bridge strategy with execution across Africa.
          </p>
        </motion.div>

        {step === 'list' && (
          <div className="grid gap-8">
            {vacancies.map((vac) => (
              <VacancyCard key={vac.id} vacancy={vac} onApply={handleApply} />
            ))}
          </div>
        )}

        {step === 'form' && applicationData && (
          <ApplicationForm 
            vacancy={applicationData} 
            onSubmit={handleFormSubmit} 
          />
        )}

        {step === 'assessment' && applicationData && (
          <Assessment 
            experienceYears={applicationData.experienceYears} 
            onComplete={handleAssessmentComplete} 
            applicantData={applicationData}
          />
        )}

        {step === 'success' && (
          <SuccessScreen 
            candidateId={candidateId} 
            score={score} 
            status={status} 
            applicantData={applicationData} 
          />
        )}
      </div>
    </div>
  );
}