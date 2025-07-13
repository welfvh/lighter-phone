'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ControlBar from '@/components/ControlBar'
import OnboardingScreen1 from '@/components/onboarding/Screen1-Welcome'
import OnboardingScreen2 from '@/components/onboarding/Screen2-WhyGoLighter'
import OnboardingScreen3 from '@/components/onboarding/Screen3-WhatDoYouWant'
import OnboardingScreen4 from '@/components/onboarding/Screen4-KeyDecisions'
import OnboardingScreen5 from '@/components/onboarding/Screen5-LightnessLevels'
import OnboardingScreen6 from '@/components/onboarding/Screen6-BeforeAfter'
import OnboardingScreen7 from '@/components/onboarding/Screen7-GoLighterTogether'
import OnboardingScreen8 from '@/components/onboarding/Screen8-GetStarted'
import MainScreen from '@/components/MainScreen'

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [showMainApp, setShowMainApp] = useState(false)
  const [designMode, setDesignMode] = useState<'app' | 'design'>('app')
  const [userData, setUserData] = useState({
    goals: [],
    lightnessLevel: '',
    decisions: {},
    email: '',
  })
  const scrollRef = useRef<HTMLDivElement>(null)

  const screens = [
    <OnboardingScreen1 key="1" onNext={() => goToScreen(1)} />,
    <OnboardingScreen2 key="2" onNext={() => goToScreen(2)} />,
    <OnboardingScreen3 key="3" onNext={(goals) => {
      setUserData({...userData, goals})
      goToScreen(3)
    }} />,
    <OnboardingScreen4 key="4" onNext={(decisions) => {
      setUserData({...userData, decisions})
      goToScreen(4)
    }} />,
    <OnboardingScreen5 key="5" onNext={(level) => {
      setUserData({...userData, lightnessLevel: level})
      goToScreen(5)
    }} />,
    <OnboardingScreen6 key="6" onNext={() => goToScreen(6)} />,
    <OnboardingScreen7 key="7" onNext={(email) => {
      setUserData({...userData, email})
      goToScreen(7)
    }} />,
    <OnboardingScreen8 key="8" onNext={() => setShowMainApp(true)} userData={userData} />,
  ]

  const goToScreen = (index: number) => {
    setCurrentScreen(index)
    if (scrollRef.current) {
      const screenWidth = window.innerWidth
      scrollRef.current.scrollTo({
        left: screenWidth * index,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft
        const screenWidth = window.innerWidth
        const newScreen = Math.round(scrollLeft / screenWidth)
        setCurrentScreen(newScreen)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      return () => scrollElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const allScreens = showMainApp 
    ? [...screens, <MainScreen key="main" userData={userData} />]
    : screens

  const screenTitles = [
    'Welcome',
    'Why Go Lighter',
    'Your Goals',
    'Key Decisions', 
    'Lightness Levels',
    'Before & After',
    'Go Together',
    'Get Started',
    ...(showMainApp ? ['Main App'] : [])
  ]

  if (designMode === 'design') {
    return (
      <div className="min-h-screen bg-gray-100 relative">
        <ControlBar mode={designMode} onModeChange={setDesignMode} />
        
        <div className="pt-20 pb-8">
          <div className="flex overflow-x-auto hide-scrollbar space-x-6 px-6">
            {allScreens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '300px', height: '600px' }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-lighter-accent text-white px-4 py-2 text-sm font-medium">
                    Screen {index + 1}: {screenTitles[index]}
                  </div>
                  <div className="flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 transform scale-75 origin-top-left">
                      <div style={{ width: '400px', height: '800px' }} className="px-6 py-8">
                        {screen}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setDesignMode('app')
                      if (!showMainApp) {
                        setCurrentScreen(index)
                        goToScreen(index)
                      }
                    }}
                    className="bg-gray-50 text-gray-600 px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                  >
                    View in App
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (showMainApp) {
    return (
      <div className="relative">
        <ControlBar mode={designMode} onModeChange={setDesignMode} />
        <div className="pt-16">
          <MainScreen userData={userData} />
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <ControlBar mode={designMode} onModeChange={setDesignMode} />
      
      {/* Progress dots */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentScreen ? 'bg-lighter-accent w-8' : 'bg-lighter-soft'
            }`}
          />
        ))}
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={scrollRef}
        className="h-full w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pt-16"
      >
        {screens.map((screen, index) => (
          <div
            key={index}
            className="min-w-full h-full snap-center flex items-center justify-center"
          >
            <div className="w-full max-w-md mx-auto px-6">
              {screen}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}