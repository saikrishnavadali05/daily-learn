import React, { useState } from 'react';
import styles from './QABox.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Answer({ children }) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      className={styles.answerBox}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setShow(!show)}>
        <strong>💡 Answer</strong>
        <span>{show ? '▲ Hide' : '▼ Show'}</span>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            key="answerContent"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', marginTop: '0.5rem' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
