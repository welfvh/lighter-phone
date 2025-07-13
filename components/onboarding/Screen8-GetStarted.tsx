import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Props {
  onNext: () => void
  userData: {
    goals: string[]
    lightnessLevel: string
    decisions: Record<string, boolean>
    email: string
  }
}

export default function Screen8GetStarted({ onNext, userData }: Props) {
  const getLightnessLevelName = (level: string) => {
    const levels: Record<string, string> = {
      'bit-lighter': 'A Bit Lighter',
      'much-lighter': 'Much Lighter',
      'so-light': 'So Light',
      'light-phone': 'Light Phone Level'
    }
    return levels[level] || level
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-6 bg-lighter-success rounded-full flex items-center justify-center">
          <span className="text-2xl">🌱</span>
        </div>
        <h2 className="text-2xl font-medium mb-2">
          Ready to begin
        </h2>
        <p className="text-gray-600">
          Your path to digital freedom starts here
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <h3 className="font-medium text-lg mb-4">Your lighter path:</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Lightness level</span>
            <span className="font-medium text-lighter-accent">
              {getLightnessLevelName(userData.lightnessLevel)}
            </span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Goals selected</span>
            <span className="font-medium">{userData.goals.length}</span>
          </div>
          
          {userData.decisions.uninstallSocial && (
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Social media</span>
              <span className="font-medium text-lighter-success">Ready to uninstall</span>
            </div>
          )}
          
          {userData.email && (
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Group journey</span>
              <span className="font-medium text-lighter-accent">Enabled</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-lighter-soft/50 rounded-lg p-6">
        <h4 className="font-medium mb-3">Next steps:</h4>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            <span className="w-6 h-6 bg-lighter-accent text-white rounded-full flex items-center justify-center text-xs">1</span>
            <span>We'll guide you through each change</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-6 h-6 bg-lighter-accent text-white rounded-full flex items-center justify-center text-xs">2</span>
            <span>Track your progress</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-6 h-6 bg-lighter-accent text-white rounded-full flex items-center justify-center text-xs">3</span>
            <span>Adjust anytime</span>
          </div>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="w-full mt-8 px-8 py-4 bg-lighter-accent text-white rounded-full font-medium flex items-center justify-center space-x-2"
      >
        <span>Get Started</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  )
}