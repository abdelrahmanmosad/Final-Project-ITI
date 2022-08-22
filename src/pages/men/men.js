import React from 'react';
import { useState, useEffect } from "react";
import './cat.css';
import { Link } from 'react-router-dom';


import { getProducts } from '../../firebase/products';
import { Card } from '../../components/card/card';




const Men = () => {
    const [products, setProducts] = useState([]);
     useEffect( () => {
        async function prdlist() {
             setProducts(await getProducts("Men")); 
        }
        prdlist();
    }, [])
    console.log(products)

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='column'>
                            <h5>New Arrivals</h5>
                            <p>T-Shirts</p>
                            <p>Shoes & Accessories</p>
                            <p>Sportswear</p>
                            <h5 className='mt-5'>Shop By Product</h5>
                            <p>All</p>
                            <p>T-Shirts</p>
                            <p>Shoes & Accessories</p>
                            <p>Sportwear</p>
                        </div>
                    </div>
                    <div className='col-9'>
                        <img className='img-fluid mb-3' src="https://eg.hm.com/sites/g/files/bndsjb1566/files/2019-12/dp-b1-MENA-w52-hm-SLUG-en-d_38.jpg" />
                        <h1>Men</h1>
                        <div className="row">
                            {products.map((prd) => {
                                return (
                                   <>
                                   <Card key={prd.id} prd={prd}
                                   name = {prd.name}
                                   price = {prd.price}
                                   id = {prd.id}
                                   cat={prd.cat}
                                   img = {'https://eg.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13567808/988585c6fca906dc43265cfd67a5c8ad8be98218/1/988585c6fca906dc43265cfd67a5c8ad8be98218.jpg?itok=vyIO9q4t'}
                                   />
                                   </>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Men;


{/* </Link> */}