import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { mockOrders } from './data/mockOrders'
import type { ScenarioKey } from './types'
import OrderTrackingScreen from './components/OrderTrackingScreen'
import LoadingState from './components/LoadingState'
import EmptyState from './components/EmptyState'
import ErrorState from './components/ErrorState'
import PhoneFrame from './components/PhoneFrame'

const screenVariants: Variants = {
  initial: { opacity: 0, scale: 0.96, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.15 } },
}

const scenarios: { key: ScenarioKey; label: string }[] = [
  { key: 'normal', label: 'Normal' },
  { key: 'delayed', label: 'Delayed' },
  { key: 'missing', label: 'Missing' },
  { key: 'no_tracking', label: 'No tracking' },
]

type Override = 'none' | 'loading' | 'error' | 'empty'

export default function App() {
  const [scenario, setScenario] = useState<ScenarioKey>('normal')
  const [override, setOverride] = useState<Override>('none')

  const forceRefresh = () => {
    setOverride('loading')
    window.setTimeout(() => setOverride('none'), 900)
  }

  const contentKey = override === 'none' ? scenario : override

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4f3f7] py-10 px-4">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[400px] flex-col items-center gap-6">
        <div className="w-full rounded-2xl bg-white p-3 shadow-sm">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Demo controls</p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {scenarios.map((s) => (
              <motion.button
                key={s.key}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                onClick={() => {
                  setScenario(s.key)
                  setOverride('none')
                }}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  scenario === s.key && override === 'none'
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {s.label}
              </motion.button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(['loading', 'empty', 'error'] as const).map((o) => (
              <motion.button
                key={o}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                onClick={() => setOverride(override === o ? 'none' : o)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
                  override === o ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {o}
              </motion.button>
            ))}
          </div>
        </div>

        <PhoneFrame>
          <AnimatePresence mode="wait">
            {override === 'loading' && (
              <motion.div key="loading" variants={screenVariants} initial="initial" animate="animate" exit="exit">
                <LoadingState />
              </motion.div>
            )}
            {override === 'empty' && (
              <motion.div key="empty" variants={screenVariants} initial="initial" animate="animate" exit="exit">
                <EmptyState />
              </motion.div>
            )}
            {override === 'error' && (
              <motion.div key="error" variants={screenVariants} initial="initial" animate="animate" exit="exit">
                <ErrorState onRetry={forceRefresh} />
              </motion.div>
            )}
            {override === 'none' && (
              <motion.div key={contentKey} variants={screenVariants} initial="initial" animate="animate" exit="exit">
                <OrderTrackingScreen order={mockOrders[scenario]} onRefresh={forceRefresh} />
              </motion.div>
            )}
          </AnimatePresence>
        </PhoneFrame>
      </div>
    </div>
  )
}
