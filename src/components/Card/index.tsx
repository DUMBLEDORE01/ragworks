import { cn } from "@/utils";
import { forwardRef, ComponentProps } from "react";

// Base Card
export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border bg-white shadow-md overflow-hidden transition hover:shadow-lg",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

// Card Header
export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("px-4 py-3 border-b", className)} {...props} />
    );
  }
);
CardHeader.displayName = "CardHeader";

// Card Body
export const CardBody = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-4", className)} {...props} />
    );
  }
);
CardBody.displayName = "CardBody";

// Card Footer
export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("px-4 py-3 border-t bg-gray-50", className)} {...props} />
    );
  }
);
CardFooter.displayName = "CardFooter";

// Card Image
export const CardImage = forwardRef<
  HTMLImageElement,
  ComponentProps<"img">
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn("w-full h-48 object-cover", className)}
      {...props}
    />
  );
});
CardImage.displayName = "CardImage";
