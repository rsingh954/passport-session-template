import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../App";
function Home() {
  const {userID, setUserID } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(!userID){
      navigate('/login')
    }
  })
  function handleClick(){

  }
  return (
    <div>
      <button onClick={handleClick}>Create a Post</button>
    </div>
  );
}

export default Home;
