"use client";

import React, { useState, useEffect } from "react";
import { questionBank, type Question } from "@/lib/questions";
import { motion, AnimatePresence } from "framer-motion";

interface AssessmentProps {
  experienceYears: number;
  onComplete: (score: number, candidateId: string) => void;
  onCancel?: () => void;
}

const Assessment: React.FC<AssessmentProps> = ({
  experienceYears,
  onComplete,
  onCancel,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showStopModal, setShowStopModal] = useState(false);

useEffect(() => {
  let filtered: Question[] = [];

  // 1 year experience
  if (experienceYears === 1) {
    filtered = questionBank.filter(
      (q) => q.id >= 1 && q.id <= 10
    );
  }

  // 2 - 3 years experience
  else if (experienceYears >= 2 && experienceYears <= 3) {
    filtered = questionBank.filter(
      (q) => q.id >= 11 && q.id <= 25
    );
  }

  // 4 years and above
  else {
    filtered = questionBank.filter(
      (q) => q.id >= 26 && q.id <= 40
    );
  }

  // Shuffle options only
  const selected = filtered.map((q) => {
    const shuffled = [...q.options];
    const correctText = shuffled[q.correctAnswer];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return {
      ...q,
      options: shuffled,
      correctAnswer: shuffled.indexOf(correctText),
    };
  });

  setQuestions(selected);
}, [experienceYears]);

  const handleAnswer = (id: number, idx: number) => {
    setAnswers((p) => ({ ...p, [id]: idx }));
  };

  const calculateScore = () => {
    let total = 0;
    let max = 0;

    questions.forEach((q) => {
      max += q.score;
      if (answers[q.id] === q.correctAnswer) total += q.score;
    });

    return Math.round((total / max) * 100);
  };

  const finish = () => {
    const year = new Date().getFullYear();
    const id = `FLV-${year}-${Math.floor(1000 + Math.random() * 9000)}`;
    onComplete(calculateScore(), id);
  };

  const current = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (!questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
        <div className="w-8 h-8 border-4 border-[#26667F] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white pb-20">

      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg sm:text-2xl font-semibold">
              Assessment
            </h1>
            <p className="text-xs sm:text-sm text-white/60">
              {currentIndex + 1} / {questions.length}
            </p>
          </div>

          <div className="hidden sm:block w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3a8ca8] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* QUESTION */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-8"
        >
          <p className="text-base sm:text-lg mb-8">
            {current.text}
          </p>

          <div className="space-y-3">
            {current.options.map((opt, i) => {
              const active = answers[current.id] === i;

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(current.id, i)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                    active
                      ? "bg-[#1a3a44] border-[#3a8ca8]"
                      : "bg-white/5 border-white/10 hover:border-[#3a8ca8]"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10">

            <button
              onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))}
              disabled={currentIndex === 0}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl border transition ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed border-white/10"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((p) => p + 1)}
                className="flex-1 px-6 py-3 rounded-xl bg-[#26667F]"
              >
                Next
              </button>
            ) : (
              <button
                onClick={finish}
                className="flex-1 px-6 py-3 rounded-xl bg-green-600"
              >
                Finish
              </button>
            )}
          </div>

          {/* STOP BUTTON (NOW UNDER QUESTIONS) */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowStopModal(true)}
              className="text-red-400 border border-red-500/30 hover:bg-red-500/10 px-5 py-2 rounded-xl text-sm"
            >
              Stop Assessment
            </button>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showStopModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 max-w-md w-full"
            >
              <h3 className="text-lg font-semibold mb-3">
                Stop assessment?
              </h3>

              <p className="text-white/60 mb-6">
                Progress will be lost.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowStopModal(false)}
                  className="flex-1 border border-white/10 rounded-xl py-3"
                >
                  Continue
                </button>

                <button
                  onClick={() => {
                    setShowStopModal(false);
                    onCancel?.();
                  }}
                  className="flex-1 bg-red-600 rounded-xl py-3"
                >
                  Stop
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assessment;