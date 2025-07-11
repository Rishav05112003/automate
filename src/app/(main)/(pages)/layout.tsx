import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-[1px] scrollbar-hidden border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 ">
      {children}
    </div>
  )
}

export default Layout