import { useEffect, useState } from "react"
import { getUserList } from "./modules/auth/redux/authApi"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

export default function App() {

  const [users, setUsers] = useState([])

  const { userList } = useSelector((state: any) => state.auth, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    ; (
      async () => {
        await dispatch(getUserList())
      }
    )()
  }, [dispatch])

  useEffect(() => {
    setUsers(userList)
  }, [userList])


  return (
    <div className="userTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 &&
            users.map((ele: any) => (
              <tr key={ele.id}>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}                             