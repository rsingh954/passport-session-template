import React, { useState } from 'react';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

export const AuthContext = React.createContext()

function App() {
  const [ userID, setUserID ] = useState("")
  console.log(userID)
  return (
    <Router>
      <div className="App">
        <AuthContext.Provider value={{userID, setUserID}}>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
