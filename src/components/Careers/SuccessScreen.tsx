"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

interface ApplicantData {
  fullName: string;
  email: string;
  phone: string;
  vacancy: string;
  [key: string]: any;
}

interface SuccessScreenProps {
  candidateId: string;
  score: number;
  status: "passed" | "failed";
  applicantData: ApplicantData | null;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  candidateId,
  score,
  status,
  applicantData,
}) => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const isPassed = status === "passed";

  useEffect(() => {
    if (!applicantData || !isPassed) return;

    const sendEmail = async () => {
      // Skip if no access key (common in dev)
      if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
        console.warn("⚠️ Web3Forms access key is missing. Skipping email notification.");
        setEmailError(true);
        return;
      }

      setIsSending(true);
      setEmailError(false);

      try {
        const form = new FormData();
        form.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);
        form.append("subject", `New Qualified Application - ${applicantData.vacancy}`);
        form.append("from_name", applicantData.fullName);
        form.append("email", applicantData.email);

        form.append("fullName", applicantData.fullName);
        form.append("phone", applicantData.phone || "N/A");
        form.append("vacancy", applicantData.vacancy);
        form.append("score", `${score}%`);
        form.append("candidateId", candidateId);
        form.append("status", "QUALIFIED");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: form,
        });

        if (response.ok) {
          setEmailSent(true);
          console.log("✅ Application email sent successfully");
        } else {
          const errorText = await response.text();
          console.error("Web3Forms error:", errorText);
          setEmailError(true);
        }
      } catch (error) {
        console.error("Failed to send email:", error);
        setEmailError(true);
      } finally {
        setIsSending(false);
      }
    };

    // Small delay to let the UI render first
    const timer = setTimeout(sendEmail, 800);
    return () => clearTimeout(timer);
  }, [isPassed, applicantData, score, candidateId]);

  const statusConfig = isPassed
    ? {
        icon: CheckCircle,
        color: "text-green-500",
        bgColor: "bg-green-500/10 border-green-500/20",
        title: "Assessment Completed Successfully",
        message: "Thank you for completing the recruitment assessment. Your submission has been received.",
      }
    : {
        icon: XCircle,
        color: "text-red-500",
        bgColor: "bg-red-500/10 border-red-500/20",
        title: "Assessment Completed",
        message: "Thank you for completing the assessment. We will review all applications and contact shortlisted candidates.",
      };

  const Icon = statusConfig.icon;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] bg-[length:22px_22px] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl">

          {/* Status Icon */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border ${statusConfig.bgColor}`}>
              <Icon className={`w-10 h-10 ${statusConfig.color}`} strokeWidth={2} />
            </div>
          </motion.div>

          {/* Title & Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {statusConfig.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-7 max-w-xl mx-auto">
              {statusConfig.message}
            </p>
          </motion.div>

          {/* Candidate ID */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8"
          >
            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-2">
                CANDIDATE REFERENCE
              </p>
              <p className="text-lg font-medium text-white font-mono">#{candidateId}</p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 space-y-4"
          >
            <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-950/40">
              <h3 className="text-sm font-medium text-white mb-2">What happens next?</h3>
              <p className="text-sm text-zinc-400 leading-7">
                Our recruitment team will carefully review your application,
                assessment performance, and qualifications. Shortlisted candidates
                will be contacted within the next <span className="text-white font-medium">7–10 business days</span>.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-2xl text-sm font-medium hover:bg-zinc-200 active:scale-95 transition-all duration-200"
            >
              Return to Homepage
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Email Status */}
          {isPassed && (
            <div className="mt-8 text-center">
              <p className="text-xs text-zinc-500">
                {isSending
                  ? "Recording application..."
                  : emailSent
                  ? "✓ Application successfully recorded & notified"
                  : emailError
                  ? "⚠️ Application recorded (notification failed)"
                  : ""}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-6 text-[10px] tracking-[0.25em] uppercase text-zinc-600">
        FLOWVIM • RECRUITMENT PORTAL
      </div>
    </div>
  );
};

export default SuccessScreen;