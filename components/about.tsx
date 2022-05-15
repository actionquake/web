import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

type Props = {
    className: string
}

const About = ({ className }: Props) => (
  <div className={className}>
    <div className="text-lg text-white text-center space-y-7">
      <h1 id="about" className="font-black text-3xl">The classic game is back in <span className="text-red-600">AQTION</span>!</h1>
      <p>Play like you&apos;re the hero in an action movie in this fast-paced multiplayer FPS that spawned one of the most popular and influential games of all time, Counter-Strike. Realistic, locational damage and weapons are at your disposal, across over 600 community-made maps, dozens of player skins and models to choose from, in deathmatch, team deathmatch, capture the flag, three team and many more modes to play!</p>
      <div className="space-y-2 md:space-y-0 md:space-x-2">
        <div className="rounded-md shadow block md:inline-block">
          <a href="#download" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-zinc-700 md:text-lg transition-all duration-300">
            <FontAwesomeIcon className="h-5 mr-2" icon={faDownload}  />Manual Download
          </a>
        </div>
        <div className="rounded-md shadow block md:inline-block">
          <a className="cursor-not-allowed w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 md:text-lg leading-loose transition-all duration-300">
            <FontAwesomeIcon className="h-5 mr-2" icon={faSteam} /> Download on Steam
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default About
