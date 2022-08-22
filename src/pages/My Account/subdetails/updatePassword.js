import React, { useState, useRef } from 'react';
import { useUserContext } from "../../../context/userContext";
import Button from 'react-bootstrap/Button';

const ChangePassword = () => {
   const currentPassword = useRef();
   const newPassword = useRef();
   const { changePassword, errors } = useUserContext();


   const onSubmit = async (e) => {
      e.preventDefault();
      const oldpassword = currentPassword.current.value;
      const newpassword = newPassword.current.value;
      if (oldpassword && newpassword) {
         await changePassword(oldpassword, newpassword);
         if (errors)
            alert("Password Updated")
      }
   };


   return (
      <div className="col-9">
         <h4>CHANGE PASSWORD</h4>
         <hr />
         <form onSubmit={onSubmit} className="w-50">
            <input type="text"
               placeholder="Current Password"
               className="form-control "
               ref={currentPassword}
               style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
               name="currentPassword"
            />
            <input type="text"
               placeholder="New Password"
               className="form-control  mb-5"
               ref={newPassword}
               style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
            />
            {errors ? <p className="error">{errors}</p> : ""}
            <Button type="submit" className="btn btn-dark" style={{ width: "50%" }} >CHANGE PASSWORD</Button>
         </form>
      </div >

   );
}

export default ChangePassword;
