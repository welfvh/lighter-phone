import { motion } from 'framer-motion'
import { useState } from 'react'
import { Trash2, Zap } from 'lucide-react'

interface Props {
  onNext: (decisions: Record<string, boolean>) => void
}

export default function Screen4KeyDecisions({ onNext }: Props) {
  const [decisions, setDecisions] = useState({
    uninstallSocial: false,
    removeStimulation: false,
  })

  const toggleDecision = (key: string) => {
    setDecisions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-medium text-center mb-2">
        Key decisions
      </h2>
      <p className="text-center text-gray-600 mb-8">
        These are big steps, but they make everything simpler
      </p>
      
      <div className="space-y-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => toggleDecision('uninstallSocial')}
          className={`w-full p-6 rounded-lg transition-all text-left ${
            decisions.uninstallSocial
              ? 'bg-lighter-accent text-white shadow-lg'
              : 'bg-white shadow-sm hover:shadow-md'
          }`}
        >
          <div className="flex items-start space-x-4">
            <Trash2 className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Are you ready to uninstall social media apps?
              </h3>
              <p className={`text-sm ${decisions.uninstallSocial ? 'text-white/90' : 'text-gray-600'}`}>
                Instagram, TikTok, Twitter/X, Facebook - removing them entirely is 
                easier than trying to moderate usage
              </p>
            </div>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => toggleDecision('removeStimulation')}
          className={`w-full p-6 rounded-lg transition-all text-left ${
            decisions.removeStimulation
              ? 'bg-lighter-accent text-white shadow-lg'
              : 'bg-white shadow-sm hover:shadow-md'
          }`}
        >
          <div className="flex items-start space-x-4">
            <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Are you ready to try life without constant stimulation?
              </h3>
              <p className={`text-sm ${decisions.removeStimulation ? 'text-white/90' : 'text-gray-600'}`}>
                No more infinite scrolls, no more dopamine hits every few seconds. 
                Your nervous system will thank you.
              </p>
            </div>
          </div>
        </motion.button>
      </div>

      <div className="bg-lighter-soft/50 p-4 rounded-lg mt-6">
        <p className="text-sm text-gray-600 italic">
          Remember: Uninstalling is so much easier than blocking. 
          Give your mind a real break.
        </p>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNext(decisions)}
        className="w-full mt-8 px-8 py-4 bg-lighter-accent text-white rounded-full font-medium"
      >
        {Object.values(decisions).some(v => v) ? "I'm ready" : "Skip for now"}
      </motion.button>
    </motion.div>
  )
}