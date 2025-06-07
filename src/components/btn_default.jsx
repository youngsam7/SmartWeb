import React from 'react'

const Btn_Default = ({linkAdress='#', linkText='Click Me', target='self'}) => {
  return (
    <a href={linkAdress}
      className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition me-3"
      target={target}
    >{linkText}</a>
  )
}

export default Btn_Default
