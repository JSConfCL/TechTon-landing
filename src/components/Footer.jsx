import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Pantallas: Celular, tablet */}
            <div className='px-10 sm:px-0 lg:hidden flex bg-primary text-gray-900 items-center h-25'>
                {/* Imagen de manos */}
                <div className='flex-1 hidden sm:block'>
                    <Image alt='Dibujo de solidaridad' src='/footer/icon-hands.svg' height={25} width={50} style={{height:'10em'}} className='w-full' />
                </div>
                {/* Elemento del medio */}
                <div className='flex-1 flex flex-col items-center'>
                    <div className='sm:mb-3 text-md font-semibold bg-white px-5 text-center rounded-b-xl sm:rounded sm:text-md p-3 md:p-4'>
                        <span className='font-black'>09 y 10</span> de Febrero de 2024
                    </div>
                    <div className='py-5 sm:py-0 space-y-2'>
                        <div className='text-sm sm:text-xs flex items-center md:text-[15px]'>
                            <span className='font-bold mr-1'>Viernes 09</span> desde las 14:00 hrs.
                            <Image className='ml-2' alt='Hora Chile' src='/footer/chilean-flag.svg' height={20} width={20} />
                        </div>
                        <div className='text-sm sm:text-xs flex items-center md:text-[15px]'>
                            <span className='font-bold mr-1'>Sábado 10</span> desde las 9:00 hrs.
                            <Image className='ml-2' alt='Hora Chile' src='/footer/chilean-flag.svg' height={20} width={20} />
                        </div>
                    </div>
                </div>

                {/* Imagen del reloj */}
                <div className='flex-1 hidden sm:block'>
                    <Image alt='' src='/footer/icon-clock.svg' className='h-14 sm:h-20 w-full' height={50} width={50} />
                </div>
            </div>

            {/* Pantallas: Desktop hacia arriba */}

            <div className='hidden px-10 lg:flex bg-primary text-gray-900 items-center h-25'>
                {/* Imagen de manos */}
                <div className='flex'>
                    <Image alt='' src='/footer/icon-hands.svg' height={36} width={50} className='w-full h-25' />
                </div>
                <div className='flex-1 flex justify-around'>
                    {/* Día */}
                    <div className='flex items-center text-lg'>
                        <Image alt='' src='/footer/icon-calendar.svg' className='mr-2' height={50} width={50} />
                        <span className='font-black mr-1'>09 y 10</span> de Febrero de 2024
                    </div>
                    {/* Hora */}
                    <div className='gap-5 flex items-center text-lg'>
                        <Image alt='' src='/footer/icon-clock.svg' height={50} width={50} />
                        <div className='flex flex-col space-y-4'>
                            <div className='flex'>
                                <span className='font-bold mr-1'>Viernes 09</span> desde las 14:00 hrs.
                            </div>
                            <div className='flex'>
                                <span className='font-bold mr-1'>Sábado 10</span> desde las 9:00 hrs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer