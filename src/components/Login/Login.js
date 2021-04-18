import { React, useState } from 'react';
import { Link,useHistory } from 'react-router-dom'
import './index.css'
import UserApi from '../AuthService';

export default function Login() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  function handleSubmit (){
    var queryData = {
      username: username,
      password: password
    }
    UserApi.loginUser(data=>{
      console.log("user logged in",data)
    },queryData)
  }
  return (
    <div className="container1">
      <h1 className="heading">Welcome to DigiWallet</h1>
      <h2> your one stop solution for cardless banking!!</h2>
      <div className='Login_Background card'>
      <h3>Login Here!</h3>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="Enter Username/Email" onChange={e => setUserName(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="login-button">
            <Link to='/home'> 
            <button className="btn btn-primary" onClick={handleSubmit}>LOGIN</button>
            </Link>
          </div>
        </form>


      </div>
    </div>
  );
}

