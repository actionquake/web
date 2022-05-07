import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'
import Gallery from '../components/gallery'
import Download from '../components/download'
import Discord from '../components/discord'

const Home: NextPage = () => {
  return (
    <div id="top" className="w-full bg-zinc-900 text-white">

      <Header/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-lg text-white text-center space-y-7">
          <h1 id="about" className="font-black text-3xl">The classic game is back in <span className="text-red-600">AQTION</span>!</h1>
          <p>Play like you&apos;re the hero in an action movie in this fast-paced multiplayer FPS that spawned one of the most popular and influential games of all time, Counter-Strike. Realistic, locational damage and weapons are at your disposal, across over 600 community-made maps, dozens of player skins and models to choose from, in deathmatch, team deathmatch, capture the flag, three team and many more modes to play!</p>
          <div className="space-x-2">
            <div className="rounded-md shadow inline-block">
              <a href="#download" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-zinc-700 md:text-lg transition-all duration-300">
                <FontAwesomeIcon className="h-5 mr-2" icon={faDownload}  />Direct Download
              </a>
            </div>
            <div className="rounded-md shadow inline-block">
              <a className="cursor-not-allowed w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 md:text-lg leading-loose transition-all duration-300">
                <FontAwesomeIcon className="h-5 mr-2" icon={faSteam} /> Download on Steam
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black bg-cover mt-12" style={{backgroundImage: `url("/bg.jpg")` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe className="w-full aspect-video" id="ytplayer" src="https://www.youtube.com/embed/DtjbkBUl8cc?autoplay=1&controls=1&modestbranding=0&origin=https://www.aqtiongame.com" frame-border="0"></iframe>
        </div>
      </div>

      <Gallery className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"/>

      <Download className="w-full"/>

      <Discord className="w-full"/>

      <footer className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="text-left text-zinc-400">
          &copy;2022 AQtion, All rights reserved
        </div>
        <div className="space-x-4 text-zinc-400">
          <a className="transition-all duration-300 hover:text-white" href="#about">About</a>
          <a className="transition-all duration-300 hover:text-white" href="#screenshots">Screenshots</a>
          <a className="transition-all duration-300 hover:text-white" href="#download">Download</a>
          <span>&ndash;</span>
          <a className="transition-all duration-300 hover:text-white" href="#top">Back to Top</a>
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
