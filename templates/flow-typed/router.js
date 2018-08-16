// @flow
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

export type TransitionSuccessAction = Action<TransitionSuccessPayload>
