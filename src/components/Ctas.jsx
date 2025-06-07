import React from 'react'
import Btn_White from './btn-white'
import Btn_Default from './btn_default'

const Ctas = ({
  bg = 'bg-gray-700',
  ctaTittle = 'Add Your Title',
  ctaSubTitle = 'Add your sub-title',
}) => {
  return (
    <section id="contact" className={`py-16 ${bg} text-white text-center`}>
      <div className="max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-4">{ctaTittle}</h3>
      <p className="mb-6">{ctaSubTitle}</p>
      <div className="flex align-center justify-center">
          <Btn_White
            linkAdress='#'
            linkText='Get Started'
            target='_self'
          />
          <Btn_Default
            linkAddress='https://www.netlify.com'
            linkText='Learn More'
            target='_blank'
          />
      </div>
    </div>
  </section>
  )
}

export default Ctas
