'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Animates on mount (not scroll-gated) so content is always revealed,
// even if a mobile browser's IntersectionObserver doesn't fire reliably.
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
