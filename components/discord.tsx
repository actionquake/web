import React from 'react'

type Props = {
    className: string
}

const Discord = ({ className }: Props) => (
    <div id="discord" className={ className }>
        <iframe className="w-full h-full" src="https://discord.com/widget?id=800353014384820234&theme=dark" allow-transparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
)

export default Discord
