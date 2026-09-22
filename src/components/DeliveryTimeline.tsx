import { motion, type Variants } from 'framer-motion'
import type { TimelineStep } from '../types'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, x: -16, scale: 0.9 },
  show: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 340, damping: 22 } },
}

export default function DeliveryTimeline({ steps, currentStatus }: { steps: TimelineStep[]; currentStatus: string }) {
  if (steps.length === 0) return null

  return (
    <motion.ol variants={container} initial="hidden" animate="show" className="flex flex-col">
      {steps.map((step, i) => {
        const isCurrent = step.status === currentStatus
        const isLast = i === steps.length - 1
        return (
          <motion.li key={step.status} variants={item} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={[
                  'relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold',
                  step.done
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-400 ring-1 ring-gray-200',
                ].join(' ')}
              >
                {step.done ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.1 }}
                  >
                    ✓
                  </motion.span>
                ) : (
                  ''
                )}
                {isCurrent && !step.done ? (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ) : null}
              </span>
              {!isLast && (
                <span
                  className={`w-0.5 flex-1 min-h-6 ${step.done ? 'bg-emerald-600' : 'bg-gray-200'}`}
                />
              )}
            </div>
            <div className={`pb-6 ${isLast ? 'pb-0' : ''}`}>
              <p className={`text-sm font-medium ${step.done || isCurrent ? 'text-gray-900' : 'text-gray-400'}`}>
                {step.label}
                {isCurrent && (
                  <span className="ml-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 align-middle">
                    Current
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{step.timestamp ?? 'Pending'}</p>
            </div>
          </motion.li>
        )
      })}
    </motion.ol>
  )
}
