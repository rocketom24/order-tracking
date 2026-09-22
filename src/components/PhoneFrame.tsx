import type { ReactNode } from 'react'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto h-[812px] w-[375px] rounded-[55px] bg-gray-950 p-[14px] shadow-[0_30px_60px_-15px_rgba(20,15,40,0.35),0_0_0_2px_rgba(255,255,255,0.06)]">
      <div className="absolute -left-[2px] top-[120px] h-8 w-[3px] rounded-l bg-gray-800" />
      <div className="absolute -left-[2px] top-[165px] h-14 w-[3px] rounded-l bg-gray-800" />
      <div className="absolute -left-[2px] top-[230px] h-14 w-[3px] rounded-l bg-gray-800" />
      <div className="absolute -right-[2px] top-[190px] h-20 w-[3px] rounded-r bg-gray-800" />

      <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-[#f4f3f7]">
        <div className="absolute left-1/2 top-0 z-20 h-[28px] w-[120px] -translate-x-1/2 rounded-b-2xl bg-gray-950" />

        <div className="h-full w-full overflow-y-auto px-4 pb-8 pt-11 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {children}
        </div>

        <div className="pointer-events-none absolute bottom-2 left-1/2 z-20 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-gray-900/70" />
      </div>
    </div>
  )
}
