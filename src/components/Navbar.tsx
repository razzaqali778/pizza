import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-center border-b-2 border-b-red-500 uppercase">
      <div className="text-xl">
        <Link href="/">Massimo</Link>
      </div>
      <Menu />
    </div>
  )
}

export default Navbar
