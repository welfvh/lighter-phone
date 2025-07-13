import { motion } from 'framer-motion'
import { CheckCircle, Circle, Settings, BarChart3, Calendar, Clock, Smartphone, Palette, Users } from 'lucide-react'

// Variation 1: Minimal Card-Based
export function HomeScreenMinimal() {
  const completedTasks = ['uninstall-social', 'grayscale']
  
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-light">Lighter</h1>
          <Settings className="w-6 h-6 text-gray-400" />
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-light mb-2">73%</div>
            <div className="text-gray-600 text-sm">Much Lighter</div>
          </div>
        </div>

        <div className="space-y-3">
          {['Remove social apps', 'Enable grayscale', 'Clean notifications'].map((task, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm">{task}</span>
              <div className={`w-6 h-6 rounded-full ${i < 2 ? 'bg-black' : 'border-2 border-gray-300'}`}>
                {i < 2 && <CheckCircle className="w-6 h-6 text-white" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Variation 2: Progress-Focused
export function HomeScreenProgress() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium mb-2">Digital Wellness</h1>
          <div className="text-gray-600">7 day streak</div>
        </div>

        <div className="relative mb-8">
          <svg className="w-32 h-32 mx-auto">
            <circle cx="64" cy="64" r="56" stroke="#f3f4f6" strokeWidth="8" fill="none" />
            <circle cx="64" cy="64" r="56" stroke="#000" strokeWidth="8" fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * 0.27}`}
              className="transform -rotate-90 origin-center" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-medium">73%</div>
              <div className="text-xs text-gray-600">Complete</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <BarChart3 className="w-6 h-6 mx-auto mb-2 text-gray-600" />
            <div className="text-sm font-medium">2.1h</div>
            <div className="text-xs text-gray-600">Daily avg</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-gray-600" />
            <div className="text-sm font-medium">4.2h</div>
            <div className="text-xs text-gray-600">Saved today</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Variation 3: Section-Based Dashboard
export function HomeScreenDashboard() {
  const sections = [
    { icon: Smartphone, title: 'Apps', count: '3/5 done', color: 'bg-blue-50 text-blue-700' },
    { icon: Palette, title: 'Appearance', count: '2/3 done', color: 'bg-purple-50 text-purple-700' },
    { icon: Users, title: 'Social', count: '1/2 done', color: 'bg-green-50 text-green-700' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-medium">Much Lighter</h1>
              <div className="text-gray-600 text-sm">11 of 15 improvements</div>
            </div>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-medium">73%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${section.color}`}>
                    <section.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <div className="text-sm text-gray-600">{section.count}</div>
                  </div>
                </div>
                <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}