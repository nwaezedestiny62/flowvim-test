"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Download, Share2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SuccessScreenProps {
  candidateId: string;
  score: number;
  status: 'passed' | 'failed';
  applicantData: any;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  candidateId,
  score,
  status,
  applicantData,
}) => {
  const [emailSent, setEmailSent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Email notification (unchanged)
  useEffect(() => {
    if (status === 'passed' && applicantData) {
      const sendEmail = async () => {
        try {
          const form = new FormData();
          form.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);
          form.append('subject', `✅ New Passed Application - ${applicantData.vacancy}`);
          form.append('from_name', applicantData.fullName);
          form.append('email', applicantData.email);

          form.append('fullName', applicantData.fullName);
          form.append('email', applicantData.email);
          form.append('phone', applicantData.phone);
          form.append('vacancy', applicantData.vacancy);
          form.append('score', `${score}%`);
          form.append('candidateId', candidateId);
          form.append('status', 'PASSED');

          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: form,
          });

          if (response.ok) setEmailSent(true);
        } catch (error) {
          console.error("Failed to send email:", error);
        }
      };

      sendEmail();
    }
  }, [status, applicantData, score, candidateId]);

  // Confetti
  useEffect(() => {
    if (status === 'passed') {
      setShowConfetti(true);

      const burstConfetti = () => {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0.1, y: 0.7 } });
        confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 0.9, y: 0.7 } });
      };

      burstConfetti();
      const timer = setTimeout(burstConfetti, 800);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const isPassed = status === 'passed';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center overflow-hidden relative px-4 py-8 sm:py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg sm:max-w-xl md:max-w-2xl w-full mx-auto text-center relative z-10"
      >
        {/* Icon */}
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.6, rotate: -15 }}
            animate={{
              scale: 1,
              rotate: 0,
              transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.2 },
            }}
            className="mb-8 sm:mb-10 flex justify-center"
          >
            <div
              className={`p-5 sm:p-6 md:p-8 rounded-full ${
                isPassed ? 'bg-green-500/10' : 'bg-red-500/10'
              }`}
            >
              {isPassed ? (
                <CheckCircle className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-green-500" strokeWidth={2} />
              ) : (
                <XCircle className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-red-500" strokeWidth={2} />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-unbounded font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-none"
        >
          {isPassed ? 'Congrats!' : 'Thank You for Applying'}
        </motion.h2>

        {/* Score */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-3xl px-6 sm:px-8 py-4 sm:py-5">
            <span className="text-5xl sm:text-6xl font-semibold tabular-nums text-white">{score}</span>
            <span className="text-3xl sm:text-4xl text-zinc-400">%</span>
          </div>
        </motion.div>

        {/* Message */}
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-8 sm:mb-10 max-w-md mx-auto leading-tight px-2">
          {isPassed
            ? `Amazing work! Your Candidate ID is #${candidateId}`
            : `You scored ${score}%. Better luck next time — we’d love to see you apply again.`}
        </p>

        {isPassed && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-green-400 mb-10 sm:mb-12 font-medium px-4"
          >
            Our recruitment team has been notified. We’ll reach out soon if you’re shortlisted.
          </motion.p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-12 px-4">
          {isPassed ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.print()}
                className="group flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-zinc-200 transition-all active:scale-95 text-base sm:text-lg"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition" />
                Save Result
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 border border-zinc-700 hover:border-zinc-500 font-medium px-8 py-4 rounded-2xl transition-all text-base sm:text-lg"
              >
                <Share2 className="w-5 h-5" />
                Share Achievement
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-white text-black font-semibold px-10 py-4 rounded-2xl hover:bg-zinc-200 transition-all text-base sm:text-lg"
            >
              Apply Again
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}
        </div>

        {/* Status Message */}
        <div className="mt-10 sm:mt-12 text-sm text-zinc-500 flex items-center justify-center gap-2 px-4">
          {isPassed ? (
            emailSent ? "✅ Notification sent to the team" : "Sending notification to recruitment..."
          ) : (
            "Keep improving. The right opportunity is coming."
          )}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-6 sm:bottom-8 text-xs text-zinc-600 tracking-widest text-center px-4">
        Flowvim • RECRUITING THE BEST
      </div>
    </div>
  );
};

export default SuccessScreen;