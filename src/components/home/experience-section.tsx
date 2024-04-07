"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FeatureCard from './molecules/feature-card'
import Container from '@/ui/container'
import SectionTitle from '@/components/ui/typography/section-title'
import Button from '@/ui/button'
import { slider1Data } from '@/assets/data'
import { FaArrowRightLong } from 'react-icons/fa6'

const ExperienceSection = () => {
    return (
        <section className='py-12 overflow-x-clip'>
            <Container className='flex lg:items-center flex-col lg:flex-row'>
                <div>
                    <SectionTitle className={'text-white max-w-[18ch] lg:max-w-[10ch] me-[2ch]'}>Curate your experience as you like</SectionTitle>
                    <Button className='px-4 my-12' innerClass='gap-10' endAdornment={<FaArrowRightLong size={30} />}>Book Tickets</Button>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView='auto'
                    className='w-[120%] sm:min-w-[200%]'
                    loop
                >{
                        slider1Data.map((item, idx) => (
                            <SwiperSlide key={idx} className={`${(idx + 1) % 4 === 0 ? "sm:w-[12%]" : (idx + 1) % 2 === 0 ? "sm:w-[10%]" : "sm:w-[16%]"} w-3/5 xs:w-2/5 sm:my-auto`}><FeatureCard data={item} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </section>
    )
}

export default ExperienceSection