import React, { useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { BsSuitHeart, BsSearch } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useUserContext } from "../../context/userContext";


const Header = () => {

    const { logoutUser, users } = useUserContext();
    useEffect(() => {
        console.log(users);
    }, [users])
    return (
        <>
            {/* Topnav */}
            <div className='container-fluid navTop'>
                <div className='row'>
                    <ul style={{ fontSize: "1em" }}>
                        {users ? <li>Welcom, {users.displayName}</li> : <li><Link to="/createaccount" className="">Create An Account</Link></li>}
                        {users && <li><Link to="/myaccount/account" >My Account</Link></li>}
                        {users && <li><Link to="/myaccount/changepassword" >Change password</Link></li>}
                        {users ? <li onClick={() => logoutUser()} ><Link to="/signin">Sign out</Link></li> : <li><Link to="/signin">Sign In</Link></li>}
                        <li><a href="https://eg.hm.com/en/store-finder">Find Store</a></li>
                        <li className='mx-3'>العربية</li>

                    </ul>
                </div>
            </div>
            {/*Search - Logo - Icons*/}
            <div className='container-fluid mt-4'>
                <div className='row d-flex justify-content-start search '>
                    <div className='col-5 d-flex justify-content-start mr-5'>
                        <div className=" mb-4 ">
                            <input type="text" placeholder="What are you looking for?" className="form-control search-underlined" />
                        </div>
                        <BsSearch style={{ width: "30px", height: "30px", marginLeft: "10px", color: "gray" }} />
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png" title='h&m egypt' height="50px;" /></Link>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <Link to="/fav" className='text-dark'><BsSuitHeart style={{ width: "40px", height: "40px", marginRight: "20px" }} /></Link>
                        <Link to="/basket" className='text-dark'> <HiOutlineShoppingBag style={{ width: "40px", height: "40px" }} /></Link>
                    </div>
                </div>
            </div>
            {/*List Ctegory*/}
            <div className='container d-flex justify-content-center '>
                <div className="btn-group m-2  ">
                    <Link to="/men">
                        <button className="rounded-pill bg-transparent text-center border border-white" >
                            Men
                        </button>
                    </Link>
                </div>

                <div className="btn-group m-2  ">
                    <Link to="/women">
                        <button className="rounded-pill bg-transparent text-center border border-white" >
                            Women
                        </button>
                    </Link>

                </div>

                <div className="btn-group m-2  ">
                    <Link to="/kids">
                        <button className="rounded-pill bg-transparent text-center border border-white" >
                            Kids
                        </button>
                    </Link>

                </div>

            </div>
            {/*Company Services*/}
            <div className='container d-flex justify-content-around mt-3 gx-5'>
                <div className="row services  d-flex justify-content-center">
                    <div className='col-sm-12'>
                        <ul>
                            <li><a href="">Free delivery on all orders above EGP 399</a></li>
                            <li><a href="">Shop online 24/7</a></li>
                            <li><a href="">Click & collect available on all items</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
