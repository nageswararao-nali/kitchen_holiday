import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/usersSlice";

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [userType, setUserType] = useState('customer');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    if(!fName || !lName || !email || !mobile || !username || !password) {
      alert("Please enter all the fields!")
      return false
    }
    let userObj = {
      fName,
      lName,
      email,
      mobile,
      username,
      password,
      user_type: userType
    }
    let userDetails = await dispatch(addUser(userObj));
    if(userDetails.payload.success) {
      navigate('/login')
    }
    
  };
  return (
    <div>
        <section className="section-welcome p-t-45 p-b-105">    
        <div className="container p-t-120">
            <div className="row">
                <div className="col-md-5">
                    <img src="assets/images/logo_with_leaves.png" alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-7 contents">
                <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="signup-form">
                        <h2 className="form-title m-b-13">Sign up</h2>
                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div data-mdb-input-init className="form-outline">
                                  <input onChange={(e) => setfName(e.target.value)} type="text" id="form3Example1" className="form-control" placeholder="First name" />
                                </div>
                                <span className="text-danger fs-13 d-none">Please enter first name</span>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div data-mdb-input-init className="form-outline">
                                  <input onChange={(e) => setlName(e.target.value)} type="text" id="form3Example2" className="form-control" placeholder="Last name"/>
                                </div>
                                <span className="text-danger fs-13 d-none">Please enter last name</span>
                              </div>
                            </div>
              
                            <div data-mdb-input-init className="form-outline mb-4">
                              <input onChange={(e) => setUsername(e.target.value)} type="text" id="form3Example3" className="form-control" placeholder="Email address" />
                              <span className="text-danger fs-13 d-none">Please enter username</span>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                              <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control" placeholder="Email address" />
                              <span className="text-danger fs-13 d-none">Please enter valid Email id</span>
                            </div>
                            
                             <div data-mdb-input-init className="form-outline mb-4">
                                <input  onChange={(e) => setMobile(e.target.value)} type="mobile" id="form3Example4" className="form-control" placeholder="Mobile number" />
                                <span className="text-danger fs-13 d-none">Please enter mobile number</span>
                              </div>
              
                            <div data-mdb-input-init className="form-outline mb-4">
                              <input  onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example5" className="form-control" placeholder="Password"/>
                              <span className="text-danger fs-13 d-none">Please enter Password</span>
                            </div>
              
                            <div className="form-check d-flex justify-content-center mb-4">
                              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                              <label className="form-check-label" for="form2Example33">
                                Subscribe to our newsletter
                              </label>
                            </div>
              
                            <button onClick={handleSubmit} data-mdb-button-init data-mdb-ripple-init className="btn btn_signin btn-block mb-4">
                              Sign up
                            </button>
              
                            <div className="text-center">
                              <p>or sign up with:</p>
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-facebook-f"></i>
                              </button>
              
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-google"></i>
                              </button>
              
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-twitter"></i>
                              </button>
              
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-github"></i>
                              </button>
                            </div>
                        </div>
                </div>
                </div>
                </div>
                </div>               
        </div>
        </section>
    </div>
    
  );
}

export default Signup;
