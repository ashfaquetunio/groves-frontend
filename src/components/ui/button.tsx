import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PropTypes = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  status?: "stable" | "loading" | "error";
  innerClass?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

const variants: { [key: string]: string } = {
  primary: "bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-2xl text-white",
  secondary: "text-yellow-500 bg-neutral-900",
};

const statusStyles: { [key: string]: string } = {
  stable: "",
  loading: "",
};

const Button = ({
  children,
  className,
  variant = "primary",
  status = "stable",
  innerClass,
  startAdornment,
  endAdornment,
  ...rest
}: PropTypes) => {
  const isDisabled = status !== "stable";

  return (
    <button
      {...rest}
      disabled={isDisabled}
      aria-busy={status === "loading"}
      className={twMerge(
        "px-6 py-3 font-clash relative text-base whitespace-nowrap duration-200 min-w-[142px] font-medium",
        variants[variant],
        className,
        statusStyles[status]
      )}
    >
      <span
        className={twMerge(
          "inline-flex w-full items-center gap-8 justify-center",
          isDisabled ? "opacity-50 cursor-not-allowed" : "",
          innerClass
        )}
      >
        {!!startAdornment && <span className="opacity-50">
          {startAdornment}
        </span>}

        {children}
        {!!endAdornment && <span className="opacity-50">{endAdornment}</span>}
      </span>
      {status === "loading" && (
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
            <div
              className={twMerge(
                "border-solid animate-spin rounded-full border-2 h-4 w-4",
                "border-white-900 border-t-transparent",
                variant === "secondary"
                  ? "border-yellow-500 border-t-transparent"
                  : ""
              )}
            ></div>
          </div>
        </span>
      )}
    </button>
  );
};

export default Button;
