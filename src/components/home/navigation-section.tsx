import React from 'react'
import Container from '@/ui/container'
import Image from 'next/image'
import SectionTitle from '@/ui/typography/section-title'
import Button from '@/ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'

const NavigationSection = () => {
    return (
        <section className="text-white">
            <Container>
                <div className="flex flex-col-reverse sm:flex-row pb-12 sm:pb-0 lg:items-center">
                    <div className="relative basis-3/5 w-full aspect-square">
                        <Image
                            src="/images/home/map.png"
                            alt="home-1"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <div className="flex flex-col gap-6 items-start sm:pb-24 sm:pt-24">
                        <p className="text-sm uppercase tracking-widest font-light">experience the groves</p>
                        <SectionTitle>Find your place</SectionTitle>
                        <p className='max-w-[37ch] text-[15px]'>Our interactive map will show you the way to the shops and restaurants that you want to see.</p>
                        <Button endAdornment={<FaArrowRightLong size={30} />}>Open the Map</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NavigationSection