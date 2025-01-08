import React from 'react'

type Props = {
  className: string
}

const Footer = ({ className }: Props) => (
  <footer className={className}>
    <div className="text-center md:text-left text-zinc-400">
      &copy;2025 AQtion, All rights reserved
    </div>
    <div className="space-x-4 text-zinc-400">
      <a className="transition-all duration-300 hover:text-white" href="#about">About</a>
      <a className="transition-all duration-300 hover:text-white" href="#screenshots">Screenshots</a>
      <a className="transition-all duration-300 hover:text-white" href="#download">Download</a>
      <span className="hidden md:inline">&ndash;</span>
      <a className="transition-all duration-300 hover:text-white" href="#top">Back to Top</a>
    </div>
    <div className="text-center md:text-right flex-grow-0">
      <a href="https://vercel.com/?utm_source=aqtion&utm_campaign=oss" target="_blank" rel="noopener noreferrer">
        <img className="inline" src="/powered-by-vercel.svg" alt="Powered By Vercel" />
      </a>
    </div>
  </footer>
)

export default Footer
