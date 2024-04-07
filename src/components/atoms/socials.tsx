import { socialLinks } from '@/assets/data';
import Link from 'next/link';
import React from 'react'
import Magnetic from '../animation/magnetic';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TProps = {
    className?: string
}

const Socials = ({className}: TProps) => {
    return (
        <div className={twMerge("items-center gap-6 flex", className)}>
            {socialLinks.map(({ icon, href }: any, i: number) => {
                return (
                    <Link
                        key={i}
                        className="primary-button inline-block"
                        href={href}
                        target="_blank"
                    >
                        <Magnetic className="flex items-center justify-center rounded-full">
                            <Image
                                src={icon}
                                width={21.37}
                                height={21.37}
                                className="object-contain"
                                alt="discord icon"
                            />
                        </Magnetic>
                    </Link>
                );
            })}
        </div>
    )
}

export default Socials