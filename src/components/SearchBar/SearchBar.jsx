import React from 'react'

export default function SearchBar() {
  return (
    <div className='w-2/5 mx-auto my-10'>
        <input type="text" 
        placeholder='Busque una tarea...'
        className='w-full p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 item' />
    </div>
  )
}
