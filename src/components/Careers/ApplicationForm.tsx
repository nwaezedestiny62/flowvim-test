"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  Briefcase,
  Upload,
  FileText,
  X,
  ArrowLeft,
} from "lucide-react";

interface ApplicationFormProps {
  vacancy: any;
  onSubmit: (data: any) => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  vacancy,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    experienceYears: 0,
    industryExperience: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: name === "experienceYears" ? Number(value) || 0 : value,
    }));
  };

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "cv" | "cover"
  ) => {
    const file = e.target.files?.[0] || null;

    // enforce single file behavior (overwrite previous)
    if (type === "cv") setCvFile(file);
    else setCoverFile(file);

    e.target.value = "";
  };

  const removeFile = (type: "cv" | "cover") => {
    if (type === "cv") setCvFile(null);
    else setCoverFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 600));

    onSubmit({
      ...formData,
      vacancy: vacancy.title,
      cvFile,
      coverFile,
    });

    setIsSubmitting(false);
  };

  const inputStyle =
    "w-full bg-zinc-900/60 border border-zinc-700/60 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:border-[#26667F] focus:ring-1 focus:ring-[#26667F]/30 outline-none";

  const uploadStyle =
    "w-full border border-dashed border-zinc-600 hover:border-[#26667F] bg-zinc-900/40 rounded-xl px-4 py-5 text-center cursor-pointer transition-all";

  return (
    <div className="min-h-screen px-3 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* HEADER */}
        <div className="text-center mb-8  sm:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Apply for{" "}
            <span className="text-[#26667F]">{vacancy.title}</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-base mt-3 max-w-md mx-auto">
            Upload one document per section. Re-upload replaces previous file.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900/60 border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-8"
        >
          {/* PERSONAL */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#26667F]" />
              <h3 className="text-white font-semibold text-sm sm:text-base">
                Personal Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              <input
                name="fullName"
                placeholder="Full name"
                onChange={handleChange}
                className={inputStyle}
              />
              <input
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                className={inputStyle}
              />
              <input
                name="phone"
                placeholder="Phone number"
                onChange={handleChange}
                className={inputStyle}
              />
              <input
                name="country"
                placeholder="Country"
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="border-t border-zinc-800 pt-6 space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#26667F]" />
              <h3 className="text-white font-semibold text-sm sm:text-base">
                Experience
              </h3>
            </div>

         <input
  type="number"
  name="experienceYears"
  min={1}
  max={50}
  placeholder="Years of experience"
  onChange={handleChange}
  className={inputStyle}
/>

            <textarea
              name="industryExperience"
              rows={3}
              placeholder="Brief experience summary"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* CV UPLOAD */}
          <div className="border-t border-zinc-800 pt-6 space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              CV / Resume
            </h3>

            <label className={uploadStyle}>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFile(e, "cv")}
                className="hidden"
              />

              <div className="flex flex-col items-center gap-1">
                <Upload className="w-5 h-5 text-[#26667F]" />
                <p className="text-sm text-zinc-300">
                  Tap or click to upload your CV
                </p>
                <p className="text-[11px] text-zinc-500">
                  Only one document allowed (PDF, DOC, DOCX)
                </p>
              </div>
            </label>

            {cvFile && (
              <div className="flex items-center justify-between bg-zinc-800/60 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <FileText className="w-4 h-4" />
                  <span className="truncate max-w-[200px] sm:max-w-xs">
                    {cvFile.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => removeFile("cv")}
                  className="text-zinc-400 hover:text-red-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* COVER LETTER */}
          <div className="border-t border-zinc-800 pt-6 space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              Cover Letter (Optional)
            </h3>

            <label className={uploadStyle}>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFile(e, "cover")}
                className="hidden"
              />

              <div className="flex flex-col items-center gap-1">
                <Upload className="w-5 h-5 text-[#26667F]" />
                <p className="text-sm text-zinc-300">
                  Upload cover letter or skip
                </p>
                <p className="text-[11px] text-zinc-500">
                  One file only (replaces previous)
                </p>
              </div>
            </label>

            {coverFile && (
              <div className="flex items-center justify-between bg-zinc-800/60 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <FileText className="w-4 h-4" />
                  <span className="truncate max-w-[200px] sm:max-w-xs">
                    {coverFile.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => removeFile("cover")}
                  className="text-zinc-400 hover:text-red-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#26667F] hover:bg-[#3a8ca8] disabled:bg-zinc-700 text-white font-semibold py-3 sm:py-4 rounded-xl mt-6 flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Submitting..." : "Continue to Assessment"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* BACK BUTTON */}
        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition"
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700 group-hover:border-[#26667F] group-hover:bg-[#26667F]/10 transition">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
            </span>

            <span>Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;