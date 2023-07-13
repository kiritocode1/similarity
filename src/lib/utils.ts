import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn (...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}; 

// twMerge is a function that merges tailwind classes px-2, py-2 -> p2
