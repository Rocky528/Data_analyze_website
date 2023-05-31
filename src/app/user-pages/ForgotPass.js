import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';




const Login = () => {
    return (
        <div>
            <div className="d-flex align-items-center auth px-0" >
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto" >
                        <div className="card text-left py-5 px-5 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
                            <h4 className='mb-4'>Dont worry about that</h4>
                            <Form className="pt-3" >
                                <Form.Group className="d-flex search-field">
                                    <Form.Control style={{ color: 'white' }} type="email" placeholder="Email" size="lg" className="h-auto"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                                </Form.Group>
                                <div className="mt-3">
                                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Submit</button>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Please go on Login&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/login" className="text-primary">Login</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
