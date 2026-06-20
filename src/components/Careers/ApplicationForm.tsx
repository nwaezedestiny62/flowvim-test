"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, MapPin, Briefcase, Award, FileText } from 'lucide-react';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'experienceYears' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Small delay for better UX feel
    await new Promise(resolve => setTimeout(resolve, 400));

    onSubmit({ ...formData, vacancy: vacancy.title });
    setIsSubmitting(false);
  };

  const inputClasses = "w-full bg-zinc-900/70 border border-zinc-700 focus:border-[#26667F] focus:ring-1 focus:ring-[#26667F]/50 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 transition-all duration-300 outline-none";

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
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

          <h2 className="text-5xl md:text-6xl font-unbounded font-bold tracking-tighter text-white mb-4">
            Apply for <span className="text-[#26667F]">{vacancy.title}</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            Please fill out the form below. Our AI assessment will begin immediately after submission.
          </p>
        </div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/80 rounded-3xl p-10 shadow-2xl"
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
                  <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Full Name" 
                    required 
                    onChange={handleChange} 
                    className={inputClasses} 
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    required 
                    onChange={handleChange} 
                    className={inputClasses} 
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    required 
                    onChange={handleChange} 
                    className={inputClasses} 
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input 
                    type="text" 
                    name="country" 
                    placeholder="Country" 
                    required 
                    onChange={handleChange} 
                    className={inputClasses} 
                  />
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
                  <input 
                    type="number" 
                    name="experienceYears" 
                    placeholder="Years of Experience" 
                    required 
                    min="0" 
                    onChange={handleChange} 
                    className={inputClasses} 
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input 
                    type="text" 
                    name="highestQualification" 
                    placeholder="Highest Qualification" 
                    required 
                    onChange={handleChange} 
                    className={inputClasses} 
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <input 
                  type="text" 
                  name="currentEmployer" 
                  placeholder="Current Employer (or Most Recent)" 
                  onChange={handleChange} 
                  className={inputClasses} 
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <textarea 
                  name="industryExperience" 
                  placeholder="Relevant Industry Experience & Achievements" 
                  rows={4} 
                  onChange={handleChange} 
                  className={`${inputClasses} resize-y`} 
                />
              </motion.div>
            </div>

            {/* Cover Letter */}
            <div className="space-y-6 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-[#26667F]" />
                <h3 className="text-xl font-semibold text-white">Cover Letter (Optional)</h3>
              </div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <textarea 
                  name="coverLetter" 
                  placeholder="Why are you a great fit for this role? What excites you about this opportunity?" 
                  rows={6} 
                  onChange={handleChange} 
                  className={`${inputClasses} resize-y`} 
                />
              </motion.div>
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
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Your information is secure and will only be used for recruitment purposes.
        </p>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;