import type { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl bg-white shadow-[0_4px_20px_rgba(20,15,40,0.06)] p-5 ${className}`}>
      {children}
    </div>
  )
}
