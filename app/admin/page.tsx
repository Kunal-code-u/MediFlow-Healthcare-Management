import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Navigation from "@/components/Navigation";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <header className="admin-header fade-in-up">
        <Navigation title="Admin Dashboard" />
      </header>

      <main className="admin-main relative z-10">
        <section className="w-full space-y-4 fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-medical-500 rounded-full"></div>
            <h1 className="header">Welcome to MediFlow 👋</h1>
          </div>
          <p className="text-neutral-400 text-lg">
            Manage appointments and provide exceptional healthcare services
          </p>
        </section>

        <section className="admin-stat fade-in-up">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <div className="fade-in-up">
          <DataTable columns={columns} data={appointments.documents} />
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
