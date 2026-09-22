import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Order } from '../types'
import Card from './Card'
import DeliveryTimeline from './DeliveryTimeline'
import EstimatedDelivery from './EstimatedDelivery'
import OrderSummaryCard from './OrderSummaryCard'
import ReportMissingPackageBanner from './ReportMissingPackageBanner'
import NoTrackingYetState from './NoTrackingYetState'
import SupportModal from './SupportModal'

const statusLabel: Record<Order['status'], string> = {
  processing: 'Processing',
  shipped: 'Shipped',
  out_for_delivery: 'Out for delivery',
  delivered: 'Delivered',
}

export default function OrderTrackingScreen({ order, onRefresh }: { order: Order; onRefresh: () => void }) {
  const [supportOpen, setSupportOpen] = useState(false)
  const [missingReported, setMissingReported] = useState(order.missingReported)

  const showMissingBanner = order.status === 'delivered'

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs text-gray-400">Order status</p>
        <h1 className="text-xl font-semibold text-gray-900">{statusLabel[order.status]}</h1>
      </div>

      {order.trackingAvailable ? (
        <Card>
          <DeliveryTimeline steps={order.steps} currentStatus={order.status} />
        </Card>
      ) : (
        <NoTrackingYetState onRefresh={onRefresh} />
      )}

      <EstimatedDelivery
        estimatedDelivery={order.estimatedDelivery}
        delayed={order.delayed}
        onRefresh={onRefresh}
        onContactSupport={() => setSupportOpen(true)}
      />

      {showMissingBanner && (
        <ReportMissingPackageBanner reported={missingReported} onReport={() => setMissingReported(true)} />
      )}

      <OrderSummaryCard product={order.product} orderId={order.id} />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onClick={() => setSupportOpen(true)}
        className="w-full rounded-2xl bg-emerald-700 text-white text-sm font-semibold py-3"
      >
        Contact support
      </motion.button>

      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
    </div>
  )
}
