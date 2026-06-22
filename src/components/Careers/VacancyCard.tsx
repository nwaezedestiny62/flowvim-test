"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Users, ArrowRight } from "lucide-react";

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
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative bg-gradient-to-br from-[#132B2F] to-[#0F1F22] border border-[#26667F]/50 hover:border-[#3a8ca8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a8ca8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2.5 sm:p-3 bg-[#26667F]/20 rounded-xl sm:rounded-2xl">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#3a8ca8]" />
            </div>

            <h3 className="font-unbounded font-bold text-white tracking-tight text-xl sm:text-2xl md:text-4xl leading-snug">
              {vacancy.title}
            </h3>
          </div>

          {/* META PILLS */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
            <div className="flex items-center gap-2 bg-[#1A3A42] text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl text-gray-300 border border-[#26667F]/30">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3a8ca8]" />
              {vacancy.location}
            </div>

            <div className="flex items-center gap-2 bg-[#1A3A42] text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl text-gray-300 border border-[#26667F]/30">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3a8ca8]" />
              {vacancy.type}
            </div>

            <div className="flex items-center gap-2 bg-[#1A3A42] text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl text-gray-300 border border-[#26667F]/30">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3a8ca8]" />
              {vacancy.experience}
            </div>
          </div>
        </div>

        {/* APPLY BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onApply(vacancy)}
          className="group/btn flex items-center justify-center gap-2 bg-[#26667F] hover:bg-[#3a8ca8] text-white font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 self-start whitespace-nowrap shadow-md hover:shadow-xl hover:shadow-[#3a8ca8]/40"
        >
          Apply Now
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-5 sm:mt-7 text-gray-300 leading-relaxed text-sm sm:text-base md:text-[17px] line-clamp-4">
        {vacancy.description}
      </p>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#3a8ca8]/40 to-transparent group-hover:via-[#3a8ca8]/70 transition-colors" />
    </motion.div>
  );
};

export default VacancyCard;