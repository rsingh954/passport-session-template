import { useState, useContext,useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const {userID, setUserID } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { userName, email, password, confirmPassword } = formData;
    const [message, setMessage ] = useState("")

    function onChange(e) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
      const onSubmit = (e) => {
        e.preventDefault();
          const userData = {
            userName,
            email,
            password,
            confirmPassword
          }
          axios.post('/signup', userData).then(res => {
            if(res.status === 200){
                setUserID(res.data)
            }
          }).catch(err => console.log(err))
    }
  return (
    <div className="App">
      <section className="heading">
        <h1>
        Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={userName}
              name="userName"
              id="userName"
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              onChange={onChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    {message}
    </div>
  );
}
