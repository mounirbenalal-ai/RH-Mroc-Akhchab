import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AppCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  glowColor: string;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

const AppCard = ({ name, description, icon, glowColor, gradient, delay = 0, onClick }: AppCardProps) => {
  return (
    <motion.div
      className="glass rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ boxShadow: `0 0 40px ${glowColor}, inset 0 0 40px ${glowColor}` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: gradient }}
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: gradient }}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-sm">{name}</h3>
          <p className="text-muted-foreground text-xs mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppCard;
