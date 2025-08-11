"use client";

import Image from "next/image";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const LoadingSpinner = ({ size = "md", text = "Loading..." }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl glass-effect border border-neutral-700/50">
        <div className="relative">
          <Image
            src="/assets/icons/loader.svg"
            alt="Loading"
            width={size === "sm" ? 24 : size === "md" ? 32 : 48}
            height={size === "sm" ? 24 : size === "md" ? 32 : 48}
            className={`${sizeClasses[size]} animate-spin`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-medical-500/20 rounded-full blur-sm"></div>
        </div>
        <p className="text-neutral-300 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

