import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-10">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Web Design</h4>
          <p className="text-gray-600">Responsive and user-friendly designs tailored to your brand.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Development</h4>
          <p className="text-gray-600">Fast, secure, and scalable websites built with modern tech.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">SEO Optimization</h4>
          <p className="text-gray-600">Get discovered on Google with our search engine strategies.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
