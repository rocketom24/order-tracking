import type { Order, ScenarioKey } from '../types'

const product = {
  name: 'Nimbus Wireless Headphones',
  image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=300&h=300&fit=crop',
  qty: 1,
  price: 89.99,
}

const baseSteps = (upTo: number, timestamps: (string | null)[]) => {
  const labels = ['Processing', 'Shipped', 'Out for delivery', 'Delivered'] as const
  const statuses = ['processing', 'shipped', 'out_for_delivery', 'delivered'] as const
  return labels.map((label, i) => ({
    status: statuses[i],
    label,
    timestamp: timestamps[i] ?? null,
    done: i <= upTo,
  }))
}

export const mockOrders: Record<ScenarioKey, Order> = {
  normal: {
    id: 'ORD-48213',
    status: 'out_for_delivery',
    steps: baseSteps(2, ['Mon, 9:02 AM', 'Mon, 3:40 PM', 'Today, 8:15 AM', null]),
    estimatedDelivery: 'Today, by 6:00 PM',
    delayed: false,
    missingReported: false,
    trackingAvailable: true,
    product,
  },
  delayed: {
    id: 'ORD-48214',
    status: 'out_for_delivery',
    steps: baseSteps(2, ['Fri, 9:02 AM', 'Fri, 3:40 PM', 'Yesterday, 8:15 AM', null]),
    estimatedDelivery: 'Yesterday, by 6:00 PM',
    delayed: true,
    missingReported: false,
    trackingAvailable: true,
    product,
  },
  missing: {
    id: 'ORD-48215',
    status: 'delivered',
    steps: baseSteps(3, ['Wed, 9:02 AM', 'Wed, 3:40 PM', 'Thu, 8:15 AM', 'Thu, 1:22 PM']),
    estimatedDelivery: 'Delivered Thu, 1:22 PM',
    delayed: false,
    missingReported: false,
    trackingAvailable: true,
    product,
  },
  no_tracking: {
    id: 'ORD-48216',
    status: 'processing',
    steps: [],
    estimatedDelivery: 'Calculating estimate…',
    delayed: false,
    missingReported: false,
    trackingAvailable: false,
    product,
  },
}
