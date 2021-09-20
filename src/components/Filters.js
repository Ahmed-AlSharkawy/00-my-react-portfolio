import React from 'react'

const Filters = ({ filter, setFilter }) => {
  return (
    <section className='filters'>
      <div className='all'>
        <button
          type='btn'
          className={filter === 'all' ? 'card-btn active' : 'card-btn'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
      </div>
      <div className='rest'>
        <button
          type='btn'
          className={filter === 'large' ? 'card-btn active' : 'card-btn'}
          onClick={() => setFilter('large')}
        >
          Large
        </button>
        <button
          type='btn'
          className={filter === 'advanced' ? 'card-btn active' : 'card-btn'}
          onClick={() => setFilter('advanced')}
        >
          Advanced
        </button>
        <button
          type='btn'
          className={filter === 'intermediate' ? 'card-btn active' : 'card-btn'}
          onClick={() => setFilter('intermediate')}
        >
          Intermediate
        </button>
        <button
          type='btn'
          className={filter === 'basic' ? 'card-btn active' : 'card-btn'}
          onClick={() => setFilter('basic')}
        >
          basic
        </button>
      </div>
    </section>
  )
}

export default Filters
