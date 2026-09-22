import { motion, AnimatePresence } from 'framer-motion'

export default function ReportMissingPackageBanner({
  reported,
  onReport,
}: {
  reported: boolean
  onReport: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-rose-50 border border-rose-200 p-4"
    >
      <AnimatePresence mode="wait">
        {reported ? (
          <motion.div
            key="reported"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-sm font-semibold text-rose-800">Report submitted</p>
            <p className="text-xs text-rose-700 mt-1">
              We've flagged this order. Our team will follow up within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.div key="prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="text-sm font-semibold text-rose-800">Marked as delivered</p>
            <p className="text-xs text-rose-700 mt-1">Didn't receive this package? Let us know.</p>
            <button
              onClick={onReport}
              className="mt-3 w-full rounded-xl bg-rose-600 text-white text-xs font-semibold py-2 active:scale-95 transition-transform"
            >
              Report missing package
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
