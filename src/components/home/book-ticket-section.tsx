"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FeatureCard from './molecules/feature-card'
import Container from '@/ui/container'
import SectionTitle from '@/components/ui/typography/section-title'
import Button from '@/ui/button'
import { slider1Data } from '@/assets/data'
import { FaArrowRightLong } from 'react-icons/fa6'

const BookTicketSection = () => {

    return (
        <section className='sec-p-y overflow-x-clip'>
            <Container>
                <SectionTitle className={'text-white max-w-[26ch]'}>Book General Access ticket and enjoy the attractions for free</SectionTitle>
                <Button className='px-4 my-12' innerClass='gap-10' endAdornment={<FaArrowRightLong size={30} />}>Book reservation now</Button>
                <Swiper
                    spaceBetween={20}
                    slidesPerView='auto'
                    className='w-[120%] sm:w-[200%]'
                    speed={800}
                    loop
                    autoplay
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

export default BookTicketSection