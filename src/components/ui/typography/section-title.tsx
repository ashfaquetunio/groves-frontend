import { playfair } from '@/assets/styles/fonts'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

const SectionTitle = ({ children, className }: Props) => {
  return (
    <h1 className={twMerge('text-4xl lg:text-5xl font-normal font-playfair', playfair.className, className)}>{children}</h1>
  )
}

export default SectionTitle