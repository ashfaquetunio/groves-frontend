import { playfair } from '@/assets/styles/fonts'
import Label from '@/components/ui/typography/label'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'

const TicketCard = () => {
    return (
        <article className='text-start bg-white/5 px-6 xs:px-8 pb-6 xs:pb-8 pt-8 sm:py-12 rounded-3xl'>
            <Label className='mb-4 sm:mb-6'>25 SR/GUEST</Label>
            <div className="flex-col sm:flex-row flex justify-between items-start gap-4">
                <div>
                    <h3 className={twMerge('text-2xl md:text-3xl mb-4 max-w-[18ch] xs:max-w-full', playfair.className)}>Get your General Access Ticket</h3>
                    <p className='text-[15px] leading-[23px] max-w-[31ch] xs:max-w-[62ch] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text e</p>
                </div>
                <Link href="/" className='opacity-50 ms-auto sm:ms-0'><HiOutlineArrowRight className='text-2xl sm:text-3xl lg:text-4xl' /></Link>

            </div>
        </article>
    )
}

export default TicketCard