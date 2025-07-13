'use client'

import { motion } from 'framer-motion'
import { Eye, Smartphone } from 'lucide-react'

interface ControlBarProps {
  mode: 'app' | 'design'
  onModeChange: (mode: 'app' | 'design') => void
  designView?: 'onboarding' | 'wip'
  onDesignViewChange?: (view: 'onboarding' | 'wip') => void
}

export default function ControlBar({ mode, onModeChange, designView, onDesignViewChange }: ControlBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => onModeChange('app')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              mode === 'app'
                ? 'bg-lighter-accent text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>App</span>
          </button>
          
          <button
            onClick={() => onModeChange('design')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              mode === 'design'
                ? 'bg-lighter-accent text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Design</span>
          </button>

          {/* Design View Selector - only show when in design mode */}
          {mode === 'design' && designView && onDesignViewChange && (
            <>
              <div className="w-px h-6 bg-gray-300 mx-2" />
              <button
                onClick={() => onDesignViewChange('onboarding')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  designView === 'onboarding'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Onboarding
              </button>
              <button
                onClick={() => onDesignViewChange('wip')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  designView === 'wip'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                WIP
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}