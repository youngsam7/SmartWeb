import React from 'react'

const NavDefault = () => {
  return (
    <nav className="space-x-6 hidden md:block">
      <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
      <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
      <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
    </nav>
  )
}

export default NavDefault
