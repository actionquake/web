import React from 'react'
import Image from 'next/image'
import screen1 from '../public/screenshots/1.jpg'
import screen2 from '../public/screenshots/2.jpg'
import screen3 from '../public/screenshots/3.jpg'
import screen4 from '../public/screenshots/4.jpg'
import screen5 from '../public/screenshots/5.jpg'
import screen6 from '../public/screenshots/6.jpg'
import screen7 from '../public/screenshots/7.jpg'
import screen8 from '../public/screenshots/8.jpg'
import screen9 from '../public/screenshots/9.jpg'
import screen10 from '../public/screenshots/10.jpg'

type Props = {
    className: string
}
const imageClass = 'block object-cover object-center w-full h-full rounded-lg'

const Gallery = ({ className }: Props) => (
    <section id="screenshots" className={ className }>
        <div className="mb-6">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/xOQSLV6Vx9g?rel=0autoplay=0&controls=1&modestbranding=0&origin=https://www.aqtiongame.com" frame-border="0"></iframe>
        </div>
        <div className="py-2 mx-auto">
            <div className="flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                            <a href="/screenshots/1.jpg" target="_blank"><Image alt="AQtion Screenshot 1" src={screen1} layout="responsive" placeholder="blur" /></a>
                        </div>
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                        <a href="/screenshots/2.jpg" target="_blank"><Image alt="AQtion Screenshot 2" src={screen2} layout="responsive" placeholder="blur" /></a>
                        </div>
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                        <a href="/screenshots/3.jpg" target="_blank"><Image alt="AQtion Screenshot 3" src={screen3} layout="responsive" placeholder="blur" /></a>
                        </div>
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                            <a href="/screenshots/4.jpg" target="_blank"><Image alt="AQtion Screenshot 4" src={screen4} layout="responsive" placeholder="blur" /></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-1 md:p-2">
                        <a href="/screenshots/5.jpg" target="_blank"><Image alt="AQtion Screenshot 5" src={screen5} layout="responsive" placeholder="blur" /></a>
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 p-1 md:p-2">
                        <a href="/screenshots/6.jpg" target="_blank"><Image alt="AQtion Screenshot 6" src={screen6} layout="responsive" placeholder="blur" /></a>
                    </div>
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                            <a href="/screenshots/7.jpg" target="_blank"><Image alt="AQtion Screenshot 7" src={screen7} layout="responsive" placeholder="blur" /></a>
                        </div>
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                            <a href="/screenshots/8.jpg" target="_blank"><Image alt="AQtion Screenshot 8" src={screen8} layout="responsive" placeholder="blur" /></a>
                        </div>
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                            <a href="/screenshots/9.jpg" target="_blank"><Image alt="AQtion Screenshot 9" src={screen9} layout="responsive" placeholder="blur" /></a>
                        </div>
                        <div className="w-full md:w-1/2 p-1 md:p-2">
                            <a href="/screenshots/10.jpg" target="_blank"><Image alt="AQtion Screenshot 10" src={screen10} layout="responsive" placeholder="blur" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-6">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/q4wIT2GlIIk?rel=0autoplay=0&controls=1&modestbranding=0&origin=https://www.aqtiongame.com" frame-border="0"></iframe>
        </div>
    </section>
)

export default Gallery
