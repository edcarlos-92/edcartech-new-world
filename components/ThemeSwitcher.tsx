import React from 'react'
import {useTheme} from 'next-themes'
import { MoonIcon} from '@heroicons/react/outline'


export default function ThemeSwitcher() {

    const {theme, setTheme} = useTheme()

    const handleSwitch = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    
    <div className="flex-shrink-0 pl-3 ">
        <a
            onClick={handleSwitch}
            type="button"
            className=" p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "> {/* focus:ring-white */}
            <span className="sr-only">Switch Themes</span>
            <MoonIcon className="h-6 w-6" aria-hidden="true" />
        </a>
  </div>

  )
}
