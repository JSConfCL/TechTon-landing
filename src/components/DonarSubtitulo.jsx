import Image from 'next/image'
import React from 'react'

const DonarSubtitulo = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-5'>
            <Image
                className="ml-2"
                alt="Hora Chile"
                src="images/communities/Bomberos-de-Chile.webp"
                height={100}
                width={100}
            />
            <h2 className='text-center text-3xl md:text-5xl md:text-start font-semibold'>Gracias por sumarte a donar dinero para esta causa</h2>
        </div>
    )
}

export { DonarSubtitulo }