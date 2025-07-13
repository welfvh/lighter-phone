'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface BottomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: ReactNode
}

export default function BottomModal({ isOpen, onClose, title, description, children }: BottomModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-4">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                {description && (
                  <p className="text-gray-600 mt-1">{description}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface InstructionStepProps {
  step: number
  title: string
  description: string
  screenshot?: string
  deepLink?: string
  onComplete?: () => void
}

export function InstructionStep({ step, title, description, screenshot, deepLink, onComplete }: InstructionStepProps) {
  const handleDeepLink = () => {
    if (deepLink) {
      window.open(deepLink, '_blank')
    }
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4 mb-4">
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-lighter-accent text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
          {step}
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          
          {screenshot && (
            <div className="mb-3">
              <img 
                src={screenshot} 
                alt={`Step ${step} screenshot`}
                className="w-full max-w-xs rounded-lg shadow-sm"
              />
            </div>
          )}
          
          <div className="flex items-center space-x-3">
            {deepLink && (
              <button
                onClick={handleDeepLink}
                className="flex items-center space-x-2 text-lighter-accent text-sm font-medium hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Settings</span>
              </button>
            )}
            
            {onComplete && (
              <button
                onClick={onComplete}
                className="flex items-center space-x-2 text-lighter-success text-sm font-medium hover:underline"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Mark Complete</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}