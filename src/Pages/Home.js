import React, { useState } from 'react'
import AppData from '../AppData'
import { Filters, Title, AppCard } from '../components'

const Home = () => {
  const [filter, setFilter] = useState('all')

  const settingAppSection = (filterValue, titleValue) => {
    if (filter === 'all' || filter === filterValue) {
      return (
        <>
          <Title titel={`${titleValue} Applications`} />
          <section className='card-container'>
            {AppData.filter((app) => app.level === filterValue)
              .reverse()
              .map((app) => {
                return <AppCard key={app.id} {...app} />
              })}
          </section>
        </>
      )
    }
  }

  return (
    <>
      <Filters setFilter={setFilter} />
      {settingAppSection('large', 'Large-Scale')}
      {settingAppSection('advanced', 'Advanced')}
      {settingAppSection('intermediate', 'Intermediate')}
      {settingAppSection('basic', 'Basic')}
    </>

    /* 
    <>
      {(filter === 'all' || filter === 'large') && (
        <>
          <Title titel='Large-Scale Applications' />
          {AppData.filter((app) => app.level === 'large').map((app) => {
            return <AppCard key={app.id} {...app} />
          })}
        </>
      )}
      {(filter === 'all' || filter === 'advanced') && (
        <>
          <Title titel='Advanced Applications' />
          {AppData.filter((app) => app.level === 'advanced').map((app) => {
            return <AppCard key={app.id} {...app} />
          })}
        </>
      )}
      {(filter === 'all' || filter === 'intermediate') && (
        <>
          <Title titel='Intermediate Applications' />
          {AppData.filter((app) => app.level === 'intermediate').map((app) => {
            return <AppCard key={app.id} {...app} />
          })}
        </>
      )}
      {(filter === 'all' || filter === 'basic') && (
        <>
          <Title titel='Basic Applications' />
          {AppData.filter((app) => app.level === 'basic').map((app) => {
            return <AppCard key={app.id} {...app} />
          })}
        </>
      )}
    </>
  */
  )
}

export default Home
