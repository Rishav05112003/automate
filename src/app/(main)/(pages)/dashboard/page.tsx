import React from 'react'

const DashboardPage = () => {
  return (
    <div className="flex flex-col scrollbar-hidden gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 scrollbar-hidden backdrop-blur-lg flex items-center border-b">
        <span className='font-sans text-white'>Dashboard</span>
      </h1>
    </div>
  )
}

export default DashboardPage