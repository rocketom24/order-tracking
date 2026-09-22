import { motion } from 'framer-motion'
import Card from './Card'

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[620px] items-center justify-center"
    >
      <Card className="flex flex-col items-center text-center py-10">
        <div className="text-4xl mb-3">🧾</div>
        <p className="text-sm font-semibold text-gray-900">No order found</p>
        <p className="text-xs text-gray-400 mt-1.5 max-w-[260px]">
          We couldn't find any order matching this link. Double-check the order ID and try again.
        </p>
      </Card>
    </motion.div>
  )
}
