import React from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faItchIo, faDiscord } from '@fortawesome/free-brands-svg-icons'

type Props = {}

const Header = ({}: Props) => (
    <Disclosure as="nav" className="bg-zinc-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl text-red-600 font-bold">
                    <Link href="/">AQtion</Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a href="#about" className="transition-all duration-300 hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </a>
                      <a href="#screenshots" className="transition-all duration-300 hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                        Screenshots
                      </a>
                      <a href="#download" className="transition-all duration-300 hover:bg-zinc-900  text-white px-3 py-2 rounded-md text-sm font-medium">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-1">
                    <a className="transition-all duration-300 hover:bg-zinc-900 text-zinc-200 hover:text-white px-3 py-2 rounded-md inline-block relative" href="https://discord.gg/aq2world" title="Join us on Discord!" rel="noopener noreferrer" target="_blank">
                        <span className="flex h-2 w-2 absolute top-1 right-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <FontAwesomeIcon className="h-6" icon={faDiscord} />
                    </a>
                    <a className="transition-all duration-300 hover:bg-zinc-900 text-zinc-200 hover:text-white px-3 py-2 rounded-md inline-block" href="https://aqtion.itch.io/aqtion" title="Itch.io Page" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className="h-6" icon={faItchIo} />
                    </a>
                    <a className="transition-all duration-300 hover:bg-zinc-900 text-zinc-200 hover:text-white px-3 py-2 rounded-md inline-block" href="https://aqtion.itch.io/aqtion" title="Itch.io Page" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className="h-6 cursor-not-allowed" icon={faSteam} />
                    </a>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Disclosure.Button>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
)

export default Header
