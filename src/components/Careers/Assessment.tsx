"use client";
import React, { useState, useEffect } from 'react';
import { questionBank, type Question } from '@/lib/questions';
import { motion } from 'framer-motion';

interface AssessmentProps {
  experienceYears: number;
  onComplete: (score: number, candidateId: string) => void;
  applicantData: any;
}

const Assessment: React.FC<AssessmentProps> = ({ experienceYears, onComplete, applicantData }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let filtered = [...questionBank];

    if (experienceYears <= 2) {
      filtered = filtered.filter(q => q.difficulty === 'Easy').slice(0, 35);
    } else if (experienceYears <= 4) {
      const easy = filtered.filter(q => q.difficulty === 'Easy').slice(0, 20);
      const inter = filtered.filter(q => q.difficulty === 'Intermediate').slice(0, 15);
      filtered = [...easy, ...inter];
    } else {
      filtered = filtered.filter(q => q.difficulty === 'Advanced').slice(0, 25);
    }

    // Shuffle
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    setQuestions(filtered.slice(0, 10)); // 10 questions per test
  }, [experienceYears]);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach(q => {
      const userAnswer = answers[q.id];
      maxScore += q.score;
      if (userAnswer === q.correctAnswer) {
        totalScore += q.score;
      }
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const finishAssessment = () => {
    const finalScore = calculateScore();
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const candidateId = `FLV-TM-${year}-${randomNum}`;

    onComplete(finalScore, candidateId);
  };

  if (questions.length === 0) return <div className="text-center py-20">Loading assessment...</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-unbounded">Terminal Manager Assessment</h2>
        <p className="text-gray-400 mt-3">Question {currentIndex + 1} of {questions.length}</p>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#132B2F] p-10 rounded-3xl border border-[#26667F]"
      >
        <p className="text-xl leading-relaxed mb-10">{currentQuestion.text}</p>

        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(currentQuestion.id, idx)}
              className={`w-full text-left p-6 rounded-2xl border transition-all ${
                answers[currentQuestion.id] === idx
                  ? 'border-[#3a8ca8] bg-[#1a3a44]'
                  : 'border-[#26667F] hover:border-[#3a8ca8]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-12">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-8 py-4 disabled:opacity-50"
          >
            Previous
          </button>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={finishAssessment}
              className="px-10 py-4 bg-green-600 hover:bg-green-700 rounded-2xl font-medium"
            >
              Finish Assessment
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex(prev => prev + 1)}
              className="px-10 py-4 bg-[#26667F] hover:bg-[#3a8ca8] rounded-2xl font-medium"
            >
              Next Question
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Assessment;