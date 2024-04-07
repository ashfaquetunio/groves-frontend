
"use client"
// Accessible Modal.tsx with
// Framer Motion and Tailwind CSS
// 10 Examples in the comments section below
import { createPortal } from 'react-dom'
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// @ts-ignore
import FocusLock from 'react-focus-lock'
import { twMerge } from 'tailwind-merge'

const effect = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const Backdrop = ({ children, handleClose }: BackdropProps) => (
  <motion.div
    className="
      z-50 fixed inset-0
      flex items-center justify-center
      bg-backdrop backdrop-filter backdrop-blur-sm backdrop-brightness-75
    "
    onClick={handleClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
)

const ModalContent = ({ className, children, handleClose, ariaLabel }: ModalContentProps) => (
  <motion.div
    tabIndex={-1}
    role="dialog"
    aria-modal={true}
    aria-label={ariaLabel}
    className={twMerge("relative m-5 bg-black rounded-lg overflow-hidden shadow-lg", className)}
    variants={effect}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={(event) => event.stopPropagation()}
  >
    {children}
    {handleClose && (
      <button
        className="absolute text-black z-10 top-0 right-0 p-2"
        onClick={handleClose}
        aria-label={`Close ${ariaLabel || 'dialog'}`}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
      </button>
    )}
  </motion.div>
)

const Modal = ({
  children,
  className,
  targetId,
  isOpen,
  handleClose,
  hideCloseButton,
  backdropDismiss = true,
  onExitComplete,
  ariaLabel,
}: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [trigger, setTrigger] = onExitComplete ?? [undefined, undefined]

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen || event.key !== 'Escape') return

    handleClose()
  }

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) return <></>

  return createPortal(
    <AnimatePresence
      initial={false}
      mode='wait'
      onExitComplete={() => setTrigger && trigger === 'fired' && setTrigger('completed')}
    >
      {isOpen && (
        <Backdrop handleClose={backdropDismiss ? handleClose : undefined}>
          <FocusLock>
            <ModalContent
              className={className}
              handleClose={hideCloseButton ? undefined : handleClose}
              ariaLabel={ariaLabel}
            >
              {children}
            </ModalContent>
          </FocusLock>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.getElementById(targetId)!
  )
}

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
  handleClose: () => void
  targetId: string
  hideCloseButton?: boolean
  backdropDismiss?: boolean
  onExitComplete?: [string, Dispatch<SetStateAction<string>>]
  ariaLabel?: string
}

type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void
  ariaLabel?: string
}

type BackdropProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void
}

export default Modal