import React, { useState } from 'react';
import { useUserContext } from "../../context/userContext";
import { BrowserRouter as Route, Link, Outlet } from 'react-router-dom'
import Editaccount from './subdetails/editaccount';


const Myaccount = () => {
   const [route, setRoute] = useState(1)
   return (
      <div className="container-fluid my-5">
         <div className="row">
            {/* left side */}
            <div className="col-3">
               <ul className="d-flex flex-column" style={{ lineHeight: " 200%" }}>
                  <li><Link to="/myaccount/account">My Account</Link> </li>
                  <li><a href="">orders</a> </li>
                  <li><Link to="/myaccount/editaccount">contact details</Link> </li>
                  {/* <li><a href="">Reviews</a> </li> */}
                  <li><a href="">my favorites</a> </li>
                  <li><a href="">communication preferences</a> </li>
                  <li><Link to="/myaccount/changepassword">change password</Link></li>
               </ul>
            </div>
            {/* rigth side */}

            <Outlet />



         </div>

      </div>
   );
}

export default Myaccount;
