import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clock, Shield, Heart, Sparkles, BookOpen, Users } from 'lucide-react'

interface Props {
  onNext: (goals: string[]) => void
}

const goals = [
  { id: 'screentime', icon: Clock, text: 'Less screen time' },
  { id: 'control', icon: Shield, text: 'Regain control' },
  { id: 'habits', icon: Heart, text: 'Better habits' },
  { id: 'slopfree', icon: Sparkles, text: 'A slop-free life' },
  { id: 'reading', icon: BookOpen, text: 'More time to read' },
  { id: 'present', icon: Users, text: 'Be present with loved ones' },
]

export default function Screen3WhatDoYouWant({ onNext }: Props) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-medium text-center mb-2">
        What do you want?
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Select all that resonate with you
      </p>
      
      <div className="space-y-3">
        {goals.map((goal, index) => (
          <motion.button
            key={goal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggleGoal(goal.id)}
            className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all ${
              selectedGoals.includes(goal.id)
                ? 'bg-lighter-accent text-white shadow-md'
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
            }`}
          >
            <goal.icon className="w-6 h-6 flex-shrink-0" />
            <span className="text-left font-medium">{goal.text}</span>
          </motion.button>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNext(selectedGoals)}
        disabled={selectedGoals.length === 0}
        className={`w-full mt-8 px-8 py-4 rounded-full font-medium transition-all ${
          selectedGoals.length > 0
            ? 'bg-lighter-accent text-white'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue
      </motion.button>
    </motion.div>
  )
}