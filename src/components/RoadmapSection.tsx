/// <reference lib="react" />

import type { FC } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"

interface RoadmapSectionProps {
  title: string
  icon: string | JSX.Element // Alteração aqui
  items: { name: string; link: string }[] 
  color: string
  isExpanded: boolean
  onToggle: () => void
}

const RoadmapSection: FC<RoadmapSectionProps> = ({ title, icon, items, color, isExpanded, onToggle }) => {
  return (
    <div className={`mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r ${color}`}>
      <button className="w-full p-6 text-left focus:outline-none" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-4xl mr-4">{icon}</span> {/* Aqui o 'icon' pode ser um emoji ou componente JSX */}
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
          <FiChevronDown
            className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            size={24}
          />
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="p-6 space-y-2">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="mr-2 text-xl">•</span>
                  <a href={item.link} className="text-blue-500 hover:underline">{item.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RoadmapSection
