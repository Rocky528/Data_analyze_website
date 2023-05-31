import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';




const Login = () => {
  return (
    <div>
      <div className="d-flex align-items-center auth px-0" >
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto" >
            <div className="card text-left py-5 px-5 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
              <h4 className='mb-4'>Hello! let's get started</h4>
              <h6 className="font-weight-light mb-4">Sign in to continue.</h6>
              <Form className="pt-3" >
                <Form.Group className="d-flex search-field">
                  <Form.Control style={{ color: 'white' }} type="email" placeholder="Username" size="lg" className="h-auto" />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control style={{ color: 'white' }} type="password" placeholder="Password" size="lg" className="h-auto" />
                </Form.Group>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <Link to="/forget_pass">Forgot password?</Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <Link to="/register" className="text-primary">Register</Link>
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
