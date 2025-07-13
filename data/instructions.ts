export interface InstructionStep {
  step: number
  title: string
  description: string
  screenshot?: string
  deepLink?: string
}

export interface InterventionInstructions {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  timeRequired: string
  steps: InstructionStep[]
  benefits: string[]
  tips?: string[]
}

export const instructions: Record<string, InterventionInstructions> = {
  // App Management
  'uninstall-social': {
    id: 'uninstall-social',
    title: 'Remove Social Media Apps',
    description: 'Delete Instagram, TikTok, Twitter, and other social media apps from your phone',
    difficulty: 'easy',
    timeRequired: '5 minutes',
    steps: [
      {
        step: 1,
        title: 'Find the app on your home screen',
        description: 'Locate Instagram, TikTok, Twitter, or other social media apps',
      },
      {
        step: 2,
        title: 'Press and hold the app icon',
        description: 'Hold until the icon starts to jiggle and shows an X or minus sign',
      },
      {
        step: 3,
        title: 'Tap "Remove App" or the X',
        description: 'Select "Delete App" when prompted, not just "Remove from Home Screen"',
      },
      {
        step: 4,
        title: 'Confirm deletion',
        description: 'Tap "Delete" to permanently remove the app and all its data',
      },
    ],
    benefits: [
      'Eliminates mindless scrolling',
      'Reduces dopamine addiction',
      'Frees up 1-3 hours daily',
      'Improves focus and attention span'
    ],
    tips: [
      'Delete, don\'t just hide - it\'s easier to resist when the app isn\'t there',
      'Remove all social apps at once for maximum impact',
      'Tell friends you\'re going social media-free to set expectations'
    ]
  },

  'remove-games': {
    id: 'remove-games',
    title: 'Remove Time-Wasting Games',
    description: 'Delete casual, puzzle, and idle games that consume your time',
    difficulty: 'easy',
    timeRequired: '3 minutes',
    steps: [
      {
        step: 1,
        title: 'Identify time-wasting games',
        description: 'Look for games like Candy Crush, Solitaire, idle clickers, puzzle games',
      },
      {
        step: 2,
        title: 'Press and hold each game',
        description: 'Hold until icons jiggle and show deletion option',
      },
      {
        step: 3,
        title: 'Delete each game',
        description: 'Tap the X or "Remove App" and confirm deletion',
      },
    ],
    benefits: [
      'Eliminates mindless time-wasting',
      'Reduces phone pickup frequency',
      'Creates space for meaningful activities'
    ],
    tips: [
      'Keep only games you actively choose to play, not mindless time-fillers',
      'If you must keep games, move them to a folder buried deep in your phone'
    ]
  },

  'delete-news': {
    id: 'delete-news',
    title: 'Remove News Apps',
    description: 'Delete news apps and disable news notifications for better mental health',
    difficulty: 'easy',
    timeRequired: '2 minutes',
    steps: [
      {
        step: 1,
        title: 'Find news apps',
        description: 'Locate CNN, BBC, Apple News, Google News, or other news apps',
      },
      {
        step: 2,
        title: 'Delete the apps',
        description: 'Press and hold, then delete each news app',
      },
      {
        step: 3,
        title: 'Disable Apple News widget',
        description: 'Swipe right from home screen, scroll down, tap "Edit" and remove News widget',
      },
    ],
    benefits: [
      'Reduces anxiety and stress',
      'Eliminates doom scrolling',
      'Improves mental health',
      'Breaks addiction to outrage content'
    ],
    tips: [
      'Get news intentionally once a day from a single trusted source',
      'Most "breaking news" isn\'t actually important or actionable'
    ]
  },

  // Notifications
  'essential-notifications': {
    id: 'essential-notifications',
    title: 'Keep Only Essential Notifications',
    description: 'Turn off all notifications except calls, texts, and calendar',
    difficulty: 'medium',
    timeRequired: '10 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Settings',
        description: 'Go to Settings > Notifications',
        deepLink: 'prefs:root=NOTIFICATIONS_ID'
      },
      {
        step: 2,
        title: 'Review each app',
        description: 'Go through each app and turn off notifications for non-essential apps',
      },
      {
        step: 3,
        title: 'Keep only essential',
        description: 'Keep notifications ON only for: Phone, Messages, Calendar, Reminders, and emergency apps',
      },
      {
        step: 4,
        title: 'Turn off notification grouping',
        description: 'Set notification style to "Count" or "Stack" to reduce visual clutter',
      },
    ],
    benefits: [
      'Dramatically reduces phone interruptions',
      'Improves focus and flow states',
      'Reduces anxiety from constant alerts',
      'Allows intentional phone checking'
    ],
    tips: [
      'Be ruthless - most notifications aren\'t actually urgent',
      'You can always check apps manually when you choose to'
    ]
  },

  'disable-badges': {
    id: 'disable-badges',
    title: 'Turn Off Notification Badges',
    description: 'Remove red dots and numbers from app icons',
    difficulty: 'easy',
    timeRequired: '5 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Notifications settings',
        description: 'Go to Settings > Notifications',
        deepLink: 'prefs:root=NOTIFICATIONS_ID'
      },
      {
        step: 2,
        title: 'Go through each app',
        description: 'Tap on each app in the notifications list',
      },
      {
        step: 3,
        title: 'Turn off badges',
        description: 'For each app, turn off "Badges" while keeping other notification types if needed',
      },
    ],
    benefits: [
      'Removes visual triggers to check apps',
      'Reduces anxiety from unread counts',
      'Creates a cleaner home screen',
      'Allows intentional app opening'
    ]
  },

  'lock-screen': {
    id: 'lock-screen',
    title: 'Clean Up Lock Screen',
    description: 'Remove unnecessary widgets and notifications from your lock screen',
    difficulty: 'easy',
    timeRequired: '3 minutes',
    steps: [
      {
        step: 1,
        title: 'Go to Lock Screen settings',
        description: 'Settings > Face ID & Passcode or Touch ID & Passcode',
        deepLink: 'prefs:root=PASSCODE'
      },
      {
        step: 2,
        title: 'Configure notification display',
        description: 'Under "Allow Access When Locked", turn off Today View and Notification Center',
      },
      {
        step: 3,
        title: 'Remove lock screen widgets',
        description: 'Press and hold lock screen, tap "Customize", remove unnecessary widgets',
      },
    ],
    benefits: [
      'Reduces temptation to check phone',
      'Cleaner, more peaceful lock screen',
      'Less distraction when checking time'
    ]
  },

  // Visual Changes
  'grayscale': {
    id: 'grayscale',
    title: 'Enable Grayscale Mode',
    description: 'Remove color from your phone to reduce visual stimulation and addiction',
    difficulty: 'easy',
    timeRequired: '2 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Accessibility settings',
        description: 'Go to Settings > Accessibility > Display & Text Size',
        deepLink: 'prefs:root=ACCESSIBILITY'
      },
      {
        step: 2,
        title: 'Find Color Filters',
        description: 'Scroll down and tap "Color Filters"',
      },
      {
        step: 3,
        title: 'Enable Grayscale',
        description: 'Turn on Color Filters and select "Grayscale"',
      },
      {
        step: 4,
        title: 'Set up shortcut (optional)',
        description: 'Go to Settings > Accessibility > Accessibility Shortcut and select Color Filters for triple-click toggle',
      },
    ],
    benefits: [
      'Reduces dopamine response to colorful apps',
      'Makes phone less visually appealing',
      'Easier to put phone down',
      'Reduces eye strain'
    ],
    tips: [
      'Set up the triple-click shortcut so you can easily toggle when needed',
      'You might feel strange at first, but you\'ll quickly adapt'
    ]
  },

  'dark-mode': {
    id: 'dark-mode',
    title: 'Always-On Dark Mode',
    description: 'Set your phone to always use dark mode, not automatic',
    difficulty: 'easy',
    timeRequired: '1 minute',
    steps: [
      {
        step: 1,
        title: 'Open Display settings',
        description: 'Go to Settings > Display & Brightness',
        deepLink: 'prefs:root=DISPLAY'
      },
      {
        step: 2,
        title: 'Select Dark mode',
        description: 'Tap "Dark" under Appearance',
      },
      {
        step: 3,
        title: 'Turn off automatic',
        description: 'Make sure "Automatic" is turned OFF so it stays dark always',
      },
    ],
    benefits: [
      'Easier on the eyes',
      'Better for evening use',
      'Saves battery life',
      'Less harsh visual stimulation'
    ]
  },

  'wallpaper': {
    id: 'wallpaper',
    title: 'Set Black Wallpaper',
    description: 'Use a solid black wallpaper to minimize visual distraction',
    difficulty: 'easy',
    timeRequired: '2 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Wallpaper settings',
        description: 'Go to Settings > Wallpaper',
        deepLink: 'prefs:root=Wallpaper'
      },
      {
        step: 2,
        title: 'Choose new wallpaper',
        description: 'Tap "Add New Wallpaper"',
      },
      {
        step: 3,
        title: 'Select solid black',
        description: 'Choose "Colors" then select solid black, or use a completely black image',
      },
      {
        step: 4,
        title: 'Apply to both screens',
        description: 'Set as both Lock Screen and Home Screen wallpaper',
      },
    ],
    benefits: [
      'Reduces visual noise and distraction',
      'Makes app icons stand out less',
      'Creates calmer visual environment',
      'Saves battery on OLED screens'
    ]
  },

  // Home Screen
  'organize-homescreen': {
    id: 'organize-homescreen',
    title: 'Essential Apps Only',
    description: 'Keep only Phone, Messages, Maps, and Camera on your home screen',
    difficulty: 'medium',
    timeRequired: '15 minutes',
    steps: [
      {
        step: 1,
        title: 'Identify essential apps',
        description: 'Decide which apps are truly essential: Phone, Messages, Maps, Camera, Clock',
      },
      {
        step: 2,
        title: 'Create an "Apps" folder',
        description: 'Drag non-essential apps into a single folder placed in a hard-to-reach location',
      },
      {
        step: 3,
        title: 'Clean up home screen',
        description: 'Leave only 4-6 essential apps on your main home screen',
      },
      {
        step: 4,
        title: 'Remove app names (optional)',
        description: 'Use large dark icons or widgets to hide app labels',
      },
    ],
    benefits: [
      'Reduces choice paralysis',
      'Eliminates visual clutter',
      'Forces intentional app usage',
      'Creates breathing room mentally'
    ],
    tips: [
      'If you can\'t decide if an app is essential, it probably isn\'t',
      'Put the "Apps" folder on the second page or in the dock corner'
    ]
  },

  'remove-widgets': {
    id: 'remove-widgets',
    title: 'Remove Widgets',
    description: 'Clean up Today View and remove distracting widgets',
    difficulty: 'easy',
    timeRequired: '3 minutes',
    steps: [
      {
        step: 1,
        title: 'Access Today View',
        description: 'Swipe right from your home screen or lock screen',
      },
      {
        step: 2,
        title: 'Edit widgets',
        description: 'Scroll to the bottom and tap "Edit"',
      },
      {
        step: 3,
        title: 'Remove unnecessary widgets',
        description: 'Tap the red minus button next to widgets you don\'t need',
      },
      {
        step: 4,
        title: 'Keep only essential',
        description: 'Keep only widgets for Weather, Calendar, or other truly useful information',
      },
    ],
    benefits: [
      'Reduces information overload',
      'Eliminates news and social media widgets',
      'Faster access to home screen',
      'Less temptation to swipe and browse'
    ]
  },

  'hide-pages': {
    id: 'hide-pages',
    title: 'Hide Extra Pages',
    description: 'Use only one home screen page to reduce app browsing',
    difficulty: 'easy',
    timeRequired: '2 minutes',
    steps: [
      {
        step: 1,
        title: 'Enter jiggle mode',
        description: 'Press and hold any empty space on your home screen',
      },
      {
        step: 2,
        title: 'Access page editor',
        description: 'Tap the dots at the bottom showing your home screen pages',
      },
      {
        step: 3,
        title: 'Hide extra pages',
        description: 'Uncheck pages you want to hide, keeping only your main page',
      },
      {
        step: 4,
        title: 'Tap Done',
        description: 'Confirm your changes',
      },
    ],
    benefits: [
      'Eliminates app browsing and discovery',
      'Forces use of App Library or search',
      'Simplifies navigation',
      'Reduces time spent looking for apps'
    ]
  },

  // Focus & Time
  'focus-modes': {
    id: 'focus-modes',
    title: 'Set Up Focus Modes',
    description: 'Create Work, Sleep, and Personal focus modes with different app restrictions',
    difficulty: 'medium',
    timeRequired: '10 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Focus settings',
        description: 'Go to Settings > Focus',
        deepLink: 'prefs:root=DO_NOT_DISTURB'
      },
      {
        step: 2,
        title: 'Create Work focus',
        description: 'Tap + to create new focus, choose Work, allow only work-related apps and contacts',
      },
      {
        step: 3,
        title: 'Create Sleep focus',
        description: 'Create Sleep focus that blocks all apps and notifications except emergency contacts',
      },
      {
        step: 4,
        title: 'Set up automation',
        description: 'Set each focus to activate automatically based on time or location',
      },
    ],
    benefits: [
      'Automatic app blocking during focused time',
      'Better work-life boundaries',
      'Improved sleep hygiene',
      'Context-appropriate phone behavior'
    ]
  },

  'app-limits': {
    id: 'app-limits',
    title: 'Set App Time Limits',
    description: 'Use Screen Time to set daily limits on remaining apps',
    difficulty: 'easy',
    timeRequired: '5 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Screen Time',
        description: 'Go to Settings > Screen Time',
        deepLink: 'prefs:root=SCREEN_TIME'
      },
      {
        step: 2,
        title: 'Tap App Limits',
        description: 'Select "App Limits" from the Screen Time menu',
      },
      {
        step: 3,
        title: 'Add limits for categories',
        description: 'Set limits for Entertainment (30 min), Social Media (15 min), Games (15 min)',
      },
      {
        step: 4,
        title: 'Enable at end of limit',
        description: 'Choose "Block at End of Limit" for stronger enforcement',
      },
    ],
    benefits: [
      'Automatic usage awareness',
      'Hard stops when limits reached',
      'Gradual behavior change',
      'Data-driven usage insights'
    ]
  },

  'bedtime-mode': {
    id: 'bedtime-mode',
    title: 'Configure Bedtime Mode',
    description: 'Set up automatic Do Not Disturb and Wind Down features',
    difficulty: 'easy',
    timeRequired: '5 minutes',
    steps: [
      {
        step: 1,
        title: 'Open Sleep settings',
        description: 'Go to Health app > Sleep, or Settings > Focus > Sleep',
      },
      {
        step: 2,
        title: 'Set sleep schedule',
        description: 'Configure your bedtime and wake time',
      },
      {
        step: 3,
        title: 'Enable Wind Down',
        description: 'Turn on Wind Down to dim screen and limit apps before bedtime',
      },
      {
        step: 4,
        title: 'Configure Sleep Focus',
        description: 'Ensure Sleep Focus blocks all non-essential notifications',
      },
    ],
    benefits: [
      'Better sleep hygiene',
      'Automatic phone restrictions at night',
      'Reduced blue light before bed',
      'Consistent sleep schedule'
    ]
  }
}