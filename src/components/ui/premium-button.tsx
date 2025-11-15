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
    const { reducedMotion } = useMotionPreferences();

    const baseClasses = cn(
      "relative inline-flex items-center justify-center gap-3 font-semibold rounded-xl overflow-hidden group",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-60",
      size === "lg" && "px-12 py-5 text-lg lg:text-xl min-w-[280px]",
      size === "default" && "px-8 py-4 text-base min-w-[200px]",
      variant === "primary" &&
        "bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-primary-foreground shadow-[0_18px_38px_rgba(215,38,61,0.28)]",
      variant === "secondary" &&
        "glass-strong border border-accent/35 text-foreground hover:border-accent/50",
      reducedMotion
        ? "transition-colors duration-300"
        : "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(8,12,20,0.35)]",
      className
    );

    const showProgress = loading || typeof progress === "number";
    const content = (
      <>
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {!reducedMotion && (
          <span
            aria-hidden="true"
            className="absolute inset-[-30%] bg-gradient-to-br from-primary/12 via-transparent to-accent/18 blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-700"
          />
        )}
        {showProgress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30 overflow-hidden">
            <div
              className="h-full bg-primary-foreground transition-all duration-300"
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
