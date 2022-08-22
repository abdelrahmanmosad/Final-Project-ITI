import React from 'react';
import './home.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowUp } from 'react-icons/ai';
import Slider from "react-slick";
import { Link } from 'react-router-dom';




const Home = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='container'>
                <div className='column'>
                    <div className='col-12 '>
                        <a href="">
                            <div className="d3-container">
                                <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/2ff0af9a01a58__h_m-w30-28072022-1096f-3x1.jpg" />
                            </div>
                        </a>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <h4>Trending right now</h4>
                    </div>
                    <div className='row  d-flex justify-content-center mt-4 mb-5 '>
                        <div className="item col-md-2 text-center">
                            <a href=""><img src="https://www2.hm.com/content/dam/hm-magazine-2020/featured-fashion/20_13_A_trend_bildspel_1.jpg" /></a>
                            <p className="carosueltitletxt">
                                Women<br />
                                <span className="carosueltxt">Jackets & Coats</span>
                            </p>
                        </div>
                        <div className='col-md-2 item text-center'>
                            <a href=""><img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F9e%2F339e3549ec41eef34883a4fbe73e8501c36764fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_cardigans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" /></a>
                            <p className="carosueltitletxt">
                                Women<br />
                                <span className="carosueltxt">Cardigans &<br /> Sweaters</span>
                            </p>
                        </div>
                        <div className='col-md-2 item text-center'>
                            <a href=""><img src="https://cdna.lystit.com/photos/56a1-2014/11/06/hm-blue-jumper-in-a-mohair-blend-product-1-25065199-0-150443488-normal.jpeg" /></a>
                            <p className="carosueltitletxt">
                                Women<br />
                                <span className="carosueltxt">Clothes</span></p>
                        </div>
                        <div className='col-md-2 item text-center'>
                            <a href=""><img src="https://i.pinimg.com/736x/32/00/a8/3200a8617dfbc6139b8251a36d5118de.jpg" /></a>
                            <p className="carosueltitletxt">
                                Kids<br />
                                <span className="carosueltxt">Boys 11/2-10<br /> years</span></p>
                        </div>
                        <div className='col-md-2 item text-center'>
                            <a href=""><img src="https://lp2.hm.com/hmprod?hmver=0&set=quality[79],source[/environment/2016/8EZ_0117_008R.jpg],width[4054],height[4740],x[549],y[438],type[FASHION_FRONT]&call=url[file:/product/main]" /></a>
                            <p className="carosueltitletxt">
                                Kids<br />
                                <span className="carosueltxt">Girls 11/2-10<br /> years</span></p>
                        </div>
                        <div className='col-md-2 item text-center'>
                            <a href=""><img src="https://i.pinimg.com/736x/b3/21/bd/b321bd9d618ee5439cd7218f9a543704.jpg" /></a>
                            <p className="carosueltitletxt">
                                Men<br />
                                <span className="carosueltxt">Hoodies &<br /> Sweatshirts</span></p>
                        </div>

                    </div>
                    <div className="col-12 d-flex justify-content-center mt-5 newf">
                        <h4>New fashion highlights</h4>
                    </div>
                    <section className="pt-5 pb-5 container">
                        <div className="row">
                            <div>
                                <Slider {...settings} >
                                    <div className='pr-5'>
                                        <a href="#">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13578396/93a2d216e91dfda15963abdca99ff0eacf7c85f6/1/93a2d216e91dfda15963abdca99ff0eacf7c85f6.jpg?itok=PL-eIvYL' />
                                        </a>
                                        <div className='text-center bg-light ' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Regular Fit Sports Top</h6>
                                            <p className='pb-3'>EGP 999.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13539221/010217a38466f85977be0a4b150dcb744e1d87ea/1/010217a38466f85977be0a4b150dcb744e1d87ea.jpg?itok=itQj4BKm' />
                                        </a>
                                        <div className='text-center bg-light ' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Regular Fit Joggers</h6>
                                            <p className='pb-3'>EGP 799.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13570470/183bb894b2e65e94e36807451c5abad660cfb00a/1/183bb894b2e65e94e36807451c5abad660cfb00a.jpg?itok=KcnCmLNL' />
                                        </a>
                                        <div className='text-center bg-light ' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Relaxed Fit Faux shearling top</h6>
                                            <p className='pb-3'>EGP 899.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13633379/17d60413380b22fafebabf57520cc25b51765435/1/17d60413380b22fafebabf57520cc25b51765435.jpg?itok=-0h00QnV' />
                                        </a>
                                        <div className='text-center bg-light ' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Relaxed Fit Hoodie</h6>
                                            <p className='pb-3'>EGP 649.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13578253/7b408e27680925255e007563b709e4ea00e44398/1/7b408e27680925255e007563b709e4ea00e44398.jpg?itok=Ape5AABW' />
                                        </a>
                                        <div className='text-center bg-light ' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Regular Fit Joggers</h6>
                                            <p className='pb-3'>EGP 599.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13398276/0de2777c72a7cca2f153107d9089636a693544e7/2/906a3ef5354e97009fc2a6b6c0d3061f87e661c8.jpg?itok=rcIeL7Fa' />
                                        </a>
                                        <div className='text-center bg-light' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Slim Tapered Jeans</h6>
                                            <p className='pb-3'>EGP 749.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13626503/32c98b7c042caa2a1900c2e43f68cbb82352c5ae/1/32c98b7c042caa2a1900c2e43f68cbb82352c5ae.jpg?itok=oyq68RfO' />
                                        </a>
                                        <div className='text-center bg-light ' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Relaxed Fit Hoodie</h6>
                                            <p className='pb-3'>
                                                <span className='text-decoration-line-through m-1'>EGP 499.00</span>
                                                <span className='text-danger'>EGP 350.00 save 30%</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img style={{ width: "90%", height: "90%" }} src='https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13593411/2ec84bacd27e9923070269a401686145fa90f116/1/2ec84bacd27e9923070269a401686145fa90f116.jpg?itok=fu1Pjx91' />
                                        </a>
                                        <div className='text-center bg-light' style={{ width: "90%", height: "90%" }}>
                                            <h6 className='pt-4'>Slim Fit Easy-iron shirt</h6>
                                            <p className='pb-3'>EGP 399.00</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>
                    <div className='col-12'>
                        <a href="">
                            <div className="d3-container">
                                <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/264fdb39e794a__h_m-w30-28072022-5016c-3x1.jpg" />
                            </div>
                        </a>
                    </div>
                    <div className="column mt-4 container" style={{ backgroundColor: "#8AFF8A" }}>
                        <div className="col-12 text-center p-2">
                            <h2>New styles – at the best price</h2>
                        </div>
                        <div className='row p-2 d-flex justify-content-center'>
                            <button className="col-sm-2 btn btn-dark m-1 text-center border border-dark p-2 mb-2 rounded-0">Women from EGP 69</button>
                            <button className="col-sm-2 btn btn-dark m-1 text-center border border-dark p-2 mb-2 rounded-0">Divided from EGP 129</button>
                            <button className="col-sm-2 btn btn-dark m-1 text-center border border-dark p-2 mb-2 rounded-0">Men from EGP 69</button>
                            <button className="col-sm-2 btn btn-dark m-1 text-center border border-dark p-2 mb-2 rounded-0">Kids from EGP 129</button>
                            <button className="col-sm-2 btn btn-dark m-1 text-center border border-dark p-2 mb-2 rounded-0">Home from EGP 49</button>
                        </div>

                    </div>
                    <div className='col-12 mt-4'>
                        <a href="">
                            <div className="d3-container">
                                <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/1151b0553d22b__h_m-w30-28072022-4016m-3x1.jpg" />
                            </div>
                        </a>
                    </div>
                    <div className='col-12 mt-4'>
                        <a href="">
                            <div className="d3-container">
                                <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/354bdec40b6f9__h_m-w30-28072022-3026h-3x1.jpg" />
                            </div>
                        </a>
                    </div>
                    <div className="column mt-4 container" style={{ backgroundColor: "#9E1E48" }}>
                        <div className="col-12 text-center p-2 text-light">
                            <h2>Student discount: 10% off on everything!</h2>
                            <h4>Exclusively online</h4>
                            <Link to="/createaccount"><button type="button" className="btn btn-outline-light mt-4 mb-4 rounded-0 ">Sign Up Now</button></Link>
                            <p>Sign up with your university's email to redeem your discount online 24/7.</p>
                        </div>
                    </div>
                    <div className='col-12 mt-4'>
                        <a href="">
                            <div className="d3-container">
                                <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/17ef98bd4dbca__h_m-w30-28072022-7055b-3x1.jpg" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5' style={{ backgroundColor: "#F4EDDD" }}>
                <div className='column p-5'>
                    <h1 className='text-center '>MAGAZINE</h1>
                    <a href='https://eg.hm.com/en/magazine' style={{ color: 'black' }} ><h6 className='mt-4 text-center text-decoration-underline magazine'>READ H&M MAGAZINE</h6></a>
                </div>
                <div className='container d-flex justify-content-center'>
                    <div className='row m-2 d-flex justify-content-center mb-5'>

                        <div className="card col-4 m-2 border border-0" style={{ width: "20rem" }}>
                            <img style={{ width: "100%", height: "100%" }} src="https://eg.hm.com/sites/g/files/bndsjb1566/files/styles/magazine_article_home/public/desktop-image/2022-05/hmgoepprod%20%281%29.jpg?itok=iudjDkIq" className="card-img-top" alt="..." />
                            <div className='text-center pb-5'>
                                <h6 className='pt-4'>INSIDE H&M</h6>
                                <p className='pb-3'>SmileyWorld x H&M</p>
                                <a href="https://eg.hm.com/en/smileyworld-x-hm/" className='pb-3 text-dark'> Read the story <AiOutlineArrowRight /></a>
                            </div>
                        </div>

                        <div className="card col-4 m-2 border border-0" style={{ width: "20rem" }}>
                            <img src="https://eg.hm.com/sites/g/files/bndsjb1566/files/styles/magazine_article_home/public/desktop-image/2022-05/hmgoepprod.jpg?itok=efZ23AqC" className="card-img-top" alt="..." />
                            <div className='text-center pb-5'>
                                <h6 className='pt-4'>INSIDE H&M</h6>
                                <p className='pb-3'>From moments to memories</p>
                                <a href="https://eg.hm.com/en/moments-memories/" className='pb-3 text-dark'> Read the story <AiOutlineArrowRight /></a>
                            </div>
                        </div>
                        <div className="card col-4 m-2 border border-0" style={{ width: "20rem" }}>
                            <img src="https://eg.hm.com/sites/g/files/bndsjb1566/files/styles/magazine_article_home/public/desktop-image/2022-04/hmgoepprod.jpg?itok=FNj19R1I" className="card-img-top" alt="..." />
                            <div className='text-center pb-5'>
                                <h6 className='pt-4'>INSIDE H&M</h6>
                                <p className='pb-3'>GCA 2022: 5 innovations transforming fashion</p>
                                <a href="https://eg.hm.com/en/gca-2022-5-innovations-transforming-fashion/" className='pb-3 text-dark'> Read the story <AiOutlineArrowRight /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='backButton m-3 ' style={{ backgroundColor: 'transparent' }}>
                <div className='col-12'>
                    <a href='#' ><AiOutlineArrowUp style={{ width: "50px", height: "50px" }} /></a>
                </div>
            </div>
        </>
    );
}

export default Home;
