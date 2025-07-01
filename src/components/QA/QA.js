import React, { useState, useRef } from 'react';
import styles from './QA.module.css';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence } from 'framer-motion';

export default function QA({ question, children }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  const handleCopy = (e) => {
    e.stopPropagation();
    const text = contentRef.current?.innerText ?? '';
    copy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className={styles.qaBox}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.questionBox}>
        <strong>❓ {question}</strong>
      </div>

      <div className={styles.answerHeader}>
        <div className={styles.answerTitle}>💡 Answer</div>
        <div className={styles.answerActions}>
          <button onClick={handleCopy} className={styles.copyBtn}>
            {copied ? '✅ Copied' : '📋 Copy'}
          </button>
          <span onClick={() => setShow(!show)} className={styles.toggleBtn}>
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
            className={styles.answerBox}
            ref={contentRef}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
