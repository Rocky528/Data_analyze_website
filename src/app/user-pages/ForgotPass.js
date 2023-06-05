import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const eye = <FontAwesomeIcon icon={faEye} />;



const ForgotPassword = () => {
    const [eMail, setEmail] = useState('');
    const [fPassflag, setFpassflag] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [cPasswordShown, setCpasswordShown] = useState(false);
    const [pAss, setPass] = useState('');
    const [cPass, setCpass] = useState('');
    const ShowPass = () => {
        setPasswordShown(!passwordShown)

    }
    const ShowCpass = () => {
        setCpasswordShown(!cPasswordShown);
    }
    const HandleChange = (event) => {
        setEmail(event.target.value);
    }
    const HandlePassChange = (p1, p2) => {
        if (p1 === 1)
            setPass(p2)
        else if (p1 === 2)
            setCpass(p2)
    }
    const ForgotPass = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(eMail)) {
            alert('Please enter a valid email address');
        }
        else if (eMail) {
            axios.post('/api/users/forgotpass', { email: eMail }).then(res => {
                if (res.data === "User is not exist") {
                    alert(res.data)
                }
                else {
                    setFpassflag(!fPassflag);
                }
            })
        }
    }
    const NewPass = () => {
        if (pAss || cPass || pAss === cPass) {
            console.log(eMail)
            axios.post('/api/users/newpass', { email: eMail, pass: pAss }).then(res => {
                if (res.data) {
                    alert(res.data);
                    window.location = "/login"
                }
            }).catch(err => {
                if (err) {
                    alert(err)
                }
            })
        }
        else if (!pAss || pAss === undefined || pAss === "")
            alert("Invaild Password")
        else if (!cPass || cPass === undefined || cPass === "")
            alert("Confirm Password!")
        else if (pAss !== cPass)
            alert(" Passwords don't match!")

    }

    return (
        <div>
            <div className="d-flex align-items-center auth px-0" >
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto" >
                        {fPassflag ? <div className="card text-left py-5 px-5 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
                            <h4 className='mb-4'>Please input your new Password</h4>
                            <div className='row'>
                                <div className="form-group col-12">
                                    <div className="input-group">
                                        {passwordShown ? <input type="text" value={pAss} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" onChange={(event) => HandlePassChange(1, event.target.value)} placeholder="Password" /> : <input type="password" value={pAss} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" onChange={(event) => HandlePassChange(1, event.target.value)} placeholder="Password" />}
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i onClick={ShowPass} style={{ cursor: 'pointer', zIndex: '1', color: '#d1d1d1' }}>{eye}</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-12" >
                                    <div className="input-group">
                                        {cPasswordShown ? <input type="text" value={cPass} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" onChange={(event) => HandlePassChange(2, event.target.value)} placeholder="Confirm Password" /> : <input type="password" value={cPass} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" onChange={(event) => HandlePassChange(2, event.target.value)} placeholder="Confirm Password" />}
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i onClick={ShowCpass} style={{ cursor: 'pointer', zIndex: '1', color: '#d1d1d1' }}>{eye}</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={NewPass} >Confirm</button>
                            </div>
                            <div className="text-center mt-4 font-weight-light">
                                Please go on Login&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/login" className="text-primary">Login</Link>
                            </div>
                        </div> :

                            <div className="card text-left py-5 px-5 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
                                <h4 className='mb-4'>Dont worry about that</h4>
                                <div className="form-group col-12">
                                    <input type="email" value={eMail} style={{ color: 'white', backgroundColor: 'rgb(26, 26, 52)' }} className="form-control form-control-lg" placeholder="Email" onChange={HandleChange} />
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={ForgotPass} >Submit</button>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Please go on Login&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/login" className="text-primary">Login</Link>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword
