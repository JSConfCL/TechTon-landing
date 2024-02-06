import Image from 'next/image'
import React from 'react'

const DonarSubtitulo = () => {
    return (
        <div className='flex items-center gap-5'>
            <Image
                className="ml-2"
                alt="Hora Chile"
                src="images/communities/Bomberos-de-Chile.webp"
                height={100}
                width={100}
            />
            <h2 className='text-5xl font-semibold'>Gracias por sumarte a donar dinero para esta causa</h2>
        </div>
    )
}

export { DonarSubtitulo }