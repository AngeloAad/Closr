import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
        {children}
    </div>
  )
}

export default Layout