import React from 'react'

const Btn_White = ({linkAdress='#', linkText='Click Me', target='self'}) => {
  return (
    <a href={linkAdress}
      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition me-3"
      target={target}
    >{linkText}</a>
  )
}

export default Btn_White
