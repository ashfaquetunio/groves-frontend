import { playfair } from '@/assets/styles/fonts'
import { TCuisineCard } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import Label from '../ui/typography/label'


type TProps = {
    data: TCuisineCard
}

const CuisineCard = ({ data: { name, image, pricePerGuest, href, alt } }: TProps) => {
    return (
        <article className="px-2 xs:px-3 pt-2 xs:pt-3 w-full max-w-[360px] mx-auto sm:max-w-[1000px] pb-6 md:pb-12 backdrop-blur-[30px] bg-white/5 rounded-[32px] md:rounded-[45px]">
            <div className="relative mb-2 sm:mb-4 aspect-[15/9] w-full rounded-t-[32px] md:rounded-t-[45px] overflow-hidden">
                <Image
                    src={image}
                    alt={alt}
                    fill
                />
            </div>
            <div className="flex items-center justify-between px-4 lg:px-8">
                <div>
                    <h3 className={twMerge("capitalize text-xl md:text-2xl lg:text-3xl mb-2 xs:mb-4", playfair.className)}>{name}</h3>
                    <Label className=" bg-primary py-1 px-4 rounded-full">{pricePerGuest} sr per guest</Label>
                </div>
                <Link href={href} className='opacity-50 text-2xl md:text-[39px]'>
                    <HiOutlineArrowRight />
                </Link>
            </div>
        </article>
    )
}

export default CuisineCard