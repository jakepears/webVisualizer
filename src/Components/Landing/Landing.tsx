import React from 'react'
import Image from 'next/image'
import BgScene from './BgScene'


function Landing() {
    const value = '*insert song name here*'
  return (
    <section className='h-screen w-screen bg-codGray overflow-hidden'>
        <BgScene />
        <div className='flex pt-16 place-content-center column'>
            <h1 className='relative text-wildSand text-3xl font-medium items-center'>audio in action</h1>
        </div>
        <div className='flex'>
            <h2 className='column text-wildSand text-xl space-x-10 text-center font-light items-center pt-10 mx-[5vw]'>collaboration of man and machine for an unmatched experience</h2>
        </div>
        <div className='flex mx-10 justify-center'>
            <Image className='absolute bottom-12 pb-11 md:-translate-x-1' src='assets/headphones.svg' alt='headphones' loading='eager' height={30} width={30} />
            <Image className='sm:hidden absolute bottom-12 pb-11 translate-x-1' src='assets/speaker.svg' alt='headphones' loading='eager' height={30} width={30} />
            <h4 className='absolute left-1/2 -translate-x-1/2 bottom-10 text-wildSand text-center font-thin w-[100%]'>
                listening device recommended. <br /> headphones / sound system
            </h4>
        </div>
    </section>
  )
}

export default Landing