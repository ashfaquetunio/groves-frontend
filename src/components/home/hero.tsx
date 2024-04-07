"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Button from '@/ui/button';
import PageTitle from '../ui/typography/page-title';
import Container from '@/ui/container';
import { FaArrowRightLong } from 'react-icons/fa6';
import Label from '../ui/typography/label';


const Hero = () => {
    return (
        <section className='relative flex items-center'>
            <div className="absolute bg-black/50 left-0 top-0  bottom-0 w-full lg:w-1/2 z-10"></div>
            <Image src={"/images/home/hero-bg.png"} alt='' fill className='object-cover' />
            <Container className=''>
                <div className="lg:grid lg:grid-cols-2 ">
                    <div className="z-20 relative">
                        <Swiper
                            modules={[Pagination, Navigation]}
                            className=" hero-carousel min-h-screen md:min-h-[768px] flex items-center lg:mt-0"
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            speed={800}
                        >
                            {
                                Array.from({ length: 4 }).map((item, idx) => (
                                    <SwiperSlide key={idx} className='flex flex-col justify-center'>
                                        <div className='relative z-20 text-white space-y-8 -mt-8 lg:mt-8'>
                                            <Label>khawaja yanni</Label>
                                            <PageTitle>The new <br /> era of luxury</PageTitle>
                                            <p className='font-light max-w-[34ch] xs:max-w-[41ch]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                            <Button endAdornment={<FaArrowRightLong className='text-2xl lg:text-3xl' />}>Book reservation now</Button>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className="pagination-container bg-red-500 absolute bottom-[1rem] justify-end"></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero