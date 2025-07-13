import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface Props {
  onNext: () => void
}

export default function Screen1Welcome({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="mb-12">
        <Heart className="w-16 h-16 mx-auto text-lighter-accent mb-6" />
      </div>
      
      <h1 className="text-2xl font-medium leading-relaxed">
        Hi friend!
      </h1>
      
      <p className="text-lg leading-relaxed text-gray-600 space-y-4">
        <span className="block">
          The internet can feel incredibly heavy sometimes.
        </span>
        <span className="block">
          The burden of self-regulation.
        </span>
        <span className="block">
          The moments of temptation that are so hard to resist.
        </span>
      </p>
      
      <p className="text-xl font-medium mt-8">
        But there's a better way.
      </p>
      
      <p className="text-lg text-lighter-accent">
        I made this app for you.
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-12 px-8 py-4 bg-lighter-accent text-white rounded-full font-medium"
      >
        Continue
      </motion.button>
    </motion.div>
  )
}