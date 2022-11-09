// import React, { Component } from 'react'

// const Loadable = ({ loader, loading: Loading }) => {
//   return class LoadableWrapper extends Component {
//     state = {
//       LoadedComponent: null,
//     }

//     componentDidMount() {
//       loader().then(res => {
//         this.setState({ LoadedComponent: res.default })
//       })
//     }

//     render() {
//       const { LoadedComponent } = this.state

//       return LoadedComponent ? <LoadedComponent /> : <Loading />
//     }
//   }
// }

// export default Loadable

import { FC, ReactElement, lazy, Suspense } from 'react'

export type LoadableProps = {
  loader: () => Promise<any>
  loading: ReactElement
}

const Loadable: FC<LoadableProps> = ({ loader, loading: Loading }): ReactElement => {
  const LoadedComponent = lazy(loader)

  return (
    <Suspense fallback={Loading}>
      <LoadedComponent />
    </Suspense>
  )
}

export default Loadable

// function Lazy(path: string) {
//   const Component = lazy(() => import(`@/views${path}`))

//   return (
//     <Suspense fallback={<div>loading...</div>}>
//       <Component />
//     </Suspense>
//   )
// }
