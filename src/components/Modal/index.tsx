import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
// close icon

const modalStyles = cva(
  [
    "fixed inset-0 z-50 flex items-center justify-center",
    "bg-black/50 backdrop-blur-sm", // overlay
  ]
);

const modalContentStyles = cva(
  [
    "bg-white dark:bg-gray-900 rounded-xl shadow-lg",
    "overflow-hidden",
    "animate-in fade-in zoom-in-95 duration-200",
  ],
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        md: "w-full max-w-md",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
} & ComponentProps<"div"> &
  VariantProps<typeof modalContentStyles>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, size, className, children, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div className={modalStyles()} role="dialog" aria-modal="true">
        <div
          ref={ref}
          className={cn(modalContentStyles({ size }), className)}
          {...props}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold">{title}</h2>
             <button
  onClick={onClose}
  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-xl"
>
  ×
</button>

            </div>
          )}

          {/* Body */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
