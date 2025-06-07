import React from 'react'

const HomeHero = ({ title='Welcome', subtitle="You are highly welcome to my first website" }) => {
  return (
    <section id="home" className="bg-blue-600 text-white text-center py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{subtitle}</p>
      <a href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Our Services</a>
    </div>
  </section>
  )
}

export default HomeHero