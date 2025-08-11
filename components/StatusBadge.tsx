import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "scheduled":
        return {
          container: "bg-gradient-to-r from-success-500/20 to-success-600/20 border-success-500/30 text-success-400",
          icon: "success-glow",
          text: "text-success-400"
        };
      case "pending":
        return {
          container: "bg-gradient-to-r from-warning-500/20 to-warning-600/20 border-warning-500/30 text-warning-400",
          icon: "warning-glow",
          text: "text-warning-400"
        };
      case "cancelled":
        return {
          container: "bg-gradient-to-r from-error-500/20 to-error-600/20 border-error-500/30 text-error-400",
          icon: "error-glow",
          text: "text-error-400"
        };
      default:
        return {
          container: "bg-gradient-to-r from-neutral-500/20 to-neutral-600/20 border-neutral-500/30 text-neutral-400",
          icon: "",
          text: "text-neutral-400"
        };
    }
  };

  const statusStyle = getStatusStyle();

  return (
    <div
      className={clsx(
        "status-badge group transition-all duration-300 hover:scale-105",
        statusStyle.container
      )}
    >
      <div className={`relative p-1 rounded-lg ${statusStyle.icon}`}>
        <Image
          src={StatusIcon[status]}
          alt={status}
          width={24}
          height={24}
          className="h-fit w-3 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className={clsx("text-12-semibold capitalize font-medium", statusStyle.text)}>
        {status}
      </p>
      
      {/* Animated dot */}
      <div className={`w-1.5 h-1.5 rounded-full ${statusStyle.text.replace('text-', 'bg-')} animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};
