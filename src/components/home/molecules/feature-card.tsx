import { playfair } from '@/assets/styles/fonts'
import { CardType } from '@/types'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    data: CardType,
}


const FeatureCard = ({ data: { title, image } }: Props) => {
    return (
        <article>
            <div className="relative aspect-[.73]">
                <Image src={image} fill alt="" className='object-contain' />
            </div>

            <h3 className={twMerge('text-[25px] sm:text-lg lg:text-3xl text-white text-center max-w-[14ch] sm:max-w-[75%] mx-auto mt-4 font-light', playfair.className)}>{title}</h3>
        </article>
    )
}

export default FeatureCard