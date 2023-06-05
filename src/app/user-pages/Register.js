import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const eye = <FontAwesomeIcon icon={faEye} />;


const Register = () => {
  const [checked, setChecked] = useState(false);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [uName, setUName] = useState('');
  const [eMail, setEmail] = useState('');
  const [aDdress, setAddress] = useState('');
  const [sTate, setState] = useState('');
  const [cOuntry, setCountry] = useState('');
  const [pRotype, setProtype] = useState('');
  const [pAss, setPass] = useState('');
  const [cPass, setCpass] = useState('');
  const [pAyment, setPayment] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [cPasswordShown, setCpasswordShown] = useState(false);

  const ShowPass = () => {
    setPasswordShown(!passwordShown)
  }
  const ShowCpass = () => {
    setCpasswordShown(!cPasswordShown);
  }
  const HandleChange = (p1, p2) => {
    if (p1 === 1)
      setFName(p2)
    else if (p1 === 2)
      setLName(p2)
    else if (p1 === 3)
      setUName(p2)
    else if (p1 === 4)
      // alert(p2)
      setEmail(p2)
    else if (p1 === 5)
      setAddress(p2)
    else if (p1 === 6)
      setState(p2)
    else if (p1 === 7)
      setCountry(p2)
    else if (p1 === 8)
      setProtype(p2)
    else if (p1 === 9)
      setPayment(p2)
    else if (p1 === 10)
      setPass(p2)
    else if (p1 === 11)
      setCpass(p2)
    else if (p1 === 12)
      setChecked(p2)
  }
  const Register = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (fName || lName || lName || eMail || aDdress || sTate || cOuntry || pRotype || pAyment || pAss === cPass) {
      var arr = { fName, lName, uName, eMail, aDdress, sTate, cOuntry, pRotype, pAyment, pAss, cPass };
      axios.post('/api/users/register', arr).then(res => {
        if (res.data === "User already exists!")
          alert(res.data)
        else {
          alert(res.data)
          window.location = "/login";
        }
      }).catch(err => {
        alert(err.data);
      })
    }
    else if (!emailRegex.test(eMail)) {
      alert('Please enter a valid email address');
    }
    else if (!fName || fName === undefined)
      alert("Invaild First Name!")
    else if (!lName || lName === undefined)
      alert("Invaild Last Name!")
    else if (!lName || uName === undefined)
      alert("Invaild UserName!")
    else if (!eMail || eMail === undefined)
      alert("Invaild Email!")
    else if (!sTate || sTate === undefined)
      alert("Invaild State!")
    else if (!cOuntry || cOuntry === undefined)
      alert("Invaild Country!")
    else if (!pRotype || pRotype === undefined)
      alert("Invaild Product Type!")
    else if (!pAyment || pAyment === undefined)
      alert("Invaild Payment Infomation!")
    else if (!pAss || pAss === undefined)
      alert("Invaild Password!")
    else if (!cPass || cPass === undefined)
      alert("Confirm Password!")
    else if (pAss !== cPass) {
      alert(" Passwords don't match!")
    }

  }

  return (
    <div>
      <div className="d-flex align-items-center auth px-0 h-100">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3">
                <div className='row'>
                  <div className="form-group col-6" >
                    <input type="text" value={fName} style={{ color: 'white' }} className="form-control form-control-lg" placeholder="First Name" onChange={(event) => HandleChange(1, event.target.value)} />
                  </div>
                  <div className="form-group col-6">
                    <input type="text" value={lName} style={{ color: 'white' }} className="form-control form-control-lg" placeholder="Last Name" onChange={(event) => HandleChange(2, event.target.value)} />
                  </div>
                </div>
                <div className='row'>
                  <div className="form-group col-6" >
                    <input type="text" value={uName} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(3, event.target.value)} placeholder="Username" />
                  </div>
                  <div className="form-group col-6">
                    <input type="email" value={eMail} style={{ color: 'white' }} className="form-control form-control-lg" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" onChange={(event) => HandleChange(4, event.target.value)} required />
                  </div>
                </div>
                <div className='row'>
                  <div className="form-group col-4" >
                    <input type="text" value={aDdress} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(5, event.target.value)} placeholder="address" />
                  </div>
                  <div className="form-group col-4">
                    <input type="text" value={sTate} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(6, event.target.value)} placeholder="State" />
                  </div>
                  <div className="form-group col-4" >
                    <input type="text" value={cOuntry} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(7, event.target.value)} placeholder="Country" />
                  </div>
                </div>
                <div className='row'>
                  <div className="form-group col-6">
                    <input type="text" value={pRotype} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(8, event.target.value)} placeholder="Product Type" />
                  </div>
                  <div className="form-group col-6" >
                    <input type="text" value={pAyment} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(9, event.target.value)} placeholder="Payment Information" />
                  </div>
                </div>
                <div className='row'>
                  <div className="form-group col-6">
                    <div className="input-group">
                      {passwordShown ? <input type="text" value={pAss} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(10, event.target.value)} placeholder="Password" /> : <input type="password" value={pAss} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(10, event.target.value)} placeholder="Password" />}
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i onClick={ShowPass} style={{ cursor: 'pointer', zIndex: '1', color: '#d1d1d1' }}>{eye}</i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-6" >
                    <div className="input-group">
                      {cPasswordShown ? <input type="text" value={cPass} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(11, event.target.value)} placeholder="Confirm Password" /> : <input type="password" value={cPass} style={{ color: 'white' }} className="form-control form-control-lg" onChange={(event) => HandleChange(11, event.target.value)} placeholder="Confirm Password" />}
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i onClick={ShowCpass} style={{ cursor: 'pointer', zIndex: '1', color: '#d1d1d1' }}>{eye}</i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" checked={checked} onChange={(event) => HandleChange(12, event.target.checked)} />
                      <i className="input-helper"></i>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button onClick={Register} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Sign Up</button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <Link to="/login" className="text-primary">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
