import { playfair } from '@/assets/styles/fonts'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

const PageTitle = ({ children, className }: Props) => {
  return (
    <h1 className={twMerge('text-5xl lg:text-7xl font-normal font-playfair', playfair.className, className)}>{children}</h1>
  )
}

export default PageTitle