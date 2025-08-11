"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavigationProps {
  showBackButton?: boolean;
  title?: string;
}

const Navigation = ({ showBackButton = false, title }: NavigationProps) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <button
          onClick={handleLogoClick}
          className="group cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="relative">
            <Image
              src="/assets/icons/logo-unique.svg"
              height={60}
              width={200}
              alt="MediFlow Logo"
              className="h-12 w-fit"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-medical-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>
        
        {title && (
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-medical-500 rounded-full"></div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-primary-400 to-medical-400 bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
        )}
      </div>

      {showBackButton && (
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300 text-neutral-300 hover:text-primary-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
      )}
    </div>
  );
};

export default Navigation;

