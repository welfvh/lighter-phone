import { motion } from 'framer-motion'
import { useState } from 'react'
import { Upload, Camera, BarChart3 } from 'lucide-react'

interface Props {
  onNext: () => void
}

export default function Screen6BeforeAfter({ onNext }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [screenTimeConnected, setScreenTimeConnected] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setScreenshot(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-medium text-center mb-6">
        Before and After
      </h2>
      
      <div className="space-y-6">
        {/* Before/After Homescreen Screenshots */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium mb-4 text-center">Your home screen transformation</h3>
          <div className="flex justify-between items-center space-x-4">
            <div className="flex-1 text-center">
              <div className="text-xs text-red-600 mb-2 font-medium">BEFORE</div>
              <img 
                src="/images/before-homescreen.png" 
                alt="Before homescreen" 
                className="w-full max-w-[120px] mx-auto rounded-lg shadow-sm border"
              />
              <div className="text-[10px] text-red-600 mt-2">Cluttered & distracting</div>
            </div>
            
            <div className="text-xl text-gray-400">→</div>
            
            <div className="flex-1 text-center">
              <div className="text-xs text-green-600 mb-2 font-medium">AFTER</div>
              <img 
                src="/images/after-homescreen.png" 
                alt="After homescreen" 
                className="w-full max-w-[120px] mx-auto rounded-lg shadow-sm border"
              />
              <div className="text-[10px] text-green-600 mt-2">Clean & focused</div>
            </div>
          </div>
        </div>

        {/* Screen Time Improvement */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium mb-4 text-center">Screen time improvement</h3>
          <div className="flex justify-between items-center space-x-4">
            <div className="flex-1 text-center">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-2">
                <div className="text-xs text-red-600 mb-2">BEFORE</div>
                <div className="space-y-1">
                  <div className="bg-red-500 h-2 w-full rounded flex items-center justify-end pr-1">
                    <span className="text-[8px] text-white">47</span>
                  </div>
                  <div className="bg-red-400 h-2 w-4/5 rounded"></div>
                  <div className="bg-red-300 h-2 w-3/5 rounded"></div>
                  <div className="bg-red-200 h-2 w-2/5 rounded"></div>
                </div>
                <div className="text-[10px] text-red-600 mt-2">6.5 hours daily</div>
              </div>
            </div>
            
            <div className="text-xl text-gray-400">→</div>
            
            <div className="flex-1 text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-2">
                <div className="text-xs text-green-600 mb-2">AFTER</div>
                <div className="space-y-1">
                  <div className="bg-green-500 h-2 w-1/3 rounded"></div>
                  <div className="bg-green-400 h-2 w-1/4 rounded"></div>
                  <div className="bg-gray-200 h-2 w-full rounded opacity-30"></div>
                  <div className="bg-gray-200 h-2 w-4/5 rounded opacity-30"></div>
                </div>
                <div className="text-[10px] text-green-600 mt-2">2.5 hours daily</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Saved */}
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-700">4 hours</div>
            <div className="text-sm text-green-600">saved per day</div>
            <div className="text-lg font-semibold text-green-700 mt-2">28 hours per week</div>
            <div className="text-xs text-green-600">for what actually matters</div>
          </div>
        </div>

        {/* Screenshot upload */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Camera className="w-6 h-6 text-lighter-accent" />
            <h3 className="font-medium">Your Home Screen</h3>
          </div>
          
          {screenshot ? (
            <div className="relative">
              <img 
                src={screenshot} 
                alt="Home screen" 
                className="w-full rounded-lg shadow-md"
              />
              <button
                onClick={() => setScreenshot(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
              >
                <Upload className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="block">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-lighter-accent transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">Upload a screenshot</p>
                <p className="text-sm text-gray-400 mt-1">We'll help you transform it</p>
              </div>
            </label>
          )}
        </div>

        {/* Screen Time connection */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-6 h-6 text-lighter-accent" />
              <div>
                <h3 className="font-medium">Connect Screen Time</h3>
                <p className="text-sm text-gray-600">Track your progress</p>
              </div>
            </div>
            <button
              onClick={() => setScreenTimeConnected(!screenTimeConnected)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                screenTimeConnected
                  ? 'bg-lighter-success text-white'
                  : 'bg-lighter-accent text-white'
              }`}
            >
              {screenTimeConnected ? 'Connected' : 'Connect'}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-lighter-soft/50 p-4 rounded-lg mt-6"
      >
        <p className="text-sm text-gray-600 text-center">
          In 30 days, you'll look back at this and be amazed at the transformation
        </p>
      </motion.div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="w-full mt-8 px-8 py-4 bg-lighter-accent text-white rounded-full font-medium"
      >
        Continue
      </motion.button>
    </motion.div>
  )
}