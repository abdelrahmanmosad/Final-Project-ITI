import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { BsFillBasketFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';


const KidsDetails = () => {
    const params = useParams();
    const [prdDetails, setPrdDetails] = useState({});
    useEffect(() => {
        const getprdDetails = async () => {
            await getDoc(doc(db, "/H&M/2gtjhBbGyiqc9G8efUge/Kids", params.id)).then((res) => {
                setPrdDetails(res.data())
            })
        }
        getprdDetails();

    }, [])


    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="row m-5">
                            <img className="img-fluid img-hover-zoom" style={{ width: "40%", height: "30%" }} src="https://eg.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13605623/e1d56f3f60c0fac7bda5b824b04425ff75ccfa0f/1/e1d56f3f60c0fac7bda5b824b04425ff75ccfa0f.jpg?itok=7J0gxMyc" />
                            <img className="img-fluid img-hover-zoom" style={{ width: "40%", height: "30%" }} src="https://eg.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13603307/857240b1c09475410a5727b433b1eb011d5ab459/2/20e3c5ca208960bd24038b0f853f85ca37a5bdb9.jpg?itok=hGln-2cv" />
                        </div>
                        <div className="description m-5 d-flex bg-light">
                            <h6>{prdDetails.description}</h6>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="column m-5">
                            <h2>{prdDetails.name}</h2>
                            <h5>{prdDetails.price}</h5>
                            <p style={{ opacity: "0.8" }}>Inclusive of VAT</p>
                            <h4>Sizes</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    M
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    L
                                </label>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto text-light">
                                <button className="btn btn-dark btnHover" type="button"><BsFillBasketFill style={{ width: "25px", height: "25px" }} /> Add To Basket</button>
                                <button className="btn btn-dark btnHover" type="button"><AiOutlineHeart style={{ width: "30px", height: "30px" }} /> Add To Fav</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default KidsDetails;
