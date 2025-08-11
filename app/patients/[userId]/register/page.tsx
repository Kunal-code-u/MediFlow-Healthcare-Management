import Image from "next/image";
import { redirect } from "next/navigation";
// import * as Sentry from '@sentry/next.js'

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import Navigation from "@/components/Navigation";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  
  // Sentry.metrices.set("user_view_register", user.name);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section className="remove-scrollbar container relative z-10">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="mb-8">
            <Navigation />
          </div>

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2025 MediFlow - Healthcare Management</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
