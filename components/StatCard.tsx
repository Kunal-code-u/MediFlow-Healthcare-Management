import clsx from "clsx";
import Image from "next/image";

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  const getCardStyle = () => {
    switch (type) {
      case "appointments":
        return "bg-gradient-to-br from-success-500/20 to-success-600/20 border-success-500/30 hover:border-success-400/50";
      case "pending":
        return "bg-gradient-to-br from-warning-500/20 to-warning-600/20 border-warning-500/30 hover:border-warning-400/50";
      case "cancelled":
        return "bg-gradient-to-br from-error-500/20 to-error-600/20 border-error-500/30 hover:border-error-400/50";
      default:
        return "bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border-neutral-700";
    }
  };

  const getIconGlow = () => {
    switch (type) {
      case "appointments":
        return "success-glow";
      case "pending":
        return "warning-glow";
      case "cancelled":
        return "error-glow";
      default:
        return "";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "appointments":
        return "text-success-400";
      case "pending":
        return "text-warning-400";
      case "cancelled":
        return "text-error-400";
      default:
        return "text-neutral-300";
    }
  };

  return (
    <div
      className={clsx(
        "stat-card group transition-all duration-500 hover:scale-105",
        getCardStyle()
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`relative p-3 rounded-xl bg-neutral-800/50 ${getIconGlow()}`}>
            <Image
              src={icon}
              height={32}
              width={32}
              alt={type}
              className="size-8 w-fit transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <h2 className={`text-32-bold ${getTextColor()} transition-colors duration-300`}>
              {count}
            </h2>
            <p className="text-14-regular text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
              {label}
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-2 h-2 rounded-full ${
            type === "appointments" ? "bg-success-500" :
            type === "pending" ? "bg-warning-500" :
            "bg-error-500"
          } animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
};
