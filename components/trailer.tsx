import React from 'react'

type Props = {
    className: string
}

const Trailer = ({ className }: Props) => (
    <div className={className} style={{backgroundImage: `url("/bg.jpg")` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe className="w-full aspect-video" id="ytplayer" src="https://www.youtube.com/embed/DtjbkBUl8cc?rel=0autoplay=0&controls=1&modestbranding=0&origin=https://www.aqtiongame.com" frame-border="0"></iframe>
        </div>
    </div>
)

export default Trailer
