import data from './data.json'
import { useMemo, useState } from 'react'

const FILTERS = [
  {
    label: 'All',
    value: '*',
  },
  {
    label: '2023',
    value: '2023',
  },
  {
    label: '2022',
    value: '2022',
  },
  {
    label: '2021',
    value: '2021',
  },
  {
    label: 'CTF',
    value: 'CTF',
  },
  {
    label: 'Go',
    value: 'Go',
  },
  {
    label: 'React',
    value: 'React',
  },
  {
    label: 'Typescript',
    value: 'TS',
  },
  {
    label: 'Hackathons',
    value: 'Hackathons',
  },
  {
    label: 'Academic',
    value: 'Academic',
  },
  {
    label: 'Internships',
    value: 'Internship',
  },
]

export function useFilter() {
  const [filter, setFilter] = useState('*')

  function handleFilter(v: string) {
    setFilter(v)
  }

  const projects = useMemo(() => {
    if (filter === '*') {
      return data
    }

    return data.filter(project => project.tags.includes(filter))
  }, [filter])

  return { filters: FILTERS, handleFilter, projects }
}
