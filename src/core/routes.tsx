import { lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './404'

const loadRoutes = () => {
  const ROUTES = import.meta.glob('/src/routes/**/*.tsx')
  const routes = Object.keys(ROUTES).reduce(
    (acc: { [key: string]: any }, cur: string) => {
      const key = cur
        .replace(/\/src\/routes|index|\.tsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
      return { ...acc, [key]: ROUTES[cur] }
    },
    {}
  )
  return routes
}

export const createRoutes = () => {
  const loadedRoutes = loadRoutes()
  console.log(loadedRoutes)
  return Object.keys(loadedRoutes).map(route => {
    const Component = lazy(loadedRoutes[route])
    return {
      path: route,
      Component,
    }
  })
}

export default function AllRoutes() {
  const [routes, setRoutes] = useState<any[]>([])

  useEffect(() => {
    const fetchRoutes = async () => {
      const routes = await createRoutes()
      setRoutes(routes)
    }
    fetchRoutes()
  }, [])

  return (
    <Routes>
      {routes.map(({ path, Component, roles }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
