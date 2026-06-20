"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ApplicationFormProps {
  vacancy: any;
  onSubmit: (data: any) => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ vacancy, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    experienceYears: 0,
    highestQualification: '',
    currentEmployer: '',
    industryExperience: '',
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'experienceYears' ? parseInt(value) || 0 : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, vacancy: vacancy.title, cvFileName: cvFile?.name });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-unbounded mb-8 text-center">Apply for {vacancy.title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-[#132B2F] p-10 rounded-3xl border border-[#26667F]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} className="bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
          <input type="text" name="country" placeholder="Country" required onChange={handleChange} className="bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="number" name="experienceYears" placeholder="Years of Experience" required min="0" onChange={handleChange} className="bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
          <input type="text" name="highestQualification" placeholder="Highest Qualification" required onChange={handleChange} className="bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
        </div>

        <input type="text" name="currentEmployer" placeholder="Current Employer" onChange={handleChange} className="w-full bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />
        <textarea name="industryExperience" placeholder="Relevant Industry Experience" rows={3} onChange={handleChange} className="w-full bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />

        <div>
          <label className="block mb-2 text-sm text-gray-400">Upload CV (PDF/Docx)</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files?.[0] || null)} className="w-full" />
        </div>

        <textarea name="coverLetter" placeholder="Cover Letter (Optional)" rows={5} onChange={handleChange} className="w-full bg-[#0d1e20] border border-[#26667F] rounded-xl px-6 py-4" />

        <button type="submit" className="w-full py-5 bg-[#26667F] hover:bg-[#3a8ca8] rounded-2xl text-lg font-medium transition-all">
          Continue to Assessment
        </button>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;