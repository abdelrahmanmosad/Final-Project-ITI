import React from 'react';
import './footer.css';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
const Footer = () => {
    return (
        <>
            <div className="container-fluid p-0 m-0 ">

                <footer className=" text-center " style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <div className="container p-5">
                        <div className="row my-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <div className="rounded-circle bg-light shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "150px", height: "150px" }}>
                                    <img src="https://eg.hm.com/themes/custom/transac/alshaya_hnm/site-logo.svg?tY6kjl" height="70" alt=""
                                        loading="lazy" />
                                </div>

                                <p className="text-center">© H&M's business concept is to offer fashion and quality at the best price in a sustainable way. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies. The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.
                                    Egypt</p>

                                <ul className="list-unstyled d-flex flex-row justify-content-center">
                                    <li>
                                        <a className="px-2" href="https://www.facebook.com/hmMiddleEast/">
                                            <BsFacebook style={{ width: "40px", height: "40px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-2" href="https://twitter.com/hmegypt">
                                            <AiFillTwitterCircle style={{ width: "40px", height: "40px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-2" href="https://www.instagram.com/hm/">
                                            <AiOutlineInstagram style={{ width: "40px", height: "40px" }} />
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">SHOP</h5>

                                <ul className="list-unstyled ">
                                    <li className="">
                                        <a href="#!" >Women</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Divided</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Men</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Baby</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Kids</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >H&M Home</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Sport</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">CORPORATE INFO</h5>

                                <ul className="list-unstyled ">
                                    <li className="mb-2">
                                        <a href="#!" >Terms And Conditions Of Sale</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Website Terms & Conditions </a>

                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Privacy Policy  </a>

                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Returns & Refunds</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" >Sport</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-8  mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Contact</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <p><BiCurrentLocation /> Warsaw, 57 Street, Poland</p>
                                    </li>
                                    <li>
                                        <p><BsFillTelephoneFill /> + 01 234 567 89</p>
                                    </li>
                                    <li>
                                        <p><AiOutlineMail /> Hm@example.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2022 Copyright:
                        <a className="text-white" href="https://eg.hm.com/en/">H&M.com</a>
                    </div>
                </footer>

            </div>

        </>
    );
}

export default Footer;
