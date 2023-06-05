import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {

  const [eMail, setEmail] = useState('');
  const [pAss, setPass] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const ShowPass = () => {
    setPasswordShown(!passwordShown)
  }
  const HandleChange = (p1, p2) => {
    if (p1 === 1) {
      setEmail(p2)
    }
    else if (p1 === 2)
      setPass(p2)
  }
  const Login = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(eMail)) {
      alert('Please enter a valid email address');
    }
    else if (eMail || pAss) {
      var arr = { eMail, pAss }
      axios.post('/api/users/login', arr).then(res => {
        if (res.data === "You have successfully logged in!") {
          alert(res.data)
          localStorage.setItem('Auth', 2);
          window.location = "/dashboard";
        }
        else {
          alert(res.data);
        }

      })
    }
    else if (!eMail || eMail === undefined) {
      alert("Invaild Email!")
    }
    else if (!pAss || pAss === undefined) {
      alert("Invaild Password!")
    }
  }
  return (
    <div>
      <div className="d-flex align-items-center auth px-0" >
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto" >
            <div className="card text-left py-5 px-5 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
              <h4 className='mb-4'>Hello! let's get started</h4>
              <h6 className="font-weight-light mb-4">Sign in to continue.</h6>
              <div className='row'>
                <div className="form-group col-12">
                  <input type="email" value={eMail} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" placeholder="Email" onChange={(event) => HandleChange(1, event.target.value)} />
                </div>
              </div>
              <div className='row'>
                <div className="form-group col-12" >
                  <div className="input-group" style={{ backgroundColor: 'rgb(26, 26, 52)' }}>
                    {passwordShown ? <input type="text" value={pAss} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" onChange={(event) => HandleChange(2, event.target.value)} placeholder="Password" /> : <input type="password" value={pAss} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" onChange={(event) => HandleChange(2, event.target.value)} placeholder="Password" />}
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i onClick={ShowPass} style={{ cursor: 'pointer', zIndex: '1', color: '#d1d1d1' }}>{eye}</i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button onClick={Login} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <Link to="/forget_pass">Forgot password?</Link>
              </div>
              <div className="text-center mt-4 font-weight-light">
                Don't have an account? <Link to="/register" className="text-primary">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
