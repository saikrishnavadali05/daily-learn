import React, { useState, useRef } from 'react';
import styles from './QABox.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import copy from 'copy-to-clipboard';

export default function Answer({ children }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  const handleCopy = (e) => {
    e.stopPropagation(); // Prevent collapse toggle
    const text = contentRef.current?.innerText ?? '';
    copy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className={styles.answerBox}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>💡 Answer</strong>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button onClick={handleCopy} className={styles.copyBtn}>
            {copied ? '✅ Copied' : '📋 Copy'}
          </button>
          <span
            style={{ cursor: 'pointer', fontWeight: 500 }}
            onClick={() => setShow(!show)}
          >
            {show ? '▲ Hide' : '▼ Show'}
          </span>
        </div>
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
            ref={contentRef}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
