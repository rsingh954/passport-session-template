import { useContext } from "react"
import { AuthContext } from "../App"
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import axios from "axios";

function Header() {
    const {userID, setUserID } = useContext(AuthContext)
    const navigate = useNavigate()
    const onLogout = () => {
        axios.get('/logout', userID).then(res => console.log(res)).catch(err=> console.log(err))
        setUserID(null)
        navigate('/')
    }
    return (
        <header className="header">
        <div className="logo">
          <Link to="/">YOG.io</Link>
        </div>
        <ul>
          {userID ? (
            <li>
              <button onClick={onLogout} className="btn">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUser /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
  
    )
}

export default Header