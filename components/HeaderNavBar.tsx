/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { UserIcon as LoginIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { navigation } from '../utils/appConst'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderNavBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                      <Image
                        className='w-44 object-contain cursor-pointer'
                        src='/edcartech-long.png'
                        alt="EdcarTech Logo"
                        width={176}
                        height={40}
                        priority
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    )
  }

  return (
    <Disclosure as="nav" className={`shadow ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className={`inline-flex items-center justify-center p-2 rounded-md ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="shrink-0 flex items-center">
                  <Link href="/">
                    <Image
                      className='w-44 object-contain cursor-pointer'
                      src='/edcartech-long.png'
                      alt="EdcarTech Logo"
                      width={176}
                      height={40}
                      priority
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Navigation items */}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="shrink-0">
                  <Link
                    href="/contact"
                    className={`relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${theme === 'dark' ? 'text-white bg-indigo-600 hover:bg-indigo-700' : 'text-white bg-indigo-900 hover:bg-indigo-800'} shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <LoginIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    <span>Contact Me</span>
                  </Link>
                </div>
                <div className="hidden md:ml-4 md:shrink-0 md:flex md:items-center">
                  <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className={`${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-white text-gray-400 hover:text-gray-500'} p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
                    aria-label="Switch theme"
                  >
                    <span className="sr-only">Switch Themes</span>
                    {theme === 'dark' ? (
                      <SunIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MoonIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}>
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src="/carlos.jpg"
                          alt="Profile"
                          width={32}
                          height={32}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${theme === 'dark' ? 'bg-gray-800 ring-gray-700' : 'bg-white ring-black ring-opacity-5'} ring-1 focus:outline-none`}>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/about"
                              className={classNames(
                                active ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100') : '',
                                `block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/contact"
                              className={classNames(
                                active ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100') : '',
                                `block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/contact"
                              className={classNames(
                                active ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100') : '',
                                `block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`
                              )}
                            >
                              Contact Me
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'} block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium sm:pl-5 sm:pr-6`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className={`pt-4 pb-3 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center px-4 sm:px-6">
                <div className="shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src="/carlos.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-3">
                  <div className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Carlos</div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>carlos@edcartech.com</div>
                </div>
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className={`ml-auto shrink-0 ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-white text-gray-400 hover:text-gray-500'} p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span className="sr-only">Switch theme</span>
                  {theme === 'dark' ? (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as={Link}
                  href="/about"
                  className={`block px-4 py-2 text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'} sm:px-6`}
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/contact"
                  className={`block px-4 py-2 text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'} sm:px-6`}
                >
                  Contact Me
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}