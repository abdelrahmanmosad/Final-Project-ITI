import React, { useRef, useState } from 'react';
import { useUserContext } from "../../../context/userContext";
import Button from 'react-bootstrap/Button';

const Editaccount = () => {
   const fulname = useRef();
   const number = useRef();
   const { users, setUsers, updatecurrentProfile } = useUserContext();

   const [user, setUser] = useState(
      { fullName: users.displayName, mobile: "+02 ", }
   );
   const handleChange = (evt) => {
      if (evt.target.name == "fullName") {
         setUser({
            ...user,
            fullName: fulname.current.value,
         });

      }
      else {
         setUser({
            ...user,
            mobile: number.current.value,
         });

      }
   }
   const onSubmit = async (e) => {
      e.preventDefault();
      const name = fulname.current.value;
      const mobile = number.current.value;
      if (name || mobile) {
         setUsers({
            ...users,
            displayName: user.fullName,
            phoneNumber: user.mobile,
         })
         await updatecurrentProfile(name, mobile)
      }


   };

   return (<>
      <div className="col-9  ">
         <h4>Contact Details</h4>

         <hr />
         <form onSubmit={onSubmit}>
            <label>Full Name</label>
            <input type="text"
               id="EmailAddress"
               className="form-control"
               ref={fulname}
               style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
               name="fullName"
               value={user.fullName}
               width=".3rem"
               onChange={(event) => { handleChange(event) }}
            />
            <label>Mobile Number</label>
            <input type="text"
               id="number"
               maxLength="15"
               className="form-control"
               ref={number}
               style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
               value={user.mobile}
               name="number"
               onChange={(event) => { handleChange(event) }}
            />
            <label>Email address</label>
            <input type="text"
               id="EmailAddress"
               disabled
               className="form-control mb-5"
               style={{ border: 'none', borderBottom: "1px solid", boxShadow: "none" }}
               value={users.email}
               name="emailAddress"
            />
            <Button type="submit" className="btn btn-dark " style={{ width: "20%" }} >Save</Button>
         </form>
      </div>
   </>

   );
}

export default Editaccount;
