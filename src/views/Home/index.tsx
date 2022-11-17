import { FC, ReactElement, useState } from 'react'
import { Button } from 'react-vant'

export type HomeProps = {}

const Home: FC<HomeProps> = (): ReactElement => {
  const [todos, setTodos] = useState<number[]>([1, 2])

  const clickHandler = () => {
    setTodos([...todos, 4])
  }

  return (
    <div>
      <Button type="default" onClick={clickHandler}>
        Click
      </Button>

      <h2>TODOS</h2>
      <div>
        {todos.map((todo, index) => {
          return <h3 key={index}>{todo}</h3>
        })}
      </div>
    </div>
  )
}

export default Home
