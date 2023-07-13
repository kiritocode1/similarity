import { FC, forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
	"text-black dark:text-white  text-center  lg:text-left  font-extrabold leading-tight tracking-tighter ",
	{
		variants: {
			size: {
				default: "text-4xl md:text-5xl lg:text-6xl",
				sm: "text-2xl md:text-3xl lg:text-4xl",
				lg: "text-6xl md:text-7xl lg:text-8xl",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

interface LargeHeadingProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
	({ className, size, children, ...props }, ref) => {
		return (
			<p
				ref={ref}
				{...props}
				className={cn(headingVariants({ size, className }))}>
				{children}
			</p>
		);
	},
);
LargeHeading.displayName = "Heading";
export default LargeHeading;
