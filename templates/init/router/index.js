import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'

export type Route = {
  name: string,
  params: Object,
  path: string,
  meta: Object
}

export type TransitionSuccessPayload = {
  route: Route,
  previousRoute: ?Route,
}

const createRoute = (name, path, children) => ({
  name, path, children
})

const routes = [
  createRoute('init', '/init'),
]

const options = {
  defaultRoute: 'init'
}

export const router = createRouter(routes, options)
.usePlugin(browserPlugin({
  useHash: false, 
}))
