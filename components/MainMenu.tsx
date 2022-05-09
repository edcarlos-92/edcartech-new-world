/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, MoonIcon, XIcon } from '@heroicons/react/outline'
import { LoginIcon } from '@heroicons/react/solid'
import { AnnotationIcon } from '@heroicons/react/outline'
import {navigation} from '../utils/appConst'
import ThemeSwitcher from './ThemeSwitcher'
import {useTheme} from 'next-themes'



export default function MainMenu(props:any) {

  const {leftTitle,rightTitle,Desc}=props

  // const {theme, setTheme} = useTheme()

  return (
    <div className="relative font-sans">{/* bg-gray-100 overflow-hidden */}
      {/* <div className="relative pt-6 pb-16 sm:pb-16"> */}
      <div className="relative pt-6 ">
        <Popover >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center " aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
                <div className="flex items-center justify-between w-full md:w-auto  ">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/edcartech-long.png"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden ">
                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">{/* bg-gray-50  focus:ring-indigo-500 text-gray-400 */}
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10 ">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium ">{/* text-gray-500 hover:text-gray-900 */}
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 ">
                <span className="inline-flex rounded-md shadow ">
              
                  <a
                    href="/contact"
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    <span>Contact Us</span>
                  </a>   
                </span>


                
                <div className="flex-shrink-0 pl-3 ">
                  <ThemeSwitcher/>
                </div>


                 {/* <div className="flex-shrink-0 pl-3 ">
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      type="button"
                      className=" p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "> 
                      <span className="sr-only">Switch Themes</span>
                      <MoonIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div> */}

              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden  " > {/* bg-blue-900 */}
              <div className="rounded-lg shadow-md bg-gray-100 ring-1 ring-black ring-opacity-5 overflow-hidden ">{/* bg-yellow-500 */}
                <div className="px-5 pt-4 flex items-center justify-between ">{/* bg-yellow-500 */}
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/edcartech-long.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pb-3">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}


                  <a
                    href="/contact"
                    type="button"
                    //className="block w-full px-5 py-3 text-center font-medium text-indigo-800 bg-gray-50 hover:bg-gray-100"
                    className="relative inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    //className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                  >
                      <AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      <span>Contact Us</span>
                  </a>   


                  <a className="inline-flex items-right pl-10 ">
                    <ThemeSwitcher/>
                  </a>
                </div>
               
                  {/* <a
                    href="/contact"
                    type="button"
                    //className="block w-full px-5 py-3 text-center font-medium text-indigo-800 bg-gray-50 hover:bg-gray-100"
                    className="relative inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    //className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                  >
                      <AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      <span>Contact Me</span>
                  </a> */}


              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}
