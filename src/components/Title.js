import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='title'>
      <h3>{title}</h3>
      <div className='underline'></div>
    </div>
  )
}

export default Title
