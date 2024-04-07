"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/ui/container";
import Button from "@/ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import Socials from "./atoms/socials";
import { containerVars, menuVars, mobileLinkVars } from "@/assets/data/animation";
import Label from "./ui/typography/label";
import LanguageToggle from "./ui/language-toggle";

const navLinks = [
  { title: "dine with us", href: "/" },
  { title: "plan your visit", href: "/wallet" },
  { title: "events", href: "/vault" },
  { title: "view groves map", href: "/other" },
  { title: "our story", href: "/other" },
  { title: "contact us", href: "#faqs" },
];



const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  const pathname = usePathname();

  return (
    <header className="relative z-30">
      <Container>
        <nav className="flex items-center justify-between pb-5 pt-6">
          <div className="flex items-center gap-20">
            <Link href="/" className="relative aspect-[16/5] h-16 lg:h-16">
              <Image fill sizes='100vw' src="/logo.png" className="object-contain" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-3 lg:gap-6">
            {
              isMobile ? <>
                <button
                  className="relative aspect-square w-8"
                  onClick={toggleMenu}
                >
                  <Image src={"/images/icons/menu.svg"} className="object-contain" sizes='100vw' fill alt="nav close icon" />
                </button>
              </> : <>
                <Socials />
                <Button className="hidden sm:block">Log in</Button>
                <LanguageToggle />
              </>
            }

          </div>
        </nav>
      </Container>
      <nav className="border-y py-3 border-white/50 hidden lg:block">
        <Container>

          <div className="text-m hidden gap-6  lg:flex lg:justify-between xl:gap-10">
            {navLinks.map((link, index) => {
              return (
                <Link
                  data-text={link.title}
                  key={index}
                  href={link.href}
                  className={`text-xs xl:text-sm uppercase tracking-widest font-light chain-link duration-200 ${pathname == link.href ? "active" : ""
                    }`}
                >
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-full origin-top bg-gradient-to-r from-[#283606] to-[#0F1500] py-4 text-neutral-100"
          >
            <div className="flex h-full flex-col">
              <Container>
                <div className="flex justify-between pb-4">
                  <Link href="/" className="relative aspect-[16/5] h-16 lg:h-16">
                    <Image fill src="/logo.png" className="object-contain" alt="Logo" />
                  </Link>
                  <button
                    className="cursor-pointer relative aspect-square w-6"
                    onClick={toggleMenu}
                  >
                    <Image src={"/images/icons/close.svg"} className="object-contain" fill alt="nav close icon" />
                  </button>
                </div>
              </Container>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col pt-2 flex-1"
              >
                {navLinks.map((link, index) => {
                  return (
                    <React.Fragment key={index}>
                      <MobileNavLink title={link.title} href={link.href} />
                    </React.Fragment>
                  );
                })}
                <motion.div variants={mobileLinkVars} className="py-4 flex-1 border-t border-white/50">
                  <Container className="flex flex-col items-start gap-4 h-full">
                    <LanguageToggle />
                    <Button>Log in</Button>
                  </Container>
                </motion.div>
                <Container>
                  <Socials className="mt-auto pb-6" />
                </Container>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="border-t w-full border-white/50 py-4"
    >
      <Container>
        <Link href={href}>
          <Label>{title}</Label>
        </Link>
      </Container>
    </motion.div>
  );
};