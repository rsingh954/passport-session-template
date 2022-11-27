import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../App"

function Profile() {
    const {userID, setUserID } = useContext(AuthContext)

    const onClick = () => {
        axios.get('/profile', userID).then(res => console.log(res))
    }
  return (
    <div>
        <button onClick={onClick}>Click Me</button>
    </div>
  )
}

export default Profile