import React, { useEffect, useRef, useState } from "react";
import Label from './label';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from "../../context/userContext";


const CreateAccount = () => {

   const { registerUser, signInWithGoogle, signInWithFacebook, users } = useUserContext();
   const navigate = useNavigate();

   const emailRef = useRef();
   const nameRef = useRef();
   const psdRef = useRef();

   const [user, setUser] = useState(
      {
         fullName: "", emailAddress: "", Password: "",
      }
   );
   useEffect(() => {
      if (users) {
         navigate('/home')
      }
   }, [users])


   const [error, setError] = useState({
      fullNameError: "", emailAddressError: null, passwordError: null,
   });
   const [hide, setHide] = useState(false);


   const Toggle = () => {
      setHide(!hide);

   }
   const handleChange = (evt) => {

      const email = /^[a-zA-Z0-9]{3,}(@)[a-zA-Z]{3,10}(.com)$/;
      const password = /^[a-zA-Z0-9]{3,}/;/* /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[!@#$%^&*])(?=.{8,})/; */
      switch (evt.target.name) {
         case "fullName":
            setUser({
               ...user,
               fullName: evt.target.value,
            });
            setError({
               ...error,
               fullNameError: (evt.target.value.length <= 2) ? "min  length  3 characters" : null,

            })
            break;

         case "emailAddress":
            setUser({
               ...user,
               emailAddress: evt.target.value,
            });
            setError({
               ...error,
               emailAddressError: (email.test(evt.target.value) || evt.target.value == "") ? "" : "invalid email ex: abc@example.com"

            })
            break;

         case "Password":
            setUser({
               ...user,
               Password: evt.target.value,
            });
            setError({
               ...error,
               passwordError: (password.test(evt.target.value) || evt.target.value == "") ? "" : "password should contains special and more than 7 characters"
            })
            break;

         default:
            break;
      }
   }
   const handleSubmit = async (e) => {
      const email = emailRef.current.value;
      const name = nameRef.current.value;
      const password = psdRef.current.value;
      e.preventDefault();

      try {
         await registerUser(email, password, name);
         if (users) {
            navigate('/home');
         }
      } catch (e) {
         console.log(e.message);
      }

   }



   return (
      <>
         <div className="container">
            {/* ---------------------------- left side ---------------------------- */}
            <h2>CREATE AN ACCOUNT</h2>
            <hr />
            <div className="row">
               <div className="col-5 gy-4">
                  <h5>Sign up with email address</h5>
                  <Form onSubmit={(e) => handleSubmit(e)} >
                     <Label name='Full Name' />
                     <input ref={nameRef}
                        type="text" id="fullName" required
                        style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
                        className='form-control'
                        name="fullName"
                        value={user.fullName}
                        onChange={(event) => { handleChange(event) }} />
                     <small className="text-danger m-5">{error.fullNameError}</small><br />

                     <Label name='Email Address' />
                     <input ref={emailRef}
                        type="email"
                        id="EmailAddress"
                        required
                        className="form-control"

                        style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
                        value={user.emailAddress}
                        name="emailAddress"
                        onChange={(event) => { handleChange(event) }} />
                     <small className="text-danger">{error.emailAddressError}</small><br />

                     <Label name='Password' />

                     <input ref={psdRef}
                        type={`${hide ? "text" : "password"}`}

                        aria-required="true"
                        aria-describedby="edit-mail-error"
                        required
                        style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
                        className="form-control col-2"
                        id="password"

                        value={user.Password}
                        name="Password"
                        onChange={(event) => { handleChange(event) }} />
                     {
                        hide ?
                           (<p style={{ height: "50px", width: "50px" }} color="white" onClick={() => Toggle()} > hide</p>)

                           : (<p style={{ height: "50px", width: "50px" }} color="white" onClick={() => Toggle()} >show</p>)
                     }
                     <small className="text-danger">{error.passwordError}</small><br />

                     <div className="col-9">
                        <Form.Check
                           type="checkbox"

                           label="I would like to receive exclusive deals from H&M"
                        />


                     </div>
                     <Button type="submit" className="btn btn-dark" style={{ width: "40%" }}>
                        Create an account
                     </Button>

                  </Form>
               </div>

               <div className="d-flex col-1" style={{ height: "80vh" }}>
                  <div className="vr"></div>
               </div>
               {/* -------------------------------- right side ----------------- */}
               <div className="col-5 d-flex mb-3 flex-column align-items-center justify-content-evenly" >
                  <h5 >Sign up with social media</h5>

                  <Button onClick={signInWithFacebook} className="d-flex justify-content-around" variant="outline-light" style={{ height: "2.875rem", border: "1px solid #a3a1a1", width: "55%", marginTop: "1.75rem" }}>
                     <FaFacebookSquare style={{ width: 40, height: 30, color: "blue" }} />
                     <span className="social-network-text" style={{ color: "black" }}>sign up with Facebook</span>
                  </Button>

                  <Button onClick={signInWithGoogle} className="d-flex justify-content-around" variant="outline-light" style={{ height: "2.875rem", border: "1px solid #a3a1a1", width: "55%", marginTop: "1.75rem" }}>
                     <FcGoogle style={{ width: 40, height: 30 }} />
                     <span className="social-network-text" style={{ color: "black" }}>sign up with Google</span>
                  </Button>

                  <p>Already have an account?</p>
                  <a className="d-flex justify-content-around" style={{
                     backgroundColor: "#faf9f8", width: '30%', height: "2.875rem", border: "1px solid #a3a1a1", color: "black", textDecoration: 'none', marginTop: "1.75rem", padding: ".5rem"
                  }} social-auth-link="/en/user/login/facebook">
                     <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 12 16" height="2em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path></svg>
                     <Link to='/signin'><span className="social-network-text">sign in Here</span></Link>

                  </a>


               </div>
            </div>
         </div>

      </>
   );
}

export default CreateAccount;
