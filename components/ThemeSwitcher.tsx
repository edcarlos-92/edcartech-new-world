import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'


export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="shrink-0 pl-3 ">
        <button
          type="button"
          className=" p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          <span className="sr-only">Switch Themes</span>
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (

    <div className="shrink-0 pl-3 ">
      <button
        onClick={handleSwitch}
        type="button"
        className=" p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "> {/* focus:ring-white */}
        <span className="sr-only">Switch Themes</span>
        {/* <MoonIcon className="h-6 w-6" aria-hidden="true" /> */}
        {theme === 'dark' ? <SunIcon className="h-6 w-6" aria-hidden="true" /> : <MoonIcon className="h-6 w-6" aria-hidden="true" />}

      </button>
    </div>

  )
}
