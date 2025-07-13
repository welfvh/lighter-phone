import { motion } from 'framer-motion'
import { Brain, Heart, Clock, Moon, Users, Sparkles } from 'lucide-react'

interface Props {
  onNext: () => void
}

const reasons = [
  { icon: Brain, text: "Slop is bad for the soul" },
  { icon: Brain, text: "Stop fragmenting your mind" },
  { icon: Heart, text: "End the burden of self-regulation" },
  { icon: Sparkles, text: "A more wholesome life awaits" },
  { icon: Clock, text: "Time for the important things" },
  { icon: Brain, text: "Constant dopamine overstimulation is putting your nervous system into hyperdrive" },
  { icon: Moon, text: "Sleep better" },
  { icon: Users, text: "Be present with loved ones" },
]

export default function Screen2WhyGoLighter({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-medium text-center mb-8">
        Why go lighter?
      </h2>
      
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <reason.icon className="w-6 h-6 text-lighter-accent mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">{reason.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-6 space-y-4"
      >
        <p className="font-medium text-lighter-accent">
          You'll feel different in a week
        </p>
        <p className="text-lg font-medium">
          Your life can totally change in a month
        </p>
      </motion.div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="w-full mt-8 px-8 py-4 bg-lighter-accent text-white rounded-full font-medium"
      >
        I'm ready
      </motion.button>
    </motion.div>
  )
}