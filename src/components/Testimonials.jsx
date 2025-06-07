import React from 'react'

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">What Clients Say</h3>
        <div className="space-y-8">
          <blockquote className="text-gray-700 italic">"SmartWeb gave us a stunning site in record time. Highly recommend!" <br /><span className="text-blue-600 font-semibold">– Jane, Startup CEO</span></blockquote>
          <blockquote className="text-gray-700 italic">"Professional, responsive, and creative. They really care about the project." <br /><span className="text-blue-600 font-semibold">– Daniel, Business Owner</span></blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
