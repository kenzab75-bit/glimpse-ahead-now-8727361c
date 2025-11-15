import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionPreferences } from "@/context/MotionContext";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  loading?: boolean;
  progress?: number;
  icon?: React.ReactNode;
  href?: string;
}

export const PremiumButton = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, PremiumButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      loading = false,
      progress,
      icon,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center gap-3 font-semibold rounded-xl",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-60",
      size === "lg" && "px-12 py-5 text-lg lg:text-xl min-w-[280px]",
      size === "default" && "px-8 py-4 text-base min-w-[200px]",
      variant === "primary" &&
        "bg-[#C6252E] text-white border border-[#8F1A23]/50 shadow-[0_16px_32px_rgba(10,8,9,0.45)] hover:bg-[#8F1A23]",
      variant === "secondary" &&
        "bg-[#111113] text-white border border-[#2F1A1D] hover:border-[#4E0C13] hover:bg-[#1A0E11]",
      "transition-colors duration-200 ease-out",
      className
    );

    const showProgress = loading || typeof progress === "number";
    const content = (
      <>
        {showProgress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30 overflow-hidden">
            <div
              className="h-full bg-white/80 transition-all duration-300"
              style={{ width: loading ? "100%" : `${progress ?? 0}%` }}
            >
              {loading && (
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              )}
            </div>
          </div>
        )}
        <div className="relative z-10 flex items-center justify-center gap-3">
          {loading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : icon ? (
            icon
          ) : null}
          <span>{children}</span>
        </div>
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    const { type, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        type={type ?? "button"}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";
