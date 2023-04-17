import React from 'react'
import Filters from '../../components/Filters/Filters'
import CardTask from '../../components/CardTask/CardTask'

export default function Home() {
  return (
    <div className=''>
        <Filters />
        <CardTask />
    </div>
  )
}
