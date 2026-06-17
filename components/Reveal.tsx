'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// No opacity:0 in the resting state — content is always visible (SSR included);
// the slide is purely additive, so nothing can get stuck hidden on mobile.
const variants: Variants = {
  hidden: { y: 24 },
  visible: { y: 0 },
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
