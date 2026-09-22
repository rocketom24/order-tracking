export type StepStatus = 'processing' | 'shipped' | 'out_for_delivery' | 'delivered'

export interface TimelineStep {
  status: StepStatus
  label: string
  timestamp: string | null
  done: boolean
}

export interface Product {
  name: string
  image: string
  qty: number
  price: number
}

export interface Order {
  id: string
  status: StepStatus
  steps: TimelineStep[]
  estimatedDelivery: string
  delayed: boolean
  missingReported: boolean
  trackingAvailable: boolean
  product: Product
}

export type ScenarioKey = 'normal' | 'delayed' | 'missing' | 'no_tracking'

export type ViewState = 'loading' | 'empty' | 'error' | 'ready'
