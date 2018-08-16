// @flow
type Action<P> = {
  type: string,
  payload: P
}

type Reducer<S, P> = (state: S, action: Action<P>) => S

type Effect = Generator<any, any, any>
