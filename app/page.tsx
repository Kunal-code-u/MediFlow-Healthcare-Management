// Home page
import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import Navigation from "@/components/Navigation";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="min-h-screen flex flex-col relative">
      {isAdmin && <PasskeyModal />}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-medical-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Centered Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-8">
        <div className="w-full max-w-md mx-auto px-6 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Image
                src="/assets/icons/logo-unique.svg"
                height={60}
                width={200}
                alt="MediFlow Logo"
                className="h-16 w-fit"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-medical-500/20 rounded-lg blur-xl"></div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-neutral-700/50 shadow-2xl">
            <PatientForm />
          </div>

          <div className="text-14-regular mt-6 flex justify-between items-center">
            <p className="text-neutral-400">
              © 2025 MediFlow - Healthcare Management
            </p>
            <Link 
              href="/?admin=true" 
              className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
            >
              Admin Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
