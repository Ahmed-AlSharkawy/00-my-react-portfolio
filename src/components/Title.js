import React from 'react'

const Title = ({ titel }) => {
  return (
    <div className='title'>
      <h3>{titel}</h3>
      <div className='underline'></div>
    </div>
  )
}

export default Title
