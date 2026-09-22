import { motion } from 'framer-motion'

export default function EstimatedDelivery({
  estimatedDelivery,
  delayed,
  onRefresh,
  onContactSupport,
}: {
  estimatedDelivery: string
  delayed: boolean
  onRefresh: () => void
  onContactSupport: () => void
}) {
  if (delayed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl bg-amber-50 border border-amber-200 p-4"
      >
        <p className="text-sm font-semibold text-amber-800">Delivery delayed</p>
        <p className="text-xs text-amber-700 mt-1">
          This order missed its estimate ({estimatedDelivery}). We're checking with the carrier.
        </p>
        <div className="flex gap-2 mt-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={onRefresh}
            className="flex-1 rounded-xl bg-white border border-amber-300 text-amber-800 text-xs font-semibold py-2"
          >
            Refresh status
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={onContactSupport}
            className="flex-1 rounded-xl bg-amber-600 text-white text-xs font-semibold py-2"
          >
            Contact support
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-emerald-50 p-4"
    >
      <p className="text-xs text-emerald-700 font-medium">Estimated delivery</p>
      <p className="text-base font-semibold text-emerald-900 mt-0.5">{estimatedDelivery}</p>
    </motion.div>
  )
}
