import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai';


export const Card = ( props ) => {


    return (
        <>
            <div className="row col-md-2 mb-4 mt-4 m-2 ">
                <div className="card border border-0 " style={{ width: "24rem" }}>
                    <div className="bg-transparent">
                        <AiOutlineHeart style={{ width: "20px", height: "20px" }} />
                        <Link to={`/${props.cat}/${props.id}`} key={props.id}><img className="card-img-top img-hover"  src={props.img} alt="Card img" /></Link>

                    </div>
                    <div className="card-body text-start bg-light">
                        <h5 className="card-title title-hover">{props.name}</h5>
                        <p className="card-text">{props.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}