import {React,useState} from 'react';
import PropTypes from 'prop-types';
// import services from '../../services'
import './index.css'
import { Link } from 'react-router-dom'

async function loginUser(credentials) {
  return fetch('http://localhost:8888/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
export default function Login({ setToken }) {
 
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


 
    return (
      <div className="container">

        <h1 className="heading">Welcome to DigiWallet</h1>
        <h2>~ your one stop solution for cardless banking!!</h2>
        <div className='Login_Background'>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter email/username" onChange={e => setUserName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)}required />
            </div>
            <div className="col-auto">
              <Link to='/home'><button type="submit" className="flex-item">LOGIN</button></Link>
            </div>
          </form>


        </div>
      </div>
    );
  }
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

