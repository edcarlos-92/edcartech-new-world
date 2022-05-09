/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, MoonIcon, XIcon } from '@heroicons/react/outline'
import { LoginIcon } from '@heroicons/react/solid'
import { AnnotationIcon } from '@heroicons/react/outline'

import {navigation} from '../utils/appConst'
import MainMenu from './MainMenu'


export default function CenterHero(props:any) {

  const {leftTitle,rightTitle,Desc}=props

  return (
    <div className="relative overflow-hidden font-sans"> {/* bg-gray-100 */}
      <div className="relative pb-6">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">{/* text-gray-900 */}
              <span className="block xl:inline">{leftTitle}</span>{' '}
              <span className="block text-indigo-800 xl:inline">{rightTitle}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base  sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">{/* text-gray-500 */}
             {Desc}
            </p>
          </div>
        </main>

      </div>
    </div>
  )
}
