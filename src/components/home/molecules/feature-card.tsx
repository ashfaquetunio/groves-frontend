import { CardType } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
    data: CardType,
}


const FeatureCard = ({ data: { title, image } }: Props) => {
    return (
        <article>
            <div className="relative aspect-[.73]">
                <Image src={image} fill alt="" className='object-contain' />
            </div>

            <h3 className='text-[25px] sm:text-lg lg:text-3xl text-white font-playfair text-center max-w-[14ch] sm:max-w-[75%] mx-auto mt-4 font-light'>{title}</h3>
        </article>
    )
}

export default FeatureCard