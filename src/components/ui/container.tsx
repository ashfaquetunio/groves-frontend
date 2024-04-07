import React, { ReactNode } from "react";
import { twMerge as tw } from "tailwind-merge";

type ContainerProps = {
  fluid?: boolean;
  children: ReactNode;
  className?: string;
};

const Container = ({ fluid, children, className, ...rest }: ContainerProps) => {
  const containerClasses = fluid
    ? "w-full px-6 sm:px-10 md:px-16"
    : "w-full px-6 sm:px-10 md:px-16 max-w-[1220px] 2xl:max-w-[1500px] 3xl:max-w-[1700px] mx-auto";

  return <div className={tw(containerClasses, className)}>{children}</div>;
};

export default Container;