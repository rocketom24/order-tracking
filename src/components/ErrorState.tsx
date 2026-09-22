import { motion } from 'framer-motion'
import Card from './Card'

export default function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[620px] items-center justify-center"
    >
      <Card className="flex flex-col items-center text-center py-10">
        <div className="text-4xl mb-3">⚠️</div>
        <p className="text-sm font-semibold text-gray-900">Couldn't load tracking</p>
        <p className="text-xs text-gray-400 mt-1.5 max-w-[260px]">
          Something went wrong on our end. Check your connection and try again.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          onClick={onRetry}
          className="mt-4 rounded-xl bg-emerald-600 text-white text-xs font-semibold px-4 py-2"
        >
          Try again
        </motion.button>
      </Card>
    </motion.div>
  )
}
