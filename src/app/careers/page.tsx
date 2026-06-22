"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

import ApplicationForm from "@/components/Careers/ApplicationForm";
import Assessment from "@/components/Careers/Assessment";
import SuccessScreen from "@/components/Careers/SuccessScreen";
import VacancyCard from "@/components/Careers/VacancyCard";

const vacancies = [
  {
    id: "TM-001",
    title: "Terminal Manager",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead terminal operations, ensure safety & efficiency...",
  },
];

type Step = "list" | "form" | "assessment" | "success";

export default function CareersPage() {
  const [step, setStep] = useState<Step>("list");

  const [vacancy, setVacancy] = useState<any>(null);
  const [applicationData, setApplicationData] = useState<any>(null);

  const [candidateId, setCandidateId] = useState("");
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"passed" | "failed">("failed");

  const handleApply = (vac: any) => {
    setVacancy(vac);
    setStep("form");
  };

  const handleFormSubmit = (data: any) => {
    setApplicationData({
      ...data,
      vacancy: vacancy?.title,
    });

    setStep("assessment");
  };

  const handleAssessmentComplete = (
    finalScore: number,
    finalCandidateId: string
  ) => {
    setScore(finalScore);
    setCandidateId(finalCandidateId);
    setStatus(finalScore >= 70 ? "passed" : "failed");
    setStep("success");
  };

  const handleCancelAssessment = () => {
    setStep("form");
  };

  return (
    <div className="min-h-screen bg-[#0a1417] text-white overflow-hidden">
      {/* HERO */}
      {step === "list" && (
        <div className="pt-40 pb-16 border-b border-white/10 bg-gradient-to-b from-[#0a1417] via-[#0f1f24] to-transparent">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <Icon icon="mdi:briefcase-outline" className="text-blue-400" width={20} />
                <span className="text-sm font-medium text-blue-400">
                  JOIN THE TEAM
                </span>
              </div>

              <h1 className="text-5xl font-bold mb-6">
                Build the Future <span className="text-blue-400">Flowvim</span>
              </h1>

              <p className="text-gray-400">
                Join a team that bridges strategy with execution across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-6 max-w-5xl py-12">
        <AnimatePresence mode="wait">
          {/* LIST */}
          {step === "list" && (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid gap-6 max-w-3xl mx-auto">
                {vacancies.map((v) => (
                  <VacancyCard key={v.id} vacancy={v} onApply={handleApply} />
                ))}
              </div>
            </motion.div>
          )}

          {/* FORM */}
          {step === "form" && vacancy && (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <ApplicationForm vacancy={vacancy} onSubmit={handleFormSubmit} />
            </motion.div>
          )}

          {/* ASSESSMENT */}
          {step === "assessment" && applicationData && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <Assessment
                experienceYears={applicationData.experienceYears}
                onComplete={handleAssessmentComplete}
                onCancel={handleCancelAssessment}
              />
            </motion.div>
          )}

          {/* SUCCESS */}
          {step === "success" && applicationData && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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