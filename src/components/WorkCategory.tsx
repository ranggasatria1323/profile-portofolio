import React from "react";
import { motion } from "framer-motion";

interface WorkCategoryProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  colorClass: string;
  onClick: () => void;
}

const WorkCategory: React.FC<WorkCategoryProps> = ({
  title,
  icon,
  isActive,
  colorClass,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative cursor-pointer flex flex-col transition-all duration-300 rounded-md md:rounded-2xl overflow-hidden ${
        isActive ? "shadow-lg" : "shadow hover:shadow-md"
      }`}
    >
      <div
        className={`
          w-full md:w-[300px] md:h-full md:p-8 bg-white
          ${
            isActive
              ? `bg-gradient-to-br ${colorClass} text-white`
              : "text-gray-800 hover:text-gray-900"
          }
        `}
      >
        <div className="flex flex-wrap md:flex-col md:items-center md:space-y-4">
          <div
            className={`hidden md:block
            md:p-3 rounded-full
            ${isActive ? "bg-white/20" : "bg-gray-100"}
          `}
          >
            {icon}
          </div>
          <h3 className="font-semibold text-[12px] md:text-lg text-center break-words leading-[0.85rem]">
            {title}
          </h3>
        </div>
      </div>

      {/* {isActive && (
        <motion.div 
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-1 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )} */}
    </motion.div>
  );
};

export default WorkCategory;
