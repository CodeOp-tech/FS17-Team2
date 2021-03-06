import React, {useState, useEffect} from "react";
// import { Routes, Route, useNavigate } from 'react-router-dom';
import './Login.css';
import GoogleLogin from 'react-google-login';

function Login(props) {

  const handleFailure = (result) => {
    alert(result);
  };

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-1 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">Sign in</h5>
    
                  <form>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                      <label className="form-check-label" htmlFor="rememberPasswordCheck">
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
                    </div>
                    <hr className="my-4"/>
                    <div className="d-grid mb-2">
                      <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        prompt="select_account"
                        buttonText="Sign in with Google"
                        // className="ct-button ct-button--secondary"
                        onSuccess={props.googleLogin}
                        onFailure={handleFailure}
                        cookiePolicy="single_host_origin"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login