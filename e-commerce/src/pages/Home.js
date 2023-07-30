import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
    <Meta title="Home"/>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From Emi 5,480/mo.
                    <br />
                    for 24 mon
                  </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex  flex-wrap  gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Emi 5,480/mo.
                      <br />
                      for 24 mon
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Emi 5,480/mo.
                      <br />
                      for 24 mon
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Emi 5,480/mo.
                      <br />
                      for 24 mon
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Emi 5,480/mo.
                      <br />
                      for 24 mon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-1 py-5">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                {
                  services?.map((i,j)=>{
                    return (
                      <div className=" d-flex align-align-items-center gap-15 key={j}">
                      <img src={i.image} alt="service" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="c mb-0">{i.tagline}</p>
                      </div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="cateogries d-flex  flex-wrap justify-content-between  align-items-center">
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="images" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="Product-card py-5 home-wrapper-2">
    <div className="row">
            <h3 className="section-heading">Featured Collection</h3>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className="row gap-15">
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch.jpg" className="image-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watches</h6>
                <p>From 49990rs 2543/mon</p>
              </div>
               </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch.jpg" className="image-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watches</h6>
                <p>From 49990rs 2543/mon</p>
              </div>
               </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch.jpg" className="image-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watches</h6>
                <p>From 49990rs 2543/mon</p>
              </div>
               </div>
            </div>
            <div className="col-2">
            <div className="famous-card position-relative">
              <img src="images/watch.jpg" className="image-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watches</h6>
                <p>From 49990rs 2543/mon</p>
              </div>
               </div>
            </div>
          </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="row">
            <h3 className="section-heading">Special Products</h3>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
    <div className="row">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
    <Container class1="marque-wrapper py-5">
    <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex ">
                  <div className="mx-4 width-25%">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 width-25%">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
    </Container>
     
    </>
  );
};

export default Home;
