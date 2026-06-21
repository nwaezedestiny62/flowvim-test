"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, MapPin, Briefcase, Award, FileText, Upload } from 'lucide-react';

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
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'experienceYears' ? parseInt(value) || 0 : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'coverLetter') => {
    const file = e.target.files?.[0] || null;
    if (type === 'cv') {
      setCvFile(file);
    } else {
      setCoverLetterFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 400));

    onSubmit({
      ...formData,
      vacancy: vacancy.title,
      cvFile,
      coverLetterFile,
    });

    setIsSubmitting(false);
  };

  const inputClasses = "w-full bg-zinc-900/70 border border-zinc-700 focus:border-[#26667F] focus:ring-1 focus:ring-[#26667F]/50 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 transition-all duration-300 outline-none";

  const fileInputClasses = "w-full bg-zinc-900/70 border border-zinc-700 focus:border-[#26667F] focus:ring-1 focus:ring-[#26667F]/50 rounded-2xl px-6 py-4 text-white cursor-pointer transition-all duration-300";

  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
{/* Header */}
<div className="text-center mb-12">
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="inline-flex items-center gap-3 mb-4"
  >
    <div className="w-3 h-3 bg-[#26667F] rounded-full animate-pulse" />
    <span className="text-sm uppercase tracking-[3px] text-zinc-500 font-medium">Application Form</span>
  </motion.div>

  <h2 className="text-5xl md:text-4xl font-unbounded font-bold tracking-tighter text-white mb-4">
    Apply for <span className="text-[#26667F]">{vacancy.title}</span>
  </h2>
 
  <p className="text-zinc-400 text-md max-w-md mx-auto">
    Complete the form below. Our assessment will begin immediately after submission. 
    Strong candidates will then receive a score and be forwarded to the Flowvim team.
  </p>
</div>

        {/* Form Card - Enhanced for transparent background */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/60 backdrop-blur-2xl border border-zinc-700/50 rounded-3xl p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-[#26667F]" />
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} className={inputClasses} />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className={inputClasses} />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className={inputClasses} />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input type="text" name="country" placeholder="Country" required onChange={handleChange} className={inputClasses} />
                </motion.div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="space-y-6 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-[#26667F]" />
                <h3 className="text-xl font-semibold text-white">Professional Background</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input type="number" name="experienceYears" placeholder="Years of Experience" required min="0" onChange={handleChange} className={inputClasses} />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <select name="highestQualification" required onChange={handleChange} className={inputClasses} defaultValue="">
                    <option value="" disabled>Select Highest Qualification</option>
                    <option value="High School Diploma">High School Diploma</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate / PhD">Doctorate / PhD</option>
                    <option value="Professional Degree (MD, JD, etc.)">Professional Degree (MD, JD, etc.)</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input type="text" name="currentEmployer" placeholder="Current Employer (or Most Recent)" onChange={handleChange} className={inputClasses} />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <textarea name="industryExperience" placeholder="Relevant Industry Experience & Achievements" rows={4} onChange={handleChange} className={`${inputClasses} resize-y`} />
              </motion.div>
            </div>

            {/* Documents Upload */}
            <div className="space-y-6 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="w-5 h-5 text-[#26667F]" />
                <h3 className="text-xl font-semibold text-white">Documents</h3>
              </div>

              {/* CV Upload */}
              <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="block text-sm text-zinc-400 mb-2">Curriculum Vitae / Resume <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => handleFileChange(e, 'cv')}
                    className={fileInputClasses}
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                    <Upload className="w-5 h-5" />
                  </div>
                </div>
                {cvFile && (
                  <p className="text-sm text-emerald-400 mt-2">✓ Selected: {cvFile.name}</p>
                )}
              </motion.div>

              {/* Cover Letter */}
              <div className="space-y-4">
                <label className="block text-sm text-zinc-400 mb-2">Cover Letter (Optional)</label>
                
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <textarea 
                    name="coverLetter" 
                    placeholder="Why are you a great fit for this role? What excites you about this opportunity?" 
                    rows={5} 
                    onChange={handleChange} 
                    className={`${inputClasses} resize-y`} 
                  />
                </motion.div>

                <div className="text-center text-zinc-500 my-2">— OR —</div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    type="file"
                    name="coverLetterFile"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'coverLetter')}
                    className={fileInputClasses}
                  />
                  {coverLetterFile && (
                    <p className="text-sm text-emerald-400 mt-2">✓ Selected: {coverLetterFile.name}</p>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-5 bg-[#26667F] hover:bg-[#3a8ca8] disabled:bg-zinc-700 text-white text-lg font-semibold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-[#26667F]/30"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Application...
                </>
              ) : (
                <>
                  Continue to Assessment
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Your information and documents are secure and will only be used for recruitment purposes.
        </p>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;