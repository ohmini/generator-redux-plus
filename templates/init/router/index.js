import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'

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
