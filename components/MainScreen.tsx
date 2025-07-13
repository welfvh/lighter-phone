import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, Settings, Smartphone, Bell, Palette, Home, Focus } from 'lucide-react'
import BottomModal, { InstructionStep } from './BottomModal'
import { instructions } from '@/data/instructions'

interface Props {
  userData: {
    goals: string[]
    lightnessLevel: string
    decisions: Record<string, boolean>
    email: string
  }
}

const sections = [
  {
    id: 'apps',
    title: 'App Management',
    icon: Smartphone,
    items: [
      { id: 'uninstall-social', title: 'Remove social media apps', description: 'Instagram, TikTok, Twitter' },
      { id: 'remove-games', title: 'Remove time-wasting games', description: 'Casual and puzzle games' },
      { id: 'delete-news', title: 'Remove news apps', description: 'CNN, BBC, news feeds' },
    ]
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    items: [
      { id: 'essential-notifications', title: 'Keep only essential notifications', description: 'Calls, texts, calendar' },
      { id: 'disable-badges', title: 'Turn off notification badges', description: 'Red dots on app icons' },
      { id: 'lock-screen', title: 'Clean up lock screen', description: 'Remove unnecessary widgets' },
    ]
  },
  {
    id: 'appearance',
    title: 'Visual Changes',
    icon: Palette,
    items: [
      { id: 'grayscale', title: 'Enable grayscale mode', description: 'Reduces visual stimulation' },
      { id: 'dark-mode', title: 'Always-on dark mode', description: 'Easier on the eyes' },
      { id: 'wallpaper', title: 'Set black wallpaper', description: 'Minimal visual distraction' },
    ]
  },
  {
    id: 'homescreen',
    title: 'Home Screen',
    icon: Home,
    items: [
      { id: 'organize-homescreen', title: 'Essential apps only', description: 'Phone, Messages, Maps, Camera' },
      { id: 'remove-widgets', title: 'Remove widgets', description: 'Clean up today view' },
      { id: 'hide-pages', title: 'Hide extra pages', description: 'Single home screen page' },
    ]
  },
  {
    id: 'focus',
    title: 'Focus & Time',
    icon: Focus,
    items: [
      { id: 'focus-modes', title: 'Set up Focus modes', description: 'Work, Sleep, Family time' },
      { id: 'app-limits', title: 'Set app time limits', description: 'Daily usage restrictions' },
      { id: 'bedtime-mode', title: 'Configure bedtime mode', description: 'Automatic do not disturb' },
    ]
  },
]

export default function MainScreen({ userData }: Props) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [selectedIntervention, setSelectedIntervention] = useState<string | null>(null)
  
  const getLightnessLevelName = (level: string) => {
    const levels: Record<string, string> = {
      'bit-lighter': 'A Bit Lighter',
      'much-lighter': 'Much Lighter',
      'so-light': 'So Light',
      'light-phone': 'Light Phone Level'
    }
    return levels[level] || level
  }

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    )
  }

  const openInstructions = (taskId: string) => {
    setSelectedIntervention(taskId)
  }

  const closeInstructions = () => {
    setSelectedIntervention(null)
  }

  const handleStepComplete = (taskId: string) => {
    setCompletedTasks(prev => [...prev, taskId])
    closeInstructions()
  }

  const totalTasks = sections.reduce((acc, section) => acc + section.items.length, 0)
  const completionPercentage = Math.round((completedTasks.length / totalTasks) * 100)

  return (
    <div className="min-h-screen bg-lighter-bg p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-medium">Lighter Phone</h1>
          <Settings className="w-6 h-6 text-gray-600" />
        </div>

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium">{getLightnessLevelName(userData.lightnessLevel)}</h2>
              <p className="text-sm text-gray-600">{completedTasks.length}/{totalTasks} improvements made</p>
            </div>
            <div className="relative">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#E8E8E4"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#4A5568"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - completionPercentage / 100)}`}
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                {completionPercentage}%
              </span>
            </div>
          </div>

          {completionPercentage === 100 && (
            <div className="flex items-center space-x-2 text-lighter-success">
              <span className="text-lg">🎉</span>
              <span className="text-sm font-medium">Level completed!</span>
            </div>
          )}
        </motion.div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * sectionIndex }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-lighter-accent" />
                  <h3 className="font-medium">{section.title}</h3>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * itemIndex }}
                    className="p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {completedTasks.includes(item.id) ? (
                        <CheckCircle className="w-5 h-5 text-lighter-success flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0" />
                      )}
                      <div className="text-left flex-1">
                        <div className={`font-medium ${
                          completedTasks.includes(item.id) ? 'line-through text-gray-400' : ''
                        }`}>
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => openInstructions(item.id)}
                        className="px-3 py-1.5 text-sm font-medium text-lighter-accent border border-lighter-accent rounded-full hover:bg-lighter-accent hover:text-white transition-colors"
                      >
                        How to
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={completedTasks.includes(item.id)}
                          onChange={() => toggleTask(item.id)}
                        />
                        <div className={`w-11 h-6 rounded-full transition-colors ${
                          completedTasks.includes(item.id) ? 'bg-lighter-success' : 'bg-gray-200'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                            completedTasks.includes(item.id) ? 'translate-x-5' : 'translate-x-0.5'
                          } mt-0.5`} />
                        </div>
                      </label>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Modal for Instructions */}
      {selectedIntervention && instructions[selectedIntervention] && (
        <BottomModal
          isOpen={!!selectedIntervention}
          onClose={closeInstructions}
          title={instructions[selectedIntervention].title}
          description={instructions[selectedIntervention].description}
        >
          <div className="space-y-4">
            {/* Difficulty and time info */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Difficulty:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  instructions[selectedIntervention].difficulty === 'easy' 
                    ? 'bg-green-100 text-green-700'
                    : instructions[selectedIntervention].difficulty === 'medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {instructions[selectedIntervention].difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Time:</span>
                <span className="font-medium">{instructions[selectedIntervention].timeRequired}</span>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Steps:</h4>
              {instructions[selectedIntervention].steps.map((step) => (
                <InstructionStep
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  screenshot={step.screenshot}
                  deepLink={step.deepLink}
                  onComplete={() => handleStepComplete(selectedIntervention)}
                />
              ))}
            </div>

            {/* Benefits */}
            {instructions[selectedIntervention].benefits.length > 0 && (
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">Benefits:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {instructions[selectedIntervention].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips */}
            {instructions[selectedIntervention].tips && instructions[selectedIntervention].tips!.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Pro Tips:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {instructions[selectedIntervention].tips!.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">💡</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Complete button */}
            <button
              onClick={() => handleStepComplete(selectedIntervention)}
              className="w-full bg-lighter-success text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Mark as Complete
            </button>
          </div>
        </BottomModal>
      )}
    </div>
  )
}