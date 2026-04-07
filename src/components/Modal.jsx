import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({
  isOpen,
  title,
  message,
  icon = null,
  onClose,
  buttonText = 'Close'
}) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {icon}
            <h3 id="modal-title">{title}</h3>
            <p>{message}</p>
            <button type="button" className="modal-close-btn" onClick={onClose}>
              {buttonText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
