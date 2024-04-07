import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TProps = {
    children: ReactNode,
    className?: string
}

const Label = ({ children, className }: TProps) => {
    return (
        <span className={twMerge("inline-block text-xs sm:text-sm uppercase tracking-widest font-light", className)}>{children}</span>
    )
}

export default Label