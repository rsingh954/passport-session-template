import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../App";
function Login() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const {userID, setUserID } = useContext(AuthContext)
  
    const { email, password } = formData;
    const navigate = useNavigate()
  
    useEffect(() => {
      //redirect if logged in
      if (userID) {
        navigate("/");
      }
    }, [userID, navigate]);

    function onChange(e) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    function onSubmit(e) {
      e.preventDefault();
      const userData = {
        email,
        password,
      };
      axios.post('/login', userData).then(res => setUserID(res.data)).catch(err => console.log(err))
    }
    return (
      <>
        <section className="heading">
          <h1>
            Log In
          </h1>
          <p>Please log in to support</p>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={email}
                name="email"
                id="email"
                onChange={onChange}
                placeholder="Enter your e-mail"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={password}
                name="password"
                id="password"
                onChange={onChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </>
    );
  }
export default Login;

  