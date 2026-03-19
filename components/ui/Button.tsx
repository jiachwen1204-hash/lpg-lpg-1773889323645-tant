```tsx
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      font-[family-name:var(--font-body)]
    `;

    const variantStyles = {
      primary: `
        bg-[var(--brand-500)] text-white
        hover:bg-[var(--brand-700)] hover:shadow-lg hover:shadow-[var(--brand-500)]/20
        active:scale-[0.98]
      `,
      secondary: `
        bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]
        hover:bg-[var(--bg)] hover:border-[var(--brand-500)]
        active:scale-[0.98]
      `,
      outline: `
        bg-transparent text-[var(--brand-500)] border-2 border-[var(--brand-500)]
        hover:bg-[var(--brand-500)] hover:text-white
        active:scale-[0.98]
      `,
      ghost: `
        bg-transparent text-[var(--text)]
        hover:bg-[var(--surface)] hover:text-[var(--brand-500)]
        active:scale-[0.98]
      `,
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
      md: "px-6 py-3 text-base rounded-xl gap-2",
      lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${widthClass}
          ${className}
        `.trim().replace(/\s+/g, " ")}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
```