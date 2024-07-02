import { useEffect } from "react"
import { getUserList, login } from "./modules/auth/redux/authApi"
import { shallowEqual, useDispatch } from "react-redux"
import { loginData } from "./types"

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    ; (
      async () => {
        const res = await dispatch(getUserList())
      }
    )()
  }, [dispatch])

  const handleLogin = async () => {
    const data: loginData = {
      email: "hariomcuneiform@gmail.com",
      password: "Hariom@123"
    }
    const res = await dispatch(login(data))
    console.log('res: ', res);
  }

  return (
    <div>App

      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
