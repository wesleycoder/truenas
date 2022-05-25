import { Link, Router } from 'solid-app-router'
import { render } from 'solid-js/web'
import AppRoutes from './routes'

render(() => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}, document.getElementById('root')!)
