import { motion } from 'framer-motion'
import { useState } from 'react'
import { Smartphone, Feather, Cloud, Sun, Phone } from 'lucide-react'

interface Props {
  onNext: (level: string) => void
}

const levels = [
  {
    id: 'bit-lighter',
    icon: Feather,
    title: 'A bit lighter',
    description: 'Block apps, reduce distractions',
    color: 'bg-blue-100 text-blue-700',
    selectedColor: 'bg-blue-500 text-white',
  },
  {
    id: 'much-lighter',
    icon: Cloud,
    title: 'Much lighter',
    description: 'Delete apps, minimal Home Screen',
    color: 'bg-purple-100 text-purple-700',
    selectedColor: 'bg-purple-500 text-white',
  },
  {
    id: 'so-light',
    icon: Sun,
    title: 'So light',
    description: 'Block the internet, remove email',
    color: 'bg-amber-100 text-amber-700',
    selectedColor: 'bg-amber-500 text-white',
  },
  {
    id: 'light-phone',
    icon: Phone,
    title: 'Light Phone level',
    description: 'Tools only',
    color: 'bg-green-100 text-green-700',
    selectedColor: 'bg-green-500 text-white',
  },
]

export default function Screen5LightnessLevels({ onNext }: Props) {
  const [selectedLevel, setSelectedLevel] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-medium text-center mb-2">
        Choose your lightness level
      </h2>
      <p className="text-center text-gray-600 mb-8">
        The lighter you go, the simpler it will be
      </p>
      
      <div className="space-y-3">
        {levels.map((level, index) => (
          <motion.button
            key={level.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedLevel(level.id)}
            className={`w-full p-4 rounded-lg transition-all ${
              selectedLevel === level.id
                ? `${level.selectedColor} shadow-lg`
                : `${level.color} hover:shadow-md`
            }`}
          >
            <div className="flex items-center space-x-4">
              <level.icon className="w-8 h-8 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold">{level.title}</h3>
                <p className={`text-sm ${
                  selectedLevel === level.id ? 'text-white/90' : 'opacity-80'
                }`}>
                  {level.description}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-lighter-soft/50 p-4 rounded-lg mt-6"
      >
        <p className="text-sm text-gray-600">
          Start easy. You can always go lighter later. Many find that once they taste the freedom, 
          they naturally want to go lighter.
        </p>
      </motion.div>

      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNext(selectedLevel)}
        disabled={!selectedLevel}
        className={`w-full mt-8 px-8 py-4 rounded-full font-medium transition-all ${
          selectedLevel
            ? 'bg-lighter-accent text-white'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue
      </motion.button>
    </motion.div>
  )
}