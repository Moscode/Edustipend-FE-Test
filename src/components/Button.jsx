import React from 'react'

const Button = ({content}) => {
  return (
    <button className="bg-[#ff9900] rounded px-[1.2rem] py-[0.3rem]">
        {content}
    </button>
  )
}

export default Button