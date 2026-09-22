import { AnimatePresence, motion } from 'framer-motion'

const options = [
  { icon: '💬', label: 'Chat with us', hint: 'Avg reply time 2 min' },
  { icon: '📞', label: 'Call support', hint: '+1 (800) 555-0199' },
  { icon: '✉️', label: 'Email us', hint: 'support@example.com' },
]

export default function SupportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded-t-3xl bg-white p-5 pb-8"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-200" />
            <p className="text-base font-semibold text-gray-900 mb-3">Contact support</p>
            <div className="flex flex-col gap-2">
              {options.map((opt) => (
                <motion.button
                  key={opt.label}
                  whileHover={{ scale: 1.015, backgroundColor: '#f3f4f6' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3 text-left"
                >
                  <span className="text-xl">{opt.icon}</span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-gray-900">{opt.label}</span>
                    <span className="block text-xs text-gray-400">{opt.hint}</span>
                  </span>
                </motion.button>
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={onClose}
              className="mt-3 w-full rounded-2xl py-2.5 text-sm font-medium text-gray-400"
            >
              Cancel
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
