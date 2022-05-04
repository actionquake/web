import type { NextPage } from 'next'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faItchIo, faDiscord } from '@fortawesome/free-brands-svg-icons'
import Gallery from '../components/gallery'

const Home: NextPage = () => {
  return (
    <div className="w-full bg-zinc-900 text-white">
      <Disclosure as="nav" className="bg-zinc-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl text-red-600 font-bold">
                    AQtion
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a href="#" className="bg-zinc-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </a>
                      <a href="#" className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                        Screenshots
                      </a>
                      <a href="#" className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon className="h-6" icon={faDiscord} />
                    <FontAwesomeIcon className="h-6" icon={faItchIo} />
                    <FontAwesomeIcon className="h-6" icon={faSteam} />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-lg text-white text-center space-y-7">
          <h1 className="font-black text-3xl">The classic game is back in <span className="text-red-600">AQTION</span>!</h1>
          <p>Play like you're the hero in an action movie in this fast-paced multiplayer FPS that spawned one of the most popular and influential games of all time, Counter-Strike. Realistic, locational damage and weapons are at your disposal, across over 600 community-made maps, dozens of player skins and models to choose from, in deathmatch, team deathmatch, capture the flag, three team and many more modes to play!</p>
          <div className="rounded-md shadow inline-block">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:text-lg">
              Download Now
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-black bg-cover mt-12" style={{backgroundImage: `url("/bg.jpg")` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe className="w-full aspect-video" id="ytplayer" src="https://www.youtube.com/embed/f726le_hzNI?autoplay=1&controls=1&modestbranding=0&origin=https://www.aqtiongame.com" frame-border="0"></iframe>
        </div>
      </div>
      <Gallery className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"/>
      <footer className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="text-left text-gray-400">
          &copy;2022 AQtion, All rights reserved
        </div>
        <div className="text-right flex-grow-0">
          <a href="https://vercel.com/?utm_source=aqtion&utm_campaign=oss" target="_blank" rel="noopener noreferrer">
            <img className="inline" src="/powered-by-vercel.svg" alt="Powered By Vercel" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
