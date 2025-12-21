import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function Page({ title, children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="py-8"
    >
      <div className="container-app">
        {title ? (
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted">
              Clean, modern shoe store UI (frontend-first, backend-ready).
            </p>
          </div>
        ) : null}
        {children}
      </div>
    </motion.div>
  );
}
