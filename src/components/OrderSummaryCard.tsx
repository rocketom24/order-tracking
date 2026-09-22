import type { Product } from '../types'
import Card from './Card'

export default function OrderSummaryCard({ product, orderId }: { product: Product; orderId: string }) {
  return (
    <Card className="flex items-center gap-3">
      <img
        src={product.image}
        alt={product.name}
        className="h-16 w-16 rounded-2xl object-cover shrink-0 bg-gray-100"
      />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-gray-400 truncate">Order {orderId}</p>
        <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">Qty {product.qty}</p>
      </div>
      <p className="text-sm font-semibold text-gray-900 shrink-0">${product.price.toFixed(2)}</p>
    </Card>
  )
}
