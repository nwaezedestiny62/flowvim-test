"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';

interface VacancyCardProps {
  vacancy: any;
  onApply: (vacancy: any) => void;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy, onApply }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#132B2F] border border-[#26667F] rounded-2xl p-8 hover:border-[#3a8ca8] transition-all group"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-3xl font-unbounded text-white mb-2">{vacancy.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {vacancy.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {vacancy.type}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" /> {vacancy.experience}
            </div>
          </div>
        </div>

        <button
          onClick={() => onApply(vacancy)}
          className="px-8 py-4 bg-[#26667F] hover:bg-[#3a8ca8] rounded-xl font-medium transition-all flex items-center gap-2 group-hover:scale-105"
        >
          Apply Now
        </button>
      </div>

      <p className="mt-6 text-gray-300 leading-relaxed">{vacancy.description}</p>
    </motion.div>
  );
};

export default VacancyCard;