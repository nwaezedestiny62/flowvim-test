"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

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
  applicantData 
}) => {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const sendEmail = async () => {
      try {
const response = await fetch('/api/send-application', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    ...applicantData,
    candidateId,
    score,
    status,
  }),
});

        if (response.ok) {
          setEmailSent(true);
        }
      } catch (error) {
        console.error("Email sending failed:", error);
      }
    };

    if (applicantData && candidateId) {
      sendEmail();
    }
  }, [candidateId, score, status, applicantData]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="max-w-2xl mx-auto text-center py-20 px-6"
    >
      <div className="mb-10">
        {status === 'passed' ? (
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        ) : (
          <XCircle className="w-24 h-24 text-red-500 mx-auto" />
        )}
      </div>

      <h2 className="text-5xl font-unbounded mb-6">
        {status === 'passed' ? 'Congratulations!' : 'Thank You for Applying'}
      </h2>

      <p className="text-2xl text-gray-300 mb-8">
        {status === 'passed'
          ? `You scored ${score}%. Your Candidate ID is <span class="font-mono text-green-400">${candidateId}</span>`
          : `You scored ${score}%. You did not meet the 70% pass mark this time.`}
      </p>

      {status === 'passed' && (
        <p className="text-lg text-green-400 mb-12 max-w-md mx-auto">
          Our team will review your application and contact you if shortlisted.
        </p>
      )}

      <div className="text-sm text-gray-400">
        {emailSent ? 
          "✅ Email notification has been sent to the recruitment team." : 
          "Sending notification..."}
      </div>
    </motion.div>
  );
};

export default SuccessScreen;