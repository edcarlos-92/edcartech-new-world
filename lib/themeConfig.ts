// Theme configuration for consistent styling across components
export const themeConfig = {
  // Background colors
  backgrounds: {
    main: 'min-h-screen', // Uses default Tailwind background system
    section: 'py-20', // Standard section padding
    card: 'bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg', // Consistent card styling
    cardHover:
      'hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300', // Card hover effects
  },

  // Shared form styles
  form: {
    label: 'block text-sm font-medium text-gray-900 dark:text-gray-100',
    help: 'text-sm text-gray-500 dark:text-gray-400',
    input:
      'py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 dark:border-white/20 rounded-md',
  },

  // Text colors
  text: {
    primary: 'text-gray-900 dark:text-white', // Main headings
    secondary: 'text-gray-700 dark:text-gray-300', // Body text
    accent: 'text-blue-600 dark:text-blue-300', // Accent text
    accentPurple: 'text-purple-600 dark:text-purple-400', // Purple accent
    muted: 'text-gray-600 dark:text-gray-400', // Muted text
  },

  // Border colors
  borders: {
    primary: 'border-blue-600 dark:border-blue-400',
    secondary: 'border-purple-600 dark:border-purple-400',
    tertiary: 'border-green-600 dark:border-green-400',
    muted: 'border-gray-300 dark:border-white/20',
  },

  // Button styles
  buttons: {
    primary:
      'group relative px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-transparent border-2 border-blue-600 dark:border-blue-400 hover:border-blue-500 dark:hover:border-blue-300 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25',
    secondary:
      'group relative px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-transparent border-2 border-purple-600 dark:border-purple-400 hover:border-purple-500 dark:hover:border-purple-300 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25',
    contact:
      'group relative px-12 py-6 text-xl font-semibold text-gray-900 dark:text-white bg-transparent border-2 border-blue-600 dark:border-blue-400 hover:border-blue-500 dark:hover:border-blue-300 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl',
  },

  // Gradient styles
  gradients: {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400',
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400',
    button: 'bg-gradient-to-r from-blue-500 to-blue-600',
    buttonSecondary: 'bg-gradient-to-r from-purple-500 to-purple-600',
    buttonContact: 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600',
  },

  // Section dividers
  dividers: {
    primary:
      'w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto',
  },

  // Typography
  typography: {
    h1: 'text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4',
    h2: 'text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4',
    h3: 'text-2xl font-bold text-gray-900 dark:text-white',
    subtitle: 'text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-2',
    body: 'text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6',
    accent: 'text-xl lg:text-2xl text-blue-600 dark:text-blue-300 mb-8',
  },

  // Progress bars
  progress: {
    track: 'w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-2',
    fill: {
      blue: 'bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 h-2 rounded-full transition-all duration-1000',
      purple:
        'bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-600 h-2 rounded-full transition-all duration-1000',
      green:
        'bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-600 h-2 rounded-full transition-all duration-1000',
    },
  },

  // Tech tags
  techTags: {
    blue: 'px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm',
    purple:
      'px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-full text-sm',
    green:
      'px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-300 rounded-full text-sm',
  },

  // Icon containers
  icons: {
    blue: 'w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center',
    purple:
      'w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center',
    green:
      'w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center',
  },

  // Stats numbers
  stats: {
    blue: 'text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2',
    purple: 'text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2',
    green: 'text-3xl font-bold text-green-600 dark:text-green-400 mb-2',
    yellow: 'text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2',
  },
}

// Helper function to combine classes
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ')
}

// Helper function to get theme-aware classes
export const getThemeClasses = (
  type: keyof typeof themeConfig,
  variant?: string,
): string => {
  const config = themeConfig[type]
  if (typeof config === 'object' && variant && variant in config) {
    return (config as Record<string, string>)[variant]
  }
  return String(config)
}
