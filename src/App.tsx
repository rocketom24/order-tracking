import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { mockOrders } from './data/mockOrders'
import type { ScenarioKey } from './types'
import OrderTrackingScreen from './components/OrderTrackingScreen'
import LoadingState from './components/LoadingState'
import EmptyState from './components/EmptyState'
import ErrorState from './components/ErrorState'

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
    <div className="min-h-screen w-full flex flex-col items-center py-8 px-4 bg-[#f4f3f7]">
      <div className="w-full max-w-[400px] flex flex-col gap-4">
        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Demo controls</p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {scenarios.map((s) => (
              <button
                key={s.key}
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
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(['loading', 'empty', 'error'] as const).map((o) => (
              <button
                key={o}
                onClick={() => setOverride(override === o ? 'none' : o)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
                  override === o ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-4 min-h-[520px] shadow-[0_8px_30px_rgba(20,15,40,0.08)]">
          <AnimatePresence mode="wait">
            {override === 'loading' && (
              <motion.div key="loading" exit={{ opacity: 0 }}>
                <LoadingState />
              </motion.div>
            )}
            {override === 'empty' && (
              <motion.div key="empty" exit={{ opacity: 0 }}>
                <EmptyState />
              </motion.div>
            )}
            {override === 'error' && (
              <motion.div key="error" exit={{ opacity: 0 }}>
                <ErrorState onRetry={forceRefresh} />
              </motion.div>
            )}
            {override === 'none' && (
              <OrderTrackingScreen key={contentKey} order={mockOrders[scenario]} onRefresh={forceRefresh} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
