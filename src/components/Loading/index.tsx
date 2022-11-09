import { FC, ReactElement } from 'react'

export type LoadingProps = {}

const Loading: FC<LoadingProps> = (): ReactElement => {
  return <div>loading...</div>
}

export default Loading
