import React, { useContext } from 'react'
import { FiltersContext } from '../Context/filterContext'

export default function useFilters() {
const { filters, setFilters } = useContext(FiltersContext)

const filterTasks = (listTasks) => {
    return listTasks.filter(task => {
      return(
        task.status === filters.status && (
          filters.priority === 'all' ||
          task.priority === filters.priority
        )
      )
    })
  }

  return { setFilters, filters, filterTasks }
}
