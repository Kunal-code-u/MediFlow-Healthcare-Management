import Image from "next/image";

import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={`
        ${className ?? "w-full"} 
        bg-gradient-to-r from-primary-500 to-medical-500 
        hover:from-primary-600 hover:to-medical-600 
        text-white font-semibold text-base py-4 px-6 
        rounded-xl shadow-lg hover:shadow-xl 
        transition-all duration-300 transform hover:scale-[1.02] 
        disabled:opacity-50 disabled:cursor-not-allowed
        relative overflow-hidden group
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-medical-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        {isLoading ? (
          <>
            <div className="relative">
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={20}
                height={20}
                className="animate-spin"
              />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
            </div>
            <span className="font-medium">Processing...</span>
          </>
        ) : (
          <>
            <span className="font-medium">{children}</span>
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full group-hover:animate-pulse"></div>
          </>
        )}
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </Button>
  );
};

export default SubmitButton;
