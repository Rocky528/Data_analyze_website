import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div>
      <div className="d-flex align-items-center auth px-0 h-100">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5" style={{ backgroundColor: '#1a1a34' }}>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3">
                <div className="form-group" >
                  <input type="text" style={{ color: 'white' }} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="email" style={{ color: 'white' }} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                </div>
                <div className="form-group">
                  <input type="password" style={{ color: 'white' }} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
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
