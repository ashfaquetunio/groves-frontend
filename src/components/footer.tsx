import React from 'react'
import SectionTitle from '@/components/ui/typography/section-title'
import Container from '@/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Label from './ui/typography/label'
import Socials from './atoms/socials'

const footerDetails = [
  {
    title: "location",
    text: "Al-Hizam Park \n Al-Semairi, Yanbu Al Bahr 46455 \n Riyadh Saudi Arabia",
  },
  {
    title: "working hours",
    text: "Sun until Thurs: 4:00PM \n Fri & Sat: 2:30PM \n\n Gates Close at: \n Sat until Wed: 12:00AM \n Thu & Fri: 12:30AM",
  },
  {
    title: "guest service call",
    text: "cc@thegroves-sa.com 920001672 \n\n +966556631309",
  },
]


type TLogo = {
  className?: string
}

const Logo = ({ className }: TLogo) => {
  return <Link href="/" className={twMerge("relative aspect-[16/5] h-20", className)}>
    <Image fill src="/logo.png" className="object-contain" alt="Logo" />
  </Link>
}


const Footer = () => {
  return (
    <footer className='py-12 text-white border-t border-white/25 overflow-x-clip'>
      <Container>
        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <div className="sm:hidden flex items-center gap-20">
            <Logo className='h-16'/>
          </div>
          <SectionTitle>Join us for an <br /> unforgettable experience</SectionTitle>
          <div>
            <Label className='mb-4'>DOWNLOAD THE GROVES APP</Label>
            <div className="flex gap-4 flex-wrap">
              <div className="relative h-[50px] aspect-[3]">
                <Image src="/images/common/app-store-badge.svg" fill alt='' className='object-left object-contain' />
              </div>
              <div className="relative h-[50px] aspect-[3.38]">
                <Image src="/images/common/google-play-badge.svg" fill alt='' className='object-left object-contain' />
              </div>

            </div>
          </div>
        </div>

        <div className='grid xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 py-16'>
          {
            footerDetails.map(({ title, text }, idx) => (
              <div key={idx} className='col-span-2'>
                <h4 className='text-sm uppercase tracking-widest font-light mb-2'>{title}</h4>
                <p className='whitespace-pre-line text-[15px] font-light'>{text}</p>
              </div>
            ))
          }
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div className="hidden sm:flex items-center gap-20">
            <Logo />
          </div>
          <div className="flex items-center gap-6">
            <Socials />
          </div>
        </div>

        <nav className="flex items-center justify-between pt-6 gap-6 lg:gap-10 flex-wrap">
          <div className='flex gap-6 lg:gap-10 text-[15px] font-light flex-col xs:flex-row flex-wrap'>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <div>©2023 The Groves for Entertainment</div>
          </div>
          <div className='flex items-center gap-4'>
            {
              [{
                icon: '/images/icons/visa.svg',
                href: '/',
                className: 'h-[14px] aspect-[3.07]'
              }, {
                icon: '/images/icons/mastercard.png',
                href: '/',
                className: 'h-[32px] aspect-square'
              }, {
                icon: '/images/icons/american-express.png',
                href: '/',
                className: 'h-[26px] aspect-square'
              }].map(({ icon, href, className }, idx) => (
                <Link
                  key={idx}
                  className={twMerge("primary-button inline-block relative", className)}
                  href={href}
                  target="_blank"
                >
                  <Image
                    src={icon}
                    fill
                    className="object-contain"
                    alt="discord icon"
                  />
                </Link>
              ))
            }
          </div>
        </nav>
      </Container>
    </footer>
  )
}

export default Footer