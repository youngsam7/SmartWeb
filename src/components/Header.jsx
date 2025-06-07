import React from 'react'
import NavDefault from './NavDefault'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">SmartWeb</h1>
      <NavDefault />
    </div>
  </header>
  )
}

export default Header
