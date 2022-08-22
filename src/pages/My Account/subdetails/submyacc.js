import React from 'react';
import { useUserContext } from "../../../context/userContext";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Submyacc = () => {
   const { users } = useUserContext();

   return (

      <div className="col-9">
         <div className=" d-flex justify-content-between">
            <h2>My Account</h2>
            <Link to="/myaccount/editaccount"><Button variant="dark">EDIT ACCOUNT DETAILS</Button></Link>
         </div>
         <hr />

         <h4>RECENT ORDERS</h4>

         <hr />
         <p>You have no recent orders to display.</p>
         <h4>ACCOUNT DETAILS</h4>
         <hr />
         <h6>Email address</h6>
         <p style={{ fontSize: ".7rem" }}>{users.email}</p>
      </div>
   );
}
export default Submyacc;
