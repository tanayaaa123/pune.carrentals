import { motion } from "framer-motion";

export default function Splash({ done }) {
  return (
    <motion.div
      className="fixed inset-0 z-[300] grid place-items-center bg-navy-deep"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      animate={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ delay: 1.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={done}
    >
      <div className="relative">
        <div className="absolute -inset-5 rounded-full" style={{ border: "2px solid transparent", borderTopColor: "#D4AF37", borderRightColor: "#D4AF37", animation: "spin 1.4s linear infinite" }} />
        <motion.img src="/logo.png" alt="Pune.CarRentals" className="w-44 h-44 rounded-full" initial={{ scale: 0.3, opacity: 0, rotate: -90 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
      </div>
    </motion.div>
  );
}
