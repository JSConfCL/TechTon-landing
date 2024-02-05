import Image from 'next/image'
import React from 'react'

const TwitchButton = () => {
    return (
        <div className='flex justify-end m-10'>
            <a className='text-lg pointer hover:bg-[#a675f4] hover:scale-105 duration-300 font-bold bg-[#9052F4] px-5 px-10 py-2 rounded-md flex items-center gap-3' href='https://www.twitch.tv/javascriptchile' target='_blank' rel="noopener noreferrer">
                <Image alt='' src='/twitch_logo.svg' height={30} width={30} />
                JavaScriptChile
            </a>
        </div>
    )
}

export default TwitchButton