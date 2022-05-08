import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple, faLinux, faSteam } from '@fortawesome/free-brands-svg-icons'

type Props = {
    className: string,
    release: Release
}

const buttonClass: string = 'rounded-md shadow'
const iconClass: string = 'h-5 mr-4'
const steamLinkClass: string = 'cursor-not-allowed w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 md:text-lg transition-all duration-300'
const linkClass: string = 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-zinc-700 md:text-lg transition-all duration-300'
const subTextClass: string = 'text-xs text-zinc-200 ml-4'

const Download = ({ className, release }: Props) => (
    <div id="download" className={ className }>
        <h2 className="text-3xl font-bold">
            <span className="mr-4">AQtion Downloads</span>
            <FontAwesomeIcon className="text-zinc-400 h-6 mr-4" icon={faWindows}  />
            <FontAwesomeIcon className="text-zinc-400 h-6 mr-4" icon={faApple}  />
            <FontAwesomeIcon className="text-zinc-400 h-6 mr-4" icon={faLinux}  />
        </h2>
        <p className="mt-6">Our <a className="cursor-not-allowed">Steam page</a> is the preferred, and easiest method to get up-and-running, but we also offer manual installers below and through our <a href="https://aqtion.itch.io/aqtion" target="_blank" rel="noopener noreferrer">Itch.io page</a>.</p>
        <p className="mt-6">Latest release: AQtion {release.version} published on {release.published_at.toString()}</p>
        <div className="space-y-2 mt-6">
            <div className={buttonClass}>
              <a className={steamLinkClass}>
                <FontAwesomeIcon className={iconClass} icon={faSteam}  />Steam <span className={subTextClass}>Preferred Installation Method</span>
              </a>
            </div>
            {release.assets.map((asset, i) => {
                if (Math.ceil(asset.size/1024/1024) <= 1 || !asset.platform) {
                    return false
                }
                return (<div className={buttonClass}><a href={asset.url} className={linkClass} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={iconClass} icon={asset.platformIcon}  />{asset.name} <span className={subTextClass}>{Math.ceil(asset.size/1024/1024)} MB</span></a></div>)
            })}
          </div>
    </div>
)

export default Download
