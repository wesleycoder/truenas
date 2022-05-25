import { Router } from 'solid-app-router'
import { render } from 'solid-js/web'
import truenasApi from './services/truenas-api'
import AppRoutes from './routes'
import { createResource, onMount, Show } from 'solid-js'

const [service] = createResource(() => truenasApi.get('service').json<{ [key: string]: any }>(), {
  initialValue: null as any,
})

render(() => {
  return (
    <>
      <Show when={service()} fallback={'No service'}>
        {(service) => <pre>{JSON.stringify(service, null, 2)}</pre>}
      </Show>

      <pre>
        {JSON.stringify(
          {
            latest: service.latest,
            loading: service.loading,
            error: service.error,
          },
          null,
          2
        )}
      </pre>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}, document.getElementById('root')!)
