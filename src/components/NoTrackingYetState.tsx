import { motion } from 'framer-motion'
import Card from './Card'

export default function NoTrackingYetState({ onRefresh }: { onRefresh: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="flex flex-col items-center text-center py-8">
        <div className="text-4xl mb-3">📦</div>
        <p className="text-sm font-semibold text-gray-900">Tracking not available yet</p>
        <p className="text-xs text-gray-400 mt-1.5 max-w-[260px]">
          Your order's been placed and is being prepared. Tracking details will appear here once it ships.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          onClick={onRefresh}
          className="mt-4 rounded-xl bg-gray-100 text-gray-700 text-xs font-semibold px-4 py-2"
        >
          Check again
        </motion.button>
      </Card>
    </motion.div>
  )
}
