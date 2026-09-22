import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(20,15,40,0.12)' }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`rounded-3xl bg-white shadow-[0_4px_20px_rgba(20,15,40,0.06)] p-5 ${className}`}
    >
      {children}
    </motion.div>
  )
}
