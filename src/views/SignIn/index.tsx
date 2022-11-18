import { FC, ReactElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from 'react-vant'

import { login } from '@/store/features/userSlice'

export type SignInProps = {}

const SignIn: FC<SignInProps> = (): ReactElement => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useDispatch()
  // const { isRememberMe } = useSelector(state => state.isRememberMe)

  const onInputChange = (val: string) => {
    setUsername(val)
  }

  const onLogin = () => {
    dispatch(login({ username, password }))
  }

  return (
    <div>
      <div>登录</div>

      <Input value={username} onChange={onInputChange} />

      <Button onClick={onLogin}>Login</Button>
    </div>
  )
}

export default SignIn
