import React from 'react';
import styles from './QABox.module.css';
import { motion } from 'framer-motion';


export default function Question({ children }) {
  return (
    <motion.div
      className={styles.questionBox}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <strong>❓ Question</strong>
      <div>{children}</div>
    </motion.div>
  );
}
