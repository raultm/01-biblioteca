import React from 'react'
import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <Outlet/>
    </div>
  )
}
