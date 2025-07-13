import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, Circle, ChevronRight, Settings, Smartphone, Bell, Palette, Home, Shield, Focus } from 'lucide-react'

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
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * itemIndex }}
                    onClick={() => toggleTask(item.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {completedTasks.includes(item.id) ? (
                        <CheckCircle className="w-5 h-5 text-lighter-success flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
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
                    <div className="flex items-center space-x-2">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}