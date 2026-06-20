"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

interface VacancyCardProps {
  vacancy: any;
  onApply: (vacancy: any) => void;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy, onApply }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-gradient-to-br from-[#132B2F] to-[#0F1F22] border border-[#26667F]/50 hover:border-[#3a8ca8] rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a8ca8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#26667F]/20 rounded-2xl">
              <Briefcase className="w-7 h-7 text-[#3a8ca8]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-unbounded font-bold text-white tracking-tight">
              {vacancy.title}
            </h3>
          </div>

          {/* Meta Information - Responsive Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-[#1A3A42] text-sm px-4 py-2.5 rounded-2xl text-gray-300 border border-[#26667F]/30">
              <MapPin className="w-4 h-4 text-[#3a8ca8]" />
              {vacancy.location}
            </div>
            <div className="flex items-center gap-2 bg-[#1A3A42] text-sm px-4 py-2.5 rounded-2xl text-gray-300 border border-[#26667F]/30">
              <Clock className="w-4 h-4 text-[#3a8ca8]" />
              {vacancy.type}
            </div>
            <div className="flex items-center gap-2 bg-[#1A3A42] text-sm px-4 py-2.5 rounded-2xl text-gray-300 border border-[#26667F]/30">
              <Users className="w-4 h-4 text-[#3a8ca8]" />
              {vacancy.experience}
            </div>
          </div>
        </div>

        {/* Apply Button - Enhanced */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onApply(vacancy)}
          className="group/btn mt-2 md:mt-0 flex items-center justify-center gap-3 bg-[#26667F] hover:bg-[#3a8ca8] text-white font-semibold px-9 py-4 rounded-2xl transition-all duration-300 self-start whitespace-nowrap shadow-lg shadow-[#26667F]/30 hover:shadow-xl hover:shadow-[#3a8ca8]/40"
        >
          Apply Now
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>

      <p className="mt-8 text-gray-300 leading-relaxed text-[17px] line-clamp-4">
        {vacancy.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#3a8ca8]/40 to-transparent group-hover:via-[#3a8ca8]/70 transition-colors" />
    </motion.div>
  );
};

export default VacancyCard;