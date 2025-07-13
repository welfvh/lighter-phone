import { motion } from 'framer-motion'
import { useState } from 'react'
import { Users, Mail, Calendar } from 'lucide-react'

interface Props {
  onNext: (email: string) => void
}

export default function Screen7GoLighterTogether({ onNext }: Props) {
  const [email, setEmail] = useState('')
  const [inviteFriends, setInviteFriends] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Users className="w-16 h-16 mx-auto text-lighter-accent mb-4" />
        <h2 className="text-2xl font-medium mb-2">
          Go lighter together
        </h2>
        <p className="text-gray-600">
          This is a big change, and doing it together can help
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-medium mb-4 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-lighter-accent" />
            <span>Schedule a group call</span>
          </h3>
          <p className="text-gray-600 mb-4">
            Here's a little message to invite your friends and set up a time to fine-tune your setup. 
            Imagine how different your time together will be with less phones - going on adventures, 
            swimming in lakes, real conversations.
          </p>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-lighter-accent"
          />
          
          <label className="flex items-center space-x-3 mt-4">
            <input
              type="checkbox"
              checked={inviteFriends}
              onChange={(e) => setInviteFriends(e.target.checked)}
              className="w-5 h-5 rounded text-lighter-accent"
            />
            <span className="text-sm text-gray-600">
              Send me templates to invite friends
            </span>
          </label>
        </div>

        <div className="bg-lighter-soft/50 rounded-lg p-6">
          <h4 className="font-medium mb-3">Why go lighter together?</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-lighter-accent mr-2">•</span>
              Shared accountability makes it easier
            </li>
            <li className="flex items-start">
              <span className="text-lighter-accent mr-2">•</span>
              You'll discover new ways to connect
            </li>
            <li className="flex items-start">
              <span className="text-lighter-accent mr-2">•</span>
              Support each other through the transition
            </li>
            <li className="flex items-start">
              <span className="text-lighter-accent mr-2">•</span>
              Celebrate milestones together
            </li>
          </ul>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNext(email)}
        className="w-full mt-8 px-8 py-4 bg-lighter-accent text-white rounded-full font-medium"
      >
        {email ? 'Continue' : 'Skip for now'}
      </motion.button>
    </motion.div>
  )
}