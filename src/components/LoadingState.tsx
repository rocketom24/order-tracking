import { motion } from 'framer-motion'
import Card from './Card'

function Shimmer({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gray-100 ${className}`}>
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

function BagLoader() {
  return (
    <div className="flex flex-col items-center py-3">
      <motion.div
        className="text-5xl"
        animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      >
        🛍️
      </motion.div>
      <motion.div
        className="mt-2 h-1.5 w-10 rounded-full bg-emerald-200"
        animate={{ scaleX: [1, 0.6, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <p className="mt-3 text-xs font-medium text-gray-400">Loading your order…</p>
    </div>
  )
}

export default function LoadingState() {
  return (
    <div className="relative min-h-[620px]">
      <div className="flex flex-col gap-4 opacity-20">
        <Card>
          <Shimmer className="h-4 w-24 mb-4" />
          <div className="flex flex-col gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-3">
                <Shimmer className="h-7 w-7 rounded-full shrink-0" />
                <div className="flex-1 flex flex-col gap-2">
                  <Shimmer className="h-3.5 w-28" />
                  <Shimmer className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Shimmer className="h-16" />
        <Card className="flex items-center gap-3">
          <Shimmer className="h-16 w-16 shrink-0" />
          <div className="flex-1 flex flex-col gap-2">
            <Shimmer className="h-3 w-20" />
            <Shimmer className="h-3.5 w-36" />
          </div>
        </Card>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <BagLoader />
      </div>
    </div>
  )
}
