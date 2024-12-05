import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

interface AnimatedModalProps {
  showModal: boolean;
  isSuccess: boolean;
}

const AnimatedModal = ({ showModal, isSuccess }: AnimatedModalProps) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "100%" }}
          animate={{ opacity: 1, y: 0, x: "0%" }}
          exit={{ opacity: 0, y: 50, x: "100%" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          } text-white flex items-center space-x-2`}
        >
          {isSuccess ? (
            <CheckCircle className="w-6 h-6" />
          ) : (
            <XCircle className="w-6 h-6" />
          )}
          <span>
            {isSuccess
              ? "Copied successfully"
              : "Error: There is nothing to copy"}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedModal;
