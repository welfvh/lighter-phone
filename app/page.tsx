'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  if (showMainApp) {
    return <MainScreen userData={userData} />
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Progress dots */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
        className="h-full w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
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