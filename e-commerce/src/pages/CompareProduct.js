import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare page"} />
    <BreadCrumb title ="Compare"/>
    <Container class1='compare-product-wrapper py-5 home-wrapper-2 '>
      <div className="row">
        <div className="col-3">
          <div className="compare-product-card position-relative">
            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fulid" />
            <div className="product-card-image">
              <img src="images/watch.jpg" alt="watch" />
            </div>
            <div className="compare-product-details">
              <h5 className='title'>Honor T1 7.0 12 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
              <h6 className='price mt-3'>Rs 100/-</h6>
              <div className="product-detail">
                <h5>Brand</h5>
                <p>Havels</p>
              </div>
              <div className="product-detail">
                <h5>Type:</h5>
                <p>Tablet Computers</p>
              </div>
              <div className="product-detail">
                <h5>SKU </h5>
                <p>SKU033</p>
              </div>
              <div className="product-detail">
                <h5>Color</h5>
                <p>
                <div className="d-flex flex-wrap">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      </ul>
                      </div>
                </p>
              </div>
              <div className="product-detail">
                <h5>Size</h5>
                <div className='d-flex gap-10'> 
                  
                <p>S</p>
                <p>M</p>
                <p>L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="compare-product-card position-relative">
            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fulid" />
            <div className="product-card-image">
              <img src="images/watch.jpg" alt="watch" />
            </div>
            <div className="compare-product-details">
              <h5 className='title'>Honor T1 7.0 12 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
              <h6 className='price mt-3'>Rs 100/-</h6>
              <div className="product-detail">
                <h5>Brand</h5>
                <p>Havels</p>
              </div>
              <div className="product-detail">
                <h5>Type:</h5>
                <p>Tablet Computers</p>
              </div>
              <div className="product-detail">
                <h5>SKU </h5>
                <p>SKU033</p>
              </div>
              <div className="product-detail">
                <h5>Color</h5>
                <p>
                <div className="d-flex flex-wrap">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      </ul>
                      </div>
                </p>
              </div>
              <div className="product-detail">
                <h5>Size</h5>
                <div className='d-flex gap-10'> 
                  
                <p>S</p>
                <p>M</p>
                <p>L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default CompareProduct
